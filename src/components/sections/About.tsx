import { Box, Button, Typography } from "@mui/material"
import { ContentProps } from "../../App"
import { styles } from "./About.styles"
import selfie from '../../assets/photos/selfie.jpg'
import { SectionCard } from "../SectionCard"

export const About = (props: ContentProps) => {
  const { display } = props;

  return (
    <Box sx={styles.aboutContainer}>
      <Typography variant='h5'>About Me...</Typography>
      <Box sx={styles.aboutContent}>
        <Box sx={styles.text}>
          <Typography variant='body2'>
            Raised in Oregon, I started my career in tech as the webmaster for local band The Dandy Warhols. After moving to NYC, I pursued a career in hospitality but found myself drawn back to my love of technology.
          </Typography>
          <Typography variant='body2'>
            In 2019, I left my successful past behind and jumped head-first into coding. After weeks of teaching myself Python and data visualization, I decided going the bootcamp route was right for me. In 2020 I graduated from the Grace Hopper program at Fullstack Academy where I learned JavaScript and the NERD stack.
          </Typography>
          <Typography variant="body2">
            Since then, I've learned several new frameworks, languages and technologies. Spent a couple years working on video capture and playback, and played around with some fun side projects.
          </Typography>
        </Box>
        <Box sx={styles.img}>
          <img src={selfie} height={200} alt='selfie'/>
        </Box>
      </Box>
      <Box sx={styles.nav}>
        <Button onClick={() => display('main')}>
          <SectionCard section="main"/>
        </Button>
        <Button onClick={() => display('projects')}>
          <SectionCard section="projects"/>
        </Button>
        <Button onClick={() => display('gallery')}>
          <SectionCard section="gallery"/>
        </Button>
        <Button onClick={() => display('contact')}>
          <SectionCard section="contact"/>
        </Button>
      </Box>
    </Box>
  )
}
