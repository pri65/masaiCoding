import React from 'react';
import { DetailsComponents } from "./DetailsComponent";
import { Image } from "./Image";
import { orderButton } from "./OrderButton";
import RatingComponent from "./Rating";
import styles from "./RestaurantCard.module.css";



function RestaurantCard({data}) {
    const { name,id,cuisine,costForTwo,minOrder,deliveryTime} = data
    console.log(styles);
  return (
    <div>
<div className={styles.container}>
    <div>
        <Image
        src={"https://www.linguahouse.com/lingua"}
        width="100px"
        height="120px"
        />
    </div>
    <div style={{ flex:3 }} >
        <DetailsComponents

    </div>
</div>
<div className={styles.footer}></div>
<OrderButton />
    </div>
  )
}

export default RestaurantCard;