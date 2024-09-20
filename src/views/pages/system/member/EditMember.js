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
    const [lastname, setLastname] = useState("");
    const [address,setAddress] = useState("");
    const [nid,setNid] = useState("");
    const [photo,setPhoto] = useState("");
    const [diposit,setDiposit] = useState("");
    const [withdrow,setWithdrow] = useState("");
    const [total_amount,setTotal_amount] = useState("");

    useEffect(()=>{       
       
       let result= Http.get(`${Config.baseUrl}/members/${id}`);
       result.then(res=>{ 
      
        console.log(res);
           setName(res.name);
           setLastname(res.lastname);
           setAddress(res.address);
           setNid(res.nid);
           setDiposit(res.diposit);
       }); 
      
  
        //console.log(id);
  
      },[id]);

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
          
        let result= Http.update(`${Config.baseUrl}/member/update`,formData);         
        result.then(res=>{ 
            console.log(res);
            //alert("Updated");        
            //navigate("/system/user");
        }); 
     }

    return(
        
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      
        <div>
           Membername<br/>
          <input
            type="text"  
            value={name}       
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
           Lastname<br/>
          <input
            type="text"  
            value={lastname}         
            onChange={e => setLastname(e.target.value)}
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
          Diposit<br/>
          <input
            type="text"    
            value={diposit}        
            onChange={e => setDiposit(e.target.value)}
          />
        </div>
        <div>
          Nid<br/>
          <input
            type="text"    
            value={withdrow}        
            onChange={e => setWithdrow(e.target.value)}
          />
        </div>
        <div>
          Nid<br/>
          <input
            type="text"    
            value={total_amount}        
            onChange={e => setTotal_amount(e.target.value)}
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