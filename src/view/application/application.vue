<template>
    <div class="application">
        <div class="overview">
            <div class="title">
                <div class="title_info">
                    <h1>{{ application.name }}</h1>
                    <h2>{{ application.date }}</h2>
                    <p style="color: #2984DE">Application ID: {{ applicationId }}</p>
                </div>
                <div class="buttons">
                    <button class="calculator" @click="showCalculator">
                        <img src="/src/assets/icons/calculator.png" alt="action" />
                        Calculator
                    </button>
                    <button class="pdf">
                        <img src="/src/assets/icons/pdf.png" alt="action" />
                        Generate PDF
                    </button>
                    <button class="note" @click="showNote">
                        <img src="/src/assets/icons/note.png" alt="action" />
                        Note
                    </button>
                    <button class="list">
                        <img src="/src/assets/icons/list.png" alt="action" />
                        Fee List
                    </button>
                </div>
            </div>
            <div class="stages">
                <div class="title">
                    <h3>Stages</h3>
                    <div class="buttons">
                        <button class="move" @click="prevStage" :disabled="!hasPrev">Move to Previous Stage</button>
                        <button class="move" @click="nextStage" :disabled="!hasNext">Move to Next Stage</button>
                    </div>
                </div>
                <div class="stage_line">
                    <div v-for="(s,index) in stages" :key="index" class="stage">
                        <div class="stage_info">
                            <el-icon v-if="s.status === 'complete'" :size="16" color="#1F63A9"><SuccessFilled /></el-icon>
                            <img src="@/assets/icons/application_processing.png" alt="process" v-if="s.status === 'processing'" />
                            <p :class="s.status === 'complete' ? 'active' : 'inactive'">{{ s.name }}</p>
                        </div>
                        <div class="bottom_line" :class="s.status === 'incomplete' ? 'active_line' : ''"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tabs">
            <div v-for="(i, index) in infos" 
                :key="index" 
                class="tab"
                :class="{ active_tab: index === activeInfo }"
                @click="selectInfo(index)"
            >
                <p>{{ i.name }}</p>
            </div>
        </div>
        <Company v-if="activeInfo === 0"></Company>
        <CompanyAsset v-if="activeInfo === 1"></CompanyAsset>
        <Enquiries v-if="activeInfo === 2"></Enquiries>
        <Individual v-if="activeInfo === 3"></Individual>
        <GuarantorAsset v-if="activeInfo === 4"></GuarantorAsset>
        <Security v-if="activeInfo === 5"></Security>
        <LoanDetail v-if="activeInfo === 6"></LoanDetail>
        <LoanRequirement v-if="activeInfo === 7"></LoanRequirement>
        <Exit v-if="activeInfo === 8"></Exit>
        <transition name="slide-right-popup">
            <Calculator
                v-if="calculator"
                @close="closeCalculator"
                @minimize="minimize"
            ></Calculator>
        </transition>
        <transition name="slide-right-popup">
            <Note
                v-if="note"
                @close="closeNote"
                @minimize="minimize"
            ></Note>
        </transition>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import Company from '@/components/application/company.vue';
    import CompanyAsset from '@/components/application/companyasset.vue';
    import Enquiries from '@/components/application/enquiries.vue';
    import Individual from '@/components/application/individual.vue';
    import GuarantorAsset from '@/components/application/guarantorasset.vue';
    import Security from '@/components/application/security.vue';
    import LoanDetail from '@/components/application/loandetail.vue';
    import LoanRequirement from '@/components/application/loanrequirement.vue';
    import Exit from '@/components/application/exit.vue';
    import Calculator from '@/components/popup/calculator.vue';
    import Note from '@/components/popup/note.vue';

    const route = useRoute()

    const application = ref({
        name: "Application Name",
        date: "Date Create: 2025-12-23 10:13:42"
    })
    const applicationId = route.params.applicationId
    const stages = ref([
        {name: "Enquiry", status: "complete"},
        {name: "Indicative offer", status: "complete"},
        {name: "Valuation", status: "complete"},
        {name: "Dual", status: "complete"},
        {name: "Formal approval", status: "processing"},
        {name: "Loan documents issued", status: "incomplete"},
        {name: "Loan documents return", status: "incomplete"},
        {name: "Settlement", status: "incomplete"},
        {name: "Reject", status: "incomplete"},
        {name: "Withdraw", status: "incomplete"},
    ])
    const infos = ref([
        {name: "Company Borrower Details"},
        {name: "Company Assets & Liabilities"},
        {name: "General Solvency Enquires"},
        {name: "Individual Details"},
        {name: "Guarantor Assets & Liability"},
        {name: "Proposed Security Details"},
        {name: "Loan Details & Purpose"},
        {name: "Loan Requirements"},
        {name: "Proposed Exit Strategy"}
    ])
    const activeInfo = ref(0)
    const calculator = ref(false)
    const note = ref(false)

    const currentIndex = computed(() =>
        stages.value.findIndex(s => s.status === 'processing')
    )
    const hasPrev = computed(() => currentIndex.value > 0)
    const hasNext = computed(() => currentIndex.value < stages.value.length - 1)

    const showCalculator = () => {
        calculator.value = true
    }
    const showNote = () => {
        note.value = true
    }
    const closeCalculator = () => {
        calculator.value = false
    }
    const closeNote = () => {
        note.value = false
    }
    const nextStage = () => {
        const i = currentIndex.value
        stages.value[i].status = 'complete'
        stages.value[i + 1].status = 'processing'
    }
    const prevStage = () => {
        const i = currentIndex.value
        stages.value[i].status = 'incomplete'
        stages.value[i - 1].status = 'processing'
    }
    const selectInfo = (index) => {
        activeInfo.value = index
    }
