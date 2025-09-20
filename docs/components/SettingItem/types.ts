import React from 'react';

export type SettingItemProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  onText?: React.ReactNode;
  offText?: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>;
