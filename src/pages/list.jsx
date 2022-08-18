import React, { useEffect } from 'react';
import '../styles/list.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {DashboardLayout} from '../components/Layout';
import { useSelector, useDispatch } from "react-redux";
import { getInfoAsync, showInfo } from "../store/info";

const ListPage = () => {
  const info = useSelector(showInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoAsync());
    console.log(info)
  },[]);
  
  const columns = [
    {
      dataField: "name.first",
      text: "Name",
      sort: true
    },
    {
      dataField: "email",
      text: "Email",
      sort: true
    },
    {
      dataField: "gender",
      text: "Gender",
      sort: true
    },
    {
      dataField: "phone",
      text: "Phone",
      sort: true
    }
  ];
  

  return (
    <DashboardLayout>
      {info.length>0 ?
      <div className="App" >
        <BootstrapTable
          bootstrap4
          keyField="email"
          data={info[0]}
          columns={columns}
          pagination={paginationFactory({ sizePerPage: 5 })}
        />
      </div> : <h1 className="App">Loading...</h1>}
    </DashboardLayout>
  )
}

export default ListPage;