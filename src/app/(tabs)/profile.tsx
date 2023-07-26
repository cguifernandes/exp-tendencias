import { Text, View } from 'react-native';
import Header from '../../components/header';

const Profile = () => {
  return (
    <View
      style={{
        backgroundColor: '#44403C',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Text style={{ flex: 6 }}>Oi</Text>
    </View>
  );
};

export default Profile;
