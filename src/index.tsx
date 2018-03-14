import * as React from "react"
import TestComponent from './components/TestComponent'
import './styles/global.scss';

export interface AppProps {
}

export interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <TestComponent label="Hello World!" />            
        </div>;
    }
}

