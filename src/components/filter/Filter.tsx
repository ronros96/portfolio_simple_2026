import './filter.css';
import { FiFilter } from "react-icons/fi";

import { useProjects } from "@src/store/store";

const Filter = () =>{
  const projectDataAll =  useProjects((state:any) => state.projectDataAll);
  const projectFilter = useProjects((state:any) => state.projectFilter);
  const setProjectFilter = useProjects((state:any) => state.setProjectFilter);

  let tagArr:any = []

  const getTags = (
    current: Record<string, number>,
    incoming: string[]
  ) => {
    const updated = { ...current };

    incoming.forEach((tag) => {
      updated[tag] = tag in updated ? updated[tag] + 1 : 0;
    });

    return Object.keys(updated)
      .sort()
      .reduce<Record<string, number>>((acc, key) => {
        acc[key] = updated[key];
        return acc;
      }, {});
  };

  projectDataAll.map((proj:any)=>{
    tagArr = getTags(projectFilter,proj.tags)
    // setProjectFilter(tagArr)
  })

  console.log(tagArr);


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