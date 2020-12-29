import React from 'react'
import "./Login.css"
import db, { auth, provider } from "./firebase"
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'


function Login() {

    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result)
                if (result.additionalUserInfo.isNewUser) {
                    db.collection('contacts').add(
                        {
                            username: result.user.displayName,
                            profilePic: result.user.photoURL
                        }
                    )
                }
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://classicrock995.com/wp-content/uploads/2020/11/Facebook-logo.png" alt="" />
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="" />
            </div>
            <button type="submit" onClick={signIn}>SIGN IN</button>
        </div>
    )
}

export default Login
