import React, { useEffect, useState } from 'react';
import taskApi from '../../api/task';
import checkin from '../../api/checkin';
import Nav from '../../components/Nav';
import PanelTask from '../../components/PanelTask';
import PanelCheckin from '../../components/PanelCheckin';
import TopData from '../../components/TopData';

export default function DashBoard() {

  const [dataTask, setDataTask] = useState([]);
  const [dataCheckin, setDataCheckin] = useState([]);

  useEffect(() => {

    const getTasks = async () => {
      try {
        const responseTask = await taskApi.getAll();
        setDataTask(responseTask);
      } catch (error) {
        console.log('Failed to fetch task list: ', error);
      }
    }

    const getCheckin = async () => {
      try {
        const responseCheckin = await checkin.getAll();
        setDataCheckin(responseCheckin);
      } catch (error) {
        console.log('Failed to fetch checkin list: ', error);
      }
    }

    getTasks();
    getCheckin();
  }, []);

  return (
    <React.Fragment>
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
              <PanelCheckin data={dataCheckin} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}