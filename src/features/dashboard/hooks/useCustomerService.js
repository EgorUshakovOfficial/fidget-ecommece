import {useState, useContext} from 'react';
import {DashboardContext} from '../context/DashboardContext';

export default function useCustomerService(){
    // Customers
    const {customers} = useContext(DashboardContext);

    const [anchorOptions, setAnchorOptions] = useState(null);
    const [userFilter, setUserFilter] = useState("");
    const [usersSelected, setUsersSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const open = Boolean(anchorOptions);

    // Total amount of customers
    const totalCustomers = customers.length;

    // Number of selected customers
    const numSelectedCustomers = usersSelected.length;

    // Selects all the customers in the table
    const handleSelectAllClick = () => {
      if (totalCustomers > 0 && totalCustomers !== numSelectedCustomers) {
        const newSelected = customers.map(n => n._id);
        setUsersSelected(newSelected);
        return;
      }
      setUsersSelected([]);
    };

    // Handles select click
    const handleSelectClick = (event, userId) => {
      let selectedIndex = usersSelected.indexOf(userId);

      // Updates array of selected customers
      setUsersSelected(state => {
        // Selected customer has not been already selected
        if (selectedIndex === -1){
          return [...state, userId]
        }

        // Selected customer has been already selected
        return [...state.slice(0, selectedIndex), ...state.slice(selectedIndex+1)];
      })

    };

    // Handles options click
    const handleOptionsClick = e => {
      // Prevents select click propagation
      e.stopPropagation();
      setAnchorOptions(e.currentTarget);
    }

    // Handles options close
    const handleOptionsClose = e => {
      e.stopPropagation();
      setAnchorOptions(null);
    }

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    // Checks if user has been selected
    const isSelected = userId => usersSelected.indexOf(userId) !== -1;

    // Handles user filter change
    const handleUserFilterChange = e => {
      setUserFilter(e.target.value);
    }

    // Finds rows that match user filter
    const filterRows = (name, email, subscribed) => {
      name = name.toLowerCase();
      email = email.toLowerCase();
      subscribed = subscribed.toLowerCase();

      // Lower case version of user filter
      let filter = userFilter.toLowerCase();

      return (name.indexOf(filter) >= 0 || email.indexOf(filter) >= 0 || subscribed.indexOf(filter) >= 0)
    }

    return {
        open,
        anchorOptions,
        userFilter,
        usersSelected,
        isSelected,
        totalCustomers,
        numSelectedCustomers,
        page,
        rowsPerPage,
        handleOptionsClick,
        handleOptionsClose,
        handleSelectAllClick,
        handleSelectClick,
        handleChangePage,
        handleChangeRowsPerPage,
        handleUserFilterChange,
        filterRows
    }
}