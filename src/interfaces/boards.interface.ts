import { List } from './lists.interface';

export enum Visibility {
    PRIVATE = 'private',
    TEAM = 'team',
    ORGANISATION = 'organisation',
    PUBLIC = 'public'
}

export interface Board {
    _id: string;
    name: string;
    description: string;
    background: string;
    visibility: Visibility,
    lists: List[]
}