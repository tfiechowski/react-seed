import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';

import ColorCard from './ColorCard';

const Wrapper = styled.div`
  padding: 10px;
`;

export class ColorList extends Component {
  static propTypes = {
    colors: PropTypes.array,
    fetchColors: PropTypes.func,
  };

  state = {
    loading: false,
  };

  componentDidMount() {
    this.props.fetchColors();
  }

  render() {
    return (
      <Wrapper>
        {this.props.colors.map(color => (
          <ColorCard key={color.id} color={color} />
        ))}
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <Button onClick={this.handleFetchColors}>
            <span>Fetch more colors!</span>
          </Button>
        )}
      </Wrapper>
    );
  }

  handleFetchColors = async () => {
    this.setState({ loading: true });

    await this.props.fetchColors();

    this.setState({ loading: false });
  };
}
