import { Box, Button, Typography } from "@mui/material"
import { ContentProps } from "../../App"
import { styles } from "./About.styles"
import headshot from '../../assets/photos/headshot.jpg'
import { SectionCard } from "../SectionCard"

export const About = (props: ContentProps) => {
  const { display } = props;

  return (
    <Box sx={styles.aboutContainer}>
      <Typography variant='h5'>About Me...</Typography>
      <Box sx={styles.aboutContent}>
        <Box sx={styles.text}>
          <Typography variant='body2'>
            Originally from Oregon, my passion for technology led me on a journey that began as a webmaster for The Dandy Warhols. My career path took a turn into NYC's hospitality scene, but my heart always belonged to tech. After many years of dedicated service, I knew it was time to get back to coding.
          </Typography>
          <Typography variant='body2'>
            This journey eventually led me to Flutter, a technology that I've been a devoted advocate for since 2020. My work goes beyond standard cross-platform development and I've become the 'go-to' person for creating browser extensions and navigating the complexities of js_interop. My commitment to the community is also a huge part of my story, as a proud Flutterista I have served as the Program Manager for the Flutteristas Conference 2025 and also had the privilege of sharing my expertise through speaking FlutterCon USA.
          </Typography>
          <Typography variant="body2">
            My path is a testament to the power of a relentless pursuit of knowledge. I'm excited to continue building innovative solutions and contributing to the vibrant Flutter ecosystem.
          </Typography>
        </Box>
        <Box sx={styles.img}>
          <img src={headshot} height={300} alt='headshot'/>
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
