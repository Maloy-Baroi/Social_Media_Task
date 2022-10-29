import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import APIService from '../APIService'

function Logout() {
    const [token, setToken, removeToken] = useCookies(['myToken'])
    const navigate = useNavigate();

    // useEffect(() => {
    //     let user_token = token['myToken'];
    //     String(user_token) === 'undefined' ? navigate('/') : navigate('/main');
    //   }, [token])


    return (
        <div>
            <span style={{
                "marginLeft": "5px",
            }} onClick={logoutSubmitted}>
                Logged out
            </span>
        </div>
    )
}

export default Logout;