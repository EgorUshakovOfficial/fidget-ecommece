import {useState} from 'react';
export default function useDeleteModal(){
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    // Opens delete modal on click
    const handleDeleteModalOpen= () => {
        setOpenDeleteModal(true);
    }

    // Closes delete modal on click
    const handleDeleteModalClose = () => {
        setOpenDeleteModal(false);
    }

    return {
        openDeleteModal,
        handleDeleteModalOpen,
        handleDeleteModalClose
    }
}