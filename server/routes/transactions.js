import express from "express";
import { getTransactions, addTransactions, deleteTransactions } from "../controllers/transaction_controller.js";
const router = express.Router()

router.route('/').get(getTransactions)
router.route('/').post(addTransactions)
router.route('/:id').delete(deleteTransactions)

export default router