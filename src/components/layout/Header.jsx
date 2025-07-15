import React from 'react';
import { Box, Button } from '@mui/material';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';

const menuItems = [
  { label: 'Trang chủ', href: 'https://voquoctrieu.github.io/HueHotelUi/' },
  { label: 'Về chúng tôi', href: 'https://voquoctrieu.github.io/HueHotelUi/' },
  { label: 'Phòng', href: 'https://voquoctrieu.github.io/HueHotelUi/' },
  { label: 'Dịch vụ', href: 'https://voquoctrieu.github.io/HueHotelUi/' },
];

const Header = () => (
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#191919',
      px: 4,
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
    <Box sx={{ display: 'flex', gap: 18 }}>
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
    <Button
      variant="outlined"
      component="a"
      href="https://voquoctrieu.github.io/HueHotelUi/"
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
        '&:hover': { background: 'white', color: '#191919', borderColor: 'white' },
      }}
    >
      ĐẶT NGAY
    </Button>
  </Box>
);

export default Header; 