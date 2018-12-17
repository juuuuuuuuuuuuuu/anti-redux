import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import Store from 'store';

const AppPresenter = () => (
    <Fragment>
        <Header />
        <Flex alignCenter full column>
            <Store.Consumer>
                {store => {
                        return Object.keys(store.notification).map(key => (
                           <Notification
                               key={store.notification[key].id}
                               id={store.notification[key].id}
                               text={store.notification[key].text}
                               seen={store.notification[key].seen}
                           />
                        ))
                    }
                }
            </Store.Consumer>
        </Flex>
    </Fragment>
);
export default AppPresenter;
