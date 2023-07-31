import { Pressable, View } from 'native-base';

const HeaderWrapper = () => {
  return (
    <Pressable
      _pressed={{ opacity: 0.3 }}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      height={'48px'}
      width={'48px'}
      top={'48px'}
      left={'32px'}
      padding={'15px'}
      position={'absolute'}
    >
      <View backgroundColor={'#fff'} width={'24px'} height={'1.5px'} />
      <View backgroundColor={'#fff'} width={'24px'} height={'1.5px'} />
      <View backgroundColor={'#fff'} width={'24px'} height={'1.5px'} />
    </Pressable>
  );
};

export default HeaderWrapper;
