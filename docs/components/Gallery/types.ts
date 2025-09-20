import { Slide } from 'yet-another-react-lightbox';

export interface LightboxGalleryProps {
  index: number;
  slides: Slide[];
  kind: 'main' | 'views';
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface ScreenshotGalleryProps {
  kind: 'main' | 'views';
  theme: 'dark' | 'light';
  count?: number;
  overrideTheme?: boolean;
}
