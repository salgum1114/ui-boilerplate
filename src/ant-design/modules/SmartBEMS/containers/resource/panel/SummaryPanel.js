import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Badge } from 'antd';
import * as actions from '../../../actions/smartbems/smartBEMS';

class SummaryPanel extends Component {
    incremental = () => {
        this.props.incremental();
    }

    decremental = () => {
        this.props.decremental();
    }

    render() {
        return (
            <div>
                <Button onClick={this.incremental}>Incremental</Button>
                <Button onClick={this.decremental}>Decremental</Button>
                <Badge count={this.props.count} showZero />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.smartBEMS.count,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    incremental: actions.incremental,
    decremental: actions.decremental,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPanel);
