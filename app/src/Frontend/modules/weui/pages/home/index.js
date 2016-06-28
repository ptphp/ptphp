/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {
    Grids,
    Cells,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter
} from '../../../../index';
import Page from '../../component/page';
import IconButton from './images/icon_nav_button.png';
import IconCell from './images/icon_nav_cell.png';
import IconToast from './images/icon_nav_toast.png';
import IconDialog from './images/icon_nav_dialog.png';
import IconProgress from './images/icon_nav_progress.png';
import IconMsg from './images/icon_nav_msg.png';
import IconArticle from './images/icon_nav_article.png';
import IconActionSheet from './images/icon_nav_actionSheet.png';
import IconIcons from './images/icon_nav_icons.png';
import IconPanel from './images/icon_nav_panel.png';
import IconTab from './images/icon_nav_tab.png';
import IconSearchBar from './images/icon_nav_search_bar.png';

import './index.less';

export default class Home extends React.Component {

    state = {
        components: [{
            icon: <img src={IconButton}/>,
            label: 'Button',
            href: '#button'
        }, {
            icon: <img src={IconCell}/>,
            label: 'Cell',
            href: '#cell'
        }, {
            icon: <img src={IconToast}/>,
            label: 'Toast',
            href: '#toast'
        }, {
            icon: <img src={IconDialog}/>,
            label: 'Dialog',
            href: '#dialog'
        }, {
            icon: <img src={IconProgress}/>,
            label: 'Progress',
            href: '#progress'
        }, {
            icon: <img src={IconMsg}/>,
            label: 'Msg11',
            href: '#msg'
        }, {
            icon: <img src={IconArticle}/>,
            label: 'Article',
            href: '#article'
        }, {
            icon: <img src={IconActionSheet}/>,
            label: 'ActionSheet',
            href: '#actionsheet'
        }, {
            icon: <img src={IconIcons}/>,
            label: 'Icons',
            href: '#icons'
        }, {
            icon: <img src={IconPanel}/>,
            label: 'Panel',
            href: '#panel'
        }, {
            icon: <img src={IconTab}/>,
            label: 'Tab',
            href: '#tab'
        }, {
            icon: <img src={IconSearchBar}/>,
            label: 'SearchBar',
            href: '#searchbar'
        }]
    };
    render() {
        return (
            <Page className="home" title="WeUI" subTitle="为微信Web服务量身设计">
                <Grids data={this.state.components}/>
                <CellsTitle>扩展</CellsTitle>

                <Cells access>
                    <Cell href="#/swiper">
                        <CellHeader>
                            <img src={IconSearchBar} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            Swiper
                        </CellBody>
                        <CellFooter>
                        </CellFooter>
                    </Cell>
                    <Cell href="#/ptr">
                        <CellHeader>
                            <img src={IconSearchBar} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            Pull To Ref
                        </CellBody>
                        <CellFooter>
                        </CellFooter>
                    </Cell>
                    <Cell href="#/picker">
                        <CellHeader>
                            <img src={IconSearchBar} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            Picker
                        </CellBody>
                        <CellFooter>
                        </CellFooter>
                    </Cell>
                    <Cell href="#/infinite">
                        <CellHeader>
                            <img src={IconSearchBar} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            Infinite
                        </CellBody>
                        <CellFooter>
                        </CellFooter>
                    </Cell>

                </Cells>

                <CellsTitle />
            </Page>
        );
    }
};
