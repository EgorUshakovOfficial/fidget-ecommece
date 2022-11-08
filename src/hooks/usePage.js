import {useState} from 'react';

export default function usePage(){
    const [page, setPage] = useState('home');

    // Handles navigation page click
    const handlePageClick = e => {
        let page = e.currentTarget.getAttribute('value').toLowerCase();
        console.log(page)
        setPage(page);
    }

    return {
        page,
        handlePageClick
    }
}