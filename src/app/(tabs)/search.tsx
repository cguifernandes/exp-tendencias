import Header from '../../components/header';
import { API_KEY } from '@env';
import { useState } from 'react';
import Input from '../../components/input';
import { MoviesProps } from '../../utils/types';
import { getData } from '../../utils/fetch';
import Card from '../../components/card';
import Skeleton from '../../components/skeleton';
import { ScrollView, Text, View } from 'native-base';

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [movies, setMovies] = useState<MoviesProps[]>([]);

  const hanlerSearch = (query: string) => {
    setIsLoading(true);
    if (query !== '') {
      const Fetch = async () => {
        const data = await getData(
          `search/multi?api_key=${API_KEY}&query=${query}&language=pt-BR&page=1&region=BR`
        );

        setMovies(data);
        setIsLoading(false);
      };

      Fetch();
    } else {
      const Fetch = async () => {
        const data = await getData(`trending/all/week?api_key=${API_KEY}&language=pt-BR`);

        setMovies(data);
        setIsLoading(false);
      };

      Fetch();
    }
  };

  return (
    <View backgroundColor={'#44403C'} height={'100%'} display={'flex'} flexDirection={'column'}>
      <Header title="Pesquisa" />
      <ScrollView height={'87.5%'}>
        <Input onChangeText={hanlerSearch} placeholder="Pesquise por filmes ou séries..." />
        {movies.length == 0 ? (
          <View display={'flex'} justifyContent={'center'} alignItems={'center'} marginY={'80px'}>
            <Text color={'#fff'} fontSize={20} fontFamily={'Montserrat_700Bold'}>
              Nenhum resultado encontrado!
            </Text>
          </View>
        ) : (
          <View
            flexDirection={'row'}
            flexWrap={'wrap'}
            justifyContent={'center'}
            marginY={'40px'}
            style={{
              gap: 20,
            }}
          >
            {isLoading ? (
              <>
                <Skeleton width={'42%'} height={280} />
                <Skeleton width={'42%'} height={280} />
                <Skeleton width={'42%'} height={280} />
                <Skeleton width={'42%'} height={280} />
              </>
            ) : (
              movies?.map((movies) => {
                return (
                  <Card
                    key={movies.id}
                    id={movies.id}
                    poster_path={movies.poster_path}
                    overview={movies.overview}
                    isLoadingImage={isLoadingImage}
                    setIsLoadingImage={setIsLoadingImage}
                  />
                );
              })
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
