import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import OnePost from './OnePost'

const AllPost = () => {
    const [posts, setPosts] = useState([]);
    const [token] = useCookies(['myToken'])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/home-post-api/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token['myToken']
            }
        })
            .then(resp => resp.json())
            .then(resp => {
                setPosts(resp)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <OnePost posts={posts} />   
                </div>
            </div>
        </div>
    )
}

export default AllPost
