import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Http } from '../../../../model/Http';
import { Config } from '../../../../model/Config';
import { useNavigate } from "react-router-dom";

export default function CreateUser(){
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [role_id,setRoleId] = useState(0);
    const [full_name,setFullName] = useState("");

    const onSubmit = (data) => {
   
        let formData=new FormData();
        formData.append("name",name);
        formData.append("password",password);
        formData.append("full_name",full_name);
        formData.append("email",email);
        formData.append("role_id",role_id);
        formData.append("photo",data.photo[0]);        
          
        let result= Http.post(`${Config.baseUrl}/users/save`,formData);         
        result.then(res=>{ 
            alert("Saved");        
            navigate("/system/user");
        }); 
     }

    return(
        <div className='card'>
            <h5 className='card-header'>              
                   Create User                
            </h5>

    <form className='card-body' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div className='row mb-3'>
        <label className='col-3 col-form-label'>Role</label>
        <div className='col-9'>
            <select className='form-control' onChange={(e)=>setRoleId(e.target.value)}>
            <option value="1">Admin</option>
            <option value="2">Manager</option>
            </select>    
        </div>         
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Username</label> 
        <div className='col-9'>
        <input className='form-control'
          type="text"         
          onChange={e => setName(e.target.value)}
        />
        </div>
      
      </div>

      <div className='row mb-3'>
         <label className='col-3'>Password</label>
         <div className='col-9'>
            <input className='form-control'
            type="text"         
            onChange={e => setPassword(e.target.value)}
            />
         </div>       
      </div>
           
     
      <div className='row mb-3'>
         <label className='col-3'>Email</label>
         <div className='col-9'>
         <input className='form-control'
          type="text"          
          onChange={e => setEmail(e.target.value)}
        />
         </div>
       
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Full Name</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setFullName(e.target.value)}
            />
        </div>      
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Photo</label> 
        <div className='col-9'>
          <input className='form-control'  type="file"  {...register("photo")} />
        </div>
       
      </div>
     
     <div className='offset-3'>
       <input type="submit" className='btn btn-primary' value="Submit" />
     </div>
      
    </form>
    </div>
    );
}