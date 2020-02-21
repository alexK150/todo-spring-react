import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Home} from './pages/Home.page';
import {Navbar} from './components/Navbar.component';
import {Alert} from './components/Alert.component';
import {AlertState} from './context/alert/alert.state';
import {TodoState} from './context/todo/todo.state';

export const App = () => {
    return (
        <TodoState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className='container pt-4'>
                        <Alert/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </TodoState>
    );
};
