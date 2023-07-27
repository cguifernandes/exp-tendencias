import { Text, View } from 'react-native';
import Header from '../../components/header';
import LottieView from 'lottie-react-native';

const Home = () => {
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
      <View
        style={{
          height: '87.5%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          rowGap: 20,
          paddingTop: 40,
        }}
      >
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontFamily: 'Montserrat_700Bold',
              fontSize: 20,
              color: '#fff',
            }}
          >
            Bem-vindo ao EXP Tendências!
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: 'center',
            }}
          >
            Descubra o fascinante mundo do entretenimento cinematográfico e
            televisivo diretamente na palma da sua mão. Com o nosso aplicativo,
            você estará sempre conectado às mais recentes tendências em filmes e
            séries de TV, bem como aos melhores filmes e séries avaliados pelos
            fãs em todo o mundo.
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontFamily: 'Montserrat_700Bold',
              fontSize: 20,
              color: '#fff',
            }}
          >
            Explore tendências
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: 'center',
            }}
          >
            Fique por dentro das últimas novidades do mundo do entretenimento.
            Com o EXP Tendências, você não perderá nenhuma novidade, pois nosso
            aplicativo está constantemente atualizado com as últimas tendências
            em filmes e séries. Seja um lançamento aguardado, uma série em
            destaque ou um filme que está causando sensação, aqui é o lugar para
            encontrar tudo isso.
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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
