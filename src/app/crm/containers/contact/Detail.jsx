/**
 * Created by jf on 15/12/10.
 */

//"use strict";

import React from 'react';
var Sentry = require('react-sentry');

import {
    Panel,
    PanelBody,
    Toast
} from '../../../../index';

import TabBar from '../../components/tabbar/index';
import Page from '../../components/page/index';
import './index.less';


export default React.createClass( {
    mixins: [Sentry],
    contextTypes: {
        dataStore: React.PropTypes.object.isRequired,
        router: React.PropTypes.object.isRequired,
    },
    getInitialState(){
        return {

        }
    },
    componentDidMount(){
    },
    onTabClick(){
        console.log(1)
    },
    render() {
        return (
            <TabBar tabTitle="通讯录">

            </TabBar>
        );
    }
});

