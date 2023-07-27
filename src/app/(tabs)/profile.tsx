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
      <View style={{ height: '87.5%' }}>
        <Text>PROFILE</Text>
      </View>
    </View>
  );
};

export default Profile;
