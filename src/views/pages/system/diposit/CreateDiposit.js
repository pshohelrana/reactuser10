import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Http } from '../../../../model/Http';
import { Config } from '../../../../model/Config';
import { useNavigate } from "react-router-dom";

export default function CreateDiposit(){
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address,setAddress] = useState("");
    const [principle,setPrinciple] = useState("");
    const [paid,setPaid] = useState("");
    const [due,setDue] = useState("");
    const [loanactive_id,setLoanactive_id] = useState("");
   
    
    const onSubmit = (data) => {
   
        let formData=new FormData();
        formData.append("name",name);
        formData.append("mobile",mobile);
        formData.append("address",address);
        formData.append("principle",principle);
        formData.append("paid",paid);
        formData.append("due",due);        
        formData.append("loanactive_id",loanactive_id);        
          
        let result= Http.post(`${Config.baseUrl}/diposits/save`,formData);         
        result.then(res=>{ 
            alert("Saved");        
            navigate("/system/diposit");
        }); 
     }

    return(
        <div className='card'>
            <h5 className='card-header'>              
                   Create Diposit               
            </h5>

    <form className='card-body' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div className='row mb-3'>
        <label className='col-3 col-form-label'>Name</label>
        <div className='col-9'>
        <input className='form-control'
          type="text"         
          onChange={e => setName(e.target.value)}
        />  
        </div>         
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Mobile</label> 
        <div className='col-9'>
        <input className='form-control'
          type="text"         
          onChange={e => setMobile(e.target.value)}
        />
        </div>
      
      </div>

      <div className='row mb-3'>
         <label className='col-3'>Address</label>
         <div className='col-9'>
            <input className='form-control'
            type="text"         
            onChange={e => setAddress(e.target.value)}
            />
         </div>       
      </div>
           
     
      <div className='row mb-3'>
         <label className='col-3'>Principle</label>
         <div className='col-9'>
         <input className='form-control'
          type="text"          
          onChange={e => setPrinciple(e.target.value)}
        />
         </div>
       
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Paid</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setPaid(e.target.value)}
            />
        </div>      
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Due</label> 
        <div className='col-9'>
        <input className='form-control'
            type="text"          
            onChange={e => setDue(e.target.value)}
            />
        </div>
       
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Loanactive</label> 
        <div className='col-9'>
        <input className='form-control'
            type="text"          
            onChange={e => setLoanactive_id(e.target.value)}
            />
        </div>
       
      </div>
     
     <div className='offset-3'>
       <input type="submit" className='btn btn-primary' value="Submit" />
     </div>
      
    </form>
    </div>
    );
}