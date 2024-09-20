  
  export default function Student(props){
    let student=props.data;
    return (
      <div className='profile'>
         <div><img src={'img/'+student.photo} width="100" /></div>  
           <div>Name: {student.name}</div>  
           <div>Class: {student.class}</div>  
      </div>
    );
  }