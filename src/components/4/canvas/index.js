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
            <div className="flex-parent">
            <div className="flex-shild">
                    <div className="textArea">
                        <h2>Описание цели</h2>
                            <TextArea rows={4} onChange={async ({target}) => {
                                await this.setState({
                                    area1: target.value
                                });
                            }
                            }/>
                    </div>
                    <div className="textArea">
                        <h2>Почему/Зачем?</h2>
                        <TextArea rows={4} onChange={async ({target}) => {
                            await this.setState({
                                area2: target.value
                            });
                        }
                        }/>
                    </div>
            </div>
            <div className="flex-shild">
                    <div className="textArea">
                        <h2>Контекстные ситуации</h2>
                        <TextArea rows={4} onChange={async ({target}) => {
                            await this.setState({
                                area3: target.value
                            });
                        }
                        }/>
                    </div>
                    <div className="textArea">
                        <h2>Проблемы</h2>
                        <TextArea rows={4} onChange={async ({target}) => {
                            await this.setState({
                                area4: target.value
                            });
                        }
                        }/>
                    </div>
            </div>
            <div className="flex-shild">
                <div className="textArea">
                    <h2>Ценность</h2>
                    <TextArea rows={4} onChange={async ({target}) => {
                        await this.setState({
                            area5: target.value
                        });
                    }
                    }/>
                </div>
                <div className="textArea">
                    <h2>Возможности</h2>
                    <TextArea rows={4} onChange={async ({target}) => {
                        await this.setState({
                            area6: target.value
                        });
                    }
                    }/>
                </div>
                <div className="textArea">
                    <h2>Ограничения</h2>
                    <TextArea rows={4} onChange={async ({target}) => {
                        await this.setState({
                            area6: target.value
                        });
                    }
                    }/>
                </div>
            </div>
            </div>
            <Button className="button" onClick={this.send_data}>Готово</Button>
            </div>
        )
    }
}

export default Canvas;
