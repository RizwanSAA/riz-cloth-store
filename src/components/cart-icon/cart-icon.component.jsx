import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemCount } from "../../redux/cart/cart.selector";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  // this toggleCartHidden is passed to CartIcon as props using connect()
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// const mapStateToProps = state => ({
//   // this itemCount is passed to CartIcon as props using connect()
//   itemCount: selectCartItemCount(state)
// });

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
