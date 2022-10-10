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

  const productsInPackages = packItems(products, countItemsInRow);

  return (
    <ScrollView>
      {productsInPackages.map(([firstProduct, secondProduct]) => {
        return (
          <HorizontalView>
            <ProductCard
              price={firstProduct.price}
              title={firstProduct.title}
              description={firstProduct.description}
            />
            {secondProduct && (
              <ProductCard
                price={secondProduct.price}
                title={secondProduct.title}
                description={secondProduct.description}
              />
            )}
          </HorizontalView>
        );
      })}
    </ScrollView>
  );
};

const HorizontalView = styled.View`
  flex-direction: row;
`;

export default ProductsList;
