import {useState, useEffect, useContext} from 'react';
import {StateContext} from '../../../context/StateContext';
import {readOrders} from '../services/readOrders';
import { readUsers } from '../services/readUsers';

export default function useDashboardServices(){
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);

    // Loading state
    const {setLoading} = useContext(StateContext);

    // Populates data analytics, customers and orders
    useEffect(() => {
        (async () => {
            // Changes state of the application to loading
            setLoading(true);

            // Retrieves all orders from the database
            try{
                // Retrieves all orders from the database
                let orderData = await readOrders();
                setOrders([...orderData]);

                // Retrieves all customers from the database
                let userData = await readUsers();
                console.log(userData);
                setCustomers([...userData]);
            }

            catch(err){
                console.log(err);
            }

            finally{
                setLoading(false);
            }
        })();


    }, []);

    return {
        customers,
        setCustomers,
        orders,
        setOrders
    }

}