import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Http } from '../../../../model/Http';
import { Config } from '../../../../model/Config';
import { useNavigate } from "react-router-dom";

export default function CreateIncome(){
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [name, setName] = useState("");
    const [taka, setTaka] = useState("");
   
   
    
    const onSubmit = (data) => {
   
        let formData=new FormData();
        formData.append("name",name);
        formData.append("taka",taka);
            
          
        let result= Http.post(`${Config.baseUrl}/incomes/save`,formData);         
        result.then(res=>{ 
            alert("Saved");        
            navigate("/system/income");
        }); 
     }

    return(
        <div className='card'>
            <h5 className='card-header'>              
                   Create Income               
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
        <label className='col-3'>Taka</label> 
        <div className='col-9'>
        <input className='form-control'
          type="text"         
          onChange={e => setTaka(e.target.value)}
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