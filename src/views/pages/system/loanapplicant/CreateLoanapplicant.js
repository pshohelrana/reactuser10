import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Http } from '../../../../model/Http';
import { Config } from '../../../../model/Config';
import { useNavigate } from "react-router-dom";

export default function CreateLoanapplicant(){
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
          
        let result= Http.post(`${Config.baseUrl}/loanapplicants/save`,formData);         
        result.then(res=>{ 
            alert("Saved");        
            navigate("/system/loanapplicant");
        }); 
     }

    return(
        <div className='card'>
            <h5 className='card-header'>              
                   Create loanapplicant                
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
         <label className='col-3'>Nid</label>
         <div className='col-9'>
         <input className='form-control'
          type="text"          
          onChange={e => setNid(e.target.value)}
        />
         </div>
       
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Occupation</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setOccupation(e.target.value)}
            />
        </div>      
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Nominee_name</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setNominee_name(e.target.value)}
            />
        </div>      
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Nominee_account</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setNominee_account(e.target.value)}
            />
        </div>      
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Loan_amount</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setLoan_amount(e.target.value)}
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