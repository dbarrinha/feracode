import React from 'react';
import { Container, ProfileContent, Avatar, Nav, NavItem, NavButtom, NavIcon, NavText } from './styles';
import { useHistory, useLocation } from "react-router-dom";
import rotas from '../../routes'

function Sidebar() {
  let hist = useHistory()
  let location = useLocation()
  console.log(location)
  return (
    <Container>
      <ProfileContent>
        <Avatar src={require("../../assets/imgs/profile.png")} />
      </ProfileContent>

      <Nav>
        {
          rotas.map(({ path, name, Icon }, key) => {
            return (
              <NavItem>
                <NavButtom isCurrentPath={location.pathname == path} onClick={() => hist.push(path)}>
                  <NavIcon><Icon size={36} /></NavIcon>
                  <NavText>{name}</NavText>
                </NavButtom>
              </NavItem>
            );
          })
        }
      </Nav>
    </Container>
  );
}

export default Sidebar;