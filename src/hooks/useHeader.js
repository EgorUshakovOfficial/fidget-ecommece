import {useState} from 'react';
export default function useHeader(){
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = e => {
      setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return {
        anchorElNav,
        handleOpenNavMenu,
        handleCloseNavMenu,
    }

}