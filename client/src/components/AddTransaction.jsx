import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddTransaction = ({ addTransactions }) => {
    const [item, setItem] = useState('');
    const [amount, setAmount] = useState('');

    const handleTransaction = () => {
        const transaction = {
            text: item,
            amount: Number(amount)
        }
        addTransactions(transaction);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Typography sx={{ textAlign: 'center', marginTop: 2 }} variant="h5">New Transaction</Typography>
            <TextField sx={{ width: '70%', marginTop: 3 }} value={item} label="Enter Expense" onChange={(e) => setItem(e.target.value)} />
            <TextField sx={{ width: '70%', marginTop: 2 }} value={amount} label="Enter Amount" onChange={(e) => setAmount(e.target.value)} />
            <Button variant="contained" onClick={handleTransaction} sx={{
                width: '50%',
                height: 50,
                marginTop: 3
            }}>Add Transaction</Button>
        </Box>
    )
}

export default AddTransaction