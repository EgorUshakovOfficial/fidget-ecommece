import {useContext} from 'react';
import { ProductContext } from '../../../context/ProductContext';
import {Box, Button} from '@mui/material';
import {FilterList, ArrowDropUp, ArrowDropDown} from '@mui/icons-material';

export default function ProductFilter(){
    const {open, handleSortByClick} = useContext(ProductContext);
    return (
        <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"flex-end",
            marginTop:"0.8em"
        }}>
            <Button variant="secondary" size="medium" sx={{marginRight:"0.5em"}} endIcon={<FilterList />}>
                Filter
            </Button>
            <Button
                variant="secondary"
                size="medium"
                id="sortby-filter-button"
                aria-haspopup="true"
                aria-controls={open ? 'sortby-filter-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleSortByClick}
                endIcon={open ? <ArrowDropUp /> : <ArrowDropDown />}
             >
                Sort by
            </Button>
        </Box>
    )
}