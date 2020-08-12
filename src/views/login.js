import React, {useEffect, useContext} from 'react';
import { Context } from './../store/appContext';
import { useHistory } from "react-router-dom";

const Login = props => {
    const {store, actions} = useContext(Context)
    const history = useHistory();

    useEffect(() => {
        if(store.isAuth) history.push("/");

        
    }, [])
    return (
        <>
        <h1>Login</h1>
        {
            !!store.error && (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> {store.error}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
            )
        }
        <form onSubmit={e => actions.getLogin(e, history)}>
            <input className="form-control" type="email" name="username"  placeholder="Username" onChange={actions.handleChange} defaultValue={store.username} />
            <input className="form-control" type="password" name="password" placeholder="Password" onChange={actions.handleChange} defaultValue={store.password} />
            <button className="btn btn-primary btn-block"><i className="fa fa-sign-in-alt"></i> Login</button>  
        </form>
        </>
    )
}

export default Login;