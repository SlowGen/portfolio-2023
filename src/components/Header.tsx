import { Box, Typography } from '@mui/material'
import { styles } from './Header.styles'
import Typewriter from 'typewriter-effect';

export const Header = () => {
  return (
    <Box sx={styles.headerContainer}>
      <Typewriter
        options={{
          strings: ['kali.nyc', 'software engineer'],
          autoStart: true,
          loop: true,
        }}
      />
    </Box>
  )
}
