import React from 'react';
import { listData } from '../../lib/dummydata';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import './list.css';
import Map from '../../components/map/Map';

const ListPage:React.FC = () => {

    const data = listData;
  return (
    <div className="w-full h-full flex">
        <div className="w-[60%] overflow-y-scroll hide-scrollbar">
            <Filter />
            <div>
            {data.map((item) => (
              <div key={item.id}>
                <Card item={item}/>
                
              </div>
              
            ))}
            
            </div>
        </div>
        <div className="w-[40%] bg-[#fcf5f3] h-full">
            <Map items={data}/>
        </div>
    </div>
  )
}

export default ListPage;