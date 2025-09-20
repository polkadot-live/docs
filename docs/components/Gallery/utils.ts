export const getImageSrcArray = (
  theme: 'dark' | 'light',
  basePath: string,
  count: number
) => {
  const result = [];

  for (let i = 1; i <= count; i++) {
    const prefix = String(i).padStart(2, '0');
    const filename = `${prefix}-${theme}.webp`;
    result.push({
      src: `/gallery/${basePath}/${filename}`,
    });
  }

  return result;
};

export const getThumbnailSize = (
  key: 'main' | 'views'
): { width: number; height: number } => {
  switch (key) {
    case 'main':
      return { width: 122, height: 180 };
    case 'views':
      return { width: 200, height: 122 };
  }
};

// Reference only.
export const generateImageArray = (
  count: number,
  width: number,
  height: number,
  basePath: string
) => {
  const result = [];

  for (let i = 0; i < count; i++) {
    const group = Math.floor(i / 2) + 1;
    const prefix = String(group).padStart(2, '0');
    const theme = i % 2 === 0 ? 'dark' : 'light';
    const filename = `${prefix}-${theme}.webp`;
    result.push({
      src: `${basePath}/${filename}`,
      width,
      height,
    });
  }

  return result;
};
