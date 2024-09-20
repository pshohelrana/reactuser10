import React, {useState,useRef, useEffect} from 'react';
import { Http } from '../../../model/Http';
import { Config } from '../../../model/Config';
import './invoice.css';



export default function CreateLoanactiveInvoice(){

    //Order
  
   const [loanapplicant,setLoanapplicant]=useState(0);  
    const [date,setLoanactiveDate]=useState('');
   const [remark,setRemark]=useState(''); 
   const [payment_method,setPaymentMethod]=useState(''); 

   const priceRef=useRef(null);


   //Order Details
   const [items,setItems]=useState([]);
   
   //Cart
   const [price,setPrice]=useState(0);
   const [qty,setQty]=useState(0);
   const [discount,setDiscount]=useState(0);     
   const [loansystem,setLoansystem]=useState(0);   
   
   //for dropdown
   const [loanapplicants,setLoanapplicants]=useState([]);
   const [loansystems,setLoansystems]=useState([]);

   useEffect(()=>{
       
    //list of Loanapplicant
    let Loanapplicant_result= Http.get(`${Config.baseUrl}/loanapplicants`);
    Loanapplicant_result.then(res=>{
       
     setLoanapplicants(res.loanapplicants);       
    });
    
    //list of Loansystems
    let Loansystem_result= Http.get(`${Config.baseUrl}/loansystems`);
    Loansystem_result.then(res=>{ 
      setLoansystems(res.loansystems);       
    }); 



   },[]);

   function handleProcess(){

     console.log(items);


   }

   function Summary(){     
   let subtotal=0;
    let total=0;
    items.forEach(item=>{      
     total+=item.price*item.qty-item.discount;
        subtotal=total+item.price;
    });
    
     return subtotal;
   }
  
   
   function handleLoanapplicant(c){    
     setLoanapplicant(c)
   }



   function handleLoansystem(p){
    setQty(.10);
    setPrice(p.amount)
    setLoansystem(p)
    priceRef.current.focus();
   }
   
    function addToCart(){   
      
      if(qty==0)setQty(.10);   

      setItems(obj => [...obj,{loansystem_id:loansystem.id,name:loansystem.name,price:price,qty:qty,discount:discount}])
           
    }

    function removeLast(){
        setItems(items.slice(0, -1));
    
    }

    const total = Summary();
    


  
    const tax=5;
    const tax_amount=total*(tax/100);

    const nettotal=total+tax_amount;
    const year=12;
    const emi=nettotal/year;

    

    return(
        <>
        <div className="invoice p-3 mb-3">

<div className="row">
    <div className="col-12">
        <h4>
            <i className="fas fa-globe"></i>Loanactive INVOICE.
            <br/>
            
        </h4>
    </div>

</div>

<div className="row invoice-info">
    <div className="col-sm-4 invoice-col">
       

    </div>

    <div className="col-sm-4 invoice-col">
        Loanapplicants
        <address>
            <strong> <select className='form-control' onChange={(e)=>{handleLoanapplicant(JSON.parse(e.target.value))}}>
                           
                           {
                               loanapplicants.map((loanapplicant)=>(                                    
                                   <option  value={JSON.stringify(loanapplicant)}>{loanapplicant.name}</option>                                   
                               ))
                           }
                       </select>
          </strong><br/>
           Mobile: {loanapplicant.mobile}<br/>
          
           Address: {loanapplicant.address}<br/>
        </address>
    </div>
    <div className="col-sm-4 invoice-col">       
        <b>Loanactive Date:</b> <input type='date' onChange={(e)=>{setLoanactiveDate(e.target.value);}} /><br/>       
    </div>



</div>

<div className="row">
    <div className="col-12 table-responsive">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th style={{width:"50px"}}>SN
                    </th>
                    <th style={{width:"400px"}}>Loansystem <br/>
                        <select className='form-control' onChange={(e)=>{handleLoansystem(JSON.parse(e.target.value))}}>
                           
                            {
                                loansystems.map((loansystem)=>(                                    
                                    <option value={JSON.stringify(loansystem)}>{loansystem.name}</option>                                   
                                ))
                            }
                        </select>
                    </th>
                    <th style={{width:"100px"}}>Amount<br/>
                     <input ref={priceRef} type="text" className='form-control' value={price} onChange={(e)=>setPrice(e.target.value)} size="3"   name="price" id="price" />

                    </th>
                    <th style={{width:"100px"}}>Interest Rate<br/>
                    <input type="text" className='form-control' value={qty} onChange={(e)=>setQty(e.target.value)} name="qty" id="qty" />

                    </th>
                   
                    <th style={{display:"flex",justifyContent:"space-between"}}>
                        <span>Interest</span>
                        <div className='btn-group'>
                        <button className='btn btn-info' onClick={()=>addToCart()} > AddLoan </button>
                        <button className='btn btn-danger' onClick={()=>removeLast()} > Delete </button>              
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                
                   {
                    items.map((item,i)=>(
                        <tr key={item.Loansystem_id}>
                           <td>{i+1}</td>
                           <td>{item.name}</td>
                           <td>{item.price}</td>
                           <td>{item.qty}</td>
                          
                           <td>{item.price*item.qty-item.discount}</td>
                        </tr>
                    ))
                   }
                           
                         
            </tbody>
        </table>
    </div>

</div>

<div className="row">

    <div className="col-6">
        <p className="lead">Payment System:</p>
        <select onChange={(e)=>setPaymentMethod(e.target.value)} className='form-control'>
            <option value="cash">Cash</option>
            <option value="bkash">Chaque</option>
           
        </select>

        <p className="text-muted well well-sm shadow-none" style={{marginTop:"10px;"}}>
           <textarea onChange={(e)=>setRemark(e.target.value)} className='form-control' placeholder='remark'></textarea>
        </p>
    </div>

    <div className="col-6">
       

        <div className="table-responsive">
            <table className="table">
                <tbody>
                    <tr>
                        <th style={{width:"50%"}}>Subtotal:</th>
                        <td>{total}</td>
                    </tr>
                    <tr>
                        <th>Service:{tax}%</th>
                        <td>{tax_amount}</td>
                    </tr>
                    <tr>
                        <th>Net Total:</th>
                        <td>{nettotal}</td>
                    </tr>
                   
                    <tr>
                        <th>EMI </th>
                        <td>{emi}</td>
                    </tr>
                   
                   
                </tbody>
            </table>
        </div>
    </div>

</div>

<div className="row no-print">
    <div className="col-12">
     
        <button onClick={handleProcess} type="button" className="btn btn-success float-right"><i className="far fa-credit-card"></i>
           Save Loanactive
        </button>
      
    </div>
</div>
</div>
        </>
    );

}