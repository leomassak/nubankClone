import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const MenuContainer = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const CodeContainer = styled.View`
    background: #FFFFFF;
    padding: 10px;
    align-self: center;
`;

export const NavContent = styled.View`
    margin-top: 30px;
    align-self: stretch;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255,255,255, 0.8);
`;

export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255,255,255, 0.8);
`;

export const NavText = styled.Text`
    font-size: 15px;
    color: #FFFFFF;
    margin-left: 20px;
`;

export const LogoutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255,255,255, 0.8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 15px;
`;

export const LogoutButtonText = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 14px;
`;