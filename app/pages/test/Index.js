import React from 'react';
import Layout from '../../core/Layout';

@Layout.init
export default class Index extends Layout {
    renderMain() {
        return <div>测试</div>
    }
}