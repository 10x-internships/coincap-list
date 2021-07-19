import '@emotion/react';
import { ColorsType } from '@styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
  }
}
