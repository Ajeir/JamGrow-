import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, image, price, rating}) {
    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct_image" 
            src={"https://images-na.ssl-images-amazon.com/images/I/91tCuetFu6L._AC_SL1500_.jpg"}/>
        

                <div className='checkoutProduct_info'>
                    <p className='checkoutProduct_title'>
                        {title}
                    </p>

            </div>

        </div>
    )
}

export default CheckoutProduct
