import React from 'react';
import Lightbox, { CaptionsRef } from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import { getThumbnailSize } from './utils';
import type { LightboxGalleryProps } from './types';

export const LightboxGallery = ({
  index,
  setIndex,
  slides,
  kind,
}: LightboxGalleryProps): React.JSX.Element => {
  const { width, height } = getThumbnailSize(kind);
  const captionsRef = React.useRef<CaptionsRef | null>(null);

  return (
    <Lightbox
      index={index}
      slides={slides}
      open={index >= 0}
      close={() => setIndex(-1)}
      plugins={[Captions, Counter, Thumbnails]}
      captions={{ descriptionTextAlign: 'center', showToggle: true }}
      on={{
        click: () => {
          (captionsRef.current?.visible
            ? captionsRef.current?.hide
            : captionsRef.current?.show)?.();
        },
      }}
      thumbnails={{
        position: 'bottom',
        width,
        height,
        border: 0,
        borderRadius: 4,
        padding: 4,
        gap: 16,
        showToggle: false,
      }}
    />
  );
};