</script>

<style scoped>
    .application {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .overview {
        padding: 20px;
        border-radius: 6px;
        background: #FFF;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .title {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .title_info {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    h1 {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 12px;
    }
    h2 {
        color: #939393;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
        margin: 0;
    }
    p {
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        margin: 0;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
    button {
        padding: 7px 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        border-radius: 5px;
        border: 1.5px solid #E8EBEE;
    }
    button img {
        width: 20px;
        height: 20px;
    }
    .calculator {
        background: #14A105;
        color: #FFF;
    }
    .calculator:hover {
        background: #108104;
    }
    .pdf {
        background: #384144;
        color: #FFF;
    }
    .pdf:hover {
        background: #000;
    }
    .note {
        background: #2984DE;
        color: #FFF;
    }
    .note:hover {
        background: #1F63A9;
    }
    .list {
        background: #F5F7FB;
        color: #384144;
    }
    .list:hover {
        background: #C4C6C9;
    }
    .stages {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 8px;
        border: 1.5px solid #E8EBEE;
    }
    h3 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;
    }
    .move {
        background: #FFF;
        color: #2984DE;
    }
    .move:hover {
        background: #F5F7FB;
    }
    .stage_line {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .stage {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
    .stage_info {
        padding: 0 5px;
        height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
    }
    .stage img {
        width: 16px;
        height: 16px;
    }
    .active {
        color: #2984DE
    }
    .inactive {
        color: #384144;
        font-weight: 400;
    }
    .bottom_line {
        width: 100%;
        height: 3px;
        border-radius: 7px;
        background: #2984DE;
    }
    .active_line {
        background: #E8EBEE;
    }
    .tabs {
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        align-items: center;
        gap: 5px;
        border-radius: 8px;
        background: #FFF;
    }
    .tab {
        height: 50px;
        padding: 0 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 5px;
        background: #FAFAFA;
        cursor: pointer;
    }
    .tab p {
        color: #384144;
        font-weight: 400;
    }
    .active_tab {
        background: #2984DE;
        box-shadow: 0px 4px 5.6px 0px rgba(0, 0, 0, 0.16);
    }
    .active_tab p {
        color: #FFF;
    }
    .slide-right-popup-enter-active, .slide-right-popup-leave-active {
        transition: all 0.3s ease;
    }
    .slide-right-popup-enter-from, .slide-right-popup-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
    .slide-right-popup-enter-to, .slide-right-popup-leave-from {
        opacity: 1;
        transform: translateX(0);
    }
</style>