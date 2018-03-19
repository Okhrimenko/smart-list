export interface ISmartListProps {
    items?: Array<any>;
    label?: (item) => string;
    onListItemClick?: (item) => any;
    renderListItem?: (item) => React.ReactElement<any>;

    //TODO:
    selectable?: boolean;
    isMulti?: boolean;
    onSelected?: () => void;
}

export interface ISmartListState {

}