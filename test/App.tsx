import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TestApp from "../src";

export default class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return  <TestApp />;
    }
}



