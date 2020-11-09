import styled from 'styled-components/native';
import { StatusBar, Animated } from 'react-native';

export const HomeContainer = styled.View`
    flex: 1;
    background-color: #8B10AE;
    justify-content: center;
`;

export const Content = styled.View`
    flex: 1;
    max-height: 400px;
    z-index: 5;
`;

export const Card = styled(Animated.View)`
    flex: 1;
    background-color: #FFFFFF;
    border-radius: 4px;
    margin: 0 20px;
    height: 100%;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

export const CardContent = styled.View`
    flex: 1;
    padding: 0 30px;
    justify-content: center;
`;

export const CardTitle = styled.Text`
    font-size: 13px;
    color: #999;
`;

export const CardDescription = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: #333;
`;

export const CardFooter = styled.View`
    padding: 30px;
    background-color: #eee;
    border-radius: 4px;
`;

export const CardAnnotation = styled.Text`
    font-size: 14px;
    color: #333;
`;

export const UserValueContainer = styled.View`
`;

export const VisibilityMask = styled(Animated.View)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #CECECE;
    z-index: 2;
`;
