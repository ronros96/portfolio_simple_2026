import './filter.css';
import { FiFilter } from "react-icons/fi";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import clsx from 'clsx';

import Data from "@src/data/projects.json";
import { useFilter } from "@src/store/store";

const Filter = () =>{
  const selectedTags = useFilter(
    (state) => state.selectedTags
  );
  const toggleTag = useFilter(
    (state) => state.toggleTag
  );
  const showAll = useFilter(
    (state) => state.showAll
  );
  const focused = useFilter(
    (state) => state.focused
  );
  const setFocus = useFilter(
    (state) => state.setFocus
  );
  const cardCount = Object.keys(Data).length;

  const allTags = [...new Set(
    Data.flatMap((project) => project.tags)
  )].sort((a, b) => a.localeCompare(b));

  const tagCounts = Data.reduce<Record<string, number>>(
    (acc, project) => {
      project.tags.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    },
    {}
  );

  const filterTags = allTags.map((tag:any,ctr:number) => {
    return (
      <div className='filter-tag-container' key={`td-${ctr}`}>
        <input 
          key={`${tag}-tag`}
          id={tag} 
          type='checkbox'
          checked={selectedTags.includes(tag)}
          onChange={() => toggleTag(tag)}
        />
        <label 
          key={tag} 
          htmlFor={tag} 
          className={clsx('filter-tag',{'active':tag.en})}
        >
          <FaRegSquare className='uncheck'/> 
          <FaRegSquareCheck className='checked'/>
          {tag}
          <span>{tagCounts[tag]}</span>
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
      <div key='tc-a' className='filter-tag-container'>
        <input 
          id='all'
          key={'all-tags'} 
          type='checkbox'  
          onChange={showAll} 
          checked={selectedTags.length === 0 ? true : false}
        />
        <label 
          key={'all'} 
          className='filter-tag' 
          htmlFor='all'
        >
          <FaRegSquare className='uncheck'/> 
          <FaRegSquareCheck className='checked'/>
          All <span>{cardCount}</span>
        </label>
      </div>
      {filterTags}
    </div>
  )
}

export default Filter