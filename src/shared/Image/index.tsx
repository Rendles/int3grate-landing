import NextImage, { ImageProps as NextImageProps } from 'next/image';

export const Image = (props: NextImageProps) => {
  return <NextImage {...props} />;
};
