import React from 'react'
import './OnePost.css'

import { useCookies } from 'react-cookie'

const Post = (props) => {
    const [token, setToken] = useCookies(['myToken'])

    const onLikeMethod = post_id  => {
        fetch('http://127.0.0.1:8000/like-post-api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token['myToken']
            },
            body: JSON.stringify({
                post: post_id
            })
        })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
        <div className='row'>
            <div className='col-md-2'>

            </div>
            <div className='col-md-6'>
            {props.posts.map(thisPost => {
                return (
                    <div className="col-md-7 social-container" key={thisPost.id}>
                    <div className="left">
                        <div className="pic">
                            <h1>{thisPost.get_author_name[0]}</h1>
                        </div>
                    </div>
    
                    <div className="right">
                        <div className="top-wrapper">
                            <h3 className="handle">@{thisPost.get_author_name}</h3>
                        </div>
    
                        <div className="mid-wrapper">
                            <p>
                                {thisPost.post_text}
                            </p>
                        </div>
                        <div className='bottom-wrapper'>
                            <div className='like button'>
                                <button className="btn btn-success">
                                    Like ({thisPost.get_total_Likes})
                                </button>
                            </div>
                            <div className='comment button'>Comment</div>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
            <div className='col-md-3'>
            </div>
        </div>
        </div>
    )
}

export default Post
