import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import '../styles/global.css';

export const unstable_settings = {
  initialRouteName: 'home',
};

const Layout = () => {
  StatusBar.setBarStyle('light-content', true);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default Layout;
