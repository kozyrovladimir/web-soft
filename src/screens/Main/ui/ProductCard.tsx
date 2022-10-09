import React from 'react';

import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

const ProductCard: React.FC = () => {
  return (
    <CardProductContainer>
      <CardProductImageContainer
        source={require('../../../assets/product_images/img_1.png')}
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
        <BrandName>Aldo</BrandName>
        <ModelDescription>REID Lace-Up Shoes Multi</ModelDescription>
        <ModelNumber>AED 123</ModelNumber>
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
  aspect-ratio: 1/1;
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
