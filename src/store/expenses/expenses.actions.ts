import { Action } from 'redux';
import { ExpenseData } from '../../models/expenses';

export class SetExpense implements Action {
    static readonly Name = '[Expenses] Set Expense';
    readonly type = SetExpense.Name;
    constructor(public info: ExpenseData) {}
}

export class AddLastExpense implements Action {
    static readonly Name = '[Expenses] Add Last Expense';
    readonly type = AddLastExpense.Name;
    constructor(public profileId: number) {}
}

export type AllExpensesActions = SetExpense | AddLastExpense;
