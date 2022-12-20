import {useState, useContext} from 'react';
import { deleteUsers } from '../../services/customers/deleteUsers';
import { deleteUser } from '../../services/customers/deleteUser';
import { StateContext } from '../../../../context/StateContext';
import {DashboardContext} from '../../context/DashboardContext';
import {createShippingAddress} from '../../../../utils/createShippingAddress';

export default function useCustomerService(){
    // Loading
    const {setLoading} = useContext(StateContext);

    // Customers
    const {setCustomers, customers} = useContext(DashboardContext);

    // State
    const [anchorOptions, setAnchorOptions] = useState(null);
    const [userFilter, setUserFilter] = useState("");
    const [usersSelected, setUsersSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openNewUserForm, setOpenNewUserForm] = useState(false);
    const [userSelected, setUserSelected] = useState({id:"", action:""});
    const [error, setError] = useState('');

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
    const handleOptionsClick = (event, userId) => {
      // Prevents select click propagation
      event.stopPropagation();

      // Anchors menu options to the clicked element
      setAnchorOptions(event.currentTarget);

      // Specifies which user is selected
      setUserSelected({id:userId, action:"selected"});
    }

    // Edits row of the specified user
    const handleEditUserOnClick = event => {
      // Prevents other events from executing
      event.stopPropagation();

      // Specifies which user will be edited
      setUserSelected(state => Object.assign({}, state, {action:"edit"}));
    }

    // Handles options close
    const handleOptionsClose = e => {
      e.stopPropagation();

      // Resets selected user and anchor options
      setUserSelected({id:"", action:""});
      setAnchorOptions(null);
    }

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
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

    // Deletes multiple specified users on click
    const deleteUsersOnClick = () => {
      // Changes loading state of the application
      // from not loading to loading
      setLoading(true);

      // Removes selected users from the database
      // and updates table
      deleteUsers(usersSelected)
      .then(response => {
        setCustomers(state => {
          return state.filter(customer => {
            let index = usersSelected.findIndex(userId => userId === customer._id);
            return (index === -1);
          })
        })
      })
      .catch(err => console.log(err))
      .finally(() => {
        setUsersSelected([]);
        setLoading(false)
      });
    };

    const deleteUserOnClick = (event, userId) => {
      // Prevents other events from executing
      event.stopPropagation();

      // Change loading state of the application
      // from not loading to loading
      setLoading(true);

      // Deletes user from the database
      // and removes it from the table
      deleteUser(userId)
      .then(() => setCustomers(
        state => state.filter(
          customer => customer._id !== userId
        )
      ))
      .catch(err => setError(err))
      .finally(() => {
        setUserSelected({id:"", action:""})
        setLoading(false);
      });
    }

    return {
        anchorOptions,
        userFilter,
        usersSelected,
        isSelected,
        totalCustomers,
        numSelectedCustomers,
        page,
        rowsPerPage,
        openNewUserForm,
        userSelected,
        error,
        setUserSelected,
        setOpenNewUserForm,
        handleOptionsClick,
        handleEditUserOnClick,
        handleOptionsClose,
        handleSelectAllClick,
        handleSelectClick,
        handleChangePage,
        handleChangeRowsPerPage,
        handleUserFilterChange,
        filterRows,
        deleteUsersOnClick,
        deleteUserOnClick
    };
}