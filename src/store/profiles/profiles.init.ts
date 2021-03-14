import { profile } from '../../models/profile';

export const profilesById: profile[] = [
    {
        id: 0,
        name: '',
        icon: 'user',
        selectedPeriod: 6,
    },
    {
        id: 1,
        name: 'XS',
        icon: 'compress-alt',
        selectedPeriod: 3,
    },
    {
        id: 2,
        name: 'M',
        icon: 'arrows-alt-h',
        selectedPeriod: 6,
    },
    {
        id: 3,
        name: 'XL',
        icon: 'expand-alt',
        selectedPeriod: 9,
    },
];

export const profilesIds: number[] = [0, 1, 2, 3];
