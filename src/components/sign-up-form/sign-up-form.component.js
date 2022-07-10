import Button from "../button/button.component";
import React, { useState } from "react";
import {
     createAuthUserWithEmailAndPassword,
      createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import'./sign-up-form.styles.scss';
//import { UserContext } from "../../contexts/user.context";

const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm = () => {
    const [formFields,setFormFields]=useState(defaultFormFields)
    const {displayName,email,password,confirmPassword}=formFields

    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }

    // const {setCurrentUser} = useContext(UserContext)

    // console.log('SignUp Form')

    console.log(formFields)
    
    const handleChange=(event)=>{
        const {name,value}=event.target
        setFormFields({...formFields,[name]:value})
        // console.log(name + " and"+value)
    }
    const handleSubmit=async(event)=>{
        event.preventDefault()
        if(password !== confirmPassword){
            alert('Password and confirm password do not match')
            return
        }
        try{
            const { user } =await createAuthUserWithEmailAndPassword(email, password)
            // setCurrentUser(user)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        }
        catch(error){
           if(error.code === 'auth/email-already-in-use'){
            alert('Can not create user, email already in use')
           }else{
            console.log(`user creation error occured ${error}`)
           }
        }
    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={handleSubmit} className="form">
                {/* <div className="form-group">
            <label>Display Name</label>
            <input className="form-control" onChange={handleChange} name='displayName' type="text"
            value={displayName} required></input>
            </div> */} 
            <FormInput 
            label='Display Name'
            type='text'
            required
            onChange={handleChange}
            name='displayName'
            value={displayName}/>

<FormInput 
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}/>

<FormInput 
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}/>

<FormInput 
            label='Confirm Password'
            type='ConfirmPassword'
            required
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}/>

        {/* //     <div className="form-group">
        //     <label>Email</label>
        //     <input className="form-control" onChange={handleChange} name='email' type="email"
        //     value={email} required></input></div>
        //     <div className="form-group">
        //     <label>Password</label>
        //     <input className="form-control" onChange={handleChange} name='password' type="password"
        //      value={password} required></input> </div>
        //     <div className="form-group">
        //         <label>Confirm Password</label>
        //     <input className="form-control" onChange={handleChange} name='confirmPassword' type="password"
        //     value={confirmPassword} required></input></div>
        //   <button type="submit">Sign Up</button>
        //     </form> */}
         <Button type='submit' buttonType='inverted' onChange={handleSubmit} Children='Sign Up'></Button>
        </form>
        </div>
    )
    }
export default SignUpForm;