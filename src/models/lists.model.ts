import * as mongoose from 'mongoose';
import { List } from '../interfaces/lists.interface';

const listSchema: mongoose.Schema = new mongoose.Schema({
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
    },
    name: { 
        type: String,
        required: true
    },
    description: { 
        type: String 
    },
    cards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card'
        }
    ]
});

const listModel = mongoose.model<List & mongoose.Document>('List', listSchema);

export default listModel;