import { Box } from '@mui/material';
import { styles } from './App.styles';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { useState } from 'react';

export type ContentType = 'main' | 'about' | 'projects' | 'gallery' | 'contact'

export const App = () => {
  const [displayedContent, setDisplayedContent] = useState<ContentType>('main');

  const changeDisplayedContent = (display: ContentType) => {
    setDisplayedContent(display)
  }

  return (
    <Box sx={styles.app}>
      <Header display={changeDisplayedContent}/>
      <Content display={displayedContent} />
    </Box>
  )
}
