import { View, Text, TouchableOpacity } from 'react-native';

const Header = ({ title = 'EXP Tendências' }: { title?: string }) => {
  return (
    <View
      style={{
        width: '100%',
        height: '14%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
        backgroundColor: '#3D3936',
        borderBottomColor: '#5f5d5c',
        borderBottomWidth: 1,
      }}
    >
      <TouchableOpacity
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: 48,
          width: 48,
          top: 47.5,
          left: 32,
          padding: 10,
          paddingVertical: 15,
          position: 'absolute',
        }}
      >
        <View style={{ backgroundColor: '#fff', width: 24, height: 1.5 }} />
        <View style={{ backgroundColor: '#fff', width: 24, height: 1.5 }} />
        <View style={{ backgroundColor: '#fff', width: 24, height: 1.5 }} />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'Montserrat_400Regular',
          fontSize: 24,
          textAlign: 'center',
          color: '#fff',
          marginTop: 32,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
