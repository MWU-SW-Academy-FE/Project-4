import React, { useState, useEffect } from "react";

function ListPage() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("lists")) || []
  );
  const [editing, setEditing] = useState(null);
  const [editInput, setEditInput] = useState("");

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const addList = () => {
    setLists([...lists, input]);
    setInput("");
  };

  const startEditing = (index) => {
    setEditing(index);
    setEditInput(lists[index]);
  };

  const updateList = (index) => {
    setLists(lists.map((list, i) => (i === index ? editInput : list)));
    setEditing(null);
    setEditInput("");
  };

  const deleteList = (index) => {
    setLists(lists.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>공부 기록</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새로운 공부 기록을 입력하세요"
      />
      <button onClick={addList}>기록 추가</button>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>
            {editing === index ? (
              <div>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <button onClick={() => updateList(index)}>저장</button>
              </div>
            ) : (
              <div>
                {list}
                <button onClick={() => startEditing(index)}>수정</button>
                <button onClick={() => deleteList(index)}>삭제</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
