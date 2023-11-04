import React from 'react';
import { urlFor } from '@/app/lib/client';
import {getImageDimensions} from '@sanity/asset-utils'

const ImageCustom = ({ value }) => {
  const {width, height} = getImageDimensions(value)
  const imageUrl = urlFor(value).width(1120).height(750).fit('max').auto('format').url();

  return (
    <img
          src={imageUrl}
          alt={value.alt || ''}
          loading="lazy"
          style={{
            aspectRatio: width / height,
          }}
    />
  );
};

export default ImageCustom;