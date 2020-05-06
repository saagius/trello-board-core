import * as mongoose from 'mongoose';
import { Card } from '../interfaces/cards.interface';

const cardSchema: mongoose.Schema = new mongoose.Schema({
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    },
    name: { 
        type: String,
        required: true
    },
    description: { 
        type: String 
    },
    completed: {
        type: Boolean
    }
});

const cardModel = mongoose.model<Card & mongoose.Document>('Card', cardSchema);

export default cardModel;