import React from 'react';
import { loadCSS } from 'fg-loadcss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import MdPhone from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Chip from '@mui/material/Chip';

const Header = () => {
  const theme = createTheme({
    components: {
      MuiIcon: {
        styleOverrides: {
          root: {
            // Match 24px = 3 * 2 + 1.125 * 16
            boxSizing: 'content-box',
            padding: 3,
            fontSize: '1.125rem',
          },
        },
      },
    },
  });

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild,
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <>
      <section className="contact">
        <Stack direction="row" spacing={2}>
          <ThemeProvider theme={theme}>
            <Chip icon={<MdPhone />} label="+48 693-527-468" />
            <Chip icon={<MailIcon />} label="miroslaw.jarosinski@gmail.com" />
          </ThemeProvider>
        </Stack>
      </section>
      <header>
        <h1 className="title">Pracownia Uslug Psychologicznych</h1>
        <p>mgr Miroslaw Jarosinski</p>
      </header>
    </>

  );
};

export default Header;