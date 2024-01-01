import CustomerItem from "../CustomerItem/CustomerItem";



const  CustomerList = ({customers,setCustomers}) => {

    const handleDelete = (item) => {
        setCustomers(customers.filter((c) => c.index !== item.index));
    }
    

    
    
        
    return (
        <ul className="customer-list">
            {customers.map((customer, index) => (
                <CustomerItem key={index} customer={customer} handleDelete={handleDelete} />
            ))
                }
           

        </ul>
        
    )

}

export default CustomerList;