import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels } from '../actions';

class ChannelList extends React.Component {
  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    return (
      <ul>
        {this.props.channels.map(channel => {
          return (
            <li key={channel.id}>Your channel name: {channel.snippet.title}</li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { channels: state.channels };
};

export default connect(
  mapStateToProps,
  { fetchChannels }
)(ChannelList);
