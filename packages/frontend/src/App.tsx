import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import { muiTheme } from 'theme';

import AppRoutes from './AppRoutes';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
