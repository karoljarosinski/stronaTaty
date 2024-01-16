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
            <a href="tel:+48693527468">
              <Chip icon={<MdPhone/>} label="+48 693-527-468"/>
            </a>
            <a href="mailto:miroslaw.jarosinski@gmail.com">
              <Chip icon={<MailIcon/>} label="miroslaw.jarosinski@gmail.com"/>
            </a>
          </ThemeProvider>
        </Stack>
      </section>
      <header>
        <div>
          <p>Pracownia Uslug Psychologicznych</p>
          <p>mgr Miroslaw Jarosinski</p>
        </div>
      </header>
    </>
  );
};

export default Header;