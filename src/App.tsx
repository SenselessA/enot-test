import React from 'react';
import './App.css';
import {Box} from "@mui/material";
import {TodoList} from "./modules/TodoList/TodoList";
import {red} from "@mui/material/colors";
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query'
import NewsLineProvider from "./store/NewsLineProvider";

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

const queryClient = new QueryClient()

function App() {
  return (
          <QueryClientProvider client={queryClient}>
              <StyledEngineProvider injectFirst>
                  <ThemeProvider theme={theme}>
                      <NewsLineProvider>
                          <Box display={'flex'} flexDirection={'column'} minHeight={'100vh'} maxHeight={'844px'} maxWidth={'390px'} ml={'auto'} mr={'auto'}>
                              <TodoList />
                          </Box>
                      </NewsLineProvider>
                  </ThemeProvider>
              </StyledEngineProvider>
          </QueryClientProvider>
  );
}

export default App;
