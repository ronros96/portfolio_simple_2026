import './filter.css';
import { FiFilter } from "react-icons/fi";

const Filter = () =>{
  return(
    <div className="filter-container">
      <div className='filter-btn'><FiFilter/></div>
      <div className='filter-tag'>All <span>100</span></div>
      <div className='filter-tag'>React <span>9</span></div>
      <div className='filter-tag'>Javascript <span>32</span></div>
      <div className='filter-tag'>HTML / CSS <span>15</span></div>
    </div>
  )
}

export default Filter