import {useState} from 'react';

export default function useCustomerService(rows){
    const [anchorOptions, setAnchorOptions] = useState(null);
    const [userFilter, setUserFilter] = useState("");
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const open = Boolean(anchorOptions);

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

    const isSelected = (name) => selected.indexOf(name) !== -1;

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

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return {
        open,
        anchorOptions,
        userFilter,
        selected,
        rows,
        isSelected,
        page,
        rowsPerPage,
        handleOptionsClick,
        handleOptionsClose,
        handleSelectAllClick,
        handleSelectClick,
        handleChangePage,
        handleChangeRowsPerPage,
        handleUserFilterChange,
        filterRows,
        emptyRows,
    }
}