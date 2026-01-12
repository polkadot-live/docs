import React, { useEffect } from 'react';
import { LightboxGallery } from './LightboxGallery';
import { RowsPhotoAlbum } from 'react-photo-album';
import { getImageSrcArray, getThumbnailSize } from './utils';
import { mainDescriptions, viewDescriptions } from './descriptions';
import { useTheme } from '../../hooks';
import type { ScreenshotGalleryProps } from './types';

export const ScreenshotGallery = ({
  kind,
  count,
  showToggle,
}: ScreenshotGalleryProps) => {
  const selTheme = useTheme();

  const [showTheme, setShowTheme] = React.useState(selTheme);
  const [index, setIndex] = React.useState(-1);
  const { width, height } = getThumbnailSize(kind);

  const c = count || (kind === 'main' ? 20 : 20);
  const thumbnails = getImageSrcArray(showTheme, `thumbnails/${kind}`, c);
  const slides = getImageSrcArray(showTheme, `screenshots/${kind}`, c).map(
    (s, i) => {
      const descriptions =
        kind === 'main' ? mainDescriptions : viewDescriptions;
      return { ...s, description: descriptions[i] };
    }
  );

  useEffect(() => {
    setShowTheme(selTheme);
  }, [selTheme]);

  return (
    <>
      {showToggle && (
        <button
          className="vocs_Button_button"
          onClick={() =>
            setShowTheme((pv) => (pv === 'dark' ? 'light' : 'dark'))
          }
        >
          {`Show ${showTheme === 'dark' ? 'Light' : 'Dark'} Theme`}
        </button>
      )}

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
