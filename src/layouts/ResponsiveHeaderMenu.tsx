import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import RouteLink, { NextLinkComposed } from 'components/RouteLink';
import {
  ADDRESS_PATH,
  CHANGE_PASSWORD_PROFILE_PATH,
  NOTIFICATION_PATH,
  PROFILE_PATH,
  TRANSACTION_HISTORY_PATH,
} from 'constant/route-path';
import useAuth from 'hooks/useAuth';
import useSocketNotification from 'hooks/useSocketNotification';
import { Fragment } from 'react';
import { MouseEvent } from 'types/react';

interface Props {
  responsiveMatch: boolean;
  handleOpenMenu: MouseEvent<HTMLButtonElement>;
  handleCloseMenu: () => void;
  anchor: HTMLElement | null;
  handleChangeToProfilePage: () => void;
  handleOpenLogoutPopup: () => void;
}

const ResponsiveMatchHeaderMenu = (props: Props) => {
  const {
    responsiveMatch,
    anchor,
    handleChangeToProfilePage,
    handleCloseMenu,
    handleOpenLogoutPopup,
    handleOpenMenu,
  } = props;

  const { isAuthenticated } = useAuth();
  const { unReadCount } = useSocketNotification();

  return (
    <Fragment>
      {!responsiveMatch && (
        <Fragment>
          {isAuthenticated && (
            <Fragment>
              <RouteLink
                href={NOTIFICATION_PATH}
                sx={{ color: 'common.white', px: 1 }}
              >
                <Badge badgeContent={unReadCount} color="error">
                  <NotificationsIcon />
                </Badge>
              </RouteLink>
            </Fragment>
          )}
        </Fragment>
      )}
      <IconButton onClick={handleOpenMenu} color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{ sx: { mt: 1, display: { md: 'none' }, width: 200 } }}
        MenuListProps={{ dense: true }}
      >
        {isAuthenticated ? (
          <Box>
            <MenuItem
              onClick={handleChangeToProfilePage}
              component={NextLinkComposed}
              to={PROFILE_PATH}
            >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>Tài khoản của tôi</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={handleChangeToProfilePage}
              component={NextLinkComposed}
              to={ADDRESS_PATH}
            >
              <ListItemIcon>
                <HomeWorkIcon />
              </ListItemIcon>
              <ListItemText>Địa chỉ</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={handleChangeToProfilePage}
              component={NextLinkComposed}
              to={CHANGE_PASSWORD_PROFILE_PATH}
            >
              <ListItemIcon>
                <KeyIcon />
              </ListItemIcon>
              <ListItemText>Đổi mật khẩu</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={handleCloseMenu}
              component={NextLinkComposed}
              to={TRANSACTION_HISTORY_PATH}
            >
              <ListItemIcon>
                <AccountBalanceWalletIcon sx={{ mr: 2.5 }} />
              </ListItemIcon>
              <ListItemText>Ví của tôi</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={handleCloseMenu}
              component={NextLinkComposed}
              to="#"
            >
              <ListItemIcon>
                <SettingsIcon sx={{ mr: 2.5 }} />
              </ListItemIcon>
              <ListItemText>Cài đặt</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={handleOpenLogoutPopup}
              component={NextLinkComposed}
              to="#"
            >
              <ListItemIcon>
                <LogoutIcon sx={{ mr: 2.5 }} />
              </ListItemIcon>
              <ListItemText>Đăng xuất</ListItemText>
            </MenuItem>
          </Box>
        ) : (
          <Box>
            <MenuItem
              onClick={handleCloseMenu}
              component={NextLinkComposed}
              to={NOTIFICATION_PATH}
            >
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText>Thông báo</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={handleCloseMenu}
              component={NextLinkComposed}
              to="/auth/login"
            >
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText>Đăng nhập</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={handleCloseMenu}
              component={NextLinkComposed}
              to="/auth/register"
            >
              <ListItemIcon>
                <HowToRegIcon />
              </ListItemIcon>
              <ListItemText>Đăng ký</ListItemText>
            </MenuItem>
          </Box>
        )}
      </Menu>
    </Fragment>
  );
};

export default ResponsiveMatchHeaderMenu;
