import './filter.css';
import { FiFilter } from "react-icons/fi";

import Data from "@src/data/projects.json";
import { useTagStore } from "@src/store/store";
import { useEffect, useRef } from 'react';

const Filter = () =>{
  const tags =  useTagStore((state:any) => state.tags);
  const initTags  = useTagStore((state) => state.initTags);

  useEffect(() => {
    initTags(Data);
  }, []);

  console.log(tags)

  const filterTags = tags.map((tag:any) => {
    return (<div key={tag.name} className='filter-tag'>{tag.name} <span>{tag.count}</span></div>)
  })
 

  return(
    <div className="filter-container">
      <div className='filter-btn'><FiFilter/></div>
      {filterTags}
    </div>
  )
}

export default Filter