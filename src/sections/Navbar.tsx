import { Box, Button, Typography } from '@mui/material'
import React from 'react'


const Navbar = () => {
  return (
<Box
          display="flex"
          justifyContent="space-between"
          alignItems="center" sx={{ px: { xs: 3, md: 5 },py:3,}}

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
        </Box>
  )
}

export default Navbar
