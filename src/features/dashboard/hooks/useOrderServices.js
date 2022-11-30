import {useState} from 'react';
import { ROWS_PER_PAGE } from '../../../data/constants';
export default function useOrderServices(orders){
    // Order states
    const [orderFilter, setOrderFilter] = useState('');
    const [ordersSelected, setOrdersSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE);

    // Total number of orders
    let numOrders = orders.length;

    // Number of orders selected
    let numOrdersSelected = ordersSelected.length;

    // Handles order filter on change
    const handleOrderFilterChange = e => {
        setOrderFilter(e.target.value);
    }

    // Selects all orders on click
    const handleSelectAllClick = () => {
        if (numOrders > 0 && numOrdersSelected !== numOrders) {
            let newOrdersSelected = orders.map(order => order.number);
            setOrdersSelected(newOrdersSelected);
            return;
        }
        setOrdersSelected([]);
    };

    // Selects an order in the table
    const handleSelectClick = (e, number) => {
        let selectedIndex = ordersSelected.indexOf(number);

        // Update state of the orders selected
        setOrdersSelected(state => {
            // Order selected is not already selected
            if (selectedIndex === -1){
                return [...state, number];
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
    const isSelected = number => ordersSelected.indexOf(number) !== -1;

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


    return {
        orderFilter,
        ordersSelected,
        numOrders,
        numOrdersSelected,
        page,
        rowsPerPage,
        isSelected,
        filterOrders,
        handleSelectClick,
        handleSelectAllClick,
        handleChangePage,
        handleChangeRowsPerPage,
        handleOrderFilterChange,
    }

}