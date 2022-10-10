import React from 'react';

import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface ProductCardI {
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardI> = ({ title, price, description }) => {
  const priceString = `${price} $`;

  return (
    <CardProductContainer>
      <CardProductImageContainer
        /* 'aspectRatio: 1' fix problems with android */
        style={{ aspectRatio: 1 }}
        source={require('../../../assets/product_images/img.png')}
        resizeMode="stretch"
      >
        <TopCardInfoContainer>
          <StarPressableContainer>
            <FontAwesome name="star" size={18} color="gold" />
          </StarPressableContainer>
          <SaleContainer>
            <SaleText>50% off</SaleText>
          </SaleContainer>
        </TopCardInfoContainer>
      </CardProductImageContainer>
      <CardProductInfoContainer>
        <BrandName>{title}</BrandName>
        <ModelDescription>{description}</ModelDescription>
        <ModelNumber>{priceString}</ModelNumber>
      </CardProductInfoContainer>
    </CardProductContainer>
  );
};

const CardProductContainer = styled.View`
  width: 50%;
  border: 1px solid #ccc;
`;

const CardProductImageContainer = styled.ImageBackground`
  width: 100%;
  padding-top: 12px;
`;

const StarPressableContainer = styled.Pressable`
  margin-left: 12px;
`;

const SaleContainer = styled.View`
  background-color: black;
  padding: 4px;
`;

const SaleText = styled.Text`
  font-size: 8px;
  color: white;
`;

const TopCardInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CardProductInfoContainer = styled.View`
  padding: 12px;
  height: 100px;
`;

const BrandName = styled.Text`
  font-size: 12px;
  color: #6f7f8a;
  margin-bottom: 4px;
`;

const ModelDescription = styled.Text`
  letter-spacing: 1px;
  color: #6f7f8a;
  margin-bottom: 8px;
`;

const ModelNumber = styled.Text`
  font-weight: bold;
  text-align: right;
`;

export default ProductCard;
