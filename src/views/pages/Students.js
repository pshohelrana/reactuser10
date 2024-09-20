export default function Students(props){
   let data3=[
      {"id":1,"name":"Mohammad Ali","class":"IX","roll":45,"photo":"ali.jpg"},
      {"id":2,"name":"Kamal Hossan","class":"X","roll":50,"photo":"kamal.jpg"},
    ];
  
    let data=data3;
 
 
 
    const students=data.map(student=>
     <Student data={student}  />
    );
 
 
    return(
     <div>
        {students}
     </div>
    );
 }
 