import { Box, Typography } from "@mui/material";
import { styles } from "./SectionCard.styles";

interface SectionCardProps {
  section: string
}

export const SectionCard = (props: SectionCardProps) => {
  const { section } = props;

  return (
    <Box sx={styles.sectionCardContainer}>
      <Typography variant="h4">{section}</Typography>
    </Box>
  )
}
