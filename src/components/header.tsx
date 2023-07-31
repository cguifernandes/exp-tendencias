import { Text, View } from 'native-base';
import HeaderWrapper from './headerWrapper';

const Header = ({ title = 'EXP Tendências' }: { title?: string }) => {
  return (
    <View
      width={'100%'}
      height={'14%'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      backgroundColor={'#3D3936'}
      borderColor={'#5f5d5c'}
      borderBottomWidth={'1px'}
    >
      <HeaderWrapper />
      <Text
        fontFamily={'Montserrat_400Regular'}
        fontSize={24}
        textAlign={'center'}
        color={'#fff'}
        marginTop={'32px'}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
