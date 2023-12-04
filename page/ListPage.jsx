import React, { useState, useEffect } from "react";

function ListPage() {
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("lists")) || []
  );

  useEffect(() => {
    const updateLists = () => {
      const storedLists = JSON.parse(localStorage.getItem("lists"));
      if (storedLists) {
        setLists(storedLists);
      }
    };

    window.addEventListener("storage", updateLists);

    return () => {
      window.removeEventListener("storage", updateLists);
    };
  }, []);

  return (
    <div>
      <h1>오늘의 할일 보기</h1>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
