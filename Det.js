import React from 'react'
import './Det.css'

//Created an Object To Display
const First_Item = {
title:"Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone",
brand: "Apple",
mainImageUrl: "https://m.media-amazon.com/images/I/61f1YfTkTDL.jpg",
ratingsTotal: 55245,
rating: 4.7,
}

const Second_Item = {
    title: "Apple MacBook Pro 14-inch, 2023, M2 Pro Chip, 16GB RAM, 512GB SSD, Space Gray",
    brand: "Apple",
    mainImageUrl: "https://m.media-amazon.com/images/I/71gD8WdSlaL.jpg",
    ratingsTotal: 35210,
    rating: 4.8,
}


const     title= "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone"
const     brand= "Apple"
const     mainImageUrl= "https://m.media-amazon.com/images/I/61f1YfTkTDL.jpg"
const     ratingsTotal= 55245
const     rating= 4.7


function Det() {
  return (
    <section style = {{backgroundColor:'#9395FA' ,padding:'12px',borderRadius:'12px'}} >
            <div ><h1>Product Details</h1></div>
            <Item img={First_Item.mainImageUrl} title={First_Item.title} brand={First_Item.brand} />
            <Item img={Second_Item.mainImageUrl} title={Second_Item.title} brand={Second_Item.brand} />
            <Item img={First_Item.mainImageUrl} title={First_Item.title} brand={First_Item.brand} />

{            //matching to the props we are developing
}
    </section>
  )
}



const Item = (naming) => {

  console.log('Prop Item',naming)

    return(
        <React.Fragment >
            <article >
                <img style={{borderRadius:'12px', height:'80px',width:'80px'}} src={naming.img} alt='apple'/>
                <h2  className='sec1'>{naming.title} </h2>

                {console.log(naming)}

                <p3 style={{color:'black'}}>{naming.brand}</p3>

            </article>
        </React.Fragment>
    )
}
export default Det