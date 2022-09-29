import { Link } from "react-router-dom";
import './style.css';

function Header() {
    return (
        <header>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/cadastrocliente'>CADASTRO CLIENTE</Link></li>
                <li><Link to='/contacorrente'>CONTA CORRENTE</Link></li>
                <li><Link to='/financiamento'>FINANCIAMENTO</Link></li>
                <li><Link to='/sobrenos'>SOBRE NÓS</Link></li>
            </ul>
        </header>
    )
}
export default Header;

