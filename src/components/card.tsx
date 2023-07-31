import { API_IMG } from '@env';
import { MoviesProps } from '../utils/types';
import { Image, Spinner, View } from 'native-base';

type CardProps = Partial<MoviesProps> & {
  isLoadingImage: boolean;
  setIsLoadingImage: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card = ({ id, poster_path, overview, isLoadingImage, setIsLoadingImage }: CardProps) => {
  return (
    <View key={id} width={'42%'}>
      {isLoadingImage && <Spinner color="#fff" />}
      <Image
        key={id}
        source={{
          uri: poster_path
            ? API_IMG + poster_path
            : 'https://miro.medium.com/v2/resize:fit:1400/1*QoDyVUqmC1O230RbD1rGoQ.png',
        }}
        onLoad={() => setIsLoadingImage(false)}
        alt={overview}
        width={'100%'}
        height={280}
        borderRadius={6}
      />
    </View>
  );
};

export default Card;
