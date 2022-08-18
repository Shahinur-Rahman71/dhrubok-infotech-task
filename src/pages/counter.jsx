import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

import {DashboardLayout} from '../components/Layout';
import '../styles/counter.css'
const CounterPage = () => {
  const [count,setCount] = useState(0);

  const handleChange = (event)=> {
    let checkNumber = Number(event.target.value);
    
    setCount(checkNumber)
  }
  const IncreaseNumber = () =>{
    setCount(count+1);
  }
  return (
    <DashboardLayout>
      <div className='main'>
          <input onChange={handleChange} className='inputBox' type="number" value={count}/>
          <Button onClick={IncreaseNumber} style={{borderRadius: '0px 5px 5px 0px'}} variant="primary" type="submit">Increase</Button>
      </div>
    </DashboardLayout>
  )
}

export default CounterPage;