import { Box, ThemeProvider } from '@mui/material';
import { theme } from './theme'
import { styles } from './App.styles';
import { Header, Main, About, Contact, Gallery, Projects } from './components';
import { useState } from 'react';

export type ContentType = 'main' | 'about' | 'projects' | 'gallery' | 'contact'

export interface ContentProps {
  display: (selection: ContentType) => void
}

export const App = () => {


  const [displayedContent, setDisplayedContent] = useState<ContentType>('main');

  const changeDisplayedContent = (display: ContentType) => {
    setDisplayedContent(display)
  }

  return (
    <Box sx={styles.app}>
      <ThemeProvider theme={theme}>
        <Header display={changeDisplayedContent}/>
        <Box sx={styles.contentBox}>
        {displayedContent === 'main' &&
          <Main display={changeDisplayedContent}/>}
        {displayedContent === 'about' &&
          <About display={changeDisplayedContent}/>}
        {displayedContent === 'projects' &&
          <Projects display={changeDisplayedContent}/>}
        {displayedContent === 'gallery' &&
          <Gallery display={changeDisplayedContent}/>}
        {displayedContent === 'contact' &&
          <Contact display={changeDisplayedContent}/>}
        </Box>
      </ThemeProvider>
    </Box>
  )
}
