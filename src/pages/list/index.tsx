import React from 'react';
import { listData } from '../../lib/dummydata';
import Filter from '../../components/filter/Filter';

const ListPage:React.FC = () => {

    const data = listData;
  return (
    <div className="w-full h-full flex">
        <div className="w-[60%]">
            <Filter />
        </div>
        <div className="w-[40%] bg-[#fcf5f3]">
            map
        </div>
    </div>
  )
}

export default ListPage;