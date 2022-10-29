import { useState } from "react";

export class APIService {
    static LoginUser(body){
        return fetch(`http://127.0.0.1:8000/authentication/login/token/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static LogoutUser(token) {
        return fetch(`http://127.0.0.1:8000/authentication/logout/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + {token}
            },
        }).then(resp => resp.json())
    }

    static RegisterUser(body_){
        return fetch(`http://127.0.0.1:8000/authentication/signup/`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                'full_name': body_['full_name'],
                'email': body_['email'],
                'password': body_['password1'],
                'password2': body_['password2'],
            })
        }).then(resp => resp.json())
    }
}

export default APIService;