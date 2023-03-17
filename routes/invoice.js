import express from "express";
import { create_invoice, delete_invoice, get_invoices, update_invoice } from "../controller/invoice.js";

export const router = express.Router();

router.post("/create-invoice", create_invoice);
router.get("/get-invoices", get_invoices);
router.put("/update-invoice", update_invoice);
router.post("/delete-invoice", delete_invoice);
