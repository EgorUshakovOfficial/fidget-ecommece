import {Box,Typography}from "@mui/material";
import ProductControls from "./home/ProductControls";

export default function CartItem({
    id,
    name,
    image,
    cost,
    quantity
}){
    return (
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            gap:"0.2em",
            paddingBlock: "0.5em",
            borderBottom:"1px solid rgba(0, 0, 0, 0.12)",

        }}>
            <Box
                component="img"
                src={image}
                sx={{
                    height: '100px'
                }}
                alt={name}
            />
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Typography variant="subtitle"  component="h3">
                    {name}
                </Typography>
                <ProductControls id={id} quantity={quantity} />
                <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                    <Typography variant="body1" component="p">
                        Cost
                    </Typography>
                    <Typography variant="body1" component="p">
                        {(cost*quantity).toFixed(2)}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}