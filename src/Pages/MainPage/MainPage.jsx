import React from 'react'
import './MainPage.css'
import img from '../../assests/img.png'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function MainPage() {
    
  return (
    <div className='MainPage'>
        <div className="pagewrapper">
        <div className="left">
                <h1>E-learning</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea id libero nihil. Iusto optio laboriosam, nemo quo nam repellat architecto necessitatibus dicta illum id expedita consequuntur! In, tempore labore!</p>
                <button className='learn-btn'><span className='icon'><ArrowCircleRightIcon/></span> Learn More</button>
            </div>
            <div className="right">
                <img src={img} alt="img" />
            </div>
            
        </div>
    </div>
  )
}

export default MainPage