import { Box } from '@mui/material';
import bgImage from '../../assets/img/caunguyenhoang.jpg';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(2px)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '100vw',
          padding: { xs: 2, sm: 4 },
          pb: { xs: 16, md: 20 }, 
        }}
      >
        <Header />
        <Box sx={{ pt: 10 }}>
        {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;