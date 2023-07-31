import Header from '../../components/header';
import LottieView from 'lottie-react-native';
import { View, Text, Heading } from 'native-base';

const Home = () => {
  return (
    <View backgroundColor={'#44403C'} height={'100%'} display={'flex'} flexDirection={'column'}>
      <Header />
      <View
        height={'87.5%'}
        width={'100%'}
        display={'flex'}
        flexDirection={'column'}
        marginTop={'40px'}
        style={{
          rowGap: 10,
        }}
      >
        <View
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          marginX={'20px'}
          style={{
            rowGap: 10,
          }}
        >
          <Heading fontFamily={'Montserrat_700Bold'} size={'md'} color={'#fff'}>
            Bem-vindo ao EXP Tendências!
          </Heading>
          <Text
            fontFamily={'Poppins_400Regular'}
            fontSize={14}
            color={'rgba(255, 255, 255, 0.6)'}
            textAlign={'center'}
          >
            Descubra o fascinante mundo do entretenimento cinematográfico e televisivo diretamente
            na palma da sua mão. Com o nosso aplicativo, você estará sempre conectado às mais
            recentes tendências em filmes e séries de TV, bem como aos melhores filmes e séries
            avaliados pelos fãs em todo o mundo.
          </Text>
        </View>
        <View
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          paddingX={'20px'}
          paddingTop={'10px'}
          style={{
            rowGap: 10,
          }}
        >
          <Heading fontFamily={'Montserrat_700Bold'} size={'md'} color={'#fff'}>
            Explore tendências
          </Heading>
          <Text
            fontFamily={'Poppins_400Regular'}
            fontSize={14}
            color={'rgba(255, 255, 255, 0.6)'}
            textAlign={'center'}
          >
            Fique por dentro das últimas novidades do mundo do entretenimento. Com o EXP Tendências,
            você não perderá nenhuma novidade, pois nosso aplicativo está constantemente atualizado
            com as últimas tendências em filmes e séries. Seja um lançamento aguardado, uma série em
            destaque ou um filme que está causando sensação, aqui é o lugar para encontrar tudo
            isso.
          </Text>
        </View>
        <View display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <LottieView
            source={require('../../../assets/animation.json')}
            autoPlay
            loop
            style={{ width: 320 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
