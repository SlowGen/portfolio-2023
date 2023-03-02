import { Box, Button } from "@mui/material"
import { ContentProps, ContentType } from "../App"
import { styles } from "./Main.styles"
import { SectionCard } from "./SectionCard"

export const Main = (props: ContentProps) => {
  const sections = ['about', 'projects', 'gallery', 'contact']
  const { display } = props;
  return (
    <Box sx={styles.mainContainer}>
      {sections.map((section) =>
            <Button onClick={() => display(section as ContentType)}>
              <SectionCard section={section} key={section}/>
            </Button>
      )}
    </Box>
  )
}
