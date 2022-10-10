import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Pressable, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';

import ProductCard from './ui/ProductCard';
import FilterButton from './ui/FilterButton';

const Main = (): JSX.Element => {
  return (
    <MainScreenContainer>
      <AppBar>
        <Pressable>
          <SimpleLineIcons name="menu" size={20} color="black" />
        </Pressable>
        <LogoImage source={require('../../assets/logo-sm.png')} />
        <Pressable>
          <SimpleLineIcons name="basket" size={20} color="black" />
        </Pressable>
      </AppBar>
      <FilterBar>
        <FilterTextContainer>
          <Text>All Products</Text>
        </FilterTextContainer>
        <FilterButtonsContainer>
          <FilterButton>Filter</FilterButton>
          <HorizontalView>
            <StyledPresssable>
              <FontAwesome5 name="list" size={16} color="gray" />
            </StyledPresssable>
            <Pressable>
              <Feather name="grid" size={16} color="black" />
            </Pressable>
          </HorizontalView>
        </FilterButtonsContainer>
      </FilterBar>
      <ScrollView>
        <HorizontalView>
          <ProductCard />
          <ProductCard />
        </HorizontalView>
        <HorizontalView>
          <ProductCard />
          <ProductCard />
        </HorizontalView>
        <HorizontalView>
          <ProductCard />
          <ProductCard />
        </HorizontalView>
        <HorizontalView>
          <ProductCard />
          <ProductCard />
        </HorizontalView>
      </ScrollView>
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
  padding-bottom: 16px;
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

const FilterBar = styled.View`
  height: 100px;
`;

const FilterTextContainer = styled.View`
  height: 50px;
  justify-content: center;
`;

const FilterButtonsContainer = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HorizontalView = styled.View`
  flex-direction: row;
`;

const StyledPresssable = styled.Pressable`
  margin-right: 12px;
`;

export default Main;
