import './layout.css';
import { TbArrowMoveDown } from "react-icons/tb";

const year = () =>{
  const yr_start = new Date('02-01-2009');
  const yr_now = new Date();
  return yr_now.getFullYear() - yr_start.getFullYear();
}

const Left = () =>{
  return(
    <div className="container">
      <div className='content'>
        <h1 className='header-2'>
          <span className='text-[var(--pri-purple)]'>Hello I'm</span><br/>AARON ROSALES
        </h1>
        <div className='sub-header'>
          <h2>
            AARON ROSALES
          </h2>
        </div>
        <div>
          <p>A seasoned Front-end Developer and Creative Artist with {year()} years of experience across various industries, including Digital Marketing, Product Design, Magazine Layout Design, and E-commerce.</p>
          <p><a className='cta' href="./resume.pdf" target='_blank'><span>View my Resume</span></a></p>
        </div>
      </div>
      <div className='works-btn'>View my works <TbArrowMoveDown size={'2rem'} color={'var(--pri-blue)'}/></div>
    </div>
  )
}

export default Left;