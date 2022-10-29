import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'

const LikesAPost = (props) => {
    const [token, setToken] = useCookies(['myToken'])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/like-post-api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token['myToken']
            },
            body: JSON.stringify({
                post: props.post_id
            })
        })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
            })
            .catch(error => console.log(error))
    }, [])
  return (
    <div>
        Like ({props.total_like_on})
    </div>
  )
}

export default LikesAPost
