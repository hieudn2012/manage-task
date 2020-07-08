import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import NavLanding from '../../components/NavLanding';
import PanelTask from '../../components/PanelTask';
import PanelCheckin from '../../components/PanelCheckin';
import TopData from '../../components/TopData';
import taskApi from '../../api/task';
import checkin from '../../api/checkin';

function Home() {
  const [dataTask, setDataTask] = useState([]);
  const [dataCheckin, setDataCheckin] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const responseTask = await taskApi.getAll();
        setDataTask(responseTask);

        const responseCheckin = await checkin.getAll();
        setDataCheckin(responseCheckin);
      } catch (error) {
        console.log('Failed to fetch todo list: ', error);
      }
    }

    getTasks();
  }, []);

  // function onDelete(id) {
  //   const taskIndex = dataTask.findIndex((item) => {
  //     return item.id === id
  //   });
  //   const newData = [...dataTask];
  //   newData.splice(taskIndex, 1);
  //   setDataTask(newData);
  // }

  // function onAddNew() {
  //   const task = { ...arguments[0] };
  //   const newData = [...dataTask];
  //   newData.push(task);
  //   setDataTask(newData);
  // }

  return (
    <div>
      <header>
        <section>
          <NavLanding />
        </section>
      </header>
      <main>
        <div className="ctn-home">

          <section><Nav /></section>

          <section>
            <TopData />
          </section>

          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-7">
                  <PanelTask data={dataTask} />
                </div>
                <div className="col-md-5">
                  <PanelCheckin data={dataCheckin}/>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

export default Home; 