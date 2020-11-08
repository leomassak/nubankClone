import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

export default function Tabs({translateY}) {
  return (
      <S.ViewContainer style={{
          transform: [
              {
                  translateY: translateY.interpolate({
                      inputRange: [0, 380],
                      outputRange: [0, 30],
                  })
              },
          ],
          opacity: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [1, 0.3],
              extrapolate: 'clamp',
          })
      }}>
          <S.TabContainer>
              <S.TabItem>
                  <Icon name="person-add" size={24} color="#FFFFFF"/>
                  <S.TabText>Indicar amigos</S.TabText>
              </S.TabItem>
              <S.TabItem>
                  <Icon name="chat-bubble-outline" size={24} color="#FFFFFF"/>
                  <S.TabText>Cobrar</S.TabText>
              </S.TabItem>
              <S.TabItem>
                  <Icon name="arrow-downward" size={24} color="#FFFFFF"/>
                  <S.TabText>Depositar</S.TabText>
              </S.TabItem>
              <S.TabItem>
                  <Icon name="arrow-upward" size={24} color="#FFFFFF"/>
                  <S.TabText>Transferir</S.TabText>
              </S.TabItem>
              <S.TabItem>
                  <Icon name="lock" size={24} color="#FFFFFF"/>
                  <S.TabText>Bloquear cartão</S.TabText>
              </S.TabItem>
          </S.TabContainer>
      </S.ViewContainer>
  );
}