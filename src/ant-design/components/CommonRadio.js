import React, { Component } from 'react';
import { Radio, DatePicker, Row, Popover, Button } from 'antd';

class CommonRadio extends Component {
    state = {
        visible: false,
        datetimeType: 1,
    }

    handleChangeVisible = () => {
        this.setState({
            visible: !this.state.visible,
        })
    }

    handlers = {
        onRadioChange: (e) => {
            this.setState({
                datetimeType: e.target.value,
            });
        }
    }
    
    content = () => {
        return (
            <Row>
                <Radio.Group
                    defaultValue={this.state.datetimeType}
                    onChange={this.props.onRadioChange}
                >
                    <Radio value={1}>
                        <label>{'첫번째'}</label>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm:ss"
                        />
                    </Radio>
                    <Radio value={2}>
                        <label>{'첫번째'}</label>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm:ss"
                        />
                    </Radio>
                </Radio.Group>
            </Row>
        )
    }

    render() {
        console.log(this.props);
        return (
            <Popover
                content={this.content()}
                visible={this.state.visible}
            >
                <Button onClick={this.handleChangeVisible}>{'오픈'}</Button>
            </Popover>
        );
    }
}

export default CommonRadio;
