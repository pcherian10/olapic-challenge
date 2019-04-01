import React from 'react'
import './LeftToRight.css'

export default ({pics}) => {
   const firstFive = [...pics].slice(0,5)
   return (
        <div className="wrapper-lor">
            {firstFive.map((pic,index) => {
                if(index === 0) {
                  return (
                    <img className="img-1" src={pic} key={pic} alt="pic" />
                  )
                }
            })}
            <div className="nested">
              {firstFive.map((pic,index) => {
                  if(index > 0) {
                    return (
                      <img className="img-2" src={pic} key={pic} alt="pic" />
                    )
                  }
              })}
            </div>
        </div>
    )
}
