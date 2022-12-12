import {useState} from 'react';
export default function useOrderRowEdit(){
    const [anchorOptions, setAnchorOptions] = useState(null);

    // Converts value of the anchor options to boolean
    const openAnchorOptions = Boolean(anchorOptions);

    // Handles anchor options on change
    const handleAnchorOptionsChange = e => setAnchorOptions(e.currentTarget);

    return {
        anchorOptions,
        openAnchorOptions,
        handleAnchorOptionsChange
    }
}