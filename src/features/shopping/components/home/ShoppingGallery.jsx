import { Container, Grid} from "@mui/material"
import ShoppingItem from "./ShoppingItem"
import redFidgetSpinner from '../../../../assets/images/fidget-spinner-red.jpg'
import yellowFidgetSpinner from '../../../../assets/images/fidget-spinner-yellow.jpg';
import blueFidgetSpinner from '../../../../assets/images/fidget-spinner-blue.jpg';
import greenFidgetSpinner from '../../../../assets/images/fidget-spinner-green.jpg';
import blackFidgetSpinner from '../../../../assets/images/fidget-spinner-black.jpg';
import whiteFidgetSpinner from '../../../../assets/images/fidget-spinner-white.png';

// Make call from API endpoint to retrieve data...
const products = [
    {
        id:"1",
        name: "Red Fidget Spinner",
        image: redFidgetSpinner,
        description: "Red Fidget Spinner",
        cost: 5.99
    },
    {
        id:"2",
        name: "Blue Fidget Spinner",
        image: blueFidgetSpinner,
        description: "Blue Fidget Spinner",
        cost: 7.99
    },
    {
        id:"3",
        name: "Yellow Fidget Spinner",
        image: yellowFidgetSpinner,
        description: "Red Fidget Spinner",
        cost: 5.99
    },
    {
        id:"4",
        name: "Green Fidget Spinner",
        image: greenFidgetSpinner,
        description: "Green Fidget Spinner",
        cost: 4.99
    },
    {
        id:"5",
        name: "Black Fidget Spinner",
        image: blackFidgetSpinner,
        description: "Black Fidget Spinner",
        cost: 5.99
    },
    {
        id:"6",
        name: "White Fidget Spinner",
        image: whiteFidgetSpinner,
        description: "White Fidget Spinner",
        cost: 12.99
    },
]

export default function ShoppingCart(){
    return (
       <Container maxWidth="lg">
        <Grid
            style={{rowGap: "1em", padding:"45px"}}
            container
            justifyContent="space-between"
        >
            {products.map(product => (
                <Grid xs={12} sm={5.8} md={3.8}>
                    <ShoppingItem
                        productId={product.id}
                        productName={product.name}
                        productImage={product.image}
                        productDescription={product.description}
                        productCost={product.cost}
                        key={product.id}
                    />
                </Grid>
            ))}
        </Grid>
       </Container>
    )
}