// src/sections/Footer.tsx
import { Box, Typography, Button, Divider } from "@mui/material";

export const Footer = () => {
  return (
    <Box bgcolor="#020617" color="#FFFFFF" mt={0} pt={8} pb={4} sx={{ px: { xs: 3, md: 5 },}}>
      {/* TOP: CTA + Sign up button */}
      <Box
        mx="auto"
        px={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={6}
      >
        <Typography variant="h4" fontWeight={700}>
          Collect More Sneakers Today
        </Typography>

        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: 999,
            borderColor: "#FFFFFF",
            color: "#FFFFFF",
            px: 4,
            py: 1,
            fontWeight: 600,
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.06)",
              borderColor: "#FFFFFF",
            },
          }}
        >
          Sign up now
        </Button>
      </Box>

          <Divider sx={{borderColor:"#fffbeb8a",mb:7}}/>
      {/* DIVIDER 1 */}


      {/* MIDDLE: link columns */}
      <Box
        mx="auto"
        px={2}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={6}
        mb={6}
      >
        {/* Product */}
        <Box>
          <Typography fontWeight={600} mb={1.5}>
            Product
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Pricing
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Overview
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Browse
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Accessibility
          </Typography>
          <Typography variant="body2">Five</Typography>
        </Box>

        {/* Solutions */}
        <Box>
          <Typography fontWeight={600} mb={1.5}>
            Solutions
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Brainstorming
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Ideation
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Wireframing
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Research
          </Typography>
          <Typography variant="body2">Design</Typography>
        </Box>

        {/* Support */}
        <Box>
          <Typography fontWeight={600} mb={1.5}>
            Support
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Contact Us
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Developers
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Documentation
          </Typography>
          <Typography variant="body2" mb={0.5}>
            Integrations
          </Typography>
          <Typography variant="body2">Reports</Typography>
        </Box>

        {/* Get the App + Follow us */}
        <Box>
          <Typography fontWeight={600} mb={1.5}>
            Get the App
          </Typography>

          {/* App store placeholders */}
          <Box
            sx={{
              borderRadius: 1,
              border: "1px solid #E5E7EB",
              px: 1.5,
              py: 0.75,
              mb: 1,
              fontSize: 12,
              display: "inline-block",
            }}
          >
            App Store
          </Box>
          <Box
            sx={{
              borderRadius: 1,
              border: "1px solid #E5E7EB",
              px: 1.5,
              py: 0.75,
              fontSize: 12,
              display: "inline-block",
            }}
          >
            Google Play
          </Box>

          <Typography fontWeight={600} mt={3} mb={1.5}>
            Follow Us
          </Typography>
          <Box display="flex" gap={1.5}>
            <Typography variant="body2">YT</Typography>
            <Typography variant="body2">FB</Typography>
            <Typography variant="body2">IG</Typography>
            <Typography variant="body2">IN</Typography>
          </Box>
        </Box>
      </Box>

      {/* DIVIDER 2 */}
          <Divider sx={{borderColor:"#fffbeb8a",mb:7}}/>


      {/* BOTTOM: copyright + links */}
      <Box
        mx="auto"
        px={2}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        gap={2}
      >
        <Typography variant="body2" color="#9CA3AF">
          Collers © 2023. All rights reserved.
        </Typography>

        <Box display="flex" gap={3} flexWrap="wrap">
          <Typography
            variant="body2"
            color="#9CA3AF"
            sx={{ cursor: "pointer" }}
          >
            Terms
          </Typography>
          <Typography
            variant="body2"
            color="#9CA3AF"
            sx={{ cursor: "pointer" }}
          >
            Privacy
          </Typography>
          <Typography
            variant="body2"
            color="#9CA3AF"
            sx={{ cursor: "pointer" }}
          >
            Contact
          </Typography>
          <Typography
            variant="body2"
            color="#9CA3AF"
            sx={{ cursor: "pointer" }}
          >
            EN
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
