import { createTheme, lightTheme, BackstageTheme } from '@backstage/theme';
import { BackstageOverrides } from '@backstage/core-components';
import { BackstageOverrides as CatalogReactOverrides } from '@backstage/plugin-catalog-react';
import { Overrides } from '@material-ui/core/styles/overrides';


const palette = {
  ...lightTheme.palette,
  primary: {
    main: '#951c9c',
    light: '#3857c7',
    dark: '#1c2c63',
  },
  secondary: {
    main: '#325dd0',
    light: '#f76e99',
    dark: '#f20d55',
  },
  navigation: {
    indicator: '#f5487f',
    color: '#1c2c62',
    selectedColor: '#f5487f',
    background: 'none',
    navItem: {
      hoverBackground: lightTheme.palette.grey[300]
    }

  },
}

const avaliaDxHubBaseTheme = createTheme({
  fontFamily: 'system-ui',
  defaultPageTheme: 'home',
  pageTheme: {
    home: {
      colors: [],
      fontColor: '#ffffff',
      shape: '',
      backgroundImage: palette.secondary.main,
    },
  },
  palette: palette,
});

const createCustomThemeOverrides = (theme: BackstageTheme): Overrides & BackstageOverrides & CatalogReactOverrides => {
  return {
    MuiDivider: {
      root: {
        backgroundColor: 'transparent'
      }
    },
    MuiLink: {
      underlineHover: {
        '&:hover': {
          textDecoration: 'none'
        }
      }
    },
    BackstageSidebar: {
      drawer: {
        background: theme.palette.background.default,
        justifyContent: 'center',
      },

    },
    BackstageSidebarItem: {
      root: {
        opacity: 0.2,
        transition: 'opacity 1s',
        '&:hover': {
          opacity: 1,
          transition: 'opacity 1s',
        },
      }

    },
    BackstagePage: {
      root: {
        paddingRight: '1rem',
        height: 'unset',
      },
    },
    BackstageHeader: {
      header: {
        backgroundImage: 'unset',
        color: 'yellow',
        boxShadow: 'unset',
        backgroundColor: theme.palette.primary.main,
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
      },
    },
    BackstageContent: {
      root: {
        background: theme.palette.grey[200],
        minHeight: '100vh',
      },
    },
    BackstageHeaderTabs: {
      tabsWrapper: {
        backgroundColor: theme.palette.grey[200],
      }
    },
    BackstageItemCardHeader: {
      root: {
        background: theme.palette.secondary.main,
      }
    },
    BackstageInfoCard: {

      header: {
        // background: 'red'
      }
    }
  }
}

export const avaliaDxHubTheme: BackstageTheme = {
  ...avaliaDxHubBaseTheme,
  overrides: {
    ...avaliaDxHubBaseTheme.overrides,
    ...createCustomThemeOverrides(avaliaDxHubBaseTheme)
  }
}

const SIDEBAR_PIN_STATE = 'sidebarPinState';
if (window.localStorage.getItem(SIDEBAR_PIN_STATE) === null) {
  window.localStorage.setItem(SIDEBAR_PIN_STATE, JSON.stringify(false));
}



