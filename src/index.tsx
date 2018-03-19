import * as React from "react"
import TestComponent from './components/TestComponent'
import { SmartList, SimpleListItem, ImageListItem, ExpandableListItem } from "./components";
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
        const items = [
            { name: "Andy", age: 23 },
            { name: "Carl", age: 19 },
            { name: "Tom", age: 34 }
        ];

        return <div>
            <TestComponent label="Hello World!" />

            <SmartList 
                items={items} 
                label={(item => item.name)}
                onListItemClick={(item)=>console.log(item.name)}
                renderListItem={(item)=> <div>{`${item.name} ${item.age}`}</div>}
                >

                <SimpleListItem title={"SimpleListItem"} onClick={() => console.log("SimpleListItem")} />
                <ExpandableListItem title={"header"} text={"text"} />
                <ImageListItem
                    height={40}
                    title={"Andrew Okhrimenko"}
                    imageSrc={"https://avatars2.githubusercontent.com/u/5503248?s=40&v=4"}
                    onClick={() => console.log("ImageListItem")} />
            </SmartList>
        </div>;
    }
}

