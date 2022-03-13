import Transaction from '../models/transactionSchema.js'

export const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find()
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

export const addTransactions = async (req, res) => {
    const transaction = new Transaction(req.body)
    try {
        await transaction.save()
        return res.status(201).json({
            success: true,
            count: transaction.length,
            data: transaction
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

export const deleteTransactions = async (req, res) => {
    try {
        await Transaction.deleteOne({ _id: req.params.id })
        res.status(200).json('Deleted!')
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}