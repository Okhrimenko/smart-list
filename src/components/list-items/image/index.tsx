import * as React from "react";
import "./index.scss";
import { ImageListItemProps } from "./abstract";

class ImageListItem extends React.Component<ImageListItemProps, any>{
    private _defaultHeight : number = 20;
    constructor(props: ImageListItemProps) {
        super(props);
    }

    onClickHandler = (e) => {
        e.preventDefault();
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    }

    get imageStyle(){
        const {imageSrc} = this.props;
        let height = this.props.height ? this.props.height : this._defaultHeight;
        return {
            backgroundImage: `url(${imageSrc})`,
            height:`${height}px`,
            width  :`${height}px`,
            minWidth :`${height}px`
        }
    }

    render() {
        const { title, imageSrc } = this.props;
        let height = this.props.height ? this.props.height : this._defaultHeight;

        return (<div className="image-list-item" style={{height :`${height}px`}} onClick={this.onClickHandler}>
            <div className="image" style={this.imageStyle}></div>
            <div className="title">{title}</div>
        </div>);
    }
}

export default ImageListItem