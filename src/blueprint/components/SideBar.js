import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class SideBar extends Component {
    state = {
        open: false,
    }

    componentDidMount() {
        if ($(window).width() <= 768) {
            if (this.state.open) {
                this.setState({ open: !this.state.open });
            }
        } else {
            if (!this.state.open) {
                this.setState({ open: !this.state.open });
            }
        }

        $(window).resize(() => {
            if ($(window).width() <= 768) {
                if (this.state.open) {
                    this.setState({ open: !this.state.open });
                }
            } else {
                if (!this.state.open) {
                    this.setState({ open: !this.state.open });
                }
            }
        });
    }

    handleClose = () => { 
        if ($(window).width() < 760) {
            this.setState({ open: false }); 
        }
    };

    render() {
        return (
            <Drawer
            containerClassName="sidedrawer"
            width={200}
            openSecondary={false}
            open={this.state.open}
            onRequestChange={(open) => {
                console.log(open);
                this.setState({ open });
            }}
            >
                <AppBar title={<Link to="/home"><strong>ThingStar</strong></Link>} showMenuIconButton={false} />
                <Link to="/home"><MenuItem onTouchTap={this.handleClose}>Home</MenuItem></Link>
                <Link to="/about"><MenuItem onTouchTap={this.handleClose}>About</MenuItem></Link>
                <Link to="/dashboard"><MenuItem onTouchTap={this.handleClose}>Dashboard</MenuItem></Link>
            </Drawer>
        );
    }
}

export default SideBar;
