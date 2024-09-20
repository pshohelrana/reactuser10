import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Config } from "../../../../model/Config";
import { Http } from "../../../../model/Http";

export default function ManageMember(){
    let navigate=useNavigate();
    const [members,setMembers]=useState([]); 
   
    useEffect(()=>{ 
        fetchMembers();
    },[]);

    function fetchMembers(){

      let result=Http.get(`${Config.baseUrl}/members`);
      result.then(res=>{  
        console.log(res);       
          setMembers(res.members);  
      }); 

    }


    const handleDelete=(id)=>{
        let data={id:id}
        let result=Http.delete(`${Config.baseUrl}/member/delete`,data);
        result.then(res=>{            
            fetchMembers();
        });  
    }


    const handleEdit=(id)=>{
        navigate(`/system/member/edit/${id}`);
    }
    const handleView=(id)=>{
        alert(id)
    }

    return(
        <>
           <h1>Members</h1>
         
          <div className="card">
               <div className="card-header">
                    <div className="card-title">  
                    <Link className='btn btn-primary' to="/system/member/create">
                       New Member
                   </Link>
                   </div>
               </div>
               <div className="card-body">
                   <table className="table striped">
                      <tr>
                          <th>Id</th>
                          <th>Member</th>
                          <th>Lastname</th>
                          <th>Address</th>
                          <th>Nid</th>
                          <th>photo</th>
                          <th>Diposit</th>
                          <th>Withdrow</th>
                          <th>Totalamount</th>
                          <th>Action</th>
                      </tr>
                      <tbody>
                     { members.map(member=>(
                      <tr key={member.id}>
                         <td>{member.id}</td>
                         <td>{member.name}</td>
                         <td>{member.lastname}</td>
                         <td>{member.address}</td>
                         <td>{member.nid}</td>
                         <td>{member.photo}</td>
                         <td>{member.diposit}</td>
                         <td>{member.withdrow}</td>
                         <td>{member.total_amount}</td>
                         
                         <td>
                            <div className="btn-group">
                            <button className="btn btn-success"  onClick={() =>handleEdit(member.id)}>Edit</button>
                            <button className="btn btn-danger" onClick={() =>handleDelete(member.id)}>Delete</button>
                            <button className="btn btn-info" onClick={() =>handleView(member.id)}>View</button>
                    
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