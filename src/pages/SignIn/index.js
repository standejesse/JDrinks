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
                    <LoginText>Entrar</LoginText>
                </ButtonLogin>
                <ContainerRegister>
                    <Text style={{fontSize:16}}>Não tem uma conta?</Text>
                    <ButtonRegister 
                    onPress={() => navigation.navigate("SignUp")}
                    >
                        <RegisterText>Cadastre-se</RegisterText>
                    </ButtonRegister>
                </ContainerRegister>
            </Animatable.View>

        </Container>
    )
}