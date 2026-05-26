import './cards.css'

const Card = () =>{
  return(
    <div className='card'>
      <div className='img-container'>
        <a href='#' rel='noopener' target='_blank'>
          <img src="./project_images/sample.webp" alt="Sample Image" />
        </a>
      </div>
      <div className='desc-container'>
        <a href="#" rel="noopener" target='_blank'>
          <h4>sit amet consectetur adipisicing elit</h4>
        </a>
        <div className='tags'>
          <span>React JS</span>
          <span>Typescript</span>
          <span>HTML/CSS</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit fugit quia, ipsum beatae dicta dolorem earum error.</p>
        <a href='#' className='cta' rel='noopener' target='_blank'>
          <span>View Project</span>
        </a>
      </div>
    </div>
  )
}

export default Card;