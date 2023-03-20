import Invoice from "../model/invoice.js";
import STATUS from "../status.js";

export const create_invoice = async (req, res) => {
  const { amount, item } = req.body;
  if (amount && item) {
    const invoice = new Invoice({ amount, item, status: STATUS.UNPAID });
    const result = await invoice.save();
    if (result) {
      return res.status(201).json(result);
    }
    return res.status(500).json({ err: "Something went wrong !!!" });
  }
  res.status(400).json({ err: "Please fill out all the details." });
};

export const get_invoices = async (req, res) => {
  const invoices = await Invoice.find();
  if (invoices) {
    return res.status(200).json(invoices);
  }
  res.status(400).json({ err: "Something went wrong !!!" });
};

export const update_invoice = (req, res) => {
    try{
        const id = req.params["id"];
        const {amount, item} = req.body;
        if(id && amount && item) {
            Invoice.findByIdAndUpdate(id, {amount, item}, {new: true})
            .then((result)=>{
                return res.status(200).json(result);
            })
            .catch((err)=>res.status(400).json({err: 'Something went wrong!!!'}))
        }
    } catch{
        return res.status(400).json({err: 'Please Enter Correct'});
    }
};

export const delete_invoice = (req, res) => {
    try{
        const id = req.params["id"];
        Invoice.findByIdAndDelete(id).then((result)=>{res.status(200).json({msg: 'Invoice deleted Successfully.'})})
        .catch(err=>res.json(err));
    } catch {

    }
};
