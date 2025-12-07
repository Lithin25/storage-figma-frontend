import { Box, Typography, Button, Paper } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { second_image, third_image, fourth_image } from "../assets";

const bestItems = [
  {
    title: "Title",
    desc: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image: second_image
  },
  {
    title: "Title",
    desc: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image: third_image
  },
  {
    title: "Title",
    desc: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image: fourth_image
  },
];

export const BestOfSection = () => {
  return (
    <Box bgcolor="#0B1220" sx={{ px: { xs: 3, md: 5 }, py: 5 }}>
      <Box
        mx="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
        <Typography variant="h4" fontWeight={700} color="#FFFFFF">
          The best of the best
        </Typography>

        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
            borderRadius: 999,
            px: 3,
          }}
        >
          Sign up now
        </Button>
      </Box>

      {/* Cards */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
        gap={4}
      >
        {bestItems.map((item, index) => (
          <Paper
            key={index}
            sx={{
              bgcolor: "#111827",
              borderRadius: 4,
              p: 0,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Product Image */}
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                height: 220,
                width: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            <Box p={3}>
              <Typography variant="h6" fontWeight={600} color="#FFFFFF" mb={1}>
                {item.title}
              </Typography>

              <Typography variant="body2" color="#9CA3AF" mb={2}>
                {item.desc}
              </Typography>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  textTransform: "none",
                  borderRadius: 999,
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                  px: 1.2,
                  fontWeight: 600,
                  gap: 1.2,
                }}
              >
                <ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />
                Buy Now
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
