// src/sections/StatsMapSection.tsx
import { Box, Typography, Paper } from "@mui/material";
import { nine_image, ten_image } from "../assets";

export const StatsMapSection = () => {
  return (
    <Box py={12} px={2} bgcolor="#8B3A23" sx={{ px: { xs: 3, md: 5 } }}>
      <Box mx="auto" position="relative">
        {/* Small overlay card */}
        <Paper
          elevation={6}
          sx={{
            position: "absolute",
            top: -80,
            left: { xs: "8%", md: "6%" },
            width: { xs: 190, md: 230 },
            borderRadius: 4,
            overflow: "hidden",
            bgcolor: "#FFFFFF",
            zIndex: 3,
          }}
        >
          <Box
            component="img"
            src={nine_image}
            alt="Sneaker collected"
            sx={{
              width: "100%",
              height: 140,
              objectFit: "cover",
            }}
          />

          <Box px={2} py={1.5}>
            <Typography variant="body2" color="text.secondary">
              Emma Simpson collected one pair of Cool Shoes.
            </Typography>
          </Box>
        </Paper>

        {/* Map section */}
        <Box
          sx={{
            mt: 10,
            borderRadius: 5,
            overflow: "hidden",
            position: "relative",
            minHeight: { xs: 300, md: 420 },   // increased
            maxWidth: 1120,                    // increased width for visibility
            mx: "auto",
            bgcolor: "#8B3A23",
            backgroundImage: `url(${ten_image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Green circles */}
          {[
            { top: "30%", left: "22%" },
            { top: "44%", left: "34%" },
            { top: "56%", left: "50%" },
            { top: "36%", left: "66%" },
            { top: "68%", left: "28%" },
            { top: "72%", left: "76%" },
          ].map((pos, idx) => (
            <Box
              key={idx}
              sx={{
                position: "absolute",
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: "3px solid #7CFF64",
                backgroundColor: "rgba(0,0,0,0.25)",
                top: pos.top,
                left: pos.left,
              }}
            />
          ))}

          {/* Stats */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" fontWeight={700} color="#FFFFFF">
              11,658,467
            </Typography>
            <Typography variant="h5" color="#FFFFFF">
              Shoes Collected
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
