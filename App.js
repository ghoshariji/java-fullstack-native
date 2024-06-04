

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Userhome from './src/userpage/Userdash';

const Stack = createStackNavigator()


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name='Welcome' component={Welcome} />
          <Stack.Screen
          name='Login' component={Login} />
          <Stack.Screen
          name='Signup' component={Signup} />
            <Stack.Screen
          name='Userdash' component={Userhome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
