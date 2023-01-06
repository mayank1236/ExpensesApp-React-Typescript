import { transactions} from '../types/transaction';

const AppReducer = (
    state: transactions, 
    action: {type: string; payload: any;}
) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                                    transaction => transaction.id !== action.payload
                                )
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload ,...state.transactions]
            }
        default:
            return state;
    }
    
}

export default AppReducer;