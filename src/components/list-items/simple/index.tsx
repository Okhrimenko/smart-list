import * as React from "react";
import { ISimpleListItemProps } from "./abstract"
import "./index.scss";

class SimpleListItem extends React.Component<ISimpleListItemProps, any>{
    constructor(props: ISimpleListItemProps) {
        super(props);
    }

    onClickHandler = (e) => {
        e.preventDefault();
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    }

    render() {
        const { title } = this.props;
        return (<div className="simple-list-item" onClick={this.onClickHandler}>
            {title}
        </div>);
    }
}

export default SimpleListItem;