import React from 'react';
import { Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';

const Footer = () => (
  <Box
    sx={{
      width: '100%',
      background: '#111',
      color: 'white',
      py: 4,
      px: { xs: 2, md: 8 },
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { xs: 'flex-start', md: 'center' },
      justifyContent: 'space-between',
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      mt: 8,
      position: { xs: 'static', md: 'fixed' },
      left: 0,
      bottom: 0,
      zIndex: 2,
    }}
  >
    {/* Social icons */}
    <Box sx={{ display: 'flex', gap: 4, mb: { xs: 2, md: 0 } }}>
      <FacebookIcon sx={{ fontSize: 32 }} />
      <TwitterIcon sx={{ fontSize: 32 }} />
      <PinterestIcon sx={{ fontSize: 32 }} />
      <InstagramIcon sx={{ fontSize: 32 }} />
    </Box>
    {/* Contact info */}
    <Box sx={{ minWidth: 200, mb: { xs: 2, md: 0 } }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Liên Hệ</Typography>
      <Typography>Tel: +84 702 679 156</Typography>
      <Typography>Email: 22T1020774@husc.edu.vn</Typography>
    </Box>
    {/* Address */}
    <Box sx={{ minWidth: 250, mb: { xs: 2, md: 0 } }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Địa Chỉ</Typography>
      <Typography>1/142 Nguyễn Sinh Cung, Vỹ Dạ, Huế,</Typography>
      <Typography>Thành phố Huế</Typography>
    </Box>
    {/* Logo */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <RealEstateAgentIcon sx={{ fontSize: 32 }} />
      <span style={{ color: 'white', fontWeight: 700, letterSpacing: 6, fontSize: 20, marginLeft: 8 }}>H U E</span>
    </Box>
  </Box>
);

export default Footer; 