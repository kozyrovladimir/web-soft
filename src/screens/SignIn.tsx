import {View, Text, Pressable} from "react-native";
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import {fakePressHandler} from "../utils/fakePressHandler";

const SignIn = () => {
    const insets = useSafeAreaInsets();

    return (
        <Container paddingTop={insets.top}>
            <LogoContainer>
                <View>
                    <Logo source={require('../assets/Logo.png')}/>
                </View>
            </LogoContainer>
            <SignInFormContainer>
                <InputArea>
                    <FontAwesome5 style={{marginRight: 16}} name="user-alt" size={16} color="black" />
                    <StyledInput placeholder={'Email or Phone Number'}></StyledInput>
                </InputArea>
                <InputArea>
                    <Entypo style={{marginRight: 16}} name="lock" size={16} color="black" />
                    <StyledInput placeholder={'Password'}></StyledInput>
                </InputArea>
                <ForgotPasswordWrapper>
                    <Pressable onPress={fakePressHandler('forgot password')}>
                        <Text>
                            FORGOT PASSWORD?
                        </Text>
                    </Pressable>
                </ForgotPasswordWrapper>
                <SignInButton onPress={fakePressHandler('sign in')}>
                    <SignInTextButton>
                        SIGN IN
                    </SignInTextButton>
                </SignInButton>
            </SignInFormContainer>
            <SignUpSocialMediaContainer>
                <SignUpTextContainer>
                    <SignUpText>
                        Don’t have an account?
                    </SignUpText>
                    <SignUpText>
                        <SignUpBoldText>SIGN UP </SignUpBoldText>using your email address or social media below
                    </SignUpText>
                </SignUpTextContainer>
                <SocialMediasContainer>
                    <SocialMediaItem onPress={fakePressHandler('facebook')}>
                        <FontAwesome5 name="facebook-f" size={16} color="white" />
                    </SocialMediaItem>
                    <SocialMediaItem onPress={fakePressHandler('twitter')}>
                        <FontAwesome5 name="twitter" size={16} color="white" />
                    </SocialMediaItem>
                    <SocialMediaItem onPress={fakePressHandler('google')}>
                        <FontAwesome5 name="google" size={16} color="white" />
                    </SocialMediaItem>
                    <SocialMediaItem onPress={fakePressHandler('apple')}>
                        <FontAwesome5 name="apple" size={16} color="white" />
                    </SocialMediaItem>
                </SocialMediasContainer>
            </SignUpSocialMediaContainer>
        </Container>
    );
};

type ContainerT = {
    paddingTop: number
}

const Container = styled.View<ContainerT>`
  flex: 1;
  padding: ${props => props.paddingTop}px 20px 20px 20px;
`;

const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 182px;
  height: 34px;
`;

const SignInFormContainer = styled.View`
  flex: 1;
`;

const SignUpSocialMediaContainer = styled.View`
  flex: 1;
  padding-top: 60px;
`;

const InputArea = styled.View`
  padding-left: 24px;
  padding-right: 52px;
  height: 48px;
  background-color: #e7e7e7;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.TextInput`
  display: block;
  flex-grow: 1;
`;

const ForgotPasswordWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

const SignInButton = styled.Pressable`
  background-color: black;
  width: 190px;
  flex-direction: row;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  align-self: center;
`;

const SignInTextButton = styled.Text`
  color: white;
  font-size: 16px;
`;

const SignUpText = styled.Text`
  text-align: center;
`;

const SignUpBoldText = styled.Text`
  font-weight: bold;
`;

const SocialMediasContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const SocialMediaItem = styled.Pressable`
  background-color: black;
  margin: 10px;
  width: 38px;
  height: 38px;
  justify-content: center;
  align-items: center;
`

const SignUpTextContainer = styled.View`
  padding-bottom: 36px;
`;

export default SignIn;

