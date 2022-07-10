import { createContext,useEffect,useState } from "react";

const addCartItem =(cartItems,productToAdd)=>{
    //find if cart items contains a productToAdd
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id===productToAdd.id)
    //if productToAdd is found then inc thr qty and return a new array with modified cartItems/new cart items
    if(existingCartItem){
        return cartItems.map((cartItem)=>cartItem.id===productToAdd.id ?
        {...cartItem,quantity:cartItem.quantity+1}
        :
        cartItem)
    }
    return [...cartItems,{...productToAdd,quantity:1}] //when the cart is empty and you are adding
}
const removeCartItem=(cartItems,cartItemToRemove)=>{
    //find the cartItem that is to be removed i.e. existing item in the cart
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id===cartItemToRemove.id)
    //check if quantity is equal to 1, if it is then that item should be removed from the cart
    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id !==cartItemToRemove.id)
    }
    //if the quantity is greater than 1 then we return the cartItems with matching cart item and also
    return cartItems.map((cartItem=>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem,quantity:cartItem.quantity-1}
        : cartItem))
}
const clearCartItem=(cartItems,cartItemToClear)=> cartItems.filter(cartItem=>cartItem.id !==cartItemToClear.id)


export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount:0,
    total:0
})
export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false)
    const [cartItems,setCartItems]=useState([])
    const [cartCount,setCartCount]=useState(0)
    const [cartTotal,setCartTotal]=useState(0)

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity ,0)
        setCartCount(newCartCount)
    },[cartItems])

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total,cartItem)=>total+cartItem.quantity * cartItem.price ,0)
        setCartTotal(newCartTotal)
    },[cartItems])

    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemFromCart=(cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }

    const clearItemFromCart=(cartItemToClear)=>{
        setCartItems(clearCartItem(cartItems,cartItemToClear))
    }


    // const removeItemFromCart=(cartItems,productToRemove)=>{
    //     const existingCartItem = cartItems.find(
    //         (cartItem) => cartItem.id ===productToRemove.id
    //     )
    //     if(existingCartItem && existingCartItem.quantity > 1){
    //         return cartItems.map((cartItem)=>
    //         cartItem.id === productToRemove.id?
    //         {...cartItem, quantity: cartItem.quantity-1}
    //         : cartItem
    //         )
    //     }
    //     return cartItems.filter((cartItem)=>cartItem.id !== productToRemove.id)
    // }

    const value = {isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        cartTotal
    }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}