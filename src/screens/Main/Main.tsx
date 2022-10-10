import { ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';

import Layout from '../../lauouts/Layout';

import FilterButton from './ui/FilterButton';
import ProductCard from './ui/ProductCard';
import ViewSwitch from './ui/ViewSwitch';

const Main = (): JSX.Element => {
  // @ts-ignore
  return (
    <Layout>
      <FilterBar>
        <FilterTextContainer>
          <Text>All Products</Text>
        </FilterTextContainer>
        <FilterButtonsContainer>
          <FilterButton>Filter</FilterButton>
          <ViewSwitch />
        </FilterButtonsContainer>
      </FilterBar>
      <ScrollView>
        <HorizontalView>
          <ProductCard
            price={12}
            description={'REID Lace-Up Shoes Multi'}
            title={'Aldo'}
          />
          <ProductCard
            price={12}
            description={'REID Lace-Up Shoes Multi'}
            title={'Aldo'}
          />
        </HorizontalView>
        <HorizontalView>
          <ProductCard
            price={12}
            description={'REID Lace-Up Shoes Multi'}
            title={'Aldo'}
          />
          <ProductCard
            price={12}
            description={'REID Lace-Up Shoes Multi'}
            title={'Aldo'}
          />
        </HorizontalView>
        <HorizontalView>
          <ProductCard
            price={12}
            description={'REID Lace-Up Shoes Multi'}
            title={'Aldo'}
          />
          <ProductCard
            price={12}
            description={'REID Lace-Up Shoes Multi'}
            title={'Aldo'}
          />
        </HorizontalView>
        <HorizontalView>
          <ProductCard
            price={12}
            description={'REID Lace-Up Shoes Multi'}
            title={'Aldo'}
          />
          <ProductCard
            price={12}
            description={'REID Lace-Up Shoes Multi'}
            title={'Aldo'}
          />
        </HorizontalView>
      </ScrollView>
    </Layout>
  );
};

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

export default Main;
