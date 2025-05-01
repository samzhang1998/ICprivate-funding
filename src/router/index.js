import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout.vue'

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            { path: '', redirect: '/dashboard/overview' },
            { 
                path: 'dashboard/overview',
                component: () => import('@/view/dashboard/overview.vue'),
                meta: {
                    title: 'Overview',
                    breadcrumb: [
                        { label: 'Dashboard', path: 'overview' },
                    ]
                }
            },
            { 
                path: 'dashboard/repayment',
                component: () => import('@/view/dashboard/repayment.vue'),
                meta: {
                    title: 'Overview',
                    breadcrumb: [
                        { label: 'Dashboard', path: 'overview' },
                        { label: 'Repayment', path: 'repayment' }
                    ]
                }
            },
            // { 
            //     path: 'product/management',
            //     component: () => import('@/view/product/management.vue'),
            //     meta: {
            //         title: 'Product Management',
            //         breadcrumb: [
            //             { label: 'Product', path: 'management' },
            //             { label: 'Product Management', path: 'management' }
            //         ]
            //     }
            // },
            // { 
            //     path: 'product/overview',
            //     component: () => import('@/view/product/overview.vue'),
            //     meta: {
            //         title: 'Product Overview',
            //         breadcrumb: [
            //             { label: 'Product', path: 'management' },
            //             { label: 'Product Overview', path: 'overview' }
            //         ]
            //     }
            // },
            // {
            //     path: '/product/:productId',
            //     component: () => import('@/view/product/detail.vue'),
            //     meta: {
            //         title: 'Product',
            //         breadcrumb: [
            //             { label: 'Product', path: 'management' },
            //             { label: 'Product Detail', path: ':productId' }
            //         ]
            //     }
            // },
            { 
                path: 'application',
                component: () => import('@/view/application/applicationlist.vue'),
                meta: {
                    title: 'Application',
                    breadcrumb: [
                        { label: 'Application', path: 'application' }
                    ]
                }
            },
            { 
                path: 'application/:applicationId',
                component: () => import('@/view/application/application.vue'),
                meta: {
                    title: 'Application',
                    breadcrumb: [
                        { label: 'Application', path: 'application' }
                    ]
                }
            },
            { 
                path: 'broker',
                component: () => import('@/view/broker/brokerlist.vue'),
                meta: {
                    title: 'Broker',
                    breadcrumb: [
                        { label: 'Broker', path: 'broker' }
                    ]
                }
            },
            { 
                path: 'broker/:brokerId',
                component: () => import('@/view/broker/broker.vue'),
                meta: {
                    title: 'Broker',
                    breadcrumb: [
                        { label: 'Broker', path: 'broker' }
                    ]
                }
            },
            { 
                path: 'guarantor',
                component: () => import('@/view/guarantor/guarantorlist.vue'),
                meta: {
                    title: 'Guarantor',
                    breadcrumb: [
                        { label: 'Guarantor', path: 'guarantor' }
                    ]
                }
            },
            { 
                path: 'guarantor/:guarantorId',
                component: () => import('@/view/guarantor/guarantor.vue'),
                meta: {
                    title: 'Guarantor',
                    breadcrumb: [
                        { label: 'Guarantor', path: 'guarantor' }
                    ]
                }
            },
            { 
                path: 'borrower',
                component: () => import('@/view/borrower/borrowerlist.vue'),
                meta: {
                    title: 'Borrower',
                    breadcrumb: [
                        { label: 'Borrower', path: 'borrower' }
                    ]
                }
            },
            { 
                path: 'borrower/:borrowerId',
                component: () => import('@/view/borrower/borrower.vue'),
                meta: {
                    title: 'Borrower',
                    breadcrumb: [
                        { label: 'Borrower', path: 'borrower' }
                    ]
                }
            },
            { 
                path: 'bdm',
                component: () => import('@/view/bdm/bdmlist.vue'),
                meta: {
                    title: 'BDM',
                    breadcrumb: [
                        { label: 'BDM', path: 'bdm' }
                    ]
                }
            },
            { 
                path: 'bdm/:bdmId',
                component: () => import('@/view/bdm/bdm.vue'),
                meta: {
                    title: 'BDM',
                    breadcrumb: [
                        { label: 'BDM', path: 'bdm' }
                    ]
                }
            },
            { 
                path: 'branch',
                component: () => import('@/view/branch/branchlist.vue'),
                meta: {
                    title: 'Branch',
                    breadcrumb: [
                        { label: 'Branch', path: 'branch' }
                    ]
                }
            },
            { 
                path: 'branch/:branchId',
                component: () => import('@/view/branch/branch.vue'),
                meta: {
                    title: 'Branch',
                    breadcrumb: [
                        { label: 'Branch', path: 'branch' }
                    ]
                }
            },
            // { 
            //     path: 'user/list',
            //     component: () => import('@/view/user/userlist.vue'),
            //     meta: {
            //         title: 'User List',
            //         breadcrumb: [
            //             { label: 'User', path: 'list' },
            //             { label: 'User List', path: 'user/list' }
            //         ]
            //     }
            // },
            // { 
            //     path: 'user/role-management',
            //     component: () => import('@/view/user/department.vue'),
            //     meta: {
            //         title: 'Role Management',
            //         breadcrumb: [
            //             { label: 'User', path: 'list' },
            //             { label: 'Role Management', path: 'role-management' }
            //         ]
            //     }
            // },
            // { 
            //     path: 'user/notification-management',
            //     component: () => import('@/view/user/notification.vue'),
            //     meta: {
            //         title: 'Notification Management',
            //         breadcrumb: [
            //             { label: 'User', path: 'list' },
            //             { label: 'Notification Management', path: 'notification-management' }
            //         ]
            //     }
            // },
            { 
                path: 'setting',
                component: () => import('@/view/settings.vue'),
                meta: {
                    title: 'Setting',
                    breadcrumb: [
                        { label: 'Setting', path: 'setting' },
                    ]
                }
            },
            // { 
            //     path: 'inbox',
            //     component: () => import('@/view/inbox.vue'),
            //     meta: {
            //         title: 'Inbox',
            //         breadcrumb: [
            //             { label: 'Inbox', path: 'inbox' },
            //         ]
            //     }
            // },
            { 
                path: 'notification',
                component: () => import('@/view/notification.vue'),
                meta: {
                    title: 'Notification',
                    breadcrumb: [
                        { label: 'Notification', path: 'notification' },
                    ]
                }
            },
        ]
    },
    {
        path: '/login',
        component: () => import('@/view/login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router