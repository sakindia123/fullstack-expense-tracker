import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a number']
    }
})

const postModel = mongoose.model('post', transactionSchema);

export default postModel;