import React, { useEffect, useState } from 'react';
import { signOut } from '../../services/auth'
// import { Container } from './styles';
import { useHistory } from "react-router-dom";

export default function Home(props) {
    let hist = useHistory()
    let [user, setUser] = useState(null)
    useEffect(() => {
        let response = localStorage.getItem("User@testeferacode")
        if (response) setUser(JSON.parse(response))
    }, [])
    const sair = () => {
        signOut().then(res => {
            hist.push('/')
        }).catch(err => {
            //trata erro de logout
        })
    }

    if (!user) {
        return (
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>Home</h1>
            <h6>Nome: {user.displayName}</h6>
            <img src={user.photoURL}></img>
            <button onClick={sair}>Sair</button>
        </div>
    );
}
