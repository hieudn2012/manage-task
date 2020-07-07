import React, { useState, useEffect } from 'react';
import TudoList from '../../components/TodosList';
import todoApi from '../../api/todo';
import Nav from '../../components/Nav';
// import NavLanding from '../../components/NavLanding';

function Home() {
  const [dataTask, setDataTask] = useState([]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await todoApi.getAll();
        setDataTask(response);
      } catch (error) {
        console.log('Failed to fetch todo list: ', error);
      }
    }

    getTodoList();
  }, []);

  function onDelete(id) {
    const taskIndex = dataTask.findIndex((item) => {
      return item.id === id
    });
    const newData = [...dataTask];
    newData.splice(taskIndex, 1);
    setDataTask(newData);
  }

  function onAddNew() {
    const task = { ...arguments[0] };
    const newData = [...dataTask];
    newData.push(task);
    setDataTask(newData);
  }

  return (
    <div>
      <Nav />
      {/* <NavLanding /> */}
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <TudoList
            data={dataTask} onDelete={(id) => onDelete(id)}
            onAddNew={onAddNew}
          />
        </div>
      </div>
    </div>
  )
}

export default Home; 