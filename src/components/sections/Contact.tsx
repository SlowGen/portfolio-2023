import { Box, Button, Link,Typography } from "@mui/material";
import { ContentProps } from "../../App"
import { SectionCard } from "../SectionCard";
import { styles } from "./Contact.styles";
import { CodeOutlined, DescriptionOutlined, MailOutline } from "@mui/icons-material";

export const Contact = (props: ContentProps) => {
  const { display } = props;

  return (
    <Box sx={styles.contactContainer}>
      <Typography variant="h5">
        Get in touch!
      </Typography>
      <Box sx={styles.contactContent}>
        <Link href="mailto:info@kali.nyc" color='inherit'
          target='_blank' rel='noopener'>
          <MailOutline sx={styles.icon}/>
        </Link>
        <Link href="https://github.com/slowgen" color='inherit'
          target='_blank' rel='noopener'>
          <CodeOutlined sx={styles.icon}/>
        </Link>
        <Link href="https://www.linkedin.com/in/kali-nfn/" color='inherit'
          target='_blank' rel='noopener'>
          <DescriptionOutlined sx={styles.icon}/>
        </Link>
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
        <Button onClick={() => display('gallery')}>
          <SectionCard section="gallery"/>
        </Button>
      </Box>
      <iframe name="popup" title="SlowGen" height={0} width={0} />
    </Box>
  )
}
