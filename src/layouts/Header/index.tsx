import LoginIcon from '@mui/icons-material/Login';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddIcon from '@mui/icons-material/Add';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import useAuth from 'hooks/useAuth';
import useNotification from 'hooks/useNotification';
import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RouteLink from 'components/RouteLink';
import UserFadeMenu from '../UserFadeMenu';
import { useTheme } from '@mui/material/styles';
import type { MouseEvent } from 'types/react';
import Notifications from './Notifications';
import ResponsiveMatchHeaderMenu from 'layouts/ResponsiveHeaderMenu';
import wait from 'utils/wait';
import { LOGIN_PATH, HOME_PATH } from 'constant/route-path';
import LogoutDialog from 'components/Dialog/LogoutDialog';
import { useTranslation } from 'react-i18next';
import NavBar from './NavBar';
import { SEARCH_BAR_ROUTE } from 'constant/common';
import { HEADER_HEIGHT } from 'constant/layout';

interface NavItemProps {
  label: string;
  icon: ReactElement;
  href: string;
  pathname: string;
}

interface Props {
  changeStepProfile1?: () => void;
}

const Header = (props: Props) => {
  const { changeStepProfile1 } = props;
  const { logout, isAuthenticated } = useAuth();
  const setNotification = useNotification();
  const { pathname } = useRouter();
  useState<boolean>(false);
  const theme = useTheme();
  const router = useRouter();
  const { t } = useTranslation();
  const mediaMinMd = useMediaQuery(theme.breakpoints.up('md'));
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [openLogoutPopup, setOpenLogoutPopup] = useState<boolean>(false);
  const [loadingLogout, setLoadingLogout] = useState<boolean>(false);
  const [showHeaderBottom, setShowHeaderBottom] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setAnchor(null);
  };

  const handleOpenMenu: MouseEvent = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu: MouseEvent = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenLogoutPopup = () => {
    setOpenLogoutPopup(true);
  };

  const handleChangeToProfilePage = () => {
    handleCloseUserMenu();
    handleCloseMenu();
    changeStepProfile1 && changeStepProfile1();
  };

  const handleCloseLogoutPopup = () => {
    setOpenLogoutPopup(false);
  };

  const handleLogout = async () => {
    try {
      setLoadingLogout(true);
      setAnchorElUser(null);
      setAnchor(null);
      await wait(1500);
      await logout();
      setOpenLogoutPopup(false);
      setNotification({
        message: t('message.logoutSuccess'),
        severity: 'success',
      });
      router.push(LOGIN_PATH);
    } catch (error) {
      setNotification({ message: t('message.logoutError'), severity: 'error' });
    } finally {
      setLoadingLogout(false);
    }
  };

  useEffect(() => {
    if (SEARCH_BAR_ROUTE.includes(router.route)) {
      setShowHeaderBottom(true);
    } else {
      setShowHeaderBottom(false);
    }
  }, [router]);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{ minHeight: HEADER_HEIGHT, maxHeight: HEADER_HEIGHT }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            flexGrow: 1,
            px: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              ...(mediaMinMd && {
                alignItems: 'center',
                mr: 1,
                minHeight: HEADER_HEIGHT,
              }),
            }}
          >
            <RouteLink href={HOME_PATH} sx={{}} underline="none">
              <Typography
                variant="h6"
                sx={{
                  pr: 2,
                  fontWeight: 'bold',
                  color: 'primary.contrastText',
                }}
              >
                JAPAN SHIP
              </Typography>
            </RouteLink>
            {mediaMinMd && (
              <Divider orientation="vertical" variant="middle" flexItem />
            )}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              ...(isAuthenticated && { flexGrow: 1 }),
            }}
          >
            {isAuthenticated ? (
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                  }}
                >
                  <TabHeader
                    href="/"
                    icon={<LibraryBooksIcon />}
                    label="????n h??ng"
                    pathname={pathname}
                  />
                  <TabHeader
                    href="/pay"
                    icon={<CreditCardIcon />}
                    label="Thanh to??n"
                    pathname={pathname}
                  />
                </Box>
                <Box>
                  <Button
                    startIcon={<AddIcon />}
                    sx={{
                      bgcolor: '#F5F5F5',
                      color: 'primary.dark',
                      ':hover': { color: 'primary.contrastText' },
                    }}
                  >
                    T???o ????n h??ng
                  </Button>
                  <Notifications />
                  <UserFadeMenu
                    anchorElUser={anchorElUser}
                    handleChangeToProfilePage={handleChangeToProfilePage}
                    handleCloseUserMenu={handleCloseUserMenu}
                    handleOpenLogoutPopup={handleOpenLogoutPopup}
                    handleOpenUserMenu={handleOpenUserMenu}
                    responsiveMatch={mediaMinMd}
                  />
                </Box>
              </Box>
            ) : (
              <RouteLink href={LOGIN_PATH} underline="none">
                <Button
                  sx={{
                    bgcolor: '#F5F5F5',
                    color: 'primary.dark',
                    ':hover': { color: 'primary.contrastText' },
                  }}
                  startIcon={<LoginIcon />}
                >
                  ????NG K??/????NG NH???P
                </Button>
              </RouteLink>
            )}
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <ResponsiveMatchHeaderMenu
              anchor={anchor}
              handleChangeToProfilePage={handleChangeToProfilePage}
              handleCloseMenu={handleCloseMenu}
              handleOpenLogoutPopup={handleOpenLogoutPopup}
              handleOpenMenu={handleOpenMenu}
              responsiveMatch={mediaMinMd}
            />
          </Box>
        </Box>
      </Toolbar>
      {showHeaderBottom && <NavBar />}

      <LogoutDialog
        handleCloseLogoutPopup={handleCloseLogoutPopup}
        handleLogout={handleLogout}
        loadingLogout={loadingLogout}
        openLogoutPopup={openLogoutPopup}
      />
    </AppBar>
  );
};

export default Header;

const TabHeader = (props: NavItemProps) => {
  const { href, icon, label, pathname } = props;

  return (
    <RouteLink href={href} underline="none">
      <Box
        sx={{
          minHeight: 64,
          display: 'flex',
          alignItems: 'center',
          color: 'primary.contrastText',
          ...(pathname === href && {
            color: 'primary.main',
            backgroundColor: 'common.white',
          }),
          px: 2,
        }}
      >
        {icon}
        <Typography component="span" variant="subtitle2" pl={1}>
          {label}
        </Typography>
      </Box>
    </RouteLink>
  );
};
