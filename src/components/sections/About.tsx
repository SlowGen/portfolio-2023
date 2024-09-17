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
            Originally from Oregon, I have always been passionate about technology. My journey began when I landed my first job as a webmaster for the popular local band, The Dandy Warhols. I then moved to New York City and embarked on a career in hospitality. My heart belonged to the tech world and it was only a matter of time for me to find my way back.
          </Typography>
          <Typography variant='body2'>
            In 2019, I made the bold decision to leave my successful past behind and immerse myself in the world of coding. I spent countless hours teaching myself Python and data visualization before ultimately deciding to pursue a bootcamp program. In 2020, I graduated from the Grace Hopper program at Fullstack Academy, where I honed my skills in JavaScript, React, Express and Postgres.
          </Typography>
          <Typography variant="body2">
            Since then, I have continued to expand my knowledge and expertise, diving into new frameworks, languages, and technologies. I spent two years working on video capture and playback, and have also enjoyed tinkering with several exciting side projects.
          </Typography>
          <Typography variant="body2">
            Currently, I am working as a Senior Flutter Engineer at Kasheesh. I have been passionate about working with Flutter for many years and was thrilled to join a team that not only used my favorite stack, but also was willing to think outside the box and explore new possibilities. I have recently begun doing speaking engagements and I'm excited to see where it goes!!
          </Typography>
          <Typography variant="body2">
            Overall, my journey has been one of dedication, hard work, and a relentless pursuit of knowledge. I am thrilled to be a part of the ever-evolving tech industry and can't wait to see where my skills and passion take me next.
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
