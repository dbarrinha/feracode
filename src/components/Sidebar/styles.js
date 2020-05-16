import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background-color: #fff;
    top:-100px;
    bottom: 0px;
    width: 225px;
    border-radius: 0px 10px 0px 0px;
    transition: 1s;

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const ProfileContent = styled.div`
    display: flex;
    justify-content: center;
`;

export const Avatar = styled.img`
    overflow: hidden;
    margin-bottom: 15px;
    position: relative;
    width: 124px;
    height: 124px;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`;

export const Nav = styled.ul`
    margin: 0px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const NavItem = styled.li`
    list-style-type: none;
`;

export const NavButtom = styled.div`
    display: flex; 
    font-weight: bold;
    font-size: 20px;
    border-radius: 30px;
    background-color: ${props => props.isCurrentPath ? "rgb(0,0,0,0.1)":  "transparent"};
    justify-content: center;
    align-items: center;

    :hover {
        background-color: rgb(0,0,0,0.1);
    }
`;

export const NavIcon = styled.div`
    display: inline-block;
    margin-right: 20px;
    transition: 1s;
    
    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;

export const NavText = styled.span`
     @media (max-width: 768px) {
        display: none;
    }
`;
