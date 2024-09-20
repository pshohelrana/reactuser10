import { Link } from "react-router-dom";
export default function Menu(props){
    let menus=props.data;
  
    const listItems = menus.map((menu) =>   
      <li key={menu.id}><Link to={menu.route}>{menu.name}</Link></li>
    );
  
    return(
     
          <ul>
            {listItems}
          </ul>
     
      
      
    );
  }