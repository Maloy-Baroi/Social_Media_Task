import React from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import AllPost from './content/AllPost'
import Navbar from './content/Navbar'
import PostWriting from './content/PostWriting'

const Home = () => {
    const [token] = useCookies(['myToken']);
    const [valid_otp] = useCookies(['OTP']);

    useEffect(() => {
        return () => {
          String(token['myToken']) === 'undefined' ? <Navigate replace to="/login" /> : <Navigate replace to="/" />
        };
      }, []);

    return (
        <div className="home">
                <div>
                    <Navbar />
                    <div className='row'>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
                            <PostWriting />
                        </div>
                        <div className='col-md-4'></div>
                    </div>
                    <div>
                        <AllPost />
                    </div>
                </div>
        
        </div>
    )
}

export default Home