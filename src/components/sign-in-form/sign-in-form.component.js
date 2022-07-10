import Button from "../button/button.component";
import React, { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
// import { useContext, UserContext}from '../../contexts/user.context'

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    console.log('resetFormFields done')
    setFormFields(defaultFormFields);
  };

  console.log(formFields);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    // console.log(name + " and"+value)
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // if(password !== confirmPassword) {
    //   alert("Password and confirm password do not match");
    //   return;
    // }
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user)
      console.log('handleSubmit try block');
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert(`Incorrect password for ${email}`);
          break;
        case "auth/user-not-found":
          alert(`Incorrect username or email-Id`);
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <h1>Sign In with your email and password</h1>
      <form onSubmit={handleSubmit} className="form">
        {/* <div className="form-group">
            <label>Display Name</label>
            <input className="form-control" onChange={handleChange} name='displayName' type="text"
            value={displayName} required></input>
            </div> */}
        {/* <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        /> */}

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        {/* <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        /> */}

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
        <div className="buttons-container">
          <Button type="submit" Children='Sign In'></Button>
          <Button type='button' buttonType="google" onClick={signInWithGoogle} Children=
            'Google Sign In'>
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
