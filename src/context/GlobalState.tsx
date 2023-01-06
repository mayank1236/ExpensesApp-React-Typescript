import React, { createContext, useReducer } from 'react';
import { transaction, transactions } from '../types/transaction';
import AppReducer from './AppReducer';

export interface GlobalContextInterface {
    transactions: transaction[];
    deleteTransaction?: (id: number) => void;
    addTransaction?: (transaction: transaction) => void;
}
type childEle = {
    children: JSX.Element[];
};
//Initial state
const initialState = {
    transactions: []
}

//Create context
export const GlobalContext = createContext<GlobalContextInterface>(initialState);

export const GlobalProvider = ({ children }: childEle) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id: number) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction: transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction, 
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}