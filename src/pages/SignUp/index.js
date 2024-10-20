import React from 'react';
import {Text} from 'react-native'

import {
    Container,
    LogoText,
    Title,
    ButtonLogin,
    ContainerRegister,
    Input,LoginText,
    RegisterText,
    ContainerLogo,
    ButtonRegister
} from './styles'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';
export default () =>{
    const navigation = useNavigation();
    return(
        <Container>
            <ContainerLogo>
                <LogoText>JDrinks</LogoText>
            </ContainerLogo>
            <Animatable.View
            animation="fadeInUp" 
            style={{width:'100%',justifyContent:'center',alignItems:'center',}}
            >
                <Title>Login</Title>
                <Input 
                placeholder='Digite seu Login...'
                />
                <Title>Email</Title>
                <Input 
                placeholder='Digite seu Email...'
                />

                <Title>Senha</Title>
                <Input 
                placeholder='Digite sua Senha...'
                />

                <ButtonLogin 
                onPress={() => navigation.navigate('Drinks')}>
                    <LoginText>Cadastrar</LoginText>
                </ButtonLogin>
                <ContainerRegister>
                    <Text style={{fontSize:16}}>Já tem uma conta?</Text>
                    <ButtonRegister 
                    onPress={() => navigation.navigate("SignIn")}
                    >
                        <RegisterText>Faça Login</RegisterText>
                    </ButtonRegister>
                </ContainerRegister>
            </Animatable.View>

        </Container>
    )
}