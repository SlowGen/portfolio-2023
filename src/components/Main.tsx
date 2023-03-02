import { Box } from "@mui/material"
import { ContentProps } from "../App"
import { styles } from "./Main.styles"
import { SectionCard } from "./SectionCard"

export const Main = (props: ContentProps) => {
  const sections = ['about', 'contact', 'gallery', 'projects']
  return (
    <Box sx={styles.mainContainer}>
      {sections.map((section) =>
        <SectionCard section={section}/>
      )}
    </Box>
  )
}
