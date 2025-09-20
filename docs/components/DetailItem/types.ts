import React from 'react';

export type DetailItemProps = {
  title: React.ReactNode;
  description: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>;
