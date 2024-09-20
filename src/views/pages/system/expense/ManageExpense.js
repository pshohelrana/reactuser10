import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Config } from "../../../../model/Config";
import { Http } from "../../../../model/Http";

export default function ManageExpense(){
    let navigate=useNavigate();
    const [expenses,setExpenses]=useState([]); 
   
    useEffect(()=>{ 
        fetchExpenses();
    },[]);

    function fetchExpenses(){

      let result=Http.get(`${Config.baseUrl}/expenses`);
      result.then(res=>{  
        console.log(res);       
          setExpenses(res.expenses);  
      }); 

    }


    const handleDelete=(id)=>{
        let data={id:id}
        let result=Http.delete(`${Config.baseUrl}/expense/delete`,data);
        result.then(res=>{            
            fetchExpenses();
        });  
    }


    const handleEdit=(id)=>{
        navigate(`/system/expense/edit/${id}`);
    }
    const handleView=(id)=>{
        alert(id)
    }

    return(
        <>
           <h1>Expenses</h1>
         
          <div className="card">
               <div className="card-header">
                    <div className="card-title">  
                    <Link className='btn btn-primary' to="/system/diposit/create">
                       New Expense
                   </Link>
                   </div>
               </div>
               <div className="card-body">
                   <table className="table striped">
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Paid Taka</th>
                          <th>Unpaid Taka</th>
                          <th>Remark</th>
                          
                          <th>Action</th>
                      </tr>
                      <tbody>
                     { expenses.map(expense=>(
                      <tr key={expense.id}>
                         <td>{expense.id}</td>
                         <td>{expense.name}</td>
                         <td>{expense.paid_taka}</td>
                         <td>{expense.unpaid_taka}</td>
                         <td>{expense.remark}</td>
                        
                         <td>
                            <div className="btn-group">
                            <button className="btn btn-success"  onClick={() =>handleEdit(expense.id)}>Edit</button>
                            <button className="btn btn-danger" onClick={() =>handleDelete(expense.id)}>Delete</button>
                            <button className="btn btn-info" onClick={() =>handleView(expense.id)}>View</button>
                    
                            </div>
                        </td>
                      </tr>
                     ))                     
                }
                </tbody>

                   </table>
               </div>
          </div>
        </>
    );
}