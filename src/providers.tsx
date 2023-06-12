import { ThemeProvider } from '@shopify/restyle';
import { ReactNode } from 'react';
import { theme } from './theme';

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
