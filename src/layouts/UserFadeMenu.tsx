import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import KeyIcon from '@mui/icons-material/Key';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { NextLinkComposed } from 'components/RouteLink';
import {
  ADDRESS_PATH,
  CHANGE_PASSWORD_PROFILE_PATH,
  PROFILE_PATH,
  TRANSACTION_HISTORY_PATH,
  ORDER_PATH,
} from 'constant/route-path';
import useAuth from 'hooks/useAuth';
import { Fragment } from 'react';
import { MouseEvent } from 'types/react';

interface Props {
  responsiveMatch: boolean;
  handleOpenUserMenu: MouseEvent<HTMLButtonElement>;
  handleCloseUserMenu: () => void;
  anchorElUser: HTMLElement | null;
  handleChangeToProfilePage: () => void;
  handleOpenLogoutPopup: () => void;
}

const UserFadeMenu = (props: Props) => {
  const {
    responsiveMatch,
    handleOpenUserMenu,
    anchorElUser,
    handleCloseUserMenu,
    handleOpenLogoutPopup,
    handleChangeToProfilePage,
  } = props;
  const { user } = useAuth();

  return (
    <Fragment>
      <Tooltip title="Xem thêm">
        <ButtonBase onClick={handleOpenUserMenu}>
          <Avatar
            sx={{ width: 40, height: 40 }}
            alt="avatar"
            src={`${user?.hostUrl}${user?.imageUrl}`}
          />
        </ButtonBase>
      </Tooltip>
      {/* user menu */}
      {responsiveMatch && (
        <Menu
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            sx: {
              width: 200,
              mt: 1,
            },
          }}
        >
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
            onClick={handleCloseUserMenu}
            component={NextLinkComposed}
            to={CHANGE_PASSWORD_PROFILE_PATH}
          >
            <ListItemIcon>
              <KeyIcon />
            </ListItemIcon>
            <ListItemText>Đổi mật khẩu</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={handleCloseUserMenu}
            component={NextLinkComposed}
            to={ORDER_PATH}
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText>Đơn hàng</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={handleCloseUserMenu}
            component={NextLinkComposed}
            to={TRANSACTION_HISTORY_PATH}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon sx={{ mr: 2.5 }} />
            </ListItemIcon>
            <ListItemText>Ví của tôi</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={handleCloseUserMenu}
            component={NextLinkComposed}
            to="/settings"
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText>Cài đặt</ListItemText>
          </MenuItem>
          <Divider component="li" />
          <MenuItem onClick={handleOpenLogoutPopup}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Đăng xuất</ListItemText>
          </MenuItem>
        </Menu>
      )}
    </Fragment>
  );
};

export default UserFadeMenu;
