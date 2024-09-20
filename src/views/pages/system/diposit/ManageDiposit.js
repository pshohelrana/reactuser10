import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Config } from "../../../../model/Config";
import { Http } from "../../../../model/Http";

export default function ManageDiposit(){
    let navigate=useNavigate();
    const [diposits,setDiposits]=useState([]); 
   
    useEffect(()=>{ 
        fetchDiposits();
    },[]);

    function fetchDiposits(){

      let result=Http.get(`${Config.baseUrl}/diposits`);
      result.then(res=>{  
        console.log(res);       
          setDiposits(res.diposits);  
      }); 

    }


    const handleDelete=(id)=>{
        let data={id:id}
        let result=Http.delete(`${Config.baseUrl}/diposit/delete`,data);
        result.then(res=>{            
            fetchDiposits();
        });  
    }


    const handleEdit=(id)=>{
        navigate(`/system/diposit/edit/${id}`);
    }
    const handleView=(id)=>{
        alert(id)
    }

    return(
        <>
           <h1>Diposits</h1>
         
          <div className="card">
               <div className="card-header">
                    <div className="card-title">  
                    <Link className='btn btn-primary' to="/system/diposit/create">
                       New Deposit
                   </Link>
                   </div>
               </div>
               <div className="card-body">
                   <table className="table striped">
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Mobile</th>
                          <th>Address</th>
                          <th>Principle</th>
                          <th>Paid</th>
                          <th>Due</th>
                          <th>Loanactive_id</th>
                          <th>Action</th>
                      </tr>
                      <tbody>
                     { diposits.map(diposit=>(
                      <tr key={diposit.id}>
                         <td>{diposit.id}</td>
                         <td>{diposit.name}</td>
                         <td>{diposit.mobile}</td>
                         <td>{diposit.address}</td>
                         <td>{diposit.principle}</td>
                         <td>{diposit.paid}</td>
                         <td>{diposit.due}</td>
                         <td>{diposit.loanactive_id}</td>
                         <td>
                            <div className="btn-group">
                            <button className="btn btn-success"  onClick={() =>handleEdit(diposit.id)}>Edit</button>
                            <button className="btn btn-danger" onClick={() =>handleDelete(diposit.id)}>Delete</button>
                            <button className="btn btn-info" onClick={() =>handleView(diposit.id)}>View</button>
                    
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