import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { appAuth } from '../redux/actions/app';
import './Main.scss';
import Header from '../components/Header';
import NotFound from "./NotFound";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Main = () => {
    const userName = useSelector(state => state.app.userName);
    const authCheckStarted = useSelector(state => state.app.authCheckStarted);
    const authCheckEnded = useSelector(state => state.app.authCheckEnded);

    const dispatch = useDispatch();
    useEffect(() => {
        console.warn('App started');
        dispatch(appAuth());
    }, [dispatch]);

    useEffect(() => {
        authCheckStarted && authCheckEnded && console.warn(`*** Hello ${userName} ***`);
    }, [userName, authCheckEnded, authCheckStarted]);

    return (
        <div className="app-main">
            <Header/>
            <Switch>
                <Route exact path="/" component={Page1} />
                <Route exact path="/page2" component={Page2} />
                <Route path="/page2/:id" component={Page2} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
};
export default Main;
