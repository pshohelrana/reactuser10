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
    const [taka, setTaka] = useState("");
   


    useEffect(()=>{       
       
       let result= Http.get(`${Config.baseUrl}/incomes/${id}`);
       result.then(res=>{ 
      
        console.log(res);
          //  setName(res.name);
          //  setPassword(res.password);
          //  setEmail(res.email);
          //  setRoleId(res.role_id);
          //  setFullName(res.full_name);
       }); 
      
  
        //console.log(id);
  
      },[id]);

    const onSubmit = (data) => {   

        let formData=new FormData();
        formData.append("name",name);
        formData.append("taka",taka);
       
        let result= Http.update(`${Config.baseUrl}/income/update`,formData);         
        result.then(res=>{ 
            console.log(res);
            //alert("Updated");        
            //navigate("/system/user");
        }); 
     }

    return(
        
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div>
          Name<br/>
          <input
            type="text"  
            value={name}       
            onChange={e => setName(e.target.value)}
          />  
        </div>
        <div>
           Income<br/>
          <input
            type="text"  
            value={taka}       
            onChange={e => setTaka(e.target.value)}
          />
        </div>
       
       
        <input type="submit" value="Submit" />
      </form>
    );
}