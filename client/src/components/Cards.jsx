import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const Cards = ({ transactions }) => {
    const amount = transactions.map(transaction => transaction.amount)
    const earning = amount.filter(item => item > 0).reduce((x, item) => (x += item), 0).toFixed(2)
    const expense = amount.filter(item => item < 0).reduce((x, item) => (x -= item), 0).toFixed(2)

    return (
        <Box sx={{
            display: 'flex',
            flex: 1
        }}>
            <Card sx={{ width: '50%' }} variant="outlined">
                <CardContent>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>Earning</Typography>
                    <Typography sx={{
                        color: 'green',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>₹ {earning}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: '50%' }} variant="outlined">
                <CardContent>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>Expense</Typography>
                    <Typography sx={{
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>₹ {expense}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Cards