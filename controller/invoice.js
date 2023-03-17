import Invoice from "../model/invoice.js";
import STATUS from "../status.js";

export const create_invoice =  async (req, res) => {
    const {amount, item} = req.body;
    if(amount && item) {
        const invoice = new Invoice({amount, item, status: STATUS.UNPAID});
        const result = await invoice.save();
        if(result) {
            return res.status(201).json(result);
        }
        return res.status(500).json({err: "Something went wrong !!!"})
    }
    res.status(400).json({err: "Please fill out all the details."})
}

export const get_invoices = async (req, res) => {
    const invoices = await Invoice.find();
    if(invoices) {
        return res.status(200).json(invoices);
    }
    res.status(400).json({err: 'Something went wrong !!!'})
}

export const update_invoice = (req, res) => {
    res.json('Update invoice')
}

export const delete_invoice = (req, res) => {
    res.json('delete invoice')
}