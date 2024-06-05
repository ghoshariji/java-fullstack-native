

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Userhome from './src/userpage/Userdash';
import Result from './src/userpage/Result';
import Schedule from './src/userpage/Schedule';
import Certificate from './src/userpage/Certificate';
import ChatWithAdmin from './src/userpage/Chatwithadmin';
import Profile from './src/userpage/Profile';

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
            <Stack.Screen
          name='Result' component={Result} options={{headerShown:true}} />
          <Stack.Screen
          name='Schedule' component={Schedule} options={{headerShown:true}} />
            <Stack.Screen
          name='Certificate' component={Certificate} options={{headerShown:true}} />
           <Stack.Screen
          name='Chat Us' component={ChatWithAdmin} options={{headerShown:true}} />
          <Stack.Screen
          name='Profile' component={Profile} options={{headerShown:true}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
