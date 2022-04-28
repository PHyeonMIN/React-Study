import React,{ useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext  from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;


  const numberOfCartItems = items.reduce((curNumber, item)=>{
      return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`;

  useEffect(() => {
    if(items.length ===0){
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false); 
    },300);
    
    // cleanup함수 : 컴포넌트가 지워져야 할 때 타이머도 지우는 함수
    return () => {
      clearTimeout(timer);
      // 타이머가 만료되기 전에 또 설정시 item을 빠르게 여러개 추가하면 이전 타이머를 지우고 새 타이머가 설정한 뒤, 전 타이머는 지워져야한다.
    };
  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
