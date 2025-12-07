// src/sections/WhyJoinSection.tsx

import {
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { fifth_image } from "../assets";

export const WhyJoinSection = () => {
  return (
    <Box py={8} px={2} bgcolor="#FFF7E5" sx={{ px: { xs: 3, md: 5 } }}>
      <Box
        mx="auto"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={6}
        alignItems="center"
      >
        {/* LEFT: Text + bullets + button */}
        <Box flex={1}>
          <Typography variant="h4" fontWeight={700} mb={2}>
            Why join us
          </Typography>

          <List dense sx={{ mb: 3, pl: 0 }}>
            {[
              "Est in pharetra magna adipiscing ornare aliquam.",
              "Tellus arcu sed consequat ac velit ut et blandit.",
              "Ullamcorper ornare in et egestas dolor orci.",
            ].map((text) => (
              <ListItem key={text} disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#16A34A", fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    variant: "body2",
                    color: "text.secondary",
                  }}
                  primary={text}
                />
              </ListItem>
            ))}
          </List>

          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: 999,
              borderColor: "#8B4513",
              color: "#8B4513",
              px: 3,
              py: 0.9,
              fontWeight: 600,
              "&:hover": {
                borderColor: "#723711",
                backgroundColor: "rgba(139, 69, 19, 0.06)",
              },
            }}
          >
            Sign up now
          </Button>
        </Box>

        {/* RIGHT: Video preview with layered shapes */}
        <Box
          flex={1}
          sx={{
            position: "relative",
            height: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Yellow rotated shape */}
          <Box
            sx={{
              position: "absolute",
              width: 220,
              height: 220,
              bgcolor: "#FACC6B",
              borderRadius: 3,
              transform: "rotate(-35deg)",
              bottom: -40,
              left: "16%",
              zIndex: 0,
            }}
          />

          {/* Pink rounded rectangle */}
          <Box
            sx={{
              position: "absolute",
              width: 120,
              height: 180,
              bgcolor: "#EC4899",
              borderRadius: 5,
              right: "4%",
              bottom: -8,
              zIndex: 0,
            }}
          />

          {/* Blue circle */}
          <Box
            sx={{
              position: "absolute",
              width: 40,
              height: 40,
              bgcolor: "#3B82F6",
              borderRadius: "50%",
              top: -10,
              right: "20%",
              zIndex: 0,
            }}
          />

          {/* Green circle */}
          <Box
            sx={{
              position: "absolute",
              width: 44,
              height: 44,
              bgcolor: "#22C55E",
              borderRadius: "50%",
              bottom: -12,
              left: "40%",
              zIndex: 0,
            }}
          />

          {/* White card behind video */}
          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              width: "80%",
              maxWidth: 420,
              height: 230,
              borderRadius: 4,
              bgcolor: "#FFFFFF",
              zIndex: 1,
            }}
          />

          {/* Video frame */}
          <Paper
            elevation={6}
            sx={{
              position: "relative",
              width: "70%",
              maxWidth: 360,
              borderRadius: 3,
              overflow: "hidden",
              zIndex: 2,
              border: "4px solid #FFFFFF",
            }}
          >
            {/* Video Image */}
            <Box
              component="img"
              src={fifth_image}
              alt="Preview"
              sx={{
                height: 200,
                width: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Play button overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  bgcolor: "rgba(15,23,42,0.75)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PlayArrowIcon sx={{ color: "#FFFFFF", fontSize: 32 }} />
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
