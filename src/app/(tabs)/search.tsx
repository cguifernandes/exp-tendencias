import { Text, View } from 'react-native';
import Header from '../../components/header';
import { API_KEY } from '@env';
const Search = () => {
  return (
    <View
      style={{
        backgroundColor: '#44403C',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header title="Pesquisa" />
      <View style={{ height: '87.5%' }}>
        <Text>{`oiiii ${API_KEY}`}</Text>
      </View>
    </View>
  );
};

export default Search;
