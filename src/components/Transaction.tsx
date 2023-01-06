import React, { useContext } from 'react';
import { GlobalContext, GlobalContextInterface } from '../context/GlobalState';
import {transaction} from '../types/transaction';

export const Transaction = ({ transaction }: {transaction: transaction}) => {
    const { deleteTransaction } = useContext<GlobalContextInterface>(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} 
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button
                onClick={() => {deleteTransaction?.(transaction.id)}} 
                className="delete-btn"
            >x</button>
        </li>
    )
}