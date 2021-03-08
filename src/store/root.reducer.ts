import { combineReducers } from 'redux';
import { profilesReducer, ProfilesState } from './profiles/profiles.reducer';
import { expensesReducer, ExpensesState } from './expenses/expenses.reducer';

export interface RootState {
    profiles: ProfilesState;
    expenses: ExpensesState;
}

export const rootReducer = combineReducers<RootState>({
    profiles: profilesReducer,
    expenses: expensesReducer,
});
