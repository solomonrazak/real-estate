import React from "react";
import Card from "../card/Card";
import { listData } from "../../lib/dummydata";

const List: React.FC = () => {
  return (
    <div>
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
