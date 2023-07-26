import { Tabs } from 'expo-router';
import { House, MagnifyingGlass, User } from 'phosphor-react-native';

const LayoutTabs = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#3D3936',
          borderTopColor: '#5f5d5c',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
          tabBarActiveTintColor: '#fff',
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MagnifyingGlass color={color} size={size} />
          ),
          tabBarActiveTintColor: '#fff',
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
          tabBarActiveTintColor: '#fff',
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};

export default LayoutTabs;
