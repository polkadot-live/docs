import React from 'react';
import { SettingItemProps } from './types';

export const SettingItem = ({
  title,
  description,
  onText,
  offText,
  ...liProps
}: SettingItemProps): React.JSX.Element => (
  <li className="SettingItem" {...liProps}>
    {title}
    {description}
    {(onText || offText) && (
      <ul className="SettingStates">
        {onText && (
          <li>
            <span>on</span>
            {onText}
          </li>
        )}
        {offText && (
          <li>
            <span>off</span>
            {offText}
          </li>
        )}
      </ul>
    )}
  </li>
);
