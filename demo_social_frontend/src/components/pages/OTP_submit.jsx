import React from 'react'
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const OTP_submit = () => {
    const [submittedOTP, setSubmittedOTP] = useState("")
    const [token] = useCookies(['myToken'])
    const [valid_otp, setValidOTP] = useCookies(["OTP"])

    const SubmitOTP = e => {
        e.preventDefault()
        fetch('http://127.0.0.1:8000/authentication/otp-checker/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token['myToken']
            },
            body: JSON.stringify({
                'otp': submittedOTP
            })
        })
            .then(resp => resp.json())
            .then(resp => {
                setValidOTP("OTP", resp['Success'])
                if (resp['Success']) {
                    <Navigate replace to="/" />
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        String(token['myToken']) === 'undefined' ? <Navigate replace to="/login" /> : <Navigate replace to="/submit-otp" />
    }, [token])

    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                </div>
                <div className='col-md-4'>
                    <form method='post' onSubmit={SubmitOTP}>
                        <label htmlFor="inputPassword5" className="form-label">Password</label>
                        <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" value={submittedOTP} onChange={e => {
                            setSubmittedOTP(e.target.value)
                        }} />
                            <div id="passwordHelpBlock" className="form-text">
                            Your OTP must be 8-20 characters long, contain letters and numbers, and must not contain spaces or emoji.
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-success' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='col-md-4'>
                </div>
            </div>
        </div>
    )
}

export default OTP_submit
