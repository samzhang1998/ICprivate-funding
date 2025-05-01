<template>
    <div class="dashboard">
        <div class="cards">
            <div class="card">
                <h1>Application</h1>
                <div class="num">12</div>
                <p>Total Applications</p>
                <button>View Application</button>
            </div>
            <div class="card">
                <h1>Active Loans</h1>
                <div class="num">12</div>
                <p>Active Loans</p>
                <button>View Active Loans</button>
            </div>
            <div class="card">
                <h1>Total Loan Value</h1>
                <div class="num">$24,000,000.00</div>
                <p>Total Loan Value</p>
                <button>View Loan Value</button>
            </div>
            <div class="card">
                <h1>Repayment</h1>
                <div class="num">$5,630,000.00</div>
                <p>On-Time Payment Rate</p>
                <button @click="toPage('repayment')">View Repayment</button>
            </div>
        </div>
        <div class="boxs">
            <div class="box">
                <div class="title">Recent Applications</div>
                <div class="content"></div>
            </div>
            <div class="box">
                <div class="title">Recent Notification</div>
                <div class="content"></div>
            </div>
            <div class="box">
                <div class="title">Quick Actions</div>
                <div class="buttons">
                    <button class="quick_act">
                        <img src="/src/assets/icons/quick_act_1.png" alt="act" />
                        New Application
                    </button>
                    <button class="quick_act1">
                        <img src="/src/assets/icons/quick_act_2.png" alt="act" />
                        New Borrower
                    </button>
                    <button class="quick_act1">
                        <img src="/src/assets/icons/quick_act_3.png" alt="act" />
                        Upload Document
                    </button>
                    <button class="quick_act1">
                        <img src="/src/assets/icons/quick_act_4.png" alt="act" />
                        Add Note
                    </button>
                </div>
            </div>
            <div class="box">
                <div class="title">Upcoming Repayment</div>
                <div class="content"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const toPage = (page) => {
        router.push(`/dashboard/${page}`)
    }
</script>

<style scoped>
    .dashboard {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
    .card {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        border-radius: 5px;
        border: 1px solid #E8EBEE;
        background: #FFF;
    }
    h1 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .num {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    p {
        color: #7A858E;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0 0 30px 0;
    }
    .card button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        border-radius: 5px;
        border: 1px solid #B3BFCA;
        background: #2984DE;
        color: #FFF;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .card button:hover {
        background: #1F63A9;
    }
    .boxs {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        align-items: start;        
    }
    .box {        
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        border: 1px solid #E8EBEE;
        background: #FFF;
    }
    .title {
        padding: 10px 20px;
        border-bottom: 1px solid #E8EBEE;
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .content {
        height: 300px;
    }
    .buttons {
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    .buttons img {
        width: 20px;
        height: 20px;
    }
    .quick_act {
        padding: 5px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 5px;
        border: 1px solid #B3BFCA;
        background: #2984DE;
        color: #FFF;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .quick_act:hover {
        background: #1F63A9;
    }
    .quick_act1 {
        padding: 5px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 5px;
        border: 1.5px solid #2984DE;
        background: #FFF;
        color: #2984DE;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .quick_act1:hover {
        background: #E8EBEE;
    }
</style>