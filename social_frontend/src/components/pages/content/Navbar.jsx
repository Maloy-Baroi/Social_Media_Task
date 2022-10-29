import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import APIService from '../../APIService'
import { useCookies } from 'react-cookie'


const Navbar = () => {
    let navigate = useNavigate()
    const [token, setToken, removeToken] = useCookies(['myToken'])
    const [valid_otp, setValidOTP, removeValidOTP] = useCookies(["OTP"])

    const logoutSubmitted = () => {
        APIService.LogoutUser(token['myToken'])
            .then(resp => {
                alert("You have been logged out")
            })
            .catch(err => console.log(err))
        removeToken(['myToken'])
        removeValidOTP(['OTP'])
        // setToken("myToken", "undefined")
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">PostBin</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">My Post</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                        <li className="nav-item">
                            <button className='btn btn-danger' onClick={logoutSubmitted}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
