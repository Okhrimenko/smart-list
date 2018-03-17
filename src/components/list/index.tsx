import * as React from "react";
import * as ReaxtDom from "react-dom";
import "./index.scss";

class SmartList extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render() {
        const listItmes = React.Children.map(this.props.children, (listItem: React.ReactElement<any>) =>
            React.cloneElement(listItem, {})
        );

        return (<div className="smart-list">
            <ul>
                {
                    listItmes.map((li, index) => {
                        return <li key={index}>{li}</li>
                    })
                }
            </ul>
        </div>);
    }
}
export default SmartList;