import { Component, createContext } from 'react';
import PropTypes from 'prop-types';

import api from './api';

const { Consumer, Provider } = createContext({
  colors: [],
});

export { Consumer };

const ITEMS_PER_PAGE = 3;

export class ColorsProviderInner extends Component {
  static propTypes = {
    api: PropTypes.object,
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);

    this.state = {
      colors: [],
      fetchColors: this.fetchColors,
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }

  fetchColors = async () => {
    const page = Math.ceil(this.state.colors.length / ITEMS_PER_PAGE) + 1;
    const { data } = await this.props.api.fetchColors(page);

    const { data: colors } = data;

    this.setState(state => ({ colors: [...state.colors, ...colors] }));
  };
}

export default function ColorsContext(props) {
  return <ColorsProviderInner api={api} {...props} />;
}
