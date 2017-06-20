import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Header extends Component {

    static propTypes = {
        onLogout: PropTypes.func,
    }

    static defaultProps = {
        onLogout: () => {
            console.error('logout function not defined');
        },
    }

    logged = props => (
        <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Log out" />
        </IconMenu>
    )

    render() {
        return (
            <AppBar title="ThingStar" iconElementRight={this.logged()} onLeftIconButtonTouchTap={this.props.toggle} />
        );
    }
}

export default Header;
