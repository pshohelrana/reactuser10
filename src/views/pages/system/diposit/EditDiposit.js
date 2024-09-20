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
    const [mobile, setMobile] = useState("");
    const [address,setAddress] = useState("");
    const [principle,setPrinciple] = useState("");
    const [paid,setPaid] = useState("");
    const [due,setDue] = useState("");
    const [loanactive_id,setLoanactive_id] = useState("");
   


    useEffect(()=>{       
       
       let result= Http.get(`${Config.baseUrl}/diposits/${id}`);
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
        formData.append("mobile",mobile);
        formData.append("address",address);
        formData.append("principle",principle);
        formData.append("paid",paid);
        formData.append("due",due);        
        formData.append("loanactive_id",loanactive_id);      
          
        let result= Http.update(`${Config.baseUrl}/diposit/update`,formData);         
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
           Mobile<br/>
          <input
            type="text"  
            value={name}       
            onChange={e => setMobile(e.target.value)}
          />
        </div>
        <div>
           Address<br/>
          <input
            type="text"  
            value={address}         
            onChange={e => setAddress(e.target.value)}
          />
        </div>
             
       
        <div>
          Principle<br/>
          <input
            type="text"    
            value={principle}        
            onChange={e => setPrinciple(e.target.value)}
          />
        </div>
        <div>
          Paid<br/>
          <input
            type="text"    
            value={paid}        
            onChange={e => setPaid(e.target.value)}
          />
        </div>
        <div>
          Due<br/>
          <input
            type="text"    
            value={due}        
            onChange={e => setDue(e.target.value)}
          />
        </div>
        <div>
          Loanactive_id<br/>
          <input
            type="text"    
            value={loanactive_id}        
            onChange={e => setLoanactive_id(e.target.value)}
          />
        </div>
       
        <input type="submit" value="Submit" />
      </form>
    );
}