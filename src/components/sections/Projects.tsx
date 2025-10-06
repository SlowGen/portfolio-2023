import { Box, Button, Card, CardContent, Divider, Link, Typography } from "@mui/material"
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
              href="https://youtube.com/playlist?list=PLsUxGwS800yXFNiS08rLEO1B2uoFEzs_f&si=yImIbFqjg83gA2LZ"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              FlutterCon USA Speaker
            </Link>
            <Typography variant="body2" sx={styles.text}>
              As a two time speaker at FlutterCon, I have established subject matter expertise with Flutter Web, particularly in the usage of js_interop and creating browser extensions. Be sure to see the demo code in my Github.
            </Typography>
            <Divider/>
            <Link
              variant="body2"
              color={'inherit'}
              href="https://github.com/slowGen/bookmarks-demo"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              Browser Extension Demo
            </Link>
            {' '}||{' '}
            <Link
              variant="body2"
              color={'inherit'}
              href="https://github.com/slowGen/trex"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              js_interop Demo
            </Link>
          </CardContent>
        </Card>
      <Card sx={styles.card}>
          <CardContent>
            <Link
              variant="subtitle1"
              color={'inherit'}
              href="https://flutteristas.org/flutteristas-conference/2025"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              Flutteristas Conference 2025
            </Link>
            <Typography variant="body2" sx={styles.text}>
              As the Lead Project Manager, I oversaw a group of 30 women and non-binary Flutter enthusiasts in producing a global virtual conference showcasing talks from the Flutterista community.
            </Typography>
            <br/>
          </CardContent>
        </Card>
        <Card sx={styles.card}>
          <CardContent>
            <Link
              variant="subtitle1"
              color={'inherit'}
              href="https://www.linkedin.com/in/kali-nfn/"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              Work History
            </Link>
            <Typography variant="body2" sx={styles.text}>
              With a storied career spanning early web development, NYC hospitality, and modern startups. I have earned expertise in creating niche, greenfield applications soving complex and interesting business problems.
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
