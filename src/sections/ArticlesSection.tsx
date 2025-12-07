// src/sections/ArticlesSection.tsx
import { Box, Typography, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { eleven_image,twelve_image,thirteen_image,fourteen_image
} from "../assets";

const articles = [
  {
    title: "Congue velit risus",
    description:
      "Nunc gravida semper tellus neque scelerisque eget tincidunt in.",
    image: eleven_image,
  },
  {
    title: "Ut mauris",
    description:
      "Phasellus venenatis massa bibendum posuere dictum tristique.",
    image: twelve_image,
  },
  {
    title: "Aliquam tortor nunc",
    description:
      "Leo mollis fermentum praesent in condimentum id velit purus in.",
    image: thirteen_image,
  },
  {
    title: "Fusce non morbi",
    description:
      "In sed bibendum metus pretium cursus tellus pharetra.",
    image: fourteen_image,
  },
];

export const ArticlesSection = () => {
  return (
    <Box py={8} px={2} bgcolor="#FFF7E5" sx={{ px: { xs: 3, md: 5 } }}>
      <Box mx="auto">
        {/* Header row */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography variant="h5" fontWeight={700}>
            Articles by Collectors
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap={0.5}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#111827", fontWeight: 500 }}
            >
              More Articles
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>

        {/* Article cards */}
        <Box
          display="grid"
          gap={3}
          gridTemplateColumns={{ xs: "1fr", md: "repeat(4, 1fr)" }}
        >
          {articles.map((a) => (
            <Paper
              key={a.title}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "#FFFFFF",
                boxShadow: "0 16px 40px rgba(15, 23, 42, 0.15)",
                transition: "transform 150ms ease, box-shadow 150ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 22px 50px rgba(15, 23, 42, 0.22)",
                },
              }}
            >
              {/* Top image */}
              <Box
                component="img"
                src={a.image}
                alt={a.title}
                sx={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Text content */}
              <Box p={2.5}>
                <Typography fontWeight={600} mb={1}>
                  {a.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={2}
                  sx={{ minHeight: 48 }}
                >
                  {a.description}
                </Typography>

                <Box
                  display="flex"
                  alignItems="center"
                  gap={0.5}
                  sx={{ cursor: "pointer" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, color: "#8B4513" }}
                  >
                    Read article
                  </Typography>
                  <ArrowForwardIcon sx={{ fontSize: 16, color: "#8B4513" }} />
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
