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
                <div className="textArea">
                    <h2>Описание цели</h2>
                    <TextArea placeholder="В 2-3 предложениях опишите исходную идею." rows={4} onChange={async ({target}) => {
                        await this.setState({
                            area1: target.value
                        });
                    }
                    }/>
                </div>
                <div className="textArea">
                    <h2>Почему/Зачем?</h2>
                    <TextArea placeholder="Почему важно реализовать эту идею? Зачем она нужна? (как для пользователей, так и для бизнеса) 
                    Используйте технику 5 почему?, чтобы выяснить первопричины." rows={4} onChange={async ({target}) => {
                        await this.setState({
                            area2: target.value
                        });
                    }
                    }/>
                </div>
                <div className="textArea">
                    <h2>Контекстные ситуации</h2>
                    <TextArea placeholder="В какой момент времени у людей возникает потребность в этой идеи? Когда люди сталкиваются с проблемами, которые} Что люди при этом делают и почему?" rows={4} onChange={async ({target}) => {
                        await this.setState({
                            area3: target.value
                        });
                    }
                    }/>
                </div>
                <div className="textArea">
                    <h2>Проблемы</h2>
                    <TextArea placeholder="Какие пользовательские проблемы мы пытаемся решить? Откуда мы узнали об этих проблемах? Как давно эти проблемы известны? Как часто нам о них сообщают?" rows={4} onChange={async ({target}) => {
                        await this.setState({
                            area4: target.value
                        });
                    }
                    }/>
                </div>
                <div className="textArea">
                    <h2>Ценность</h2>
                    <TextArea placeholder="Какую ценность мы принесем людям? Почему люди захотят пользоваться предлагаемым решением? Чем новое решение будет лучше их текущего поведения?" rows={4} onChange={async ({target}) => {
                        await this.setState({
                            area5: target.value
                        });
                    }
                    }/>
                </div>
                <div className="textArea">
                    <h2>Возможности</h2>
                    <TextArea placeholder="Что нам может помочь решить эти проблемы? (что у нас есть на данный момент)  Возможности: технические, временные, интерфейсные, контекстные, навыки и привычки пользователей и т.д." rows={4} onChange={async ({target}) => {
                        await this.setState({
                            area6: target.value
                        });
                    }
                    }/>
                </div>
                <div className="textArea">
                    <h2>Ограничения</h2>
                    <TextArea placeholder="Что нам может помешать решить эти проблемы? (что у нас есть на данный момент)" rows={4} onChange={async ({target}) => {
                        await this.setState({
                            area6: target.value
                        });
                    }
                    }/>
                </div>
            </div>
            <Button className='button' onClick={this.send_data}>Готово</Button>
            </div>
        )
    }
}

export default Canvas;
