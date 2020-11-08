import React from 'react';

import * as S from './styles';
import DefaultHeader from '~/components/Header/DefaultHeader';

export default function Home() {
  return(
      <S.HomeContainer>
          <DefaultHeader />
      </S.HomeContainer>
  );
}