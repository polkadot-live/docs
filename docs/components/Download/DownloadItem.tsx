import React from 'react';
import { DownloadItemProps } from './types';

export const DownloadItem = ({
  imageSrc,
  downloadLink,
}: DownloadItemProps): React.JSX.Element => (
  <div className="DownloadItem">
    <a href={downloadLink} download>
      <img src={imageSrc} />
    </a>
  </div>
);
