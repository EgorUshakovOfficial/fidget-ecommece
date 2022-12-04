import {Fragment, useContext} from 'react';
import {OrderHeader, OrderProvider, OrderTable} from '../../features/dashboard/index';
import Loading from '../../components/Loading';
import { StateContext } from '../../context/StateContext';

export default function Products(){
    const {loading} = useContext(StateContext);
    return (
        <Fragment>
            {loading ?
                <Loading />
                :
                <OrderProvider>
                    <OrderHeader />
                    <OrderTable />
                </OrderProvider>
            }
        </Fragment>
    )
}