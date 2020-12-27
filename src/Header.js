import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://classicrock995.com/wp-content/uploads/2020/11/Facebook-logo.png" alt="fb_logo" />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisorAccountIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} alt="Adam Iqshan">AI</Avatar>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div >
    )
}

export default Header
