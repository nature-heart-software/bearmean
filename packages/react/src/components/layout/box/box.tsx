import type { ReactNode } from 'react';

export type BoxProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Box({ children }: BoxProps) {
  return (
    <div>
      {children}
    </div>
  );
}
