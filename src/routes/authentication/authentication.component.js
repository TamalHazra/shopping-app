import React,{useEffect  } from "react";
import {getRedirectResult} from 'firebase/auth'
import {signInWithGooglePopup,createUserDocumentFromAuth, auth} from '../../utils/firebase/firebase.utils'
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';

const Authentication=()=>{
    useEffect(()=>{
        const asyncFetch=async()=>{
            const response = await getRedirectResult(auth)
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.auth)
                // console.log(response)
            }
        // console.log(response)
        }
        asyncFetch()
        // return()=>{
        //     console.log('unmount')
        // }
    },[])

    const logGoogleUser=async()=>{
        const response=await signInWithGooglePopup()
        // console.log(response);
        await createUserDocumentFromAuth(response)
    }
    // const logGoogleRedirectUser = async()=>{
    //     const {user} = await signInWithGoogleRedirect()
    //     console.log({user})
    //}
    return(
        <div className="authentication-container">
            {/* <h1>Sign In please</h1>
            <button onClick={ logoGoogleUser} className="btn btn-outline-primary">
                SignIn With Google Popup
            </button>
            <button onClick={ signInWithGoogleRedirect } className="btn btn-outline-default">
                SignIn With Google Redirect
            </button> */}
            <SignInForm/>
            <SignUpForm/>
        </div>


    )
}
export default Authentication;