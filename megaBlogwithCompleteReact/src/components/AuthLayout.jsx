import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Outlet, Route, BrowserRouter, Routes } from 'react-router-dom';
export default function AuthLayout({ children, authentication = true }) {

    const [loader, setLoader] = useState(true);
    const [auth, setAuth] = useState(false);
    const authStatus = useSelector(state => state.auth.status)
    const navigate = useNavigate();
    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        //let authValue = authStatus === true ? true : false
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {
            navigate('/login')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>

}
