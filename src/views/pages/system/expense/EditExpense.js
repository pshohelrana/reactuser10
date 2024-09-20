import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { Http } from '../../../../model/Http';
import { Config } from '../../../../model/Config';
import { useNavigate } from "react-router-dom";

export default function EditExpense(){
    const { id } = useParams()

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [name, setName] = useState("");
    const [paid_taka, setPaid_taka] = useState("");
    const [unpaid_taka,setUnpaid_taka] = useState("");
    const [remark,setRemark] = useState("");
    


    useEffect(()=>{       
       
       let result= Http.get(`${Config.baseUrl}/expenses/${id}`);
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
        formData.append("paid_taka",paid_taka);
        formData.append("unpaid_taka",unpaid_taka);
        formData.append("remark",remark);
          
          
        let result= Http.update(`${Config.baseUrl}/expense/update`,formData);         
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
           Paid Taka<br/>
          <input
            type="text"  
            value={paid_taka}       
            onChange={e => setPaid_taka(e.target.value)}
          />
        </div>
        <div>
           Unpaid Taka<br/>
          <input
            type="text"  
            value={unpaid_taka}         
            onChange={e => setUnpaid_taka(e.target.value)}
          />
        </div>
             
       
        <div>
          Remark<br/>
          <input
            type="text"    
            value={remark}        
            onChange={e => setRemark(e.target.value)}
          />
        </div>
        
       
        <input type="submit" value="Submit" />
      </form>
    );
}