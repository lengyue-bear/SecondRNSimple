import { Component } from 'react';
import view from './view';

export default class ScreenTest extends Component {
    static navigationOptions = {
        title: '测试页',
    };

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
}
