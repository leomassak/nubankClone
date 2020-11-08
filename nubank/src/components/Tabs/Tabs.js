import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

export default function Tabs() {
  return (
      <S.ViewContainer>
          <S.TabContainer>
              <TabItem>
                  <Icon name="person-add" size={24} color="#FFFFFF"/>
              </TabItem>
          </S.TabContainer>
      </S.ViewContainer>
  );
}