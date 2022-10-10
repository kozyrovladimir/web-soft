import React from 'react';

import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

const ViewSwitch: React.FC = () => {
  return (
    <HorizontalView>
      <StyledPresssable>
        <FontAwesome5 name="list" size={16} color="gray" />
      </StyledPresssable>
      <Pressable>
        <Feather name="grid" size={16} color="black" />
      </Pressable>
    </HorizontalView>
  );
};

const HorizontalView = styled.View`
  flex-direction: row;
`;

const StyledPresssable = styled.Pressable`
  margin-right: 12px;
`;

export default ViewSwitch;
