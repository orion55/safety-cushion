import { ExpensesState } from './expenses.reducer';
import { profilesIds } from '../profiles/profiles.init';

const titles: string[] = ['Еда', 'Квартира', 'Транспорт', 'Одежда и обувь', 'Медицина', 'Связь', 'Товары для дома'];

export const getExpensesInitState = (): ExpensesState => {
    return profilesIds.map(() => {
        return titles.map((title, idx) => {
            return {
                idx,
                name: '',
                nameDefault: title,
                value: 0,
            };
        });
    });
};
