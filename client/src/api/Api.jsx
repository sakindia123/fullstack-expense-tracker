import axios from 'axios'

export const getAllTransactions = async () => {
    try {
        let res = await axios.get('/api/transactions')
        return res.data
    } catch (err) {
        console.log('Fetch error:', err)
    }
}

export const createNewTransaction = async (transaction) => {
    try {
        return await axios.post('/api/transactions', transaction)
    } catch (err) {
        console.log('Create error:', err)
    }
}

export const deleteTransaction = async (id) => {
    try {
        await axios.delete(`/api/transactions/${id}`)
    } catch (err) {
        console.log('Delete error:', err)
    }
}