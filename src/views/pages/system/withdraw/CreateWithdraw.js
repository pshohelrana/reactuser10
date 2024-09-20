import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Http } from '../../../../model/Http';
import { Config } from '../../../../model/Config';
import { useNavigate } from "react-router-dom";

export default function CreateWithdraw(){
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [name, setName] = useState("");
    const [policy, setPolicy] = useState("");
    const [lastname,setLastname] = useState("");
    const [loanamount,setLoanamount] = useState(0);
    const [interest_rate,setInterest_rate] = useState("");
    const [net_amount,setNet_amount] = useState("");
    const [member_id,setMember_id] = useState("");

    const onSubmit = (data) => {
   
        let formData=new FormData();
        formData.append("name",name);
        formData.append("policy",policy);
        formData.append("lastname",lastname);
        formData.append("loanamount",loanamount);
        formData.append("interest_rate",interest_rate);
        formData.append("net_amount",net_amount);
        formData.append("member_id",member_id);
       
        formData.append("photo",data.photo[0]);        
          
        let result= Http.post(`${Config.baseUrl}/withdraws/save`,formData);         
        result.then(res=>{ 
            alert("Saved");        
            navigate("/system/withdraw");
        }); 
     }

    return(
        <div className='card'>
            <h5 className='card-header'>              
                   Create Withdrow                
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
        <label className='col-3'>Policy</label> 
        <div className='col-9'>
        <input className='form-control'
          type="text"         
          onChange={e => setPolicy(e.target.value)}
        />
        </div>
      
      </div>

      <div className='row mb-3'>
         <label className='col-3'>Lastname</label>
         <div className='col-9'>
            <input className='form-control'
            type="text"         
            onChange={e => setLastname(e.target.value)}
            />
         </div>       
      </div>
           
     
      <div className='row mb-3'>
         <label className='col-3'>Loanamount</label>
         <div className='col-9'>
         <input className='form-control'
          type="text"          
          onChange={e => setLoanamount(e.target.value)}
        />
         </div>
       
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Interest_rate</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setInterest_rate(e.target.value)}
            />
        </div>      
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Netamount</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setNet_amount(e.target.value)}
            />
        </div>      
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Member_id</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setMember_id(e.target.value)}
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