import React, { useState, useEffect } from "react";

import axios from "axios";

export default function HomeContainer() {
  const [useData, setData] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get("http://localhost:5000/get");
      setData(response.data);
    };
    getList();
  }, []);

  console.log(useData);
  return (
    <div>
      <ul>
        {useData.map((each) => {
          return (
            <>
              <li>{each.name}</li>
              <li>{each.age}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
