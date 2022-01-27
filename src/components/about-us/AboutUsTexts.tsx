import { Box, Divider, Typography } from "@mui/material";
import texts from "./utils/texts";

const FONT_MERRIWEATHER = "Merriweather, sans-serif";

const AboutUsTexts = () => {
  return (
    <Box>
      {texts.map(({ title, paragraph }) => (
        <Box key={title} marginY={5}>
          <Typography
            fontFamily={FONT_MERRIWEATHER}
            fontSize={20}
            fontWeight={600}
          >
            {title}
          </Typography>
          {paragraph.map((text: string, i: number) => (
            <Typography textAlign={"justify"} sx={{
              textIndent: '2rem'
            }} key={i}>{text}</Typography>
          ))}
          <Divider flexItem />
        </Box>
      ))}
    </Box>
  );
};

AboutUsTexts.propTypes = {};

export default AboutUsTexts;
