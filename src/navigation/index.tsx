import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RecordingScreen from '../screens/RecordingScreen';
import GalleryScreen from '../screens/GalleryScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';

export type RootStackParamList = {
  Home: undefined;
  Recording: undefined;
  Gallery: undefined;
  Subscription: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Recording" component={RecordingScreen} />
    <Stack.Screen name="Gallery" component={GalleryScreen} />
    <Stack.Screen name="Subscription" component={SubscriptionScreen} />
  </Stack.Navigator>
);
