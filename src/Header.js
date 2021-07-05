import React from 'react'
import { connect } from 'react-redux'
import './header.css'
import {addNames,addPrices} from './actions/actions'
const Header = ({allProducts,addPrices,addNames}) =>{
    return(
        <div className="main">
            <div className="div1">
            <button onClick={()=>addNames()}>click</button>
            <div>
                {!allProducts.cars.nm?<p>no car names</p>:
                <div>
                {allProducts.cars.nm.names.map((item)=><p key={item.id}>{item.name}</p>)}
                </div>}
            </div>
            {console.log(allProducts.cars.nm)}

            </div>
            <div className="div2">
            <button onClick={()=>addPrices()}>click</button>
            <div>
                {
                    !allProducts.cars.pc?<p>no car prices</p>:
                <div>
                {allProducts.cars.pc.names.map((item)=><p key={item.id}>{item.price}</p>)}
                </div>
                }
            </div>
            {console.log(allProducts.cars.pc)}


            </div>
        
        </div>
    )
}

export default connect((state)=>({allProducts:state}),{addPrices,addNames})(Header)
