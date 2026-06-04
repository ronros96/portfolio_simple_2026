import './layout.css';
import { TbArrowMoveDown } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { usePopUp } from "@src/store/store";

import {motion} from 'motion/react';
import PopUp from '@components/popup/popUp';

const year = () =>{
  const yr_start = new Date('02-01-2009');
  const yr_now = new Date();
  return yr_now.getFullYear() - yr_start.getFullYear();

  const popUp =  usePopUp((state:any) => state.setPopHover);
  const isHover = usePopUp((state:any) => state.isHover);
}

const Left = () =>{
  return(
    <div className="container">
      <div className='content'>
        <h1 className='header-2'>
          <span className='text-[var(--pri-purple)]'>Hello I'm</span><br/>AARON ROSALES
        </h1>
        <div className='sub-header'>
          <img src="./logo.svg" alt="Aaron Rosales"/>
        </div>
        <div>
          <p>A seasoned Front-end Developer and Creative Artist with {year()} years of experience across various industries, including Digital Marketing, Product Design, Magazine Layout Design, and E-commerce.</p>
          <p><a className='cta' href="./resume.pdf" target='_blank'><span>View my Resume</span></a></p>
        </div>
        <div className='contact-me'>
          <a href="mailto:p.aaronrosales@gmail.com" target='_blank' rel='noopener'>
            <SiMinutemailer size={'1.5rem'}/>
          </a>
          <a href="https://linkedin.com/in/aaronros" target='_blank' rel='noopener'>
            <FaLinkedinIn size={'1.5rem'}/>
          </a>
          <a href="https://github.com/ronros96" target='_blank' rel='noopener'>
            <FaGithub size={'1.5rem'}/>
          </a>
        </div>
      </div>
      <div className='works-btn'>View my works <TbArrowMoveDown size={'2rem'} color={'var(--pri-blue)'}/></div>
    </div>
  )
}

export default Left;