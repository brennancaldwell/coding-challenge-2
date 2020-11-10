import React from 'react';
import axios from 'axios';
import TeamMember from '../TeamMember';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      loading: true,
      formOpen: false,
      firstName: '',
      lastName: '',
      title: '',
      story: '',
      photoUrl: '',
      favoriteColor: ''
    };

    this.openForm = this.openForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.postNewTeamMember = this.postNewTeamMember.bind(this);
  }

  async componentDidMount() {
    try {
      await this.fetchInitialData();
    } catch (error) {
      // try again after half a second if fails due to race condition
      console.log('retrying initial data request...');
      setTimeout(async () => {
        await this.fetchInitialData();
      }, 500);
    }
  }

  async fetchInitialData() {
    const response = await axios.get('/team');
    this.setState({
      team: response.data,
      loading: false
    });
  }

  async postNewTeamMember() {
    let { firstName, lastName, title, story, photoUrl, favoriteColor } = this.state;

    if (firstName === '' || lastName === '' || title === '' || story === '') {
      throw new Error('Please completely fill out the form!')
    }

    if (photoUrl === '') photoUrl = null;

    if (favoriteColor === '') favoriteColor = null;

    const reqObj = { firstName, lastName, title, story, photoUrl, favoriteColor };

    await axios.post('/team', reqObj);

    await this.fetchInitialData();

    this.setState({
      formOpen: false,
      firstName: '',
      lastName: '',
      title: '',
      story: '',
      photoUrl: '',
      favoriteColor: ''
    })
  }

  openForm() {
    const { formOpen } = this.state;

    this.setState({
      formOpen: !formOpen
    });
  }

  onChange(e) {
    const field = e.target.name;

    this.setState({
      [field]: e.target.value
    })

  }

  render() {
    const { formOpen } = this.state;

    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="app">
        <div className="team-grid" />
        {this.state.team.map(member => (
          <TeamMember
            key={member.id}
            name={`${member.firstName} ${member.lastName}`}
            title={member.title}
            photoUrl={member.photoUrl}
            story={member.story}
            favoriteColor={member.favoriteColor}
          />
        ))}
        {/* Make this new team member link to your form! */}
        <TeamMember id="new" name="Join us!" title="New Teammate" open={this.openForm} formOpen={formOpen} onChange={this.onChange} postNew={this.postNewTeamMember}/>
      </div>
    );
  }
}

export default App;
