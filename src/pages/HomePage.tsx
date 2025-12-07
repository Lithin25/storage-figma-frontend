import { Box} from "@mui/material";
import { BestOfSection } from "../sections/BestOfSection";
import { WhyJoinSection } from "../sections/WhyJoinSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { GrowCollectionSection } from "../sections/GrowCollectionSection";
import { StatsMapSection } from "../sections/StatsMapSection";
import { ArticlesSection } from "../sections/ArticlesSection";
import { EventsSection } from "../sections/EventsSection";
import { Footer } from "../sections/Footer";
import { HeroHighlightsSection } from "../sections/HeroHighlightsSection";
import Navbar from "../sections/Navbar";
import HeroSection from "../sections/HeroSection";

export const HomePage = () => {
  return (
    <>
      {/* Main content wrapper */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#FFF7E5",
        }}
      >
        {/* NAVBAR */}
        {/* <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={6}
        >
          <Typography variant="h6" fontWeight={700}>
            Collers
          </Typography>

          <Box display={{ xs: "none", md: "flex" }} gap={3} alignItems="center">
            <Typography variant="body2">Products</Typography>
            <Typography variant="body2">Solutions</Typography>
            <Typography variant="body2">Pricing</Typography>
            <Typography variant="body2">Resources</Typography>
            <Typography variant="body2">Log In</Typography>

            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: 999,
                borderColor: "#8B4513",
                color: "#8B4513",
                px: 3,
                py: 0.8,
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
        </Box> */}
        <Navbar/>

        {/* HERO SECTION */}
        {/* <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={6}
          alignItems="center"
          mb={6}
        >
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
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "#FCE6A8",
                clipPath: "polygon(0 0, 100% 0, 100% 70%, 60% 100%, 0 100%)",
              }}
            />

            <Box
              sx={{
                position: "relative",
                width: "75%",
                maxWidth: 340,
                height: 230,
                bgcolor: "#F4A300",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Sneaker image area
              </Typography>
            </Box>
          </Box>
        </Box> */}

            <HeroSection/>

        {/* row of 3 highlights below hero (the colored blobs + text) */}
        <HeroHighlightsSection />

        {/* SECTION: The Best Of The Best */}
        <BestOfSection />

        {/* SECTION: Why Join Us */}
        <WhyJoinSection />

        {/* SECTION: Testimonials */}
        <TestimonialsSection />

        {/* SECTION: Grow your collection */}
        <GrowCollectionSection />

        {/* SECTION: Map stats */}
        <StatsMapSection />

        {/* SECTION: Articles */}
        <ArticlesSection />

        {/* SECTION: Events */}
        <EventsSection />

        {/* SECTION: Footer */}
        <Footer />
      </Box>
    </>
  );
};
