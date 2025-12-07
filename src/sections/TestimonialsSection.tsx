// src/sections/TestimonialsSection.tsx
import {
  Box,
  Typography,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    name: "Alex Carter",
    role: "Collector since 2018",
    text: "Collers helped me find pairs I thought I'd never own. The drops and community are unmatched.",
  },
  {
    name: "Mia Johnson",
    role: "Sneaker Designer",
    text: "I love how Collers curates pieces. It feels like a gallery for footwear art.",
  },
  {
    name: "Daniel Kim",
    role: "Streetwear Enthusiast",
    text: "The platform makes it easy to discover rare sneakers and connect with other collectors.",
  },
];

export const TestimonialsSection = () => {
  return (
    <Box py={8} px={2} bgcolor="#FFF7E5" sx={{ px: { xs: 3, md: 5 },}}>
      <Box  mx="auto">
        {/* Heading row with arrows on the right */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box>
            <Typography variant="h5" fontWeight={700} mb={1}>
              Because they love us
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
          </Box>

          <Box display={{ xs: "none", md: "flex" }} gap={1}>
            <IconButton
              size="small"
              sx={{
                border: "1px solid #C4A94D",
                bgcolor: "#FFF7E5",
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                border: "1px solid #C4A94D",
                bgcolor: "#FFF7E5",
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Box>
        </Box>

        {/* Yellow banner */}
        <Paper
          sx={{
            mt: 2,
            px: 4,
            py: 4,
            borderRadius: 2,
            bgcolor: "#FFE9A6",
            boxShadow: "none",
          }}
        >
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
            gap={3}
          >
            {testimonials.map((t) => (
              <Paper
                key={t.name}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#FFFFFF",
                  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
                }}
              >
                <Typography variant="body2" mb={3}>
                  {t.text}
                </Typography>

                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar sx={{ width: 36, height: 36 }}>
                    {t.name[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {t.role}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
