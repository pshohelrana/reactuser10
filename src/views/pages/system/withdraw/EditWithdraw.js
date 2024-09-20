import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { Http } from '../../../../model/Http';
import { Config } from '../../../../model/Config';
import { useNavigate } from "react-router-dom";

export default function EditWithdraw(){
    const { id } = useParams()

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [name, setName] = useState("");
    const [policy, setPolicy] = useState("");
    const [lastname,setLastname] = useState("");
    const [loanamount,setLoanamount] = useState(0);
    const [interest_rate,setInterest_rate] = useState("");
    const [net_amount,setNet_amount] = useState("");
    const [member_id,setMember_id] = useState("");



    useEffect(()=>{       
       
       let result= Http.get(`${Config.baseUrl}/withdraws/${id}`);
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
        formData.append("policy",policy);
        formData.append("lastname",lastname);
        formData.append("loanamount",loanamount);
        formData.append("interest_rate",interest_rate);
        formData.append("net_amount",net_amount);
        formData.append("member_id",member_id);  
          
        let result= Http.update(`${Config.baseUrl}/withdraw/update`,formData);         
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
           Policy<br/>
          <input
            type="text"  
            value={policy}       
            onChange={e => setPolicy(e.target.value)}
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
          Loan_amount<br/>
          <input
            type="text"    
            value={loanamount}        
            onChange={e => setLoanamount(e.target.value)}
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
          Netamount<br/>
          <input
            type="text"    
            value={net_amount}        
            onChange={e => setNet_amount(e.target.value)}
          />
        </div>
        <div>
          MemberId<br/>
          <input
            type="text"    
            value={member_id}        
            onChange={e => setMember_id(e.target.value)}
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