import { ListItem, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const Transaction = ({ transaction, handleDelete }) => {

    const colour = transaction.amount >= 0 ? '#0FC288' : '#C93B3B'
    const sign = transaction.amount >= 0 ? '₹' : '-₹'
    const amt = sign + Math.abs(transaction.amount).toFixed(2)

    return (
        <ListItem sx={{
            display: 'flex',
            textAlign: 'center',
            marginTop: 1,
            background: `${colour}`
        }}>
            <ListItemText>{transaction.text}</ListItemText>
            <ListItemText>{amt}</ListItemText>
            <DeleteIcon sx={{ cursor: 'pointer' }} onClick={() => handleDelete(transaction._id)} />
        </ListItem>
    )
}

export default Transaction