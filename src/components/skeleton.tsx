import { Skeleton as SkeletonNativeBase } from 'native-base';

type SkeletonProps = {
  width: number | string;
  height: number | string;
};

const Skeleton = ({ height, width }: SkeletonProps) => {
  return <SkeletonNativeBase startColor="#b4b4b4" rounded={8} width={width} height={height} />;
};

export default Skeleton;
