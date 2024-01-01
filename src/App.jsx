import { useState } from 'react'
import './App.css'
import CustomerList from './Components/CustomerList/CustomerList'
import CustomerForm from './Components/CustomerForm/CustomerForm'

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    setCustomers([newCustomer, ...customers]);
    // setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    
  };

  return (
    <div className='App'>
    <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer}/>
      {customers.length === 0 && <p>No customers yet!</p>}
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </div>
  )
}

export default App
