import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Config } from "../../../../model/Config";
import { Http } from "../../../../model/Http";

export default function ManageLoanapplicant(){
    let navigate=useNavigate();
    const [loanapplicants,setLoanapplicants]=useState([]); 
   
    useEffect(()=>{ 
        fetchLoanapplicants();
    },[]);

    function fetchLoanapplicants(){

      let result=Http.get(`${Config.baseUrl}/loanapplicants`);
      result.then(res=>{  
        console.log(res);       
          setLoanapplicants(res.loanapplicants);  
      }); 

    }


    const handleDelete=(id)=>{
        let data={id:id}
        let result=Http.delete(`${Config.baseUrl}/loanapplicant/delete`,data);
        result.then(res=>{            
            fetchLoanapplicants();
        });  
    }


    const handleEdit=(id)=>{
        navigate(`/system/loanapplicant/edit/${id}`);
    }
    const handleView=(id)=>{
        alert(id)
    }

    return(
        <>
           <h1>Loanapplicants</h1>
         
          <div className="card">
               <div className="card-header">
                    <div className="card-title">  
                    <Link className='btn btn-primary' to="/system/loanapplicant/create">
                       New Loanapplicant
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
                          <th>Nid</th>
                          <th>Occupation</th>
                          <th>Nominee_name</th>
                          <th>Nominee_account</th>
                          <th>Loan_amount</th>
                          <th>Interest_rate</th>
                          <th>Photo</th>
                         
                          <th>Action</th>
                      </tr>
                      <tbody>
                     { loanapplicants.map(loanapplicant=>(
                      <tr key={loanapplicant.id}>
                         <td>{loanapplicant.id}</td>
                         <td>{loanapplicant.name}</td>
                         <td>{loanapplicant.mobile}</td>
                         <td>{loanapplicant.address}</td>
                         <td>{loanapplicant.nid}</td>
                         <td>{loanapplicant.occupation}</td>
                         <td>{loanapplicant.nominee_name}</td>
                         <td>{loanapplicant.nominee_account}</td>
                         <td>{loanapplicant.loan_amount}</td>
                         <td>{loanapplicant.interest_rate}</td>
                         <td>{loanapplicant.photo}</td>
                         <td>
                            <div className="btn-group">
                            <button className="btn btn-success"  onClick={() =>handleEdit(loanapplicant.id)}>Edit</button>
                            <button className="btn btn-danger" onClick={() =>handleDelete(loanapplicant.id)}>Delete</button>
                            <button className="btn btn-info" onClick={() =>handleView(loanapplicant.id)}>View</button>
                    
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