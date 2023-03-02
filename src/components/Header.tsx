import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material';
import { styles } from './Header.styles'
import { ContentType } from '../App';

interface HeaderProps {
  display: (content: ContentType) => void;
}

export const Header = (props: HeaderProps) => {
  const { display } = props;
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget)
  };

  const handleSelect = (selection: ContentType) => {
    display(selection);
    handleClose();
  }

  const handleClose = () => {
    setAnchor(null);
  }

  return (
    <Box sx={styles.headerContainer}>
      <Typewriter
        options={{
          strings: ['kali.nyc', 'software engineer'],
          autoStart: true,
          loop: true,
        }}
      />
      <Box sx={styles.headerMenu}>
        <IconButton
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleMenuClick}
        >
          <MenuOutlined />
        </IconButton>
        <Menu
          anchorEl={anchor}
          open={open}
          onClose={handleClose}
          MenuListProps={{'aria-labelledby': 'basic-button'}}
        >
          <MenuItem onClick={() => handleSelect('main')}>
            Main
          </MenuItem>
          <MenuItem onClick={() => handleSelect('about')}>
            About
          </MenuItem>
          <MenuItem onClick={() => handleSelect('projects')}>
            Projects
          </MenuItem>
          <MenuItem onClick={() => handleSelect('gallery')}>
            Gallery
          </MenuItem>
          <MenuItem onClick={() => handleSelect('contact')}>
            Contact
          </MenuItem>


        </Menu>
      </Box>
    </Box>
  )
}
