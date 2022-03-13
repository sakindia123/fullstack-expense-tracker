import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Balance from './components/Balance';
import Cards from './components/Cards';
import AddTransaction from './components/AddTransaction';
import Transactions from './components/Transactions';
import { getAllTransactions, deleteTransaction, createNewTransaction } from './api/Api';

function App() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getAllData()
    }, [])

    const handleDelete = async (id) => {
        await deleteTransaction(id)
        getAllData()
    }

    const addTransactions = async (transactions) => {
        await createNewTransaction(transactions)
        getAllData()
    }

    const getAllData = async () => {
        let data = await getAllTransactions()
        setTransactions(data.data)
    }

    return (
        <div className="app">
            <Typography sx={{
                fontSize: 35,
                marginTop: 2,
                marginBottom: 3
            }} variant='h3'>EXPENSE TRACKER</Typography>
            <Box sx={{
                background: 'white',
                width: '60%',
                borderRadius: 10,
                paddingBottom: 5
            }}>
                <Balance transactions={transactions} />
                <Cards transactions={transactions} />
                <AddTransaction addTransactions={addTransactions} />
                <Transactions transactions={transactions} handleDelete={handleDelete} />
            </Box>
        </div >
    );
}

export default App;