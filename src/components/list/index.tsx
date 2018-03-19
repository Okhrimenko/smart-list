import * as React from "react";
import * as ReaxtDom from "react-dom";
import { ISmartListProps, ISmartListState } from "./abstract";
import SimpleListItem from "../list-items/simple";
import "./index.scss";

class SmartList extends React.Component<ISmartListProps, ISmartListState>{
    constructor(props) {
        super(props);
    }

    prepareChildrenItems(){

    }

    prepareItems(){

    }

    render() {
        //TODO: Refactor
        const { items, label, onListItemClick, renderListItem } = this.props;

        const children = React.Children.map(this.props.children, (listItem: React.ReactElement<any>) =>
            React.cloneElement(listItem, {})
        );

        let listItems = [...children, ...items.map(o => {
            const title = label ? label(o) : o;
            return renderListItem
                ? renderListItem(o)
                : <SimpleListItem title={title} onClick={onListItemClick ? () => onListItemClick(o) : null} />
        })]

        return (<div className="smart-list">
            <ul>
                {
                    listItems.map((li, index) => {
                        return <li key={index}>{li}</li>
                    })
                }
            </ul>
        </div>);
    }
}
export default SmartList;