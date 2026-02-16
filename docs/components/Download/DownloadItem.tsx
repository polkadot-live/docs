import type React from 'react';
import type { DownloadItemProps } from './types';

export const DownloadItem = ({
  imageSrc,
  downloadLink,
}: DownloadItemProps): React.JSX.Element => (
  <div className="DownloadItem">
    <a href={downloadLink} download>
      <img alt="Download Link" src={imageSrc} />
    </a>
  </div>
);
