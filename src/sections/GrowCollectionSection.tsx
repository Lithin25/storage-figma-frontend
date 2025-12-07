// src/sections/GrowCollectionSection.tsx
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { six_image, seven_image, eight_image } from "../assets";

export const GrowCollectionSection = () => {
  return (
    <Box py={8} px={2} bgcolor="#FFF7E5" sx={{ px: { xs: 3, md: 5 } }}>
      <Box mx="auto">
        {/* Heading + description */}
        <Typography variant="h5" fontWeight={700} mb={1}>
          Grow your collection
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          Discover rare pieces, manage your wishlist, and get notified about
          drops that matter to you. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Eu non turpis risus odio sapien, fames at rhoncus.
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
          alignItems="stretch"
        >
          {/* LEFT: Filter / options panel */}
          <Paper
            sx={{
              flexBasis: { xs: "100%", md: 260 },
              p: 2.5,
              borderRadius: 3,
              bgcolor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Search row */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                borderRadius: 2,
                border: "1px solid #E5E7EB",
                px: 1.5,
                py: 1,
              }}
            >
              <SearchIcon sx={{ fontSize: 18, color: "#6B7280" }} />
              <Typography variant="body2" color="#9CA3AF">
                Bibendum tellus
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <ArrowForwardIcon sx={{ fontSize: 18, color: "#6B7280" }} />
            </Box>

            {/* Options list */}
            <List dense sx={{ p: 0 }}>
              {[
                "Cras eget",
                "Dolor pharetra",
                "Amet fringilla",
                "Amet nibh",
                "Sed velit",
              ].map((item) => (
                <ListItem key={item} disableGutters>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      variant: "body2",
                      color: "text.secondary",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* RIGHT: Overlapping gallery frames */}
          <Box flex={1} position="relative" minHeight={260}>
            {/* BACK frame */}
            <Paper
              sx={{
                position: "absolute",
                inset: { xs: "16% 8% auto 12%", md: "6% 18% auto 6%" },
                height: { xs: 180, md: 210 },
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "#E5E7EB",
              }}
            >
              <Box
                component="img"
                src={six_image}
                alt="Collection preview 1"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Paper>

            {/* FRONT main frame */}
            <Paper
              sx={{
                position: "absolute",
                inset: { xs: "0 0 auto 12%", md: "-10% 0 auto 14%" },
                height: { xs: 210, md: 230 },
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "#FFFFFF",
                boxShadow: "0 24px 60px rgba(15, 23, 42, 0.35)",
                border: "4px solid #FFFFFF",
              }}
            >
              <Box
                component="img"
                src={seven_image}
                alt="Collection preview 2"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Paper>

            {/* SMALL overlay frame on the right */}
            <Paper
              sx={{
                position: "absolute",
                right: { xs: "2%", md: "-4%" },
                bottom: { xs: -20, md: -10 },
                width: { xs: 140, md: 170 },
                height: { xs: 120, md: 135 },
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "#FFFFFF",
                boxShadow: "0 18px 40px rgba(15, 23, 42, 0.35)",
                border: "3px solid #FFFFFF",
              }}
            >
              <Box
                component="img"
                src={eight_image}
                alt="Collection preview 3"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
