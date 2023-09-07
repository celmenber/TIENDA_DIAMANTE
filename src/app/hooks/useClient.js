import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addClientAction,
    setClientSearchTextAction,
    setSelectedClientIdAction,
} from "../action/ClientAction";

export const useClient = () => {
    const dispatch = useDispatch();
    // ACTIONS
    const createClient = (Data) => dispatch(addClientAction(Data));
    const setSelectedClientId = (Data) => dispatch(setSelectedClientIdAction(Data));
    const setClientSearchText = (Data) => dispatch(setClientSearchTextAction(Data));

    // SELECTORES
    const selectClient = (id) =>
        useSelector((state) =>
            state
        ).clients.clients.find((client) => client.id === id);
    const selectClients = useSelector((state) => state.clients.clients);
    const selectSelectedClient = useSelector((state) =>
        state.clients.clients.find(
            (client) => client.id === state.clients.selectedClientId
        )
    );
    const selectClientSearchText = useSelector((state) => state.clients.searchText);
    return {
        createClient,
        setClientSearchText,
        setSelectedClientId,
        selectClient,
        selectClients,
        selectSelectedClient,
        selectClientSearchText
    };
};
