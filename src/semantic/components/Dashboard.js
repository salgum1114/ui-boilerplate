import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
};


class Dashboard extends Component {

    CardExample = () => (
        <Card>
            <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
            />
            <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
            </CardActions>
            <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
        </Card>
    )

    render() {
        return (
            <div style={styles.root}>
                <GridList
                cellHeight="auto"
                cols={4}
                >
                    <Subheader>December</Subheader>
                    {this.CardExample()}
                    {this.CardExample()}
                    {this.CardExample()}
                    {this.CardExample()}
                </GridList>
            </div>
        );
    }
}

export default Dashboard;
