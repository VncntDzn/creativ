import { Box, Divider, Typography } from "@mui/material";
import { NextRouter, useRouter } from "next/router";

const FONT_MERRIWEATHER = "Merriweather, sans-serif";

const questions: string[] = ["Who is the client?", "Task", "Solution"];
const ProjectTexts = ({ answers, url }: { answers: any; url?: any }) => {
  const router: NextRouter = useRouter();

  const handleRoute = () => {
    router.push(url);
  };
  return (
    <>
      {answers.map((data: string, i: number) => (
        <Box key={i}>
          <Typography
            fontFamily={FONT_MERRIWEATHER}
            fontSize={20}
            fontWeight={600}
          >
            {questions[i]}
          </Typography>
          <Typography
            sx={{
              width: { xs: "90%", md: "38%" },
              textAlign: "justify",
              textJustify: "inter-word",
              textIndent: "2rem",
            }}
          >
            {data}
          </Typography>
          <Divider flexItem sx={{ marginY: 2, width: "100vw" }} />
        </Box>
      ))}
      <Typography
        onClick={handleRoute}
        fontFamily={FONT_MERRIWEATHER}
        fontWeight={600}
        sx={{
          cursor: "pointer",
          color: "#ce7831",
        }}
      >
        Visit Website
      </Typography>
    </>
  );
};

export default ProjectTexts;
