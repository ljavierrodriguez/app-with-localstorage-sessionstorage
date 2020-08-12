import React, {useEffect, useContext} from 'react';
import { Context } from './../store/appContext';
import { useHistory } from "react-router-dom";

const Settings = props => {
    const {store, actions} = useContext(Context);
    const history = useHistory();

    useEffect(() => {
        if(!store.isAuth) history.push("/login");
        if(!!store.currentUser && store.currentUser.user.role.name !== "Admin") history.push("/");
        
    }, [])

    return (
        <h1>Settings</h1>
    )
}

export default Settings;