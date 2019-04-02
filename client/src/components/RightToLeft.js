import React from 'react'
import './RightToLeft.css'

export default ({pics}) => {
    const firstFive = [...pics].slice(0,5)
    return (
        
         <div className="wrapper-lor">
            <div className="nestedRight">
               {firstFive.map((pic,index) => {
                   if(index > 0) {
                     return (
                       <img className="img-2-right" src={pic} key={pic} alt="pic" />
                     )
                   }
               })}
             </div>
            {firstFive.map((pic,index) => {
                    if(index === 0) {
                        return (
                            <img className="img-1-right" src={pic} key={pic} alt="pic" />
                        )
                    }
                })}
          
         </div>
     )
 }