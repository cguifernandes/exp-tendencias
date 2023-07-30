import { Text, View, Image } from 'native-base';
import Header from '../../components/header';
import { API_KEY, API_IMG } from '@env';
import { ScrollView } from 'native-base';
import { useState } from 'react';
import Input from '../../components/input';
import { typeMovies } from '../../utils/types';
import AnimatedLottieView from 'lottie-react-native';
import { getData } from '../../utils/fetch';
import { ActivityIndicator } from 'react-native';

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topRatedMovies, setTopRatedMovies] = useState<typeMovies[]>([]);
  const [isNotFound, setIsNotFound] = useState(true);

  const hanlerSearch = (query: string) => {
    if (query !== '') {
      const Fetch = async () => {
        const data = await getData(
          `/search/movie?api_key=${API_KEY}&query=${query}&language=pt-BR&page=1&region=BR`
        );

        setTopRatedMovies(data);
        setIsNotFound(false);
      };

      Fetch();
    } else {
      setIsNotFound(true);
    }
  };

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
      <ScrollView style={{ height: '87.5%' }}>
        <Input onChangeText={hanlerSearch} placeholder="Pesquise por filmes ou séries..." />
        {isNotFound ? (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 40,
            }}
          >
            <AnimatedLottieView
              source={require('../../../assets/not_found.json')}
              autoPlay
              loop
              style={{ width: 360 }}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginVertical: 30,
              gap: 20,
            }}
          >
            {topRatedMovies?.map((movies) => {
              return (
                <View
                  key={movies.id}
                  style={{
                    width: '42%',
                  }}
                >
                  {isLoading && <ActivityIndicator size="large" color="#000" />}
                  <Image
                    key={movies.id}
                    source={{ uri: API_IMG + movies.poster_path }}
                    onLoad={() => setIsLoading(false)}
                    alt={movies.overview}
                    style={{
                      width: '100%',
                      height: 280,
                      borderRadius: 4,
                    }}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
