import React from "react"
import "./Hob.css"; 
import Product from "./Product";

function Hob() {
    return (

    
        <div className="hob">
             <div className="hob_container">
                 <img className="hob_image"
                    src="https://images.pexels.com/photos/6509144/pexels-photo-6509144.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6509144.jpg&fm=jpg"
                    alt="farming banner"
                    />
                   
                    <div className="welcome_text">
                    <h1> <b>Welcome J shopper !</b></h1>
                       </div>

                
                <div className="hob_row">
                    
                    <Product
                    id={122445}
                    title ='Apples' 
                    price = {200.00}
                    image = 'https://images.pexels.com/photos/7333131/pexels-photo-7333131.jpeg?cs=srgb&dl=pexels-evgeniy-alekseyev-7333131.jpg&fm=jpg'
                    rating = {'5'} />

                    
                    <Product
                    id={125945}
                    title ='Mangos' 
                    price = {200.00}
                    image = 'https://images.pexels.com/photos/5629820/pexels-photo-5629820.jpeg?cs=srgb&dl=pexels-morris-lowery-jr-5629820.jpg&fm=jpg'
                    rating = {'5'} />

                </div>

                <div className="hob_row">
                    <Product 
                    id={127485}
                    title ='Grapes' 
                    price = {100.00}
                    image = 'https://images.pexels.com/photos/23042/pexels-photo.jpg?cs=srgb&dl=pexels-bruno-scramgnon-23042.jpg&fm=jpg'
                    rating = {'5'}/>
                    
                    <Product
                    id={128245}
                    title ='Oranges' 
                    price = {50.00}
                    image = 'https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?cs=srgb&dl=pexels-pixabay-51958.jpg&fm=jpg'
                    rating = {'5'} />
                    
                    <Product 
                    id={120425}
                    title ='Bananas' 
                    price = {90.00}
                    image = 'https://images.pexels.com/photos/4114117/pexels-photo-4114117.jpeg?cs=srgb&dl=pexels-alleksana-4114117.jpg&fm=jpg'
                    rating = {'5'}/>
                </div>

                <div className="hob_row">
                    <Product
                    id={121745}
                    title ='Avocado' 
                    price = {200.00}
                    image = 'https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?cs=srgb&dl=pexels-dominika-roseclay-2095924.jpg&fm=jpg'
                    rating = {'5'} />
                    
                    <Product 
                    id={123435}
                    title ='Strawberry' 
                    price = {70.00} 
                    image = 'https://images.pexels.com/photos/4397050/pexels-photo-4397050.jpeg?cs=srgb&dl=pexels-anthony-shkraba-4397050.jpg&fm=jpg' 
                    rating = {'5'}
                    />


                </div>
             </div>
        </div>
    );
}

export default Hob;
