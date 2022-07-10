import { Outlet,Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import {ReactComponent as CrownLogo} from '../../assets/image/crown.svg';
import './navigation.styles.scss';
import { UserContext } from "../../contexts/user.context"; 
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const {currentUser}= useContext(UserContext)
  const {isCartOpen}=useContext(CartContext)
  // console.log(currentUser)

  // const signOutHandler=async()=>{
  //   const res = await signOutUser()
  //   setCurrentUser(null)
  //   console.log(res)
  // }

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
            <CrownLogo className='logo'/>
            
         </Link>
         <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>SHOP</Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)
              : (
                <Link className="nav-link" to='/authentication'>SIGN IN</Link>
              )
                
            }
            <CartIcon/>           
         </div>
         {isCartOpen && <CartDropdown/>}   {/*if {isCartOpen && <CartDropdown/>} both return true then its work*/}
        </div>
        <Outlet/>
      </Fragment>
    );
  };
  export default Navigation;
  