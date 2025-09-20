import React from 'react';
import { DownloadItemProps } from './types';

export const DownloadItem = ({
  imageSrc,
  downloadLink,
}: DownloadItemProps): React.JSX.Element => (
  <div>
    <a href={downloadLink} download>
      <img src={imageSrc} />
    </a>
  </div>
);
