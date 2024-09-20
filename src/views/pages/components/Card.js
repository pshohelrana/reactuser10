export default function Card(props){

    function Add(e){
      console.log("Clicked!");
    }
  
    return(
      <div>
         <div><h1>{props.name}</h1>
          <p>
            {props.children}
          </p>
         </div>
         <div>
          <button onClick={Add}>Add To Cart</button>
         </div>
      </div>
    );
  }