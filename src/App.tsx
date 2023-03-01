import { Box } from '@mui/material';
import { styles } from './App.styles';
import { Content } from './components/Content';
import { Header } from './components/Header';

export const App = () => {
  return (
    <Box sx={styles.app}>
      <Header />
      <Content />
    </Box>
  )
}
