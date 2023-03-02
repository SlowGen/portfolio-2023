import { ContentType } from "../App"
import { Box } from '@mui/material'
import { Main, About, Contact, Gallery, Projects } from './'

interface ContentProps {
  display: ContentType
}

export const Content = (props: ContentProps) => {
  const { display } = props;
  return (
    <Box>
      {display === 'main' && <Main />}
      {display === 'about' && <About />}
      {display === 'projects' && <Projects />}
      {display === 'gallery' && <Gallery />}
      {display === 'contact' && <Contact />}
    </Box>
  )
}
