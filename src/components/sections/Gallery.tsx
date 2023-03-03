import { Box, Button, Typography } from "@mui/material";
import { ContentProps } from "../../App";
import { styles } from './Gallery.styles';
import { SectionCard } from "../SectionCard";

// import aliens from '../assets/images/photos/aliens.jpg';
// import bernie from '../assets/images/photos/bernie.jpg';
// import dirty from '../assets/images/photos/dirty.jpg';
// import east from '../assets/images/photos/east.jpg';
// import gridmat from '../assets/images/photos/gridmat.jpg';
// import hubble from '../assets/images/photos/hubble.jpg';
// import north from '../assets/images/photos/north.jpg';
// import selfee from '../assets/images/photos/self.jpg';
// import selfie from '../assets/images/photos/selfie.jpg';
// import skylight from '../assets/images/photos/skylight.jpg';
// import south from '../assets/images/photos/south.jpg';
// import turtle from '../assets/images/photos/turtlepond.jpg';
// import two from '../assets/images/photos/two.jpg';
// import west from '../assets/images/photos/west.jpg'

export const Gallery = (props: ContentProps) => {
  const { display } = props;
// const items = [
//     <img src={selfee} alt="" />,
//     <img src={turtle} alt="" />,
//     <img src={bernie} alt="" />,
//     <img src={dirty} alt="" />,
//     <img src={east} alt="" />,
//     <img src={gridmat} alt="" />,
//     <img src={north} alt="" />,
//     <img src={selfie} alt="" />,
//     <img src={skylight} alt="" />,
//     <img src={south} alt="" />,
//     <img src={two} alt="" />,
//     <img src={west} alt="" />,
//     <img src={aliens} alt="" />,
//     <img src={hubble} alt="" />,
// ]

  return (
    <Box sx={styles.galleryContainer}>
    <Typography variant='h5'>Gallery...</Typography>
    <Box sx={styles.galleryContent}>

    </Box>
    <Box sx={styles.nav}>
        <Button onClick={() => display('main')}>
          <SectionCard section="main"/>
        </Button>
        <Button onClick={() => display('about')}>
          <SectionCard section="about"/>
        </Button>
        <Button onClick={() => display('projects')}>
          <SectionCard section="projects"/>
        </Button>
        <Button onClick={() => display('contact')}>
          <SectionCard section="contact"/>
        </Button>
      </Box>
    </Box>
  )
};
