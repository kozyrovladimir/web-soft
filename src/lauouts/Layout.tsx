import React from 'react';

import { FontAwesome, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

interface LayoutI {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutI> = ({ children }) => {
  return (
    <MainScreenContainer>
      <AppBar>
        <Pressable>
          <SimpleLineIcons name="menu" size={20} color="black" />
        </Pressable>
        <LogoImage source={require('../assets/logo-sm.png')} />
        <Pressable>
          <SimpleLineIcons name="basket" size={20} color="black" />
        </Pressable>
      </AppBar>
      {children}
      <TabBar>
        <Pressable>
          <FontAwesome5 name="home" size={24} color="gray" />
        </Pressable>
        <Pressable>
          <FontAwesome5 name="search" size={24} color="black" />
        </Pressable>
        <Pressable>
          <FontAwesome name="star" size={24} color="gray" />
        </Pressable>
        <Pressable>
          <FontAwesome name="user" size={24} color="gray" />
        </Pressable>
      </TabBar>
    </MainScreenContainer>
  );
};

const MainScreenContainer = styled.View`
  flex: 1;
  background-color: white;
  justify-content: space-between;
`;

const AppBar = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.Image`
  height: 20px;
  width: 110px;
`;

const TabBar = styled.View`
  height: 72px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export default Layout;
