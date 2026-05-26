import Card from "./Card";
import "./cards.css";

const Cards = () =>{
  let projects = [];

  for(let i=0; i < 30; i++){
    projects.push(<Card/>);
  }

  return(
    <div className="card-container">
      <div className="card-content">
        {projects}
      </div>   
    </div>
  )
}

export default Cards;