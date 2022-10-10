import React from 'react';

import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface FilterButtonI {
  onPressHandler?: () => void;
  children?: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonI> = ({ onPressHandler, children }) => {
  return (
    <FilterButtonBox onPress={onPressHandler}>
      <Feather name="filter" size={16} color="black" />
      <FilterButtonText>{children}</FilterButtonText>
    </FilterButtonBox>
  );
};

const FilterButtonBox = styled.Pressable`
  flex-direction: row;
  border: 1px solid black;
  padding: 8px;
`;

const FilterButtonText = styled.Text`
  margin-left: 10px;
`;

export default FilterButton;
