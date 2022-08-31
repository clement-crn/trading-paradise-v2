import './navbar.css';
import { Link } from "react-router-dom";



export default function Navbar(){
    return(
        <div className='navbar'>
            <div>
            <ul>
                <li className='title'>Trading Paradise</li>
                <li><Link to ="/">Accueil</Link></li>
                <li><Link to ="/page2">Nous rejoindre</Link></li>
            </ul>    
        </div> 
            <div>
            
            </div>
        </div>

        
    )
}