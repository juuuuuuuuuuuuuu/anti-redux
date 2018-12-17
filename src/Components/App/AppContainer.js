import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
    //클래스가 생성되었을 때 store가  value를 얻는다.
    //provider에 사용할 함수는 반드시 생성자에 명시해야한다.
    constructor() {
        super();
        this._deleteNotification = id => {
            this.setState(currentState => {
                const newState = delete currentState[id];
                return newState;
            })
        }

        this._seeNotification = id => {
            this.setState(currentState => {
                return {
                    ...currentState,
                    notification: {
                        ...currentState.notification,
                        [id]: {
                            ...currentState.notification[id],
                            seen: true,
                        }
                    }
                }
            });
            // const obj1 = Object.assign({}, this.state.notification);
            // obj1[id].seen = true;
            // this.setState(obj1);
        }

        this._changeMessage = () => {
            if (this.state.message === 'hello') {
                this.setState({
                    message: 'bye bye',
                })
            } else {
                this.setState({
                    message: 'hello',
                })
            }
        }
        this.state = {
            message: 'hello',
            changeMessage: this._changeMessage, // consumer에서 changeMessage를 부를때마다 위의 함수를 부름
            deleteNotification: this._deleteNotification,
            seeNotification: this._seeNotification,
            notification: {
                "1": {
                    id: 1,
                    text: "first",
                    seen: false,
                },
                "2": {
                    id: 2,
                    text: "second",
                    seen: false,
                },
                "3": {
                    id: 3,
                    text: "third",
                    seen: false,
                },
            }
        }
    }

    render(){
        return(
            <Store.Provider value={this.state}>
                <AppPresenter/>
            </Store.Provider>

        )
    }
}

export default AppContainer;
