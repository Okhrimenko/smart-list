import * as React from "react";
import "./index.scss";
import { IExpandableListItemProps, IExpandableListItemState } from "./abstract";

class ExpandableListItem extends React.Component<IExpandableListItemProps, IExpandableListItemState>{
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        }
    }

    render() {
        const { title, text } = this.props;

        return (<div className="expandable-list-item">
            <div className="header">
                <div className="header-title">{title}</div>
            </div>
            <div className="body">
                {text}
            </div>
        </div>);
    }
}

export default ExpandableListItem;