import './filter.css';
import { FiFilter } from "react-icons/fi";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import clsx from 'clsx';

import Data from "@src/data/projects.json";
import { useFilter } from "@src/store/store";
import { useEffect} from 'react';

const Filter = () =>{
  const tags =  useFilter((state:any) => state.tags);
  const initTags  = useFilter((state) => state.initTags);
  const focused = useFilter((state) => state.focused);
  const setFocus = useFilter((state) => state.setFocus);
  const cardCount = Object.keys(Data).length

  useEffect(() => {
    initTags(Data);
  }, []);


  const filterTags = tags.map((tag:any) => {
    return (
      <div className='filter-tag-container'>
        <input type='checkbox' id={tag.name}/>
        <label key={tag.name} htmlFor={tag.name} className={clsx('filter-tag',{'active':tag.en})}>

          {tag.name} <span>{tag.count}</span>
        </label>
      </div>
      
    )
  })
 
  return(
    <div 
      className={clsx("filter-container",{'focused':focused})} 
    >
      <div className='filter-btn' onClick={()=>setFocus(true)}></div>
      <div className='filter-icon'><FiFilter/><span>Filter Projects</span></div>
      <div className='filter-close' onClick={()=>setFocus(false)}>
        <IoCloseSharp/>
      </div>
      <div className='filter-tag-container'>
        <input type='checkbox' id='all'/>
        <label key={'all'} className='filter-tag active' htmlFor='all'>
          All <span>{cardCount}</span>
        </label>
      </div>
      {filterTags}
    </div>
  )
}

export default Filter