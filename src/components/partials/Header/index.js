import React from 'react'
import { Link } from "react-router-dom";
import { HeaderArea } from './styled'

import { isLogged, doLogout } from "../../../helpers/AuthHandler";

const Header = () => {
    let logged = isLogged()

    const handleLogout = () => {
        doLogout();
        window.location.href = '/'
    }

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo1">H</span>
                        <span className="logo2">E</span>
                        <span className="logo3">R</span>
                        <span className="logo4">M</span>
                        <span className="logo5">E</span>
                        <span className="logo6">S</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                        <>
                            <li>
                                <Link to="/my-account">Minha Conta</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Sair</button>
                            </li>
                            <li>
                                <Link to="/add-challenge" className="button">Cadastre desafio</Link>
                            </li>
                        </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="button">Cadastre desafio</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header