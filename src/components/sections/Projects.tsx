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
              href="https://www.kasheesh.co"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              Kasheesh
            </Link>
            <Typography variant="body2" sx={styles.text}>
              As a Senior Flutter Engineer and sole member of my team, I am responsible for the development, testing and deployment of all platforms. This includes Android, iOS, and a browser extension for Chrome and Safari.
            </Typography>
          </CardContent>
        </Card>
      <Card sx={styles.card}>
          <CardContent>
            <Link
              variant="subtitle1"
              color={'inherit'}
              href="https://github.com/slowGen/bookmarks-demo/"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              Flutter Browser Extension Demo
            </Link>
            <Typography variant="body2" sx={styles.text}>
              As one of the very few Flutter developers using browser extensions as a supplement to mobile and web platforms, I created a demo to show how it can be done.
            </Typography>
          </CardContent>
        </Card>
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
