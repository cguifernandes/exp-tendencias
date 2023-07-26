import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 120,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3D3936',
        borderBottomColor: '#5f5d5c',
        borderBottomWidth: 1,
      }}
    >
      <Text
        style={{
          fontFamily: 'Montserrat_400Regular',
          fontSize: 24,
          textAlign: 'center',
          color: '#fff',
          paddingTop: 30,
        }}
      >
        EXP Tendências
      </Text>
    </View>
  );
};

export default Header;
