import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Config } from "../../../../model/Config";
import { Http } from "../../../../model/Http";

export default function ManageWithdraw(){
    let navigate=useNavigate();
    const [withdraws,setWithdraws]=useState([]); 
   
    useEffect(()=>{ 
        fetchWithdraws();
    },[]);

    function fetchWithdraws(){

      let result=Http.get(`${Config.baseUrl}/withdraws`);
      result.then(res=>{  
        console.log(res);       
          setWithdraws(res.withdraws);  
      }); 

    }


    const handleDelete=(id)=>{
        let data={id:id}
        let result=Http.delete(`${Config.baseUrl}/withdraw/delete`,data);
        result.then(res=>{            
            fetchWithdraws();
        });  
    }


    const handleEdit=(id)=>{
        navigate(`/system/withdraw/edit/${id}`);
    }
    const handleView=(id)=>{
        alert(id)
    }

    return(
        <>
           <h1>Withdraws</h1>
         
          <div className="card">
               <div className="card-header">
                    <div className="card-title">  
                    <Link className='btn btn-primary' to="/system/withdraw/create">
                       New Withdraw
                   </Link>
                   </div>
               </div>
               <div className="card-body">
                   <table className="table striped">
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Policy</th>
                          <th>Lastname</th>
                          <th>Loan_amount</th>
                          <th>Interest_rate</th>
                          <th>Net_amount</th>
                          <th>Member_id</th>
                          <th>Action</th>
                      </tr>
                      <tbody>
                     { withdraws.map(withdraw=>(
                      <tr key={withdraw.id}>
                         <td>{withdraw.id}</td>
                         <td>{withdraw.name}</td>
                         <td>{withdraw.policy}</td>
                         <td>{withdraw.lastname}</td>
                         <td>{withdraw.loanamount}</td>
                         <td>{withdraw.interest_rate}</td>
                         <td>{withdraw.net_amount}</td>
                         <td>{withdraw.member_id}</td>
                         <td>
                            <div className="btn-group">
                            <button className="btn btn-success"  onClick={() =>handleEdit(withdraw.id)}>Edit</button>
                            <button className="btn btn-danger" onClick={() =>handleDelete(withdraw.id)}>Delete</button>
                            <button className="btn btn-info" onClick={() =>handleView(withdraw.id)}>View</button>
                    
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