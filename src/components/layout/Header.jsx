import React, { useState } from 'react';
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';

const menuItems = [
  { label: 'Trang chủ', href: 'https://voquoctrieu.github.io/HueHotelUI/' },
  { label: 'Về chúng tôi', href: 'https://voquoctrieu.github.io/HueHotelUI/' },
  { label: 'Phòng', href: 'https://voquoctrieu.github.io/HueHotelUI/' },
  { label: 'Dịch vụ', href: 'https://voquoctrieu.github.io/HueHotelUI/' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#191919',
        px: { xs: 2, sm: 4 },
        py: 2,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <RealEstateAgentIcon sx={{ fontSize: 32, color: 'white' }} />
        <span style={{ color: 'white', fontWeight: 700, letterSpacing: 6, fontSize: 20, marginLeft: 8 }}>H U E</span>
      </Box>
      {/* Menu PC */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 8 }}>
        {menuItems.map((item) => (
          <Button
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              fontWeight: 700,
              fontSize: 20,
              textTransform: 'none',
              background: 'none',
              boxShadow: 'none',
              '&:hover': { color: '#FFD700', background: 'none' },
              px: 2,
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
      {/* Đặt ngay PC */}
      <Button
        variant="outlined"
        component="a"
        href="https://voquoctrieu.github.io/HueHotelUI/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'white',
          borderColor: 'white',
          fontWeight: 700,
          fontSize: 20,
          borderRadius: 2,
          px: 3,
          py: 1,
          ml: 2,
          display: { xs: 'none', md: 'inline-flex' },
          '&:hover': { background: 'white', color: '#191919', borderColor: 'white' },
        }}
      >
        ĐẶT NGAY
      </Button>
      {/* Hamburger menu mobile */}
      <IconButton
        sx={{ color: 'white', display: { xs: 'inline-flex', md: 'none' } }}
        onClick={() => setOpen(true)}
        edge="end"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 220, mt: 4 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem button component="a" href={item.href} key={item.label} target="_blank" rel="noopener noreferrer">
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem button component="a" href="https://voquoctrieu.github.io/HueHotelUI/" target="_blank" rel="noopener noreferrer">
              <ListItemText primary="ĐẶT NGAY" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header; 