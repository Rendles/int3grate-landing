import { ComponentPropsWithoutRef } from 'react';

interface BlogVideoProps extends ComponentPropsWithoutRef<'video'> {
  src: string;
  mime: string;
}

export const BlogVideo = (props: BlogVideoProps) => {
  const { src, mime, ...rest } = props;

  return (
    <video width="100%" height="auto" {...rest}>
      <source src={src} type={mime} />
      Your browser does not support the video tag.
    </video>
  );
};
