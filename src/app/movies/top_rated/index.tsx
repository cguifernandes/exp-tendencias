import { Image, ScrollView, Text, View } from 'react-native';
import Header from '../../../components/header';
import Input from '../../../components/input';
import { useEffect, useState } from 'react';
import { API_KEY, API_IMG } from '@env';
import { typeMovies } from '../../../types';

const getData = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt`
  );

  const data = await response.json();

  return data.results || [];
};

const TopRatedMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topRatedMovies, setTopRatedMovies] = useState<typeMovies[]>([]);

  useEffect(() => {
    const Fetch = async () => {
      const data = await getData();
      setTopRatedMovies(data);
      setIsLoading(false);
    };

    Fetch();
  }, []);

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
        <Input placeholder="Pesquise por filmes ou séries..." />
        {isLoading ? (
          <Text>Carregando</Text>
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
                  <Image
                    source={{ uri: API_IMG + movies.poster_path }}
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

export default TopRatedMovies;
