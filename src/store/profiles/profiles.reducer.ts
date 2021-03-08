import * as ProfilesActions from './profiles.action';
import { profile } from '../../models/profile';
import { profilesById, profilesIds } from './profiles.init';

export interface ProfilesState {
    profilesIds: number[];
    selectedProfileId: number;
    profilesById: profile[];
}

function getIninitialState(): ProfilesState {
    return {
        profilesIds: profilesIds,
        selectedProfileId: 0,
        profilesById: profilesById,
    };
}

export function profilesReducer(
    state = getIninitialState(),
    action: ProfilesActions.AllProfilesActions
): ProfilesState {
    switch (action.type) {
        case ProfilesActions.SetProfileId.Name:
            return {
                ...state,
                selectedProfileId: action.idx,
            };
        default:
            return state;
    }
}
