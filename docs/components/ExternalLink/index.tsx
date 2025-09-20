import React from 'react';
import type { ExternalLinkProps } from './types';

export const ExternalLink = ({
  href,
  children,
  ...props
}: ExternalLinkProps): React.JSX.Element => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);
