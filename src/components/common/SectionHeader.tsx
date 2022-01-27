import { Box, Typography } from "@mui/material";
import { FONT_MERRIWEATHER, HEADER_FONT_STYLE } from "utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string | number;
}

const TEXT_ALIGN = { xs: "center", lg: "left" };
const SectionHeader = ({ subtitle, title }: SectionHeaderProps) => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Typography
        fontFamily={FONT_MERRIWEATHER}
        fontWeight={600}
        sx={{
          textAlign: TEXT_ALIGN,
          fontSize: HEADER_FONT_STYLE,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        fontFamily={FONT_MERRIWEATHER}
        sx={{
          textAlign: TEXT_ALIGN,
          fontSize: { xs: 15 },
          borderBottom: "thick solid #ce7831",
          width: "fit-content",
          alignSelf: { xs: "center", lg: "flex-start" },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

SectionHeader.propTypes = {};

export default SectionHeader;
