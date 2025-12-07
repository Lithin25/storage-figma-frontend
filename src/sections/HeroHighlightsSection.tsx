// src/sections/HeroHighlightsSection.tsx
import { Box, Typography } from "@mui/material";

const highlights = [
  {
    label: "Nibh viverra",
    text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam.",
    color: "#60A5FA",
  },
  {
    label: "Cursus amet",
    text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam.",
    color: "#34D399",
  },
  {
    label: "Ipsum fermentum",
    text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam.",
    color: "#F472B6",
  },
];

export const HeroHighlightsSection = () => {
  return (
    <Box mb={6} sx={{ px: { xs: 3, md: 5 },}}
>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
        gap={4}
      >
        {highlights.map((item) => (
          <Box key={item.label}>
            <Box
              sx={{
                width: 40,
                height: 24,
                borderRadius: 999,
                bgcolor: item.color,
                mb: 2,
              }}
            />
            <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
              {item.label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
