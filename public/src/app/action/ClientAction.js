import TYPES from "../type/ClientType"

export const addClientAction = Data => ({ type: TYPES.ADD_CLIENT, payload: {
    avatar: "",
    points: 0,
    affiliatorId: null,
    phoneNumber: "",
    ...Data,
} });

export const eliminarClientAction = Data => ({ type: TYPES.DELETE_CLIENT, payload: Data });

export const setClientSearchTextAction = Data => ({ type: TYPES.SET_CLIENTS_SEARCHTEXT, payload: Data })

export const setSelectedClientIdAction = Data => ({ type: TYPES.SET_SELECTED_CLIENT_ID, payload: Data })



