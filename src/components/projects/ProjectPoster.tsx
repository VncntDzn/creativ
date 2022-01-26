import { Box } from "@mui/material";
import { ProjectPosterProps } from "./types";
import Image from "next/image";

const ProjectPoster = ({ image, title }: ProjectPosterProps) => {
  return (
    <Box
      position="relative"
      sx={{
        overflow: "hidden",

        borderRadius: 3,
        marginTop: { xs: -8, sm: 0 },
        height: { xs: "40vh", sm: "20vh", md: "50vh" },
        width: { xs: "100%", sm: "95%" },
        boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2)`,
        padding:1
      }}
    >
      <Image src={image} quality={100} layout="fill" alt={title} />
    </Box>
  );
};

export default ProjectPoster;
