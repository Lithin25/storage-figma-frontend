// src/sections/EventsSection.tsx
import { Box, Typography, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import {
  fifteen_image,
  sixteen_image,
  seventeen_image,
  eighteen_image,
} from "../assets";

const events = [
  {
    label: "Ipsum",
    title: "Varius est diam",
    image: fifteen_image,
  },
  {
    label: "Purus",
    title: "Diam felis tempus",
    image: sixteen_image,
  },
  {
    label: "Urna",
    title: "Vel nulla varius",
    image: seventeen_image,
  },
  {
    label: "Vitae",
    title: "Amet tristique a",
    image: eighteen_image,
  },
];

export const EventsSection = () => {
  return (
    <Box py={8} px={2} bgcolor="#FBEFC7" sx={{ px: { xs: 3, md: 5 } }}>
      <Box mx="auto">

        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h5" fontWeight={700}>
            Amazing events
          </Typography>

          <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: "pointer" }}>
            <Typography variant="body2" sx={{ color: "#111827", fontWeight: 500 }}>
              Explore Articles
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>

        {/* Event Cards */}
        <Box
          display="grid"
          gap={3}
          gridTemplateColumns={{ xs: "1fr", md: "repeat(4, 1fr)" }}
        >
          {events.map((event) => (
            <Paper
              key={event.title}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "#FFFFFF",
                boxShadow: "0 16px 40px rgba(15, 23, 42, 0.15)",
                transition: "transform 150ms ease, box-shadow 150ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 22px 50px rgba(15, 23, 42, 0.22)",
                },
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >

              {/* Top text section */}
              <Box p={2.5}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ letterSpacing: 0.4 }}
                >
                  {event.label}
                </Typography>

                <Typography fontWeight={700} mt={0.5} sx={{ fontSize: 16, mb: 2 }}>
                  {event.title}
                </Typography>
              </Box>

              {/* Image section - centered */}
              <Box
                component="img"
                src={event.image}
                alt={event.title}
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />

              {/* Bottom action */}
              <Box p={2.5}>
                <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: "pointer" }}>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: "#8B4513" }}>
                    Buy Tickets
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
