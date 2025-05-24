<template>
  <div class="popup">
    <div class="header">
      <h1>{{ action }}</h1>
      <div class="buttons">
        <el-button @click="$emit('minimize')">
          <el-icon><Minus /></el-icon>
        </el-button>
        <el-button @click="$emit('close')">
          <el-icon><Close /></el-icon>
        </el-button>
      </div>
    </div>
    <div class="content">
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-position="top"
        @submit.prevent="handleSubmit"
      >
        <!-- Basic Information -->
        <div class="section">
          <h2>Basic Information</h2>
          <div class="fields">
            <el-form-item label="First Name" prop="first_name" required>
              <el-input v-model="form.first_name" placeholder="Enter first name" />
            </el-form-item>
            
            <el-form-item label="Last Name" prop="last_name" required>
              <el-input v-model="form.last_name" placeholder="Enter last name" />
            </el-form-item>
            
            <el-form-item label="Date of Birth" prop="date_of_birth" required>
              <el-date-picker
                v-model="form.date_of_birth"
                type="date"
                placeholder="Select date"
                format="YYYY-MM-DD"
              />
            </el-form-item>

            <el-form-item label="Email" prop="email" required>
              <el-input v-model="form.email" placeholder="Enter email address" />
            </el-form-item>

            <el-form-item label="Phone Number" prop="phone" required>
              <el-input v-model="form.phone" placeholder="Enter phone number" />
            </el-form-item>
          </div>
        </div>

        <!-- Address Information -->
        <div class="section">
          <h2>Address Information</h2>
          <div class="fields">
            <el-form-item label="Street Address" prop="address" required>
              <el-input v-model="form.address" placeholder="Enter street address" />
            </el-form-item>

            <el-form-item label="City" prop="city" required>
              <el-input v-model="form.city" placeholder="Enter city" />
            </el-form-item>

            <el-form-item label="State" prop="state" required>
              <el-input v-model="form.state" placeholder="Enter state" />
            </el-form-item>

            <el-form-item label="Postal Code" prop="postal_code" required>
              <el-input v-model="form.postal_code" placeholder="Enter postal code" />
            </el-form-item>
          </div>
        </div>

        <!-- Employment Information -->
        <div class="section">
          <h2>Employment Information</h2>
          <div class="fields">
            <el-form-item label="Employment Type" prop="employment_type" required>
              <el-select v-model="form.employment_type" placeholder="Select employment type">
                <el-option label="Full-time" value="full_time" />
                <el-option label="Part-time" value="part_time" />
                <el-option label="Casual" value="casual" />
                <el-option label="Contract" value="contract" />
              </el-select>
            </el-form-item>

            <el-form-item label="Annual Income" prop="annual_income" required>
              <el-input-number 
                v-model="form.annual_income"
                :min="0"
                :precision="2"
                :step="1000"
                :controls="false"
                placeholder="Enter annual income"
              />
            </el-form-item>

            <el-form-item label="Employer Name" prop="employer_name">
              <el-input v-model="form.employer_name" placeholder="Enter employer name" />
            </el-form-item>

            <el-form-item label="Years with Employer" prop="years_with_employer">
              <el-input-number 
                v-model="form.years_with_employer"
                :min="0"
                :precision="1"
                :step="0.5"
                :controls="false"
                placeholder="Enter years with employer"
              />
            </el-form-item>
          </div>
        </div>

        <!-- Relationship Information -->
        <div class="section">
          <h2>Relationship Information</h2>
          <div class="fields">
            <el-form-item label="Relationship to Borrower" prop="relationship" required>
              <el-select v-model="form.relationship" placeholder="Select relationship">
                <el-option label="Spouse" value="spouse" />
                <el-option label="Parent" value="parent" />
                <el-option label="Child" value="child" />
                <el-option label="Sibling" value="sibling" />
                <el-option label="Business Partner" value="business_partner" />
                <el-option label="Other" value="other" />
              </el-select>
            </el-form-item>

            <el-form-item 
              v-if="form.relationship === 'other'" 
              label="Specify Relationship" 
              prop="relationship_other"
              required
            >
              <el-input v-model="form.relationship_other" placeholder="Please specify relationship" />
            </el-form-item>
          </div>
        </div>

        <div class="actions">
          <el-button type="primary" native-type="submit" :loading="loading">
            {{ isEdit ? 'Update Guarantor' : 'Create Guarantor' }}
          </el-button>
          <el-button @click="$emit('close')">Cancel</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
import { api } from '@/api';

const props = defineProps({
  action: {
    type: String,
    required: true
  },
  guarantorData: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['close', 'minimize', 'refresh']);

const formRef = ref(null);
const loading = ref(false);

const isEdit = computed(() => props.action.startsWith('Edit'));

const form = ref({
  first_name: '',
  last_name: '',
  date_of_birth: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  postal_code: '',
  employment_type: '',
  annual_income: null,
  employer_name: '',
  years_with_employer: null,
  relationship: '',
  relationship_other: '',
  guarantor_type: 'individual',
  ...props.guarantorData
});

const rules = {
  first_name: [{ required: true, message: 'Please enter first name', trigger: 'blur' }],
  last_name: [{ required: true, message: 'Please enter last name', trigger: 'blur' }],
  date_of_birth: [{ required: true, message: 'Please select date of birth', trigger: 'change' }],
  email: [
    { required: true, message: 'Please enter email address', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email address', trigger: 'blur' }
  ],
  phone: [{ required: true, message: 'Please enter phone number', trigger: 'blur' }],
  address: [{ required: true, message: 'Please enter street address', trigger: 'blur' }],
  city: [{ required: true, message: 'Please enter city', trigger: 'blur' }],
  state: [{ required: true, message: 'Please enter state', trigger: 'blur' }],
  postal_code: [{ required: true, message: 'Please enter postal code', trigger: 'blur' }],
  employment_type: [{ required: true, message: 'Please select employment type', trigger: 'change' }],
  annual_income: [{ required: true, message: 'Please enter annual income', trigger: 'blur' }],
  relationship: [{ required: true, message: 'Please select relationship', trigger: 'change' }],
  relationship_other: [{
    required: true,
    message: 'Please specify relationship',
    trigger: 'blur',
    validator: (rule, value, callback) => {
      if (form.value.relationship === 'other' && !value) {
        callback(new Error('Please specify relationship'));
      } else {
        callback();
      }
    }
  }]
};

const handleSubmit = async () => {
  if (!formRef.value) return;
  
  try {
    await formRef.value.validate();
    loading.value = true;

    // Prepare form data
    const formData = { ...form.value };
    
    // Format date_of_birth to YYYY-MM-DD string format
    if (formData.date_of_birth) {
      const date = new Date(formData.date_of_birth);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      formData.date_of_birth = `${year}-${month}-${day}`;
    }
    
    // Convert annual_income to string if it exists
    if (formData.annual_income !== null && formData.annual_income !== undefined) {
      formData.annual_income = formData.annual_income.toString();
    }
    
    // Convert years_with_employer to string if it exists
    if (formData.years_with_employer !== null && formData.years_with_employer !== undefined) {
      formData.years_with_employer = formData.years_with_employer.toString();
    }
    
    // Set guarantor_type if not already set
    if (!formData.guarantor_type) {
      formData.guarantor_type = 'individual';
    }
    
    // Map address fields to API expected format
    if (formData.address) {
      formData.address_street_name = formData.address;
      delete formData.address;
    }
    
    if (formData.city) {
      formData.address_suburb = formData.city;
      delete formData.city;
    }
    
    if (formData.state) {
      formData.address_state = formData.state;
      delete formData.state;
    }
    
    if (formData.postal_code) {
      formData.address_postcode = formData.postal_code;
      delete formData.postal_code;
    }
    
    if (formData.phone) {
      formData.mobile = formData.phone;
    }
    
    if (formData.relationship !== 'other') {
      delete formData.relationship_other;
    }

    // For debugging
    console.log('Submitting guarantor data:', formData);

    // Make API call
    const [error, response] = isEdit.value
      ? await api.updateGuarantor(props.guarantorData.id, formData)
      : await api.createGuarantor(formData);

    if (error) {
      console.error('API Error:', error);
      throw error;
    }

    ElMessage.success({
      message: `Guarantor successfully ${isEdit.value ? 'updated' : 'created'}!`,
      type: 'success'
    });

    emit('refresh');
    emit('close');
  } catch (error) {
    console.error('Form submission error:', error);
    ElMessage.error({
      message: error.message || 'An error occurred. Please try again.',
      type: 'error'
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 600px;
  height: 100vh;
  background: #FFF;
  box-shadow: -4px 0px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

.header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #EAEAEA;
}

.header h1 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.buttons {
  display: flex;
  gap: 10px;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.section {
  margin-bottom: 30px;
}

.section h2 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.fields {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.actions {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

:deep(.el-form-item__label) {
  font-weight: 500;
}

:deep(.el-input), :deep(.el-select), :deep(.el-date-picker) {
  width: 100%;
}
</style>