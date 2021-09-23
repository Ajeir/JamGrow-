import React from "react"
import "./Hob.css"; 
import Product from "./Product";

function Hob() {
    return (

    
        <div className="hob">
             <div className="hob_container">
                 <img className="hob_image"
                    src="https://scholarshipjamaica.com/wp-content/uploads/2017/05/University-of-Technology-Teachers-Scholarship.jpg"
                    alt="farming banner"
                    />
                   
                    <div className="welcome_text">
                    <h1> <b>Welcome J schooler !</b></h1>
                       </div>

                
                <div className="hob_row">
                    
                    <Product
                    id={122445}
                    title ='shirt1' 
                    price = {200.00}
                    image = 'https://assets.burberry.com/is/image/Burberryltd/ef04b04c270641f91d110c370f7c99583b871626.jpg?$BBY_V2_SL_1x1$&wid=2500&hei=2500'
                    rating = {'5'} />

                    
                    <Product
                    id={125945}
                    title ='Shirt2' 
                    price = {200.00}
                    image = 'https://s7d9.scene7.com/is/image/Chaps/medium/6812008930308072_001.jpg'
                    rating = {'5'} />

                </div>

                <div className="shirt">
                    <Product 
                    id={127485}
                    title ='shirt4' 
                    price = {100.00}
                    image = 'https://s7d9.scene7.com/is/image/Chaps/medium/6812008930308072_001.jpg'
                    rating = {'5'}/>
                    
                    <Product
                    id={128245}
                    title ='shirt5' 
                    price = {50.00}
                    image = 'https://s7d9.scene7.com/is/image/Chaps/medium/6812008930308072_001.jpg'
                    rating = {'5'} />
                    
                    <Product 
                    id={120425}
                    title ='shirt6' 
                    price = {90.00}
                    image = 'https://s7d9.scene7.com/is/image/Chaps/medium/6812008930308072_001.jpg'
                    rating = {'5'}/>
                </div>

                <div className="shirt7">
                    <Product
                    id={121745}
                    title ='shirt 8' 
                    price = {200.00}
                    image = 'https://s7d9.scene7.com/is/image/Chaps/medium/6812008930308072_001.jpg'
                    rating = {'5'} />
                    
                    <Product 
                    id={123435}
                    title ='shirt9' 
                    price = {70.00} 
                    image = 'https://s7d9.scene7.com/is/image/Chaps/medium/6812008930308072_001.jpg' 
                    rating = {'5'}
                    />


                </div>
             </div>
        </div>
    );
}

export default Hob;
