import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { Http } from '../../../../model/Http';
import { Config } from '../../../../model/Config';
import { useNavigate } from "react-router-dom";

export default function EditLoanapplicant(){
    const { id } = useParams()

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address,setAddress] = useState("");
    const [nid,setNid] = useState("");
    const [occupation,setOccupation] = useState("");
    const [nominee_name,setNominee_name] = useState("");
    const [nominee_account,setNominee_account] = useState("");
    const [loan_amount,setLoan_amount] = useState("");
    const [interest_rate,setInterest_rate] = useState("");
    const [photo,setPhoto] = useState("");


    useEffect(()=>{       
       
       let result= Http.get(`${Config.baseUrl}/loanapplicants/${id}`);
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
        formData.append("nid",nid);
        formData.append("occupation",occupation);
        formData.append("nominee_name",nominee_name);
        formData.append("nominee_account",nominee_account);
        formData.append("loan_amount",loan_amount);
        formData.append("interest_rate",interest_rate);
        
        formData.append("photo",data.photo[0]);        
          
        let result= Http.update(`${Config.baseUrl}/loanapplicant/update`,formData);         
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
            value={mobile}       
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
          Nid<br/>
          <input
            type="text"    
            value={nid}        
            onChange={e => setNid(e.target.value)}
          />
        </div>
        <div>
          Occupation<br/>
          <input
            type="text"    
            value={occupation}        
            onChange={e => setOccupation(e.target.value)}
          />
        </div>
        <div>
          Nominee_name<br/>
          <input
            type="text"    
            value={nominee_name}        
            onChange={e => setNominee_name(e.target.value)}
          />
        </div>
        <div>
          Nominee_account<br/>
          <input
            type="text"    
            value={nominee_account}        
            onChange={e => setNominee_account(e.target.value)}
          />
        </div>
        <div>
          loan_amount<br/>
          <input
            type="text"    
            value={loan_amount}        
            onChange={e => setLoan_amount(e.target.value)}
          />
        </div>
        <div>
          Interest_rate<br/>
          <input
            type="text"    
            value={interest_rate}        
            onChange={e => setInterest_rate(e.target.value)}
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