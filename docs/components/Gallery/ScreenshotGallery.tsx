import React from 'react';
import { LightboxGallery } from './LightboxGallery';
import { RowsPhotoAlbum } from 'react-photo-album';
import { getImageSrcArray, getThumbnailSize } from './utils';
import { mainDescriptions, viewDescriptions } from './descriptions';
import { useTheme } from '../../hooks';
import type { ScreenshotGalleryProps } from './types';

export const ScreenshotGallery = ({
  kind,
  theme,
  count,
  overrideTheme,
}: ScreenshotGalleryProps) => {
  const selTheme = useTheme();
  const curTheme = overrideTheme ? selTheme : theme;

  const [index, setIndex] = React.useState(-1);
  const { width, height } = getThumbnailSize(kind);

  const c = count || (kind === 'main' ? 10 : 19);
  const thumbnails = getImageSrcArray(curTheme, `thumbnails/${kind}`, c);
  const slides = getImageSrcArray(curTheme, `screenshots/${kind}`, c).map(
    (s, i) => {
      const descriptions =
        kind === 'main' ? mainDescriptions : viewDescriptions;
      return { ...s, description: descriptions[i] };
    }
  );

  return (
    <>
      <RowsPhotoAlbum
        onClick={({ index: current }) => setIndex(current)}
        photos={thumbnails.map(({ src }) => ({ src, width, height }))}
        rowConstraints={
          kind === 'main' ? { maxPhotos: 5, minPhotos: 5 } : { minPhotos: 4 }
        }
      />

      <LightboxGallery
        index={index}
        setIndex={setIndex}
        slides={slides}
        kind={kind}
      />
    </>
  );
};
