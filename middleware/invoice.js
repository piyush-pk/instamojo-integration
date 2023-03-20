import Invoice from './../model/invoice.js';
import { mongoose } from 'mongoose';


export const getInvoiceById = (req, res, next) => {
    try{
        const id = req.params["id"];
        if(id) {
            Invoice.findById(id)
            .then((result)=>{
                req.invoice = result;
                next();
            })
            .catch((err)=>res.status(400).json({err: 'Something went wrong!!!'}))
        }
    } catch{
        return res.status(400).json({err: 'Please Enter Correct'});
    }
}