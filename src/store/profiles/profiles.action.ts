import { Action } from 'redux';

export class SetProfileId implements Action {
    static readonly Name = '[Profiles] Set selected profile id';
    readonly type = SetProfileId.Name;
    constructor(public idx: number) {}
}

export type AllProfilesActions = SetProfileId;
