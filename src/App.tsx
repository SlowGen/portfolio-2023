import { Box, ThemeProvider } from '@mui/material';
import { theme } from './theme'
import { styles } from './App.styles';
import { Content, Header } from './components';
import { useState } from 'react';

export type ContentType = 'main' | 'about' | 'projects' | 'gallery' | 'contact'

export const App = () => {


  const [displayedContent, setDisplayedContent] = useState<ContentType>('main');

  const changeDisplayedContent = (display: ContentType) => {
    setDisplayedContent(display)
  }

  return (
    <Box sx={styles.app}>
      <ThemeProvider theme={theme}>
        <Header display={changeDisplayedContent}/>
        <Content display={displayedContent} />
      </ThemeProvider>
    </Box>
  )
}
