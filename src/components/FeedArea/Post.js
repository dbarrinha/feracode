import React from 'react';
import { Post, Avatar, ProfileContent, UserNameText, ReactionIcon,ReactionText } from './styles';
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineUpload, AiOutlineMessage } from 'react-icons/ai';


function PostComponent({ post }) {
    return (
        <Post>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                height: 50
            }}>
                <ProfileContent>
                    <Avatar src={require("../../assets/imgs/profile.png")} />
                </ProfileContent>
                <UserNameText>Danilo Falcão barrinha</UserNameText>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <p>
                    Tudo que acontece na nossa vida é essencial. Até os erros trazem a possibilidade do aprendizado.
                </p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <ReactionIcon>
                    <AiOutlineMessage />
                    <ReactionText>64</ReactionText>
                </ReactionIcon>
                <ReactionIcon>
                    <AiOutlineRetweet />
                    <ReactionText>3,1 mil</ReactionText>
                </ReactionIcon>
                <ReactionIcon>
                    <AiOutlineHeart />
                    <ReactionText>16,4 mil</ReactionText>
                </ReactionIcon>
                <ReactionIcon>
                    <AiOutlineUpload />
                </ReactionIcon>
            </div>
        </Post>
    );
}

export default PostComponent;