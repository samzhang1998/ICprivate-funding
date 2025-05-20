/**
 * Utility functions to transform guarantor assets from the frontend format to the backend format
 * Refactored to more directly match the API schema
 */

/**
 * Transforms guarantor assets from the frontend format to the backend format
 * @param {Object} guarantorAsset - The guarantor asset data from the frontend
 * @param {Array} guarantors - The guarantors array
 * @returns {Array} - Array of guarantors with properly formatted assets
 */
export function transformGuarantorAssets(guarantorAsset, guarantors) {
  if (!guarantorAsset || !guarantors || !Array.isArray(guarantors)) {
    return guarantors;
  }

  // Create a deep copy of the guarantors array to avoid modifying the original
  const transformedGuarantors = JSON.parse(JSON.stringify(guarantors));
  
  // Initialize assets array for each guarantor if it doesn't exist
  transformedGuarantors.forEach(guarantor => {
    if (!guarantor.assets) {
      guarantor.assets = [];
    }
    if (!guarantor.liabilities) {
      guarantor.liabilities = [];
    }
  });

  // Map of asset types from frontend to backend schema
  const assetTypeMap = {
    'address': 'Property',
    'vehicle': 'Vehicle',
    'saving': 'Savings',
    'share': 'Investment Shares',
    'card': 'Credit Card',
    'creditor': 'Other Creditor',
    'other': 'Other'
  };

  // Process property assets (addresses)
  for (let i = 1; i <= 4; i++) {
    processAsset(
      guarantorAsset,
      transformedGuarantors,
      `address${i}`,
      `address${i}Value`,
      `address${i}Owing`,
      `address${i}G1`,
      `address${i}G2`,
      'Property',
      true // isProperty flag to include address field
    );
  }
  
  // Process other asset types
  Object.entries(assetTypeMap).forEach(([prefix, assetType]) => {
    if (prefix !== 'address') { // Skip addresses as they're handled separately
      processAsset(
        guarantorAsset,
        transformedGuarantors,
        prefix,
        `${prefix}Value`,
        `${prefix}Owing`,
        `${prefix}G1`,
        `${prefix}G2`,
        assetType
      );
    }
  });

  return transformedGuarantors;
}

/**
 * Process an asset and add it to the appropriate guarantor(s)
 * @param {Object} guarantorAsset - The guarantor asset data
 * @param {Array} guarantors - The guarantors array
 * @param {String} descriptionKey - The key for the description value
 * @param {String} valueKey - The key for the value amount
 * @param {String} owingKey - The key for the amount owing
 * @param {String} g1Key - The key for the G1 flag
 * @param {String} g2Key - The key for the G2 flag
 * @param {String} assetType - The asset type for the backend
 * @param {Boolean} isProperty - Whether this is a property asset (includes address field)
 */
function processAsset(
  guarantorAsset,
  guarantors,
  descriptionKey,
  valueKey,
  owingKey,
  g1Key,
  g2Key,
  assetType,
  isProperty = false
) {
  const description = guarantorAsset[descriptionKey] || '';
  const value = parseFloat(guarantorAsset[valueKey]) || 0;
  const amountOwing = parseFloat(guarantorAsset[owingKey]) || 0;
  const isG1 = guarantorAsset[g1Key];
  const isG2 = guarantorAsset[g2Key];
  
  // Skip if description is empty for properties, or if both G1 and G2 are false, or if value is 0
  if ((isProperty && !description) || (!isG1 && !isG2) || value === 0) {
    return;
  }
  
  // Create asset object according to schema
  const asset = {
    asset_type: assetType,
    description: description || assetType,
    value: value,
    amount_owing: amountOwing
  };
  
  // Add address field for property assets
  if (isProperty && description) {
    asset.address = description;
  }
  
  // Add to appropriate guarantor(s)
  if (isG1 && guarantors.length >= 1) {
    guarantors[0].assets.push({
      ...asset,
      bg_type: 'BG1'
    });
  }
  
  if (isG2 && guarantors.length >= 2) {
    guarantors[1].assets.push({
      ...asset,
      bg_type: 'BG2'
    });
  }
}