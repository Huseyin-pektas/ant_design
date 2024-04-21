import React, { useState, useEffect } from 'react';
import { Button, Popconfirm, Switch } from 'antd';
import axios from 'axios';
import DataTable from './DataTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  

  return (
    <div className="App">
      
     <DataTable />

    </div>
  );
}

export default App;
