import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { Http } from '../../../../model/Http';
import { Config } from '../../../../model/Config';
import { useNavigate } from "react-router-dom";

export default function EditUser(){
    const { id } = useParams()

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [role_id,setRoleId] = useState(0);
    const [full_name,setFullName] = useState("");


    useEffect(()=>{       
       
       let result= Http.get(`${Config.baseUrl}/users/${id}`);
       result.then(res=>{ 
      
        console.log(res);
           setName(res.name);
           setPassword(res.password);
           setEmail(res.email);
           setRoleId(res.role_id);
           setFullName(res.full_name);
       }); 
      
  
        //console.log(id);
  
      },[id]);

    const onSubmit = (data) => {   

        let formData=new FormData();
        formData.append("id",id);
        formData.append("name",name);
        formData.append("password",password);
        formData.append("full_name",full_name);
        formData.append("email",email);
        formData.append("role_id",role_id);
        formData.append("photo",data.photo[0]);        
          
        let result= Http.update(`${Config.baseUrl}/user/update`,formData);         
        result.then(res=>{ 
            console.log(res);
            //alert("Updated");        
            //navigate("/system/user");
        }); 
     }

    return(
        
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div>
          Role<br/>
          <select  value={role_id}   onChange={(e)=>setRoleId(e.target.value)}>
            <option value="1">Admin</option>
            <option value="2">Manager</option>
          </select>       
        </div>
        <div>
           Username<br/>
          <input
            type="text"  
            value={name}       
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
           Password<br/>
          <input
            type="text"  
            value={password}         
            onChange={e => setPassword(e.target.value)}
          />
        </div>
             
       
        <div>
          Email<br/>
          <input
            type="text"    
            value={email}        
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          Full Name<br/>
          <input
            type="text"    
            value={full_name}        
            onChange={e => setFullName(e.target.value)}
          />
        </div>
        <div>
          Photo<br/>
          <input  type="file"  {...register("photo")} />
        </div>
       
        <input type="submit" value="Submit" />
      </form>
    );
}