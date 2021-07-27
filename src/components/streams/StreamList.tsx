import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../ducks/actions';

interface StreamProps {
  streams?: object | any,
  fetchStreams?: any,
};

class StreamList extends React.Component<StreamProps> {
  componentDidMount () {
    this.props.fetchStreams();
  };

  renderList = () => {
    return this.props.streams.map((stream: any) =>  {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  render(){
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    )
  }
};

const mapStateToProps = ( state: any) => {
  return { streams: Object.values(state.streams)};
};

export default connect( 
  mapStateToProps,
  {fetchStreams}
)(StreamList);