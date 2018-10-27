import {Input, Button} from 'antd'
import React from 'react'

import 'antd/es/mention/style/index.js'
import 'antd/es/input/style/index.js'
import 'antd/es/button/style/index.js'

const {TextArea} = Input;

class Canvas extends React.Component {
    state = {};

    send_data = () => {
        this.props.send(this.state);
    };

    render() {
        return (
            <div>
                <TextArea rows={4} onChange={async ({target}) => {
                    await this.setState({
                        area1: target.value
                    });
                }
                }/>
                <TextArea rows={4} onChange={async ({target}) => {
                    await this.setState({
                        area2: target.value
                    });
                }
                }/>
                <TextArea rows={4} onChange={async ({target}) => {
                    await this.setState({
                        area3: target.value
                    });
                }
                }/>
                <TextArea rows={4} onChange={async ({target}) => {
                    await this.setState({
                        area4: target.value
                    });
                }
                }/>
                <TextArea rows={4} onChange={async ({target}) => {
                    await this.setState({
                        area5: target.value
                    });
                }
                }/>
                <TextArea rows={4} onChange={async ({target}) => {
                    await this.setState({
                        area6: target.value
                    });
                }
                }/>
                <Button onClick={this.send_data}>Отправить</Button>
            </div>
        )
    }
}

export default Canvas;