import { Text, View } from 'react-native';
import Header from '../../components/header';
import { Link } from 'expo-router';

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
      <Header title="Perfil" />
      <View style={{ height: '87.5%' }}>
        <Link href={'movies/top_rated'}>asdsad</Link>
      </View>
    </View>
  );
};

export default Profile;
