import sendRequest from "@/server/sendRequest";

export function applications(params) {
    return sendRequest({
        url: "/api/applications/applications/enhanced_list/",
        method: "get",
        params: params,
    });
}
export function addApplications(params) {
    return sendRequest({
        url: "/api/applications/create-with-cascade/",
        method: "post",
        data: params,
    });
}
export function application(params) {
    return sendRequest({
        url: `/api/applications/applications/${params}/`,
        method: "get",
    });
}
export function calculator(params) {
    return sendRequest({
        url: `/api/applications/manual-funding-calculator/`,
        method: "post",
        data: params,
    });
}
export function notes() {
    return sendRequest({
        url: `/api/documents/notes/`,
        method: "get",
    });
}
export function addNote(params) {
    return sendRequest({
        url: `/api/documents/notes/`,
        method: "post",
        data: params,
    });
}
export function updateStage(id, params) {
    return sendRequest({
        url: `/api/applications/${id}/stage/`,
        method: "put",
        data: params,
    });
}

/**
 * Creates an application with all related entities (borrowers, guarantors, etc.)
 * @param {Object} params - The application data
 * @returns {Promise} - Promise that resolves to [error, data]
 */
export function createApplicationWithCascade(params) {
    return sendRequest({
        url: "/api/applications/create-with-cascade/",
        method: "post",
        data: params,
    }).catch(error => {
        // Handle any unexpected errors
        console.error("Error creating application with cascade:", error);
        
        const formattedErrors = error.response?.data?.errors || { general: "An unexpected error occurred" };
            
        return [
            { 
                status: error.response?.status || 500,
                detail: error.response?.data?.detail || "Server error",
                errors: formattedErrors
            }, 
            null
        ];
    });
}
export function deleteApplication(params) {
  return sendRequest({
    url: `/api/applications/applications/${params}`,
    method: 'delete',
  })
}

export const applicationApi = {
    applications,
    application,
    addApplications,
    calculator,
    notes,
    addNote,
    updateStage,
    createApplicationWithCascade,
    deleteApplication
}