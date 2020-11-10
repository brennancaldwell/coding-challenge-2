import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import EmptyAvatar from '../../assets/empty_avatar.svg';
import NewMember from './NewMember.js';

class TeamMember extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    story: PropTypes.string,
    favoriteColor: PropTypes.string,
    formOpen: PropTypes.bool,
    open: PropTypes.func
  };

  static defaultProps = {
    photoUrl: EmptyAvatar,
    story: null,
    favoriteColor: '#3466F2'
  };

  render() {
    let join = null;
    if (this.props.title === 'New Teammate' && !this.props.formOpen) {
      join = (<button onClick={this.props.open}>Join the team!</button>)
    } else if (this.props.title === 'New Teammate' && this.props.formOpen) {
      join = (<NewMember />)
    }

    return (
      <div className="container">
        <header>
          <div className="avatar-container">
            <img
              className="avatar"
              src={this.props.photoUrl}
              alt={this.props.name}
            />
          </div>
          <h2 className="title">{this.props.title}</h2>
          <h1 className="name">{this.props.name}</h1>
        </header>
        {join}
        <div className="body">{this.props.story}</div>
        <footer style={{ backgroundColor: this.props.favoriteColor }}>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box stat">9.0</div>
            <div className="one-third-flex-box stat bordered">9.0</div>
            <div className="one-third-flex-box stat">9.0</div>
          </div>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box">CANDID</div>
            <div className="one-third-flex-box">LEARNING</div>
            <div className="one-third-flex-box">GRIT</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default TeamMember;
