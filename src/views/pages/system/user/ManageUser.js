import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Config } from "../../../../model/Config";
import { Http } from "../../../../model/Http";

export default function ManageUser(){
    let navigate=useNavigate();
    const [users,setUsers]=useState([]); 
   
    useEffect(()=>{ 
        fetchUsers();
    },[]);

    function fetchUsers(){

      let result=Http.get(`${Config.baseUrl}/users`);
      result.then(res=>{  
        console.log(res);       
          setUsers(res.users);  
      }); 

    }


    const handleDelete=(id)=>{
        let data={id:id}
        let result=Http.delete(`${Config.baseUrl}/user/delete`,data);
        result.then(res=>{            
            fetchUsers();
        });  
    }


    const handleEdit=(id)=>{
        navigate(`/system/user/edit/${id}`);
    }
    const handleView=(id)=>{
        alert(id)
    }

    return(
        <>
           <h1>Users</h1>
         
          <div className="card">
               <div className="card-header">
                    <div className="card-title">  
                    <Link className='btn btn-primary' to="/system/user/create">
                       New User
                   </Link>
                   </div>
               </div>
               <div className="card-body">
                   <table className="table striped">
                      <tr>
                          <th>Id</th>
                          <th>User</th>
                          <th>Full Name</th>
                          <th>Email</th>
                          <th>Action</th>
                      </tr>
                      <tbody>
                     { users.map(user=>(
                      <tr key={user.id}>
                         <td>{user.id}</td>
                         <td>{user.username}</td>
                         <td>{user.full_name}</td>
                         <td>{user.email}</td>
                         <td>
                            <div className="btn-group">
                            <button className="btn btn-success"  onClick={() =>handleEdit(user.id)}>Edit</button>
                            <button className="btn btn-danger" onClick={() =>handleDelete(user.id)}>Delete</button>
                            <button className="btn btn-info" onClick={() =>handleView(user.id)}>View</button>
                    
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