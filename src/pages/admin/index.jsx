import {useContext} from 'react';
import { StateContext } from '../../context/StateContext';
import {Navigate} from 'react-router-dom';

import LoginForm from "./LoginForm";


export default function Admin(){
    return (
        <div id="admin" style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"100vh"
        }}>
            <LoginForm />
        </div>
    )
}