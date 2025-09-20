import React from 'react';
import { DetailItemProps } from './types';

export const DetailItem = ({
  title,
  description,
  ...liProps
}: DetailItemProps): React.JSX.Element => (
  <li className="DetailItem" {...liProps}>
    {title}
    {description}
  </li>
);
