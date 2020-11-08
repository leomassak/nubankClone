import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';
import NuLogo from '~/assets/images/Nubank_Logo.png';

export default function Header() {
  return (
      <S.DefaultHeaderContainer>
          <S.LogoContainer>
              <S.NuLogo source={NuLogo} />
              <S.UserName>Leonardo</S.UserName>
          </S.LogoContainer>
          <Icon name="keyboard-arrow-down" size={20} color="#FFFF"/>
      </S.DefaultHeaderContainer>
  );
}