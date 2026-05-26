import Cards from '@components/cards/Cards';
import './layout.css';

const Right = () =>{
  return(
    <div className="container">
      <div className='works-caption'>
        <h3><span>Check my works</span></h3>
        <p>Dive in and view my recent projects.</p>
      </div>
      <div className='content'>
        <Cards></Cards>
      </div>
    </div>
  )
}

export default Right