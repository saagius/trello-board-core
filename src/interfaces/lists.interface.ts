import { Card } from './cards.interface';

export interface List {
    _id: string;
    board: string;
    name: string;
    description: string;
    cards: Card[];
}