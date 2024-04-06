import type { ReactNode } from 'react';
import { Box } from '@/components/layout/box'

export type GroupProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Group({ children }: GroupProps) {
  return (
    <Box>
      {children}
    </Box>
  );
}
