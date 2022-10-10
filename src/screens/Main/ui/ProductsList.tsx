// TDO: ned to continue
import React from 'react';

import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { ProductI } from '../../../types/ProductType';
import { packItems } from '../../../utils/packItems';

import ProductCard from './ProductCard';

interface ProductsListI {
  products: ProductI[];
}

const ProductsList: React.FC<ProductsListI> = ({ products }) => {
  const countItemsInRow = 2;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const productsInPackages = packItems(products, countItemsInRow);

  return (
    <ScrollView>
      {/*<HorizontalView>*/}
      {/*  <ProductCard />*/}
      {/*  <ProductCard />*/}
      {/*</HorizontalView>*/}
      {/*<HorizontalView>*/}
      {/*  <ProductCard />*/}
      {/*  <ProductCard />*/}
      {/*</HorizontalView>*/}
      {/*<HorizontalView>*/}
      {/*  <ProductCard />*/}
      {/*  <ProductCard />*/}
      {/*</HorizontalView>*/}
      {/*<HorizontalView>*/}
      {/*  <ProductCard />*/}
      {/*  <ProductCard />*/}
      {/*</HorizontalView>*/}
    </ScrollView>
  );
};

const HorizontalView = styled.View`
  flex-direction: row;
`;

export default ProductsList;
