export default function Header(props){
    return(
      <div>
        <h1 title={props.title} style={{color:props.color}}>{props.title}</h1>
      </div>
    );
  }