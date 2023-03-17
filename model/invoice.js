import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;