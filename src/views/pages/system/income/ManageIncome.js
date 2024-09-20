import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Config } from "../../../../model/Config";
import { Http } from "../../../../model/Http";

export default function ManageIncome(){
    let navigate=useNavigate();
    const [incomes,setIncomes]=useState([]); 
   
    useEffect(()=>{ 
        fetchIncomes();
    },[]);

    function fetchIncomes(){

      let result=Http.get(`${Config.baseUrl}/incomes`);
      result.then(res=>{  
        console.log(res);       
          setIncomes(res.incomes);  
      }); 

    }


    const handleDelete=(id)=>{
        let data={id:id}
        let result=Http.delete(`${Config.baseUrl}/income/delete`,data);
        result.then(res=>{            
            fetchIncomes();
        });  
    }


    const handleEdit=(id)=>{
        navigate(`/system/income/edit/${id}`);
    }
    const handleView=(id)=>{
        alert(id)
    }

    return(
        <>
           <h1>Incomes</h1>
         
          <div className="card">
               <div className="card-header">
                    <div className="card-title">  
                    <Link className='btn btn-primary' to="/system/diposit/create">
                       New Income
                   </Link>
                   </div>
               </div>
               <div className="card-body">
                   <table className="table striped">
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Taka</th>
                          
                          <th>Action</th>
                      </tr>
                      <tbody>
                     { incomes.map(income=>(
                      <tr key={income.id}>
                         <td>{income.id}</td>
                         <td>{income.name}</td>
                         <td>{income.taka}</td>
                         
                         <td>
                            <div className="btn-group">
                            <button className="btn btn-success"  onClick={() =>handleEdit(income.id)}>Edit</button>
                            <button className="btn btn-danger" onClick={() =>handleDelete(income.id)}>Delete</button>
                            <button className="btn btn-info" onClick={() =>handleView(income.id)}>View</button>
                    
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