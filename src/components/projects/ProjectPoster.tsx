import { Box } from "@mui/material";
import Image from "next/image";

interface ProjectPosterProps {
  image: string;
  title: string | undefined;
}
const ProjectPoster = ({ image, title }: ProjectPosterProps) => {
  return (
    <Box
      position="relative"
      sx={{
        marginTop: { xs: -8, sm: 0 },
        height: { xs: "40vh", sm: "100%", lg: "45vh" },
        width: { xs: "100%", sm: "95%" },
      }}
    >
      <Image src={image} quality={100} layout="fill" alt={title} />
    </Box>
  );
};

export default ProjectPoster;
