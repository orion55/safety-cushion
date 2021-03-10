import * as ExpensesActions from './expenses.actions';
import { ExpensesElem } from '../../models/expenses';
import { getExpensesInitState } from './expenses.init';

export type ExpensesState = ExpensesElem[][];

export function expensesReducer(
    state = getExpensesInitState(),
    action: ExpensesActions.AllExpensesActions
): ExpensesState {
    switch (action.type) {
        case ExpensesActions.SetExpense.Name:
            return state.map((item, idx) => {
                if (idx === action.info.profileId) {
                    return item.map((elem: ExpensesElem) => {
                        if (elem.idx === action.info.expenseIdx) {
                            return { ...elem, name: action.info.name, value: action.info.value };
                        }
                        return elem;
                    });
                }
                return item;
            });
        case ExpensesActions.AddLastExpense.Name:
            return state.map((item, idx) => {
                if (idx === action.profileId) {
                    return [
                        ...item,
                        {
                            idx: item.length,
                            name: '',
                            nameDefault: '',
                            value: 0,
                        },
                    ];
                }
                return item;
            });
        default:
            return state;
    }
}
