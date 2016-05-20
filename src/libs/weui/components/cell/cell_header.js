/**
 * Created by jf on 15/11/12.
 */



import React from 'react';
import classNames from 'classnames';

export default class CellHeader extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const className = classNames({
            weui_cell_hd: true
        });

        return (
            <div className={className} {...others}>{children}</div>
        );
    }
};