<template>
    <div class="popup">        
        <div class="popup_title">
            <h1>{{ action }}</h1>
            <div class="close">
                <!-- <el-icon :size="20" style="cursor: pointer; color: #7A858E;" @click="handleMinimize"><Minus /></el-icon> -->
                <el-icon :size="20" style="cursor: pointer; color: #7A858E;" @click="handleClose"><Close /></el-icon>                    
            </div>
        </div>
        <el-scrollbar>
            <div class="popup_content">
                <el-collapse v-model="activeNames" accordion style="--el-collapse-border-color: none;">
                    <el-collapse-item name="1">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isCompanyValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isCompanyValid ? '#2984DE' : '#272727'}">Company Borrower Details</p>
                            </div>
                        </template>
                        <Company :company="application.company_borrowers" @add="addDirector" @remove="removeDirector"></Company>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isCompanyAssetValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isCompanyAssetValid ? '#2984DE' : '#272727'}">Company Assets & Liabilities</p>
                            </div>
                        </template>
                        <CompanyAssets 
                            :company="application.company_borrowers"
                            @addAsset="addAsset"
                            @removeAsset="removeAsset"
                            @addLiability="addLiability"
                            @removeLiability="removeLiability"
                        ></CompanyAssets>
                    </el-collapse-item>
                    <el-collapse-item name="3">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isIndividualValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isIndividualValid ? '#2984DE' : '#272727'}">Individual Borrower Details</p>
                            </div>
                        </template>
                        <Inividual :borrowers="application.borrowers" @add="addBorrower" @remove="removeBorrower"></Inividual>
                    </el-collapse-item>
                    <el-collapse-item name="4">                        
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isEnquiryValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isEnquiryValid ? '#2984DE' : '#272727'}">General Solvency Enquires</p>
                            </div>
                        </template>
                        <Enquiries :enquiry="application"></Enquiries>
                    </el-collapse-item>
                    <el-collapse-item name="5">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isIndividualValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isIndividualValid ? '#2984DE' : '#272727'}">Guarantor Details</p>
                            </div>
                        </template>
                        <Guarantor :guarantors="application.guarantors" @add="addGuarantor" @remove="removeGuarantor"></Guarantor>
                    </el-collapse-item>
                    <el-collapse-item name="6">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isGuarantorAssetValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isGuarantorAssetValid ? '#2984DE' : '#272727'}">Guarantor Assets & Liability</p>
                            </div>
                        </template>
                        <GuarantorAsset :asset="guarantorAsset"></GuarantorAsset>
                    </el-collapse-item>
                    <el-collapse-item name="7">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isSecurityValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isSecurityValid ? '#2984DE' : '#272727'}">Proposed Security Details</p>
                            </div>
                        </template>
                        <Security :security="application.security_properties" @add="addSecurity" @remove="removeSecurity"></Security>
                    </el-collapse-item>
                    <el-collapse-item name="8">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isLoanDetailValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isLoanDetailValid ? '#2984DE' : '#272727'}">Loan Details & Purpose</p>
                            </div>
                        </template>
                        <LoanDetail :detail="application"></LoanDetail>
                    </el-collapse-item>
                    <el-collapse-item name="9">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isRequirementValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isRequirementValid ? '#2984DE' : '#272727'}">Loan Requirements</p>
                            </div>
                        </template>
                        <LoanRequirement 
                            :requirement="application.loan_requirements"
                            @add="addRequirement"
                            @remove="removeRequirement"
                        ></LoanRequirement>
                    </el-collapse-item>
                    <el-collapse-item name="10">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isExitValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isExitValid ? '#2984DE' : '#272727'}">Funding Calculation Input</p>
                            </div>
                        </template>
                        <Calculation :detail="application.funding_calculation_input"></Calculation>
                    </el-collapse-item>
                    <el-collapse-item name="11">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isExitValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isExitValid ? '#2984DE' : '#272727'}">Proposed Exit Strategy</p>
                            </div>
                        </template>
                        <Exit :exit="application"></Exit>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-scrollbar>
        <div class="buttons">
            <Cancel @click="handleClose"></Cancel>
            <Save @click="handleSave"></Save>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, watch } from 'vue';
    import Company from './company.vue';
    import CompanyAssets from './companyasset.vue';
    import Enquiries from './enquiries.vue';
    import Inividual from './inividual.vue';
    import Guarantor from './guarantor.vue';
    import GuarantorAsset from './guarantorasset.vue';
    import Security from './security.vue';
    import LoanDetail from './loandetail.vue';
    import LoanRequirement from './loanrequirement.vue';
    import Calculation from './calculation.vue';
    import Exit from './exit.vue';
    import Cancel from '@/components/buttons/cancel.vue';
    import Save from '@/components/buttons/save.vue';

    const props = defineProps({
        action: String
    })

    const activeNames = ref("1")
    const createDirector = () => {
        return {
            name: "",
            roles: "",
            director_id: ""
        }
    }
    const createCompanyAsset = () => {
        return {
            asset_type: "",
            description: "",
            value: "",
            amount_owing: "",
            to_be_refinanced: "",
            address: ""
        }
    }
    const createCompanyLiability = () => {
        return {
            liability_type: "",
            description: "",
            amount: "",
            lender: "",
            monthly_payment: "",
            to_be_refinanced: "",
            bg_type: "bg1"
        }
    }    
    const createCompany = () => {
        return {
            company_name: "",
            company_abn: "",
            industry_type: "",
            contact_number: "",
            annual_company_income: "",
            is_trustee: null,
            is_smsf_trustee: null,
            trustee_name: "",
            directors: [createDirector()],
            registered_address_unit: "",
            registered_address_street_no: "",
            registered_address_street_name: "",
            registered_address_suburb: "",
            registered_address_state: "",
            registered_address_postcode: "",
            financial_info: {
                annual_revenue: "",
                net_profit: "",
                assets: totalAsset,
                liabilities: totalLiability
            },
            assets: [createCompanyAsset()],
            liabilities: [createCompanyLiability()]
        }
    }
    const totalAsset = computed(() => {
        return application.value.company_borrowers[0].assets
            .map(a => parseFloat(a.value) || 0)
            .reduce((sum, v) => sum + v, 0)
    })
    const totalLiability = computed(() => {
        return application.value.company_borrowers[0].liabilities
            .map(a => parseFloat(a.amount) || 0)
            .reduce((sum, v) => sum + v, 0)
    })
    const createBorrower = () => {
        return {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            date_of_birth: "",
            tax_id: "",
            marital_status: "",
            residency_status: "",
            referral_source: "",
            tags: ""
        }
    }
    const createGuarantor = () => {
        return {
            guarantor_type: "",
            title: "",
            first_name: "",
            last_name: "",
            date_of_birth: "",
            drivers_licence_no: "",
            home_phone: "",
            mobile: "",
            email: "",
            address_unit: "",
            address_street_no: "",
            address_street_name: "",
            address_suburb: "",
            address_state: "",
            address_postcode: "",
            occupation: "",
            employer_name: "",
            employment_type: ""
        }
    }
    const createSecurity = () => {
        return {
            address_unit: "",
            address_street_no: "",
            address_street_name: "",
            address_suburb: "",
            address_state: "",
            address_postcode: "",
            property_type: "",
            bedrooms: "",
            bathrooms: "",
            car_spaces: "",
            building_size: "",
            land_size: "",
            has_garage: null,
            has_carport: null,
            is_single_story: null,
            has_off_street_parking: null,
            current_mortgagee: "",
            first_mortgage: "",
            second_mortgage: "",
            current_debt_position: "",
            occupancy: "",
            estimated_value: "",
            purchase_price: ""
        }
    }
    const createRequirement = () => {
        return {
            description: "",
            amount: ""
        }
    }
    const application = ref({
        reference_number: "",
        loan_amount: "",
        loan_term: "",
        interest_rate: "",
        purpose: "",
        repayment_frequency: "",
        application_type: "",
        product_id: "",
        estimated_settlement_date: "",
        stage: "inquiry",
        borrowers: [createBorrower()],
        guarantors: [createGuarantor()],
        company_borrowers: [createCompany()],
        security_properties: [createSecurity()],
        loan_requirements: [createRequirement()],
        loan_purpose: "",
        additional_comments: "",
        prior_application: true,
        prior_application_details: "",
        exit_strategy: "",
        exit_strategy_details: "",
        valuer_company_name: "",
        valuer_contact_name: "",
        valuer_phone: "",
        valuer_email: "",
        qs_company_name: "",
        qs_contact_name: "",
        qs_phone: "",
        qs_email: "",
        funding_calculation_input: {
            establishment_fee_rate: "",
            capped_interest_months: "",
            monthly_line_fee_rate: "",
            brokerage_fee_rate: "",
            application_fee: "",
            due_diligence_fee: "",
            legal_fee_before_gst: "",
            valuation_fee: "",
            monthly_account_fee: "",
            working_fee: ""
        },
        has_pending_litigation: null,
        has_unsatisfied_judgements: null,
        has_been_bankrupt: null,
        has_been_refused_credit: null,
        has_outstanding_ato_debt: null,
        has_outstanding_tax_returns: null,
        has_payment_arrangements: null,
        solvency_enquiries_details: ""
    })    
    const guarantorAsset = ref({
        address1: "",
        address1Value: "",
        address1Owing: "",
        address1G1: false,
        address1G2: false,
        address2: "",
        address2Value: "",
        address2Owing: "",
        address2G1: false,
        address2G2: false,
        address3: "",
        address3Value: "",
        address3Owing: "",
        address3G1: false,
        address3G2: false,
        address4: "",
        address4Value: "",
        address4Owing: "",
        address4G1: false,
        address4G2: false,
        vehicleValue: "",
        vehicleOwing: "",
        vehicleG1: false,
        vehicleG2: false,
        savingValue: "",
        savingOwing: "",
        savingG1: false,
        savingG2: false,
        shareValue: "",
        shareOwing: "",
        shareG1: false,
        shareG2: false,
        cardValue: "",
        cardOwing: "",
        cardG1: false,
        cardG2: false,
        creditorValue: "",
        creditorOwing: "",
        creditorG1: false,
        creditorG2: false,
        otherValue: "",
        otherOwing: "",
        otherG1: false,
        otherG2: false,
        totalValue: "",
        totalOwing: ""
    })

    const emit = defineEmits(['close', 'minimize'])

    const handleClose = () => {
        emit('close')
    }
    const handleMinimize = () => {
        emit('minimize')
    }
    const addDirector = () => {
        application.value.company_borrowers[0].directors.push(createDirector())
    }
    const removeDirector = (idx) => {
        application.value.company_borrowers[0].directors.splice(idx, 1)
    }
    const addAsset = () => {
        application.value.company_borrowers[0].assets.push(createCompanyAsset())
    }
    const removeAsset = () => {
        application.value.company_borrowers[0].assets.pop()
    }
    const addLiability = () => {
        application.value.company_borrowers[0].liabilities.push(createCompanyLiability())
    }
    const removeLiability = () => {
        application.value.company_borrowers[0].liabilities.pop()
    }
    const addBorrower = () => {
        application.value.borrowers.push(createBorrower())
    }
    const removeBorrower = (idx) => {
        application.value.borrowers.splice(idx, 1)
    }
    const addGuarantor = () => {
        application.value.guarantors.push(createGuarantor())
    }
    const removeGuarantor = (idx) => {
        application.value.guarantors.splice(idx, 1)
    }
    const addSecurity = () => {
        application.value.security_properties.push(createSecurity())
    }
    const removeSecurity = (idx) => {
        application.value.security_properties.splice(idx, 1)
    }
    const addRequirement = () => {
        application.value.loan_requirements.push(createRequirement())
    }
    const removeRequirement = () => {
        application.value.loan_requirements.pop()
    }
    const isCompanyValid = computed(() => {
        return Object.values(application.value).every(value => value !== '')
    })
    const isCompanyAssetValid = computed(() => {
        return Object.values(application.value).every(value => value !== '')
    })
    const isEnquiryValid = computed(() => {
        return Object.values(application.value).every(value => value !== null)
    })
    const isIndividualValid = computed(() => {
        return Object.values(application.value).every(value => value !== null)
    })
    const isGuarantorAssetValid = computed(() => {
        return Object.values(application.value).every(value => value !== '')
    })
    const isSecurityValid = computed(() => {
        return Object.values(application.value).every(value => value !== null)
    })
    const isLoanDetailValid = computed(() => {
        return Object.values(application.value).every(value => value !== '')
    })
    const isRequirementValid = computed(() => {
        return Object.values(application.value).every(value => value !== '')
    })
    const isExitValid = computed(() => {
        return Object.values(application.value).every(value => value !== '')
    })
    const handleSave = () => {
        console.log(application.value)
    }
</script>

<style scoped>
    .popup {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        background: white;
        border: none;
        box-shadow: -8px -1px 9.3px 0px rgba(202, 202, 202, 0.16);
        width: 50%;
        height: 100vh;
        overflow: hidden;
        z-index: 1000;
    }
    .popup_title {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1.5px solid var(--Line, #E1E1E1);
    }
    h1 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
    }
    .close {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
    .popup_content {
        width: 100%;
        padding: 10px;
    }
    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        padding-left: 5px;
    }
    .title p {
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
    }
    .buttons {
        width: 100%;
        padding: 10px;
        margin-top: auto;
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        border-top: 1.5px solid #E1E1E1;
        gap: 10px;
    }
</style>