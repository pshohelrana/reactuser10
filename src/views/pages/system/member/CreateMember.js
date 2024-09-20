import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Http } from '../../../../model/Http';
import { Config } from '../../../../model/Config';
import { useNavigate } from "react-router-dom";

export default function CreateMember(){
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [address,setAddress] = useState("");
    const [nid,setNid] = useState("");
    const [photo,setPhoto] = useState("");
    const [diposit,setDiposit] = useState("");
    const [withdrow,setWithdrow] = useState("");
    const [total_amount,setTotal_amount] = useState("");
   

    const onSubmit = (data) => {
   
        let formData=new FormData();
        formData.append("name",name);
        formData.append("lastname",lastname);
        formData.append("address",address);
        formData.append("nid",nid);
        formData.append("diposit",diposit);
        formData.append("withdrow",withdrow);
        formData.append("total_amount",total_amount);
        formData.append("photo",data.photo[0]);        
          
        let result= Http.post(`${Config.baseUrl}/members/save`,formData);         
        result.then(res=>{ 
            alert("Saved");        
            navigate("/system/member");
        }); 
     }

    return(
        <div className='card'>
            <h5 className='card-header'>              
                   Create Member                
            </h5>

    <form className='card-body' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
     
      <div className='row mb-3'>
        <label className='col-3'>Membername</label> 
        <div className='col-9'>
        <input className='form-control'
          type="text"         
          onChange={e => setName(e.target.value)}
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
        <label className='col-3'>Diposit</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setDiposit(e.target.value)}
            />
        </div>      
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Withdrow</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setWithdrow(e.target.value)}
            />
        </div>      
      </div>
      <div className='row mb-3'>
        <label className='col-3'>Total_amount</label> 
        <div className='col-9'>
            <input className='form-control'
            type="text"          
            onChange={e => setTotal_amount(e.target.value)}
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