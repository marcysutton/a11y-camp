import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    text: string;
  }
}