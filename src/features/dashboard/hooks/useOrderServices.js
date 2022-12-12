import {useState, useContext} from 'react';
import { ROWS_PER_PAGE } from '../../../data/constants';
import {StateContext} from '../../../context/StateContext';
import {DashboardContext} from '../context/DashboardContext';
import { deleteOrders } from '../services/deleteOrders';

export default function useOrderServices(){
    // Loading
    const {setLoading} = useContext(StateContext);

    // Orders
    const {orders, setOrders} = useContext(DashboardContext);

    // Order states
    const [anchorOptions, setAnchorOptions] = useState(null);
    const [orderSelected, setOrderSelected] = useState({id:"", action:""});
    const [orderFilter, setOrderFilter] = useState('');
    const [ordersSelected, setOrdersSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE);

    // Total number of orders
    let numOrders = orders.length;

    // Number of orders selected
    let numOrdersSelected = ordersSelected.length;

    // Handles anchor options on click
    const handleOrderOptionsClick = (event, orderId) => {
        // Anchors current element clicked to anchor options
        setAnchorOptions(event.currentTarget);

        // Specifies order selected
        setOrderSelected({id:orderId, action:"selected"});
    }

    // Handles options menu on close
    const handleOrderOptionsClose = event => {
        event.stopPropagation();

        // Resets anchor options and order selected
        setAnchorOptions(null);
        setOrderSelected({id:"", action:""});
    }

    // Handles order filter on change
    const handleOrderFilterChange = e => setOrderFilter(e.target.value);

    // Selects all orders on click
    const handleSelectAllClick = () => {
        if (numOrders > 0 && numOrdersSelected !== numOrders) {
            let newOrdersSelected = orders.map(order => order._id);
            setOrdersSelected(newOrdersSelected);
            return;
        }
        setOrdersSelected([]);
    };

    // Selects an order in the table
    const handleSelectClick = (e, orderId) => {
        let selectedIndex = ordersSelected.indexOf(orderId);

        // Update state of the orders selected
        setOrdersSelected(state => {
            // Order selected is not already selected
            if (selectedIndex === -1){
                return [...state, orderId];
            }

            // Order is already selected, so unselect it
            return [...state.slice(0, selectedIndex), ...state.slice(selectedIndex+1)]
        });
    };


    // Handles page change
    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    }

    // Handles rows per page on change
    const handleChangeRowsPerPage = e => {
        setRowsPerPage(parseInt(e.target.value));
        setPage(0);
    }

    // Is row selected?
    const isSelected = orderId => ordersSelected.indexOf(orderId) !== -1;

    // Filters orders
    const filterOrders = (number, email, amount, date, status) => {
        number = number.toLowerCase();
        email = email.toLowerCase();
        date = date.toLowerCase();
        amount = amount.toString();
        status = status.toLowerCase();

        // Lower case version of the order filter
        let filter = orderFilter.toLowerCase();

        return (email.indexOf(filter) >= 0 || date.indexOf(filter) >= 0
            || number.indexOf(filter) >= 0 || amount.indexOf(filter) >= 0 ||
            status.indexOf(filter) >= 0);
    }

    // Deletes selected orders on click
    const deleteSelectedOrdersOnClick = () => {
        // Changes loading state of the application
        // from not loading to loading
        setLoading(true);

        // Deletes specified orders from the database
        deleteOrders(ordersSelected)
        .then(() => {
            setOrders(state => {
                return state.filter(order => {
                    let index = ordersSelected.findIndex(orderId => orderId === order._id);
                    return (index === -1);
                })
            })
        })
        .catch(err => console.log(err))
        .finally(() => {
            setOrdersSelected([]);
            setLoading(false);
        });
    }


    return {
        anchorOptions,
        orderSelected,
        orderFilter,
        ordersSelected,
        numOrders,
        numOrdersSelected,
        page,
        rowsPerPage,
        isSelected,
        filterOrders,
        handleOrderOptionsClick,
        handleOrderOptionsClose,
        handleSelectClick,
        handleSelectAllClick,
        handleChangePage,
        handleChangeRowsPerPage,
        handleOrderFilterChange,
        deleteSelectedOrdersOnClick
    }

}