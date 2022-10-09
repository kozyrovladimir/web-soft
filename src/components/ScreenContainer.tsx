import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface ScreenContainerI {
  children: React.ReactNode;
}

const ScreenContainer: React.FC<ScreenContainerI> = ({ children }) => {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;

  return (
    <StyledScreenContainer paddingTop={paddingTop}>{children}</StyledScreenContainer>
  );
};

type ScreenContainerT = {
  paddingTop: number;
};

const StyledScreenContainer = styled.View<ScreenContainerT>`
  flex: 1;
  padding: ${props => props.paddingTop}px 20px 20px 20px;
`;

export default ScreenContainer;
