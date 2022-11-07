import {useState} from 'react';

export default function useCustomerService(rows){
    const [userFilter, setUserFilter] = useState("");
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = rows.map((n) => n.name);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };

    // Handles select click
    const handleSelectClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected= [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Handles user filter change
    const handleUserFilterChange = e => {
      console.log(e.target.value)
      setUserFilter(e.target.value);
    }

    // Finds rows that match user filter
    const filterRows = (name, email, subscribed) => {
      name = name.toLowerCase();
      email = email.toLowerCase();
      subscribed = subscribed.toLowerCase();
      return (name.indexOf(userFilter) >= 0 || email.indexOf(userFilter) >= 0 || subscribed.indexOf(userFilter) >= 0)
    }

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return {
        userFilter,
        selected,
        rows,
        isSelected,
        page,
        rowsPerPage,
        handleSelectAllClick,
        handleSelectClick,
        handleChangePage,
        handleChangeRowsPerPage,
        handleUserFilterChange,
        filterRows,
        emptyRows
    }
}