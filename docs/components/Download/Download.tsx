import React from 'react';
import { DownloadItem } from './DownloadItem';
import { useTheme } from '../../hooks';

export const Download = (): React.JSX.Element => {
  const theme = useTheme();
  const TAG = '0.13.0-beta';
  const RELEASE_URI =
    'https://github.com/polkadot-live/polkadot-live-app/releases';

  return (
    <div className="Download">
      <DownloadItem
        imageSrc={`/images/${theme}/DownloadMac.webp`}
        downloadLink={`${RELEASE_URI}/download/v${TAG}/Polkadot-Live-${TAG}-arm64.dmg`}
      />
      <DownloadItem
        imageSrc={`/images/${theme}/DownloadWindows.webp`}
        downloadLink={`${RELEASE_URI}/download/v${TAG}/Polkadot.Live.Setup.${TAG}.exe`}
      />
      <DownloadItem
        imageSrc={`/images/${theme}/DownloadLinux.webp`}
        downloadLink={`${RELEASE_URI}/download/v${TAG}/Polkadot-Live-${TAG}.AppImage`}
      />
      <div className="ComingSoon">
        <img src={`/images/${theme}/DownloadExtension.webp`} />
      </div>
    </div>
  );
};
