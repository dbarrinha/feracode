import React, { useEffect, useState } from 'react';
import { signOut } from '../../services/auth'
import { Container,Content,CoverPic } from './styles';
import Sidebar from '../../components/Sidebar';
import FeedArea from '../../components/FeedArea';
import TrendsArea from '../../components/TrendsArea';
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

   /* if (!user) {
        return (
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }*/

    return (
        <Content>
            <CoverPic></CoverPic>
            <Container>
                <Sidebar />
                <FeedArea />
                <TrendsArea />
            </Container>
        </Content>
    );
}
