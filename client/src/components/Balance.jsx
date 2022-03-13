import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Balance = ({ transactions }) => {
    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2)
    return (
        <Box>
            <Typography sx={{
                fontSize: 25,
                padding: 1,
                margin: 1,
                textAlign: 'center'
            }}>Balance : ₹{total}</Typography>
        </Box>
    )
}

export default Balance