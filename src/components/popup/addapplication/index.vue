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
                        <Company :company="company"></Company>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isCompanyAssetValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isCompanyAssetValid ? '#2984DE' : '#272727'}">Company Assets & Liabilities</p>
                            </div>
                        </template>
                        <CompanyAssets :asset="companyAsset"></CompanyAssets>
                    </el-collapse-item>
                    <el-collapse-item name="3">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isEnquiryValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isEnquiryValid ? '#2984DE' : '#272727'}">General Solvency Enquires</p>
                            </div>
                        </template>
                        <Enquiries :enquiry="enquiry"></Enquiries>
                    </el-collapse-item>
                    <el-collapse-item name="4">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isIndividualValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isIndividualValid ? '#2984DE' : '#272727'}">Individual Details</p>
                            </div>
                        </template>
                        <Inividual :borrowers="borrowers" @add="addBorrower" @remove="removeBorrower"></Inividual>
                    </el-collapse-item>
                    <el-collapse-item name="5">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isGuarantorAssetValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isGuarantorAssetValid ? '#2984DE' : '#272727'}">Guarantor Assets & Liability</p>
                            </div>
                        </template>
                        <GuarantorAsset :asset="guarantorAsset"></GuarantorAsset>
                    </el-collapse-item>
                    <el-collapse-item name="6">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isSecurityValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isSecurityValid ? '#2984DE' : '#272727'}">Proposed Security Details</p>
                            </div>
                        </template>
                        <Security :security="security" @add="addSecurity" @remove="removeSecurity"></Security>
                    </el-collapse-item>
                    <el-collapse-item name="7">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isLoanDetailValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isLoanDetailValid ? '#2984DE' : '#272727'}">Loan Details & Purpose</p>
                            </div>
                        </template>
                        <LoanDetail :detail="loanDetail"></LoanDetail>
                    </el-collapse-item>
                    <el-collapse-item name="8">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isRequirementValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isRequirementValid ? '#2984DE' : '#272727'}">Loan Requirements</p>
                            </div>
                        </template>
                        <LoanRequirement :requirement="loanRequirement"></LoanRequirement>
                    </el-collapse-item>
                    <el-collapse-item name="9">
                        <template #title>
                            <div class="title">
                                <el-icon style="font-size: 20px" :color="isExitValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                                <p :style="{color: isExitValid ? '#2984DE' : '#272727'}">Proposed Exit Strategy</p>
                            </div>
                        </template>
                        <Exit :exit="exit"></Exit>
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
    import GuarantorAsset from './guarantorasset.vue';
    import Security from './security.vue';
    import LoanDetail from './loandetail.vue';
    import LoanRequirement from './loanrequirement.vue';
    import Exit from './exit.vue';
    import Cancel from '@/components/buttons/cancel.vue';
    import Save from '@/components/buttons/save.vue';

    const props = defineProps({
        action: String
    })

    const activeNames = ref("1")
    const company = ref({
        companyName: "",
        abn: "",
        industryType: "",
        contact: "",
        annualIncome: "",
        trustee: null,
        smsf: null,
        trusteeName: "",
        positionName1: "",
        positionRole1: "",
        directorId1: "",
        positionName2: "",
        positionRole2: "",
        directorId2: "",
        address: ""
    })
    const companyAsset = ref({
        address1: "",
        address1Value: "",
        address1Owing: "",
        address1Refinance: false,
        address2: "",
        address2Value: "",
        address2Owing: "",
        address2Refinance: false,
        address3: "",
        address3Value: "",
        address3Owing: "",
        address3Refinance: false,
        address4: "",
        address4Value: "",
        address4Owing: "",
        address4Refinance: false,
        vehicleValue: "",
        vehicleOwing: "",
        vehicleRefinance: false,
        savingValue: "",
        savingOwing: "",
        savingRefinance: false,
        shareValue: "",
        shareOwing: "",
        shareRefinance: false,
        cardValue: "",
        cardOwing: "",
        cardRefinance: false,
        creditorValue: "",
        creditorOwing: "",
        creditorRefinance: false,
        otherValue: "",
        otherOwing: "",
        otherRefinance: false,
        totalValue: "",
        totalOwing: ""
    })    
    const enquiry = ref({
        litigation: null,
        judgements: null,
        bankrupt: null,
        refuse: null,
        debt: null,
        tax: null,
        payment: null
    })
    const createBorrower = () => {
        return {
            title: "",
            firstName: "",
            lastName: "",
            birth: "",
            license: "",
            phone: "",
            mobile: "",
            email: "",
            address: "",
            occupation: "",
            employer: "",
            type: ""
        }
    }
    const borrowers = ref([ createBorrower() ])
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
    const createSecurity = () => {
        return {
            address: "",
            type: [],
            typeOther: "",
            bedroom: "",
            bathroom: "",
            carSpace: "",
            buildingSize: "",
            landSize: "",
            description: [],
            mortgage1: "",
            mortgage2: "",
            debt1: "",
            debt2: "",
            valuation: [],
            est: "",
            purchase: ""
        }
    }
    const security = ref([ createSecurity() ])
    const loanDetail = ref({
        loan: "",
        term: "",
        date: "",
        rate: "",
        purpose: [],
        purposeOther: "",
        comments: ""
    })
    const loanRequirement = ref({
        require1: "",
        amount1: "",
        require2: "",
        amount2: "",
        require3: "",
        amount3: "",
        require4: "",
        amount4: "",
        require5: "",
        amount5: "",
        require6: "",
        amount6: "",
        totalAmount: ""
    })
    const exit = ref({
        methods: [],
        methodOther: "",
        detail: ""
    })

    watch(
        () => [
            companyAsset.value.address1Value,
            companyAsset.value.address2Value,
            companyAsset.value.address3Value,
            companyAsset.value.address4Value,
            companyAsset.value.vehicleValue,
            companyAsset.value.savingValue,
            companyAsset.value.shareValue,
            companyAsset.value.cardValue,
            companyAsset.value.creditorValue,
            companyAsset.value.otherValue,
            companyAsset.value.address1Owing,
            companyAsset.value.address2Owing,
            companyAsset.value.address3Owing,
            companyAsset.value.address4Owing,
            companyAsset.value.vehicleOwing,
            companyAsset.value.savingOwing,
            companyAsset.value.shareOwing,
            companyAsset.value.cardOwing,
            companyAsset.value.creditorOwing,
            companyAsset.value.otherOwing
        ],
        (newArr) => {
            const [ av1, av2, av3, av4, sav, sv, cv, rv, ov, ao1, ao2, ao3, ao4, sao, so, co, ro, oo ] = newArr.map(v => parseFloat(v) || 0)
            companyAsset.value.totalValue = av1 + av2 + av3 + av4 + sav + sv + cv + rv + ov
            companyAsset.value.totalOwing = ao1 + ao2 + ao3 + ao4 + sao + so + co + ro + oo
        },
        { immediate: true }
    )
    watch(
        () => [
            guarantorAsset.value.address1Value,
            guarantorAsset.value.address2Value,
            guarantorAsset.value.address3Value,
            guarantorAsset.value.address4Value,
            guarantorAsset.value.vehicleValue,
            guarantorAsset.value.savingValue,
            guarantorAsset.value.shareValue,
            guarantorAsset.value.cardValue,
            guarantorAsset.value.creditorValue,
            guarantorAsset.value.otherValue,
            guarantorAsset.value.address1Owing,
            guarantorAsset.value.address2Owing,
            guarantorAsset.value.address3Owing,
            guarantorAsset.value.address4Owing,
            guarantorAsset.value.vehicleOwing,
            guarantorAsset.value.savingOwing,
            guarantorAsset.value.shareOwing,
            guarantorAsset.value.cardOwing,
            guarantorAsset.value.creditorOwing,
            guarantorAsset.value.otherOwing
        ],
        (newArr) => {
            const [ av1, av2, av3, av4, sav, sv, cv, rv, ov, ao1, ao2, ao3, ao4, sao, so, co, ro, oo ] = newArr.map(v => parseFloat(v) || 0)
            guarantorAsset.value.totalValue = av1 + av2 + av3 + av4 + sav + sv + cv + rv + ov
            guarantorAsset.value.totalOwing = ao1 + ao2 + ao3 + ao4 + sao + so + co + ro + oo
        },
        { immediate: true }
    )
    watch(
        () => [
            loanRequirement.value.amount1,
            loanRequirement.value.amount2,
            loanRequirement.value.amount3,
            loanRequirement.value.amount4,
            loanRequirement.value.amount5,
            loanRequirement.value.amount6,
        ],
        (newArr) => {
            const [ a1, a2, a3, a4, a5, a6 ] = newArr.map(v => parseFloat(v) || 0)
            loanRequirement.value.totalAmount = a1 + a2 + a3 + a4 + a6 + a6
        },
        { immediate: true }
    )

    const emit = defineEmits(['close', 'minimize'])

    const handleClose = () => {
        emit('close')
    }
    const handleMinimize = () => {
        emit('minimize')
    }
    const addBorrower = () => {
        if (borrowers.value.length < 2) {
            borrowers.value.push(createBorrower())
        }
    }
    const removeBorrower = (idx) => {
        if (borrowers.value.length > 1) {
            borrowers.value.splice(idx, 1)
        }
    }
    const addSecurity = () => {
        if (security.value.length < 3) {
            security.value.push(createSecurity())
        }
    }
    const removeSecurity = (idx) => {
        if (security.value.length > 1) {
            security.value.splice(idx, 1)
        }
    }
    const isCompanyValid = computed(() => {
        return Object.values(company.value).every(value => value !== '')
    })
    const isCompanyAssetValid = computed(() => {
        return Object.values(companyAsset.value).every(value => value !== '')
    })
    const isEnquiryValid = computed(() => {
        return Object.values(enquiry.value).every(value => value !== null)
    })
    const isIndividualValid = computed(() => {
        return borrowers.value.every(borrower =>
            Object.values(borrower).every(value => value !== '')
        )
    })
    const isGuarantorAssetValid = computed(() => {
        return Object.values(guarantorAsset.value).every(value => value !== '')
    })
    const isSecurityValid = computed(() => {
        return security.value.every(security =>
            Object.values(security).every(value => value !== '')
        )
    })
    const isLoanDetailValid = computed(() => {
        return Object.values(loanDetail.value).every(value => value !== '')
    })
    const isRequirementValid = computed(() => {
        return Object.values(loanRequirement.value).every(value => value !== '')
    })
    const isExitValid = computed(() => {
        return Object.values(exit.value).every(value => value !== '')
    })
    const handleSave = () => {
        console.log(company.value)
        console.log(companyAsset.value)
        console.log(enquiry.value)
        console.log(borrowers.value)
        console.log(guarantorAsset.value)
        console.log(security.value)
        console.log(loanDetail.value)
        console.log(loanRequirement.value)
        console.log(exit.value)
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