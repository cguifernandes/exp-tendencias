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
          backgroundColor: '#44403C',
          paddingBottom: 0,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <House color={color} size={28} />,
          tabBarActiveTintColor: '#fff',
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <MagnifyingGlass color={color} size={28} />
          ),
          tabBarActiveTintColor: '#fff',
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <User color={color} size={28} />,
          tabBarActiveTintColor: '#fff',
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};

export default LayoutTabs;
