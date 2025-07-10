import { useEffect, useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);

  const init = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await request.json();
    setList(response);
  };

  useEffect(() => {
    init();
  }, []);

  const deleteTodo = (indexNo) => {
    const allData = [...list];
    allData.splice(indexNo, 1);
    setList(allData);
  };

  const editTodo = (indexNo) => {
    const allData = [...list];
    const obj = allData[indexNo];
    const request = prompt("Update your Note", obj.title);
    obj.title = request;
    allData.splice(indexNo, 1, obj);
    setList(allData);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {list.map(({ title }, index) => {
          return (
            <li key={index}>
              <span>{title}</span>
              <div>
                <button
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    editTodo(index);
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
