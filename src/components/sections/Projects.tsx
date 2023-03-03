import { Box, Button, Card, CardContent, Link, Typography } from "@mui/material"
import { ContentProps } from "../../App"
import { styles } from "./Projects.styles"
import { SectionCard } from "../SectionCard"

export const Projects = (props: ContentProps) => {
  const { display } = props;
  return (
    <Box sx={styles.projectsContainer}>
      <Typography variant='h5'>Projects...</Typography>
      <Box sx={styles.projectsContent}>
        <Card sx={styles.card}>
          <CardContent>
            <Link
              variant="subtitle1"
              color={'inherit'}
              href="http://www.screencastify.com"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              Screencastify
            </Link>
            <Typography variant="body2" sx={styles.text}>
              Working for Screencastify, I contributed heavily to the extension (manifest v2 and v3) as well as other features within the web app. Specifically, Questions and Viewer Analytics.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={styles.card}>
          <CardContent>
            <Link
              variant="subtitle1"
              color={'inherit'}
              href="https://github.com/ChecksOn-Me/merchant"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              ChecksOn.Me
            </Link>
            <Typography variant="body2" sx={styles.text}>
              ChecksOn.Me was my pandemic pet project. Bringing mobile payments to every day bars and restaurants without the heavy costs associated with traditional POS systems.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={styles.card}>
          <CardContent>
            <Link
                variant="subtitle1"
                color={'inherit'}
                href="https://github.com/SlowGen/Poolhouse-Flutter"
                underline="hover"
                target="_blank"
                rel="noreferrer"
            >
              PoolHouse
            </Link>
            <Typography variant="body2" sx={styles.text}>
              PoolHouse was my first adventure into mobile dev. First built in React Native as part of a school project, then rebuilt in Flutter and released to Google Play.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={styles.card}>
          <CardContent>
            <Link
                variant="subtitle1"
                color={'inherit'}
                href="https://web.archive.org/web/19990504204259/http://www.dandywarhols.com/welcome2.html"
                underline="hover"
                target="_blank"
                rel="noreferrer"
            >
              The Dandy Warhols
            </Link>
            <Typography variant="body2" sx={styles.text}>
              After nearly two years of hosting a fan site on a university student server, we became "official" and my first commercial site was born. Thanks to the archives, you can see it here!
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={styles.nav}>
        <Button onClick={() => display('main')}>
          <SectionCard section="main"/>
        </Button>
        <Button onClick={() => display('about')}>
          <SectionCard section="about"/>
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
