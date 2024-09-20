import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Http } from '../../../../model/Http';
import { Config } from '../../../../model/Config';
import { useNavigate } from "react-router-dom";

export default function CreateExpense(){
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [name, setName] = useState("");
    const [paid_taka, setPaid_taka] = useState("");
    const [unpaid_taka,setUnpaid_taka] = useState("");
    const [remark,setRemark] = useState("");
    
    
    const onSubmit = (data) => {
   
        let formData=new FormData();
        formData.append("name",name);
        formData.append("paid_taka",paid_taka);
        formData.append("unpaid_taka",unpaid_taka);
        formData.append("remark",remark);
            
          
        let result= Http.post(`${Config.baseUrl}/expenses/save`,formData);         
        result.then(res=>{ 
            alert("Saved");        
            navigate("/system/expense");
        }); 
     }

    return(
        <div className='card'>
            <h5 className='card-header'>              
                   Create Expense               
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
        <label className='col-3'>Paid_taka</label> 
        <div className='col-9'>
        <input className='form-control'
          type="text"         
          onChange={e => setPaid_taka(e.target.value)}
        />
        </div>
      
      </div>

      <div className='row mb-3'>
         <label className='col-3'>unpaid_taka</label>
         <div className='col-9'>
            <input className='form-control'
            type="text"         
            onChange={e => setUnpaid_taka(e.target.value)}
            />
         </div>       
      </div>
           
     
      <div className='row mb-3'>
         <label className='col-3'>Remark</label>
         <div className='col-9'>
         <input className='form-control'
          type="text"          
          onChange={e => setRemark(e.target.value)}
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