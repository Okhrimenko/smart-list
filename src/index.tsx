import * as React from "react"
import TestComponent from './components/TestComponent'
import { SmartList, SimpleListItem, ImageListItem } from "./components";
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
            <SmartList>
                <SimpleListItem title={"SimpleListItem"} onClick={() => console.log("SimpleListItem")} />
                <SimpleListItem title={"SimpleListItem_1"} onClick={() => console.log("SimpleListItem_1")} />
                <ImageListItem 
                    height={40}
                    title={"Andrew Okhrimenko"}
                    imageSrc={"https://avatars2.githubusercontent.com/u/5503248?s=40&v=4"}
                    onClick={() => console.log("ImageListItem")} />
            </SmartList>
        </div>;
    }
}

