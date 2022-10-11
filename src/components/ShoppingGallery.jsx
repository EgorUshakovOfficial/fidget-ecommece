import { Container, Grid, Paper} from "@mui/material"
import ShoppingItem from "./ShoppingItem"
import redFidgetSpinner from '../assets/images/fidget-spinner-red.jpg'
export default function ShoppingCart(){
    return (
       <Container maxWidth="lg" style={{marginTop:"calc(72px + 0.5em)"}}>
        <Grid
            style={{rowGap: "1em"}}
            container 
            justifyContent="space-between"
        >
            <Grid xs={12} sm={5.8} md={3.8}>
                <ShoppingItem 
                    productName={"Blue Fidget Spinner"}
                    productImage={redFidgetSpinner} 
                    productDescription="Red fideget spinner"
                    productCost="$5"
                /> 
            </Grid>
            <Grid xs={12} sm={5.8} md={3.8}>
                <ShoppingItem 
                    productName={"Blue Fidget Spinner"}
                    productImage={redFidgetSpinner} 
                    productDescription="Red fideget spinner"
                    productCost="$5"
                /> 
            </Grid>
            <Grid xs={12} sm={5.8} md={3.8}>
                <ShoppingItem 
                    productName={"Blue Fidget Spinner"}
                    productImage={redFidgetSpinner} 
                    productDescription="Red fideget spinner"
                    productCost="$5"
                /> 
            </Grid>
            <Grid xs={12} sm={5.8} md={3.8}>
                <ShoppingItem 
                    productName={"Blue Fidget Spinner"}
                    productImage={redFidgetSpinner} 
                    productDescription="Red fideget spinner"
                    productCost="$5"
                /> 
            </Grid>
            <Grid xs={12} sm={5.8} md={3.8}>
                <ShoppingItem 
                    productName={"Blue Fidget Spinner"}
                    productImage={redFidgetSpinner} 
                    productDescription="Red fideget spinner"
                    productCost="$5"
                /> 
            </Grid>
            <Grid xs={12} sm={5.8} md={3.8}>
                <ShoppingItem 
                    productName={"Blue Fidget Spinner"}
                    productImage={redFidgetSpinner} 
                    productDescription="Red fideget spinner"
                    productCost="$5"
                /> 
            </Grid>
        </Grid>
       </Container>
    )
}