import React from 'react';
import styles from "./RestaurantCard.module.css";


const OrderButton = () => {
    return <div className={styles.orderButton}>Order Online</div>
};

function RestaurantCard() {
    console.log(styles);
  return (
    <div>
<div className={styles.container}></div>
<div className={styles.footer}></div>
<OrderButton />
    </div>
  )
}

export default RestaurantCard;