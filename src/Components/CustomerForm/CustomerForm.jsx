import React, {useState} from 'react';
// import './CustomerForm.css';


const CustomerForm = ({addNewCustomer}) => {

    const [customerName, setCustomerName] = useState('');

    const handleChange = (e) => {
        setCustomerName(e.target.value);

    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (customerName === '') return alert('Please enter a customer name');
        
        addNewCustomer(customerName);
        setCustomerName('');
        
    }
    

        
    

    return (
        <form action="" className='customer-form' onSubmit={handleSubmit}>
        <input type="text" className='customer-input' placeholder='add a new customer' value={customerName} onChange={handleChange} />
        <button>Add</button>
        </form>
    )

}
export default CustomerForm;
