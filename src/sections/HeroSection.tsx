import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { first_shoe } from '../assets';

export default function HeroSection() {
  return (
            <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={6}
          alignItems="center" sx={{ px: { xs: 3, md: 5 }, bgcolor: "#FFF7E5",}}
          mb={6}
        >
          {/* Left: Hero Text */}
          <Box flex={1}>
            <Typography
              variant="h3"
              fontWeight={700}
              mb={2}
              sx={{ lineHeight: 1.1 }}
            >
              Collectible Sneakers
            </Typography>

            <Typography variant="body1" color="text.secondary" mb={4}>
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </Typography>

            <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
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

              <Button
                variant="text"
                startIcon={<PlayArrowIcon fontSize="small" />}
                sx={{
                  textTransform: "none",
                  color: "#8B4513",
                  fontWeight: 500,
                }}
              >
                Watch demo
              </Button>
            </Box>
          </Box>

          {/* Right: Sneaker Image Placeholder (yellow card) */}
          <Box
            flex={1}
            sx={{
              position: "relative",
              minHeight: 260,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* fake diagonal light area */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "#FCE6A8",
                clipPath: "polygon(0 0, 100% 0, 100% 70%, 60% 100%, 0 100%)",
              }}
            />

            {/* yellow rounded square like Figma */}
            <Box
              sx={{
                position: "relative",
                height: 230,
                bgcolor: "#F4A300",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* TODO: replace with real sneaker image from Figma */}
              <img src={first_shoe} height="100%"/>
            </Box>
          </Box>
        </Box>
  )
}
