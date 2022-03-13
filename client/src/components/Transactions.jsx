import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, List } from '@mui/material';
import Transaction from './Transaction';

const Transactions = ({ transactions, handleDelete }) => {
    return (
        <Box >
            <Typography sx={{
                textAlign: 'center',
                marginTop: 3
            }} variant="h5">All Transactions</Typography>
            <Divider sx={{ marginTop: '10px' }} />
            <List sx={{ padding: 3 }}>
                {
                    transactions.map(transaction => {
                        return <Transaction key={transaction._id} transaction={transaction} handleDelete={handleDelete} />
                    })
                }
            </List>
        </Box>
    )
}

export default Transactions