import { View } from 'native-base';
import Header from '../../components/header';
import { Link } from 'expo-router';

const Profile = () => {
  return (
    <View backgroundColor={'#44403C'} height={'100%'} display={'flex'} flexDirection={'column'}>
      <Header title="Perfil" />
      <View height={'87.5%'}>
        <Link href={'movies/top_rated'}>asdsad</Link>
      </View>
    </View>
  );
};

export default Profile;
