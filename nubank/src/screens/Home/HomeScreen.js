import React, { useState } from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Extrapolate } from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';
import DefaultHeader from '~/components/Header/DefaultHeader';
import Tabs from '~/components/Tabs/Tabs';
import Menu from '~/components/Menu/Menu';

export default function Home() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const opacityAnimation = new Animated.Value(0);

  const [visible, setVisible] = useState(true);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
    );

  function handlePanStateChange(event) {
    if(event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;
      translateY.setOffset(offset);
      translateY.setValue(0);

      if(translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(
        translateY, {
          toValue: opened ? 380 : 0,
          duration: 200,
          useNativeDriver: true,
        }
      ).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  function toggleInfoVisibility() {
    Animated.timing(opacityAnimation, {
      toValue: !!visible ? 1 : 0,
      duration: 200,
    }).start(() => setVisible(prevVisible => !prevVisible));
  }

  return(
      <S.HomeContainer>
          <DefaultHeader />
          <S.Content>
            <Menu translateY={translateY} />
            <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={handlePanStateChange}>
            <S.Card style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-200, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: Extrapolate.CLAMP,
                }),
              }]
            }}>
              <S.CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" onPress={toggleInfoVisibility} />
              </S.CardHeader>
              <S.CardContent>
                <S.CardTitle>Saldo disponível</S.CardTitle>
                <S.UserValueContainer>
                  <S.VisibilityMask style={{ opacity: opacityAnimation }} />
                  <S.CardDescription>R$ 999.999,99</S.CardDescription>
                </S.UserValueContainer>
              </S.CardContent>
              <S.CardFooter>
                <S.CardAnnotation>
                  Transferência de R$ 35,00
                </S.CardAnnotation>
              </S.CardFooter>
            </S.Card>
            </PanGestureHandler>
          </S.Content>
          <Tabs translateY={translateY} />
      </S.HomeContainer>
  );
}