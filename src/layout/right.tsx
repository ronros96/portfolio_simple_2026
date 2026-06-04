import './layout.css';
import { TbArrowMoveUp } from "react-icons/tb";
import Cards from '@components/cards/Cards';
import Filter from '@components/filter/Filter';
import { useScroll } from "@src/store/store";

const Right = () =>{
    const setScroll =  useScroll((state:any) => state.setScroll);
  
  return(
    <div className="container">
      <Filter/>
      <div className='works-caption'>
        <h3>View my works</h3>
        <p>Dive in and see my recent projects.</p>
      </div>
      <div className='content'>
        <Cards/>
      </div>
      <div className='btn-totop' onClick={()=>setScroll(false)}>
        <TbArrowMoveUp size={'2rem'}/>
      </div>
    </div>
  )
}

export default Right