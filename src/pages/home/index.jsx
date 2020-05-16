import React, { useEffect, useState } from 'react';

import { Container, Content, CoverPic, CoverButton, CoverPicContent } from './styles';
import Sidebar from '../../components/Sidebar';
import FeedArea from '../../components/FeedArea';
import TrendsArea from '../../components/TrendsArea';
import { useHistory } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";

export default function Home(props) {
    let hist = useHistory()
    let [user, setUser] = useState(null)
    let [coverUrl, setCoverUrl] = useState("")

    return (
        <Content>
            <CoverPicContent>
                <CoverButton><AiFillEdit size="20" style={{ marginRight: 10 }} /> Editar </CoverButton>
                <CoverPic src={/*!user.photoURL ? */require("../../assets/imgs/capa.jpg")/*:  user.photoURL*/}>
                </CoverPic>
            </CoverPicContent>
            <Container>
                <Sidebar />
                <FeedArea />
                <TrendsArea />
            </Container>
        </Content>
    );
}
