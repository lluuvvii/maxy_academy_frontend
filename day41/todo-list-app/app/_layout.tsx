import { createStackNavigator } from "@react-navigation/stack"

import Home from "@/app/Home"
import Detail from "@/app/Detail"

const Stack = createStackNavigator()

const App = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home} />
        <Stack.Screen
          name="Detail"
          component={Detail} />
      </Stack.Navigator>
  )
}

export default App