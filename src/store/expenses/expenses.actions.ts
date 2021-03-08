import { Action } from 'redux';
import { ExpenseData } from '../../models/expenses';

export class SetExpense implements Action {
    static readonly Name = '[Expenses] Set Expense';
    readonly type = SetExpense.Name;
    constructor(public info: ExpenseData) {}
}

export type AllExpensesActions = SetExpense;
