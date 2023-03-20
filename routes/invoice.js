import express from "express";
import { create_invoice, delete_invoice, get_invoices, update_invoice } from "../controller/invoice.js";
import { getInvoiceById } from "../middleware/invoice.js";

export const router = express.Router();

router.post("/create-invoice", create_invoice);
router.get("/get-invoices", get_invoices);
router.put("/update-invoice/:id", update_invoice);
router.delete("/delete-invoice/:id", delete_invoice);
