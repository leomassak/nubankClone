import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

export default function Menu({translateY}) {
  return(
      <S.MenuContainer style={{
          opacity: translateY.interpolate({
              inputRange: [0, 250],
              outputRange: [0,1],
          }),
          transform: [{
              scale: translateY.interpolate({
                  inputRange: [0, 200],
                  outputRange: [0.5, 1],
                  extrapolate: 'clamp',
              })
          }]
      }}>
          <S.CodeContainer>
              <QRCode 
                value="https://google.com"
                size={80}
                color="#8B10AE"
                backgroundColor="#FFFFFF"
              />
            </S.CodeContainer>
  
              <S.NavContent>
                <S.NavItem>
                    <Icon name="help-outline" size={20} color="#FFFFFF"/>
                    <S.NavText>Me ajuda</S.NavText>
                </S.NavItem>
                <S.NavItem>
                    <Icon name="person-outline" size={20} color="#FFFFFF"/>
                    <S.NavText>Perfil</S.NavText>
                </S.NavItem>
                <S.NavItem>
                    <Icon name="credit-card" size={20} color="#FFFFFF"/>
                    <S.NavText>Configurar cartão</S.NavText>
                </S.NavItem>
                <S.NavItem>
                    <Icon name="smartphone" size={20} color="#FFFFFF"/>
                    <S.NavText>Configurações do App</S.NavText>
                </S.NavItem>
              </S.NavContent>
              <S.LogoutButton>
                  <S.LogoutButtonText>Sair do App</S.LogoutButtonText>
              </S.LogoutButton>
      </S.MenuContainer>
  );
}
