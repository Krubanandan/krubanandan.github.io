import React from 'react'
import mywork_data from '../../assets/works'
import './Works.css'

const Works = () => {
  return (
    <div className='Work-main'>
        <h1 className="work-title">Works</h1>
        <div className="work-class">
            {mywork_data.map((work,index)=>{
                return(
                    <div key={index} className="work-container">
                        <img src={work.w_img}></img>
                    </div>
                );
            })}

        </div>
    </div>
  )
}

export default Works