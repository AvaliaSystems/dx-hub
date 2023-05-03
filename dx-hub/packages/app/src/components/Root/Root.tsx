import React, { PropsWithChildren } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import ExtensionIcon from '@material-ui/icons/Extension';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search';
import {
  Link,
  Sidebar,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
} from '@backstage/core-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import EcoIcon from '@material-ui/icons/Eco';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import { PersonaContextProvider } from '@internal/plugin-avalia-dxhub-ui-components-react';
import { PersonaToggle } from './PersonaToggle';
import { BackstageTheme } from '@backstage/theme';

const useStyles = makeStyles<BackstageTheme>(theme => ({
  logo: {
    top: theme.spacing(2.5),
    left: theme.spacing(2),
    position: 'fixed',
    width: '40px',
    height: '40px',
    background: 'url(/images/dxhub-logo.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 9999,
  },
}));

export const Root = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();
  return (
    <PersonaContextProvider>
      <SidebarPage>
        <Link to="/">
          <Box className={classes.logo} />
        </Link>{' '}
        <Box
          height="5rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingRight="1rem"
        >
          <PersonaToggle />
        </Box>
        <Sidebar disableExpandOnHover>
          <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
            <SidebarSearchModal />
          </SidebarGroup>
          <SidebarGroup label="Menu" icon={<MenuIcon />}>
            <SidebarItem icon={HomeIcon} to="/" text="Home" />
            <SidebarItem
              icon={EcoIcon}
              color="green"
              to="sustainable-bits"
              text="Sustainable Bits"
            />
            <SidebarItem icon={ListIcon} to="catalog" text="Home" />
            <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />
            <SidebarItem icon={LibraryBooks} to="docs" text="Docs" />
            <SidebarItem
              icon={FlightTakeoffIcon}
              to="avalia-dx-kickstart"
              text="DX Kickstart"
            />
            <SidebarItem
              icon={CreateComponentIcon}
              to="create"
              text="Create..."
            />
          </SidebarGroup>
          <SidebarGroup
            label="Settings"
            icon={<UserSettingsSignInAvatar />}
            to="/settings"
          >
            <SidebarSettings />
          </SidebarGroup>
        </Sidebar>
        {children}
      </SidebarPage>
    </PersonaContextProvider>
  );
};
