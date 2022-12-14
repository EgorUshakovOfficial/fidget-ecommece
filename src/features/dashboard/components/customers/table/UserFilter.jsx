import {useContext} from 'react';
import {Paper, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {CustomerContext} from '../../../context/CustomerContext';

export default function UserFilter() {
  const {userFilter, handleUserFilterChange} = useContext(CustomerContext);

  return (
    <Paper
        component="form"
        elevation={userFilter ? 2 : 0}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
          paddingBlock:"0.4em",
          border:"1px solid lightgray"
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search customer"
        inputProps={{
          onChange: handleUserFilterChange,
          value:userFilter,
        }}
      />
        <SearchIcon />
    </Paper>
  );
}
