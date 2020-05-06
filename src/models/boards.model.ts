import * as mongoose from 'mongoose';
import {
    Board,
    Visibility
} from '../interfaces/boards.interface';

const boardSchema: mongoose.Schema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    description: { 
        type: String 
    },
    background: { 
        type: String 
    },
    visibility: { 
        type: String, 
        enum : Object.values(Visibility), 
        default: 'private' 
    },
    lists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'List'
        }
    ]
});

const boardModel = mongoose.model<Board & mongoose.Document>('Board', boardSchema);

export default boardModel;