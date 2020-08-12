import React, {useEffect, useContext} from 'react';
import { Context } from './../store/appContext';
import { useHistory } from "react-router-dom";

const Home = props => {
    const {store, actions} = useContext(Context);
    const history = useHistory();

    useEffect(() => {
        if(!store.isAuth) history.push("/login");
        
    }, [])

    return (
        <h1>Home</h1>
    )
}

export default Home;