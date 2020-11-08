import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import '~/config/ReactotronConfig';

import AppNavigator from '../src/routes/AppNavigator';

const App = () => (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#8B10AE"/>
        <AppNavigator />
    </NavigationContainer>
);

export default App;
