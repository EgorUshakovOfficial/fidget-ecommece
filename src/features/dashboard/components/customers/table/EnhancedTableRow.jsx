import {useContext} from 'react';
import {TableRow, TableCell, Checkbox} from '@mui/material';
import TableRowEdit from './TableRowEdit';
import TableRowContent from './TableRowContent';
import {CustomerContext} from '../../../context/CustomerContext';


export default function EnhancedTableRow({customer}){
    const {handleSelectClick, isSelected, userSelected} = useContext(CustomerContext);

    return (
      <TableRow
        hover
        onClick={event => handleSelectClick(event, customer._id)}
        role="checkbox"
        selected={isSelected(customer._id)}
      >
        <TableCell padding="checkbox">
          <Checkbox color="primary" checked={isSelected(customer._id)} />
        </TableCell>
        {(customer._id === userSelected.id && userSelected.action==="edit") ?
         <TableRowEdit {...customer} /> : <TableRowContent {...customer} />}
      </TableRow>
    )
}
