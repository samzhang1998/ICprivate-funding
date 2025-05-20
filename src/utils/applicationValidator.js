/**
 * Utility functions to validate application data before sending to the backend
 */

/**
 * Validates an application payload for the create-with-cascade endpoint
 * @param {Object} applicationData - The application data to validate
 * @returns {Object} - Object with isValid boolean and errors object
 */
export function validateApplicationPayload(applicationData) {
  const errors = {};
  
  // Validate required top-level fields
  if (!applicationData.loan_amount) {
    errors.loan_amount = 'Loan amount is required';
  }
  
  if (!applicationData.loan_term) {
    errors.loan_term = 'Loan term is required';
  }
  
  if (!applicationData.repayment_frequency) {
    errors.repayment_frequency = 'Repayment frequency is required';
  }
  
  if (!applicationData.stage) {
    errors.stage = 'Application stage is required';
  }
  
  // Validate borrowers if present
  if (applicationData.borrowers && applicationData.borrowers.length > 0) {
    const borrowerErrors = [];
    
    applicationData.borrowers.forEach((borrower, index) => {
      const borrowerFieldErrors = {};
      
      // Check for required borrower fields
      if (!borrower.first_name) {
        borrowerFieldErrors.first_name = 'First name is required';
      }
      
      if (!borrower.last_name) {
        borrowerFieldErrors.last_name = 'Last name is required';
      }
      
      if (Object.keys(borrowerFieldErrors).length > 0) {
        borrowerErrors[index] = borrowerFieldErrors;
      }
    });
    
    if (borrowerErrors.length > 0) {
      errors.borrowers = borrowerErrors;
    }
  }
  
  // Validate company borrowers if present
  if (applicationData.company_borrowers && applicationData.company_borrowers.length > 0) {
    const companyBorrowerErrors = [];
    
    applicationData.company_borrowers.forEach((companyBorrower, index) => {
      const companyBorrowerFieldErrors = {};
      
      if (!companyBorrower.company_name) {
        companyBorrowerFieldErrors.company_name = 'Company name is required';
      }
      
      if (!companyBorrower.company_abn && !companyBorrower.company_acn) {
        companyBorrowerFieldErrors.company_identification = 'Either ABN or ACN is required';
      }
      
      if (Object.keys(companyBorrowerFieldErrors).length > 0) {
        companyBorrowerErrors[index] = companyBorrowerFieldErrors;
      }
    });
    
    if (companyBorrowerErrors.length > 0) {
      errors.company_borrowers = companyBorrowerErrors;
    }
  }
  
  // Validate guarantors if present
  if (applicationData.guarantors && applicationData.guarantors.length > 0) {
    const guarantorErrors = [];
    
    applicationData.guarantors.forEach((guarantor, index) => {
      const guarantorFieldErrors = {};
      
      if (!guarantor.guarantor_type) {
        guarantorFieldErrors.guarantor_type = 'Guarantor type is required';
      }
      
      if (!guarantor.first_name) {
        guarantorFieldErrors.first_name = 'First name is required';
      }
      
      if (!guarantor.last_name) {
        guarantorFieldErrors.last_name = 'Last name is required';
      }
      
      // Validate guarantor assets if present
      if (guarantor.assets && guarantor.assets.length > 0) {
        const assetErrors = [];
        
        guarantor.assets.forEach((asset, assetIndex) => {
          const assetFieldErrors = {};
          
          if (!asset.asset_type) {
            assetFieldErrors.asset_type = 'Asset type is required';
          }
          
          if (!asset.bg_type) {
            assetFieldErrors.bg_type = 'BG type is required for guarantor assets';
          }
          
          if (Object.keys(assetFieldErrors).length > 0) {
            assetErrors[assetIndex] = assetFieldErrors;
          }
        });
        
        if (assetErrors.length > 0) {
          guarantorFieldErrors.assets = assetErrors;
        }
      }
      
      if (Object.keys(guarantorFieldErrors).length > 0) {
        guarantorErrors[index] = guarantorFieldErrors;
      }
    });
    
    if (guarantorErrors.length > 0) {
      errors.guarantors = guarantorErrors;
    }
  }
  
  // Validate security properties if present
  if (applicationData.security_properties && applicationData.security_properties.length > 0) {
    const propertyErrors = [];
    
    applicationData.security_properties.forEach((property, index) => {
      const propertyFieldErrors = {};
      
      // Check for required address fields
      const addressFields = [
        { field: 'address_street_no', label: 'Street number' },
        { field: 'address_street_name', label: 'Street name' },
        { field: 'address_suburb', label: 'Suburb' },
        { field: 'address_state', label: 'State' },
        { field: 'address_postcode', label: 'Postcode' }
      ];
      
      addressFields.forEach(({ field, label }) => {
        if (!property[field]) {
          propertyFieldErrors[field] = `${label} is required`;
        }
      });
      
      if (Object.keys(propertyFieldErrors).length > 0) {
        propertyErrors[index] = propertyFieldErrors;
      }
    });
    
    if (propertyErrors.length > 0) {
      errors.security_properties = propertyErrors;
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Formats validation errors from the backend into a more user-friendly format
 * @param {Object} backendErrors - The errors object from the backend
 * @returns {Object} - Formatted errors object
 */
export function formatBackendErrors(backendErrors) {
  if (!backendErrors) return {};
  
  const formattedErrors = {};
  
  // Process top-level errors
  Object.keys(backendErrors).forEach(key => {
    if (Array.isArray(backendErrors[key])) {
      // Handle array of strings
      if (typeof backendErrors[key][0] === 'string') {
        formattedErrors[key] = backendErrors[key].join(', ');
      } 
      // Handle array of objects (nested errors)
      else if (typeof backendErrors[key][0] === 'object') {
        formattedErrors[key] = backendErrors[key].map(item => {
          if (typeof item === 'object') {
            // Process each nested object
            const nestedErrors = {};
            Object.keys(item).forEach(nestedKey => {
              if (Array.isArray(item[nestedKey])) {
                nestedErrors[nestedKey] = item[nestedKey].join(', ');
              } else if (typeof item[nestedKey] === 'object') {
                // Handle doubly nested objects (like assets)
                nestedErrors[nestedKey] = formatBackendErrors(item[nestedKey]);
              } else {
                nestedErrors[nestedKey] = item[nestedKey];
              }
            });
            return nestedErrors;
          }
          return item;
        });
      }
    } else if (typeof backendErrors[key] === 'object' && !Array.isArray(backendErrors[key])) {
      // Handle nested objects
      formattedErrors[key] = formatBackendErrors(backendErrors[key]);
    } else {
      formattedErrors[key] = backendErrors[key];
    }
  });
  
  // Special handling for company_borrowers to map company_identification errors
  if (formattedErrors.company_borrowers && Array.isArray(formattedErrors.company_borrowers)) {
    formattedErrors.company_borrowers = formattedErrors.company_borrowers.map(companyBorrower => {
      // If there's a company_identification error, make sure it's properly formatted
      if (companyBorrower && companyBorrower.company_identification) {
        const error = companyBorrower.company_identification;
        if (Array.isArray(error)) {
          companyBorrower.company_identification = error.join(', ');
        }
      }
      return companyBorrower;
    });
  }
  
  return formattedErrors;
}

/**
 * Creates a sample application payload with all required fields
 * @returns {Object} - A sample application payload
 */
export function createSampleApplicationPayload() {
  return {
    loan_amount: "500000.00",
    loan_term: 24,
    interest_rate: "5.5",
    repayment_frequency: "monthly",
    stage: "inquiry",
    purpose: "Investment property purchase",
    application_type: "residential",
    borrowers: [
      {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        phone: "0412345678",
        date_of_birth: "1980-01-01"
      }
    ],
    guarantors: [
      {
        guarantor_type: "individual",
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@example.com",
        phone: "0412345679",
        date_of_birth: "1982-02-02"
      }
    ],
    company_borrowers: [
      {
        company_name: "Example Pty Ltd",
        company_abn: "12345678901",
        company_acn: "123456789",
        industry_type: "real_estate",
        contact_number: "0298765432"
      }
    ],
    security_properties: [
      {
        address_unit: "",
        address_street_no: "123",
        address_street_name: "Main Street",
        address_suburb: "Sydney",
        address_state: "NSW",
        address_postcode: "2000",
        property_type: "house",
        estimated_value: "750000.00"
      }
    ]
  };
}