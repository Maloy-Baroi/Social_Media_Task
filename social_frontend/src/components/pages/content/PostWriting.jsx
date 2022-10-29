import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import Swal from 'sweetalert2'

const PostWriting = () => {
    const [myPost, setMyPost] = useState("")
    const [token, setToken] = useCookies(['myToken'])

    const postSubmission = e => {
        e.preventDefault()
        console.log(myPost);
        if (myPost != "" || myPost!= " ") {
            fetch(`http://127.0.0.1:8000/add-new-post-api/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token['myToken']
            },
            body: JSON.stringify({
                'post_text': myPost
            })
        }).then(resp => resp.json())
            .then(resp => {
                if(resp['id'])
                {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your post has been saved',
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                }
            })
        }
        setMyPost(" ")
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <form method="post" role="form" onSubmit={postSubmission}>
                        <div className="form-group">
                            <textarea className="form-control" name="content" rows={10} onChange={e => setMyPost(e.target.value)} value={myPost}></textarea>
                        </div>
                        <div className="form-group mt-2">
                            <input type="submit" name="Submit" value="Publish" className="btn btn-primary form-control" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostWriting
