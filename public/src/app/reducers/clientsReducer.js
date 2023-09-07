import TYPES from "../type/ClientType"

const initialState = {
    clients: [
        /*{
            name: "Cliente Nulo"
        },*/
        {
            id: "000",
            name: "Cliente Test 1",
            avatar: "",
            points: 0,
            affiliatorId: "111",
            phoneNumber: "3001001010",
            email: "test@test.com",
            cc: "11188098965",
            status: "full",
            credit: 0,
        },
        {
            id: "111",
            name: "Cliente Test 2",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wG7NNfonRFa3EaaV0Nt0RkvBi4kQqwgcwg&usqp=CAU",
            points: 2,
            affiliatorId: "",
            phoneNumber: "3002002020",
            email: "test2@test.com",
            cc: "555244429021",
            status: "full",
            credit: 0,
        },
        {
            id: "222",
            name: "Cliente Test 3",
            avatar: "",
            points: 0,
            affiliatorId: "111",
            phoneNumber: "3003003030",
            email: "test3@test.com",
            cc: "1118805275",
            status: "full",
            credit: 0,
        }
    ],
    searchText: "",
    selectedClientId: ""
}

export const ClientReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_CLIENT:
            return {
                ...state,
                clients: [...state.clients, { ...action.payload, id: `${state.clients.length + 1}` }]
            }
        case TYPES.GET_CLIENTS:
            return { ...state }
        case TYPES.SET_SELECTED_CLIENT_ID:
            return {
                ...state,
                selectedClientId: action.payload
            }
        case TYPES.SET_CLIENTS_SEARCHTEXT:
            return {
                ...state,
                searchText: action.payload
            }
        default: return { ...state };
    }
}