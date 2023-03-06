import { Box, Button, Typography } from "@mui/material";
import { ContentProps } from "../../App";
import { styles } from './Gallery.styles';
import { SectionCard } from "../SectionCard";

import aliens from '../../assets/photos/aliens.jpg';
import bernie from '../../assets/photos/bernie.jpg';
import dirty from '../../assets/photos/dirty.jpg';
import east from '../../assets/photos/east.jpg';
import gridmat from '../../assets/photos/gridmat.jpg';
import hubble from '../../assets/photos/hubble.jpg';
import north from '../../assets/photos/north.jpg';
import selfee from '../../assets/photos/self.jpg';
import selfie from '../../assets/photos/selfie.jpg';
import skylight from '../../assets/photos/skylight.jpg';
import south from '../../assets/photos/south.jpg';
import turtle from '../../assets/photos/turtlepond.jpg';
import two from '../../assets/photos/two.jpg';
import west from '../../assets/photos/west.jpg'
import { useEffect, useState } from "react";

const photos = [aliens, bernie, dirty, east, gridmat, hubble, north, selfee, selfie, skylight, south, turtle, two, west]

export const Gallery = (props: ContentProps) => {
  const { display } = props;
  const [imgIndex, setImageIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState(photos[imgIndex])

  const clickHandler = () => {
    setImageIndex(imgIndex + 1)
  }

  useEffect(() => {
    if (imgIndex > photos.length) setImageIndex(0)
    setCurrentImage(photos[imgIndex])
    const changeInterval = setTimeout(() => {
      setImageIndex(imgIndex + 1)
    }, 5000)
    return () => clearTimeout(changeInterval)
  }, [imgIndex])

  return (
    <Box sx={styles.galleryContainer}>
    <Typography variant='h5'>Gallery...</Typography>
    <Box sx={styles.galleryContent}>
      <Box sx={styles.card}>
        <Typography variant="body2" >
          Just a hobby of mine and a bit of how I see the world. All photos taken by me except for the galaxy, that one was taken by Hubble.
        </Typography>
      </Box>
      <Box sx={styles.card}>
        <Button onClick={clickHandler}>
          <img src={currentImage} height={300} alt=""/>
        </Button>
      </Box>
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
