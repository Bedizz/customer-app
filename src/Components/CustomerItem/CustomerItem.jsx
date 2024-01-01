import React from 'react';
import './CustomerItem.css';
const CustomerItem = ({customer,handleDelete}) => {

    

  return (
    <div>
      
            <li className="customer-item">
                <div className="customer-info">
                    <img src="https://i.pravatar.cc/300" alt="" />
                    <span>{customer}</span>
                    <button onClick={() => handleDelete(customer)}>Delete</button>
                </div>
            </li>
        
    </div>
  );
}
export default CustomerItem;