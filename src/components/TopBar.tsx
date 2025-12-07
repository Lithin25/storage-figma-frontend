import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const TopBar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
      sx={{ borderBottom: "1px solid #e5e7eb", bgcolor: "background.paper" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Page title */}
        <Typography variant="h6" fontWeight={600}>
          Dashboard
        </Typography>

        {/* Middle: Search */}
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            px: 1.5,
            py: 0.5,
            maxWidth: 320,
            flex: 1,
            mx: 4,
          }}
        >
          <SearchIcon fontSize="small" />
          <InputBase placeholder="Search..." sx={{ ml: 1, flex: 1 }} />
        </Paper>

        {/* Right: Notifications + Avatar */}
        <Box display="flex" alignItems="center" gap={1.5}>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
