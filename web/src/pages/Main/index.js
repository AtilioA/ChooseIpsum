import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { FaGithubAlt } from 'react-icons/fa';

// import { Form, SubmitButton, List } from './styles';

// import api from '../../services/api';
import Container from '../../components/Container/index.js';

export default class Main extends Component {
  state = {};

  // componentDidMount() {
  //   const repositories = localStorage.getItem('repositories');

  //   if (repositories) {
  //     this.setState({ repositories: JSON.parse(repositories) });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   const { repositories } = this.state;

  //   if (prevState.repositories !== repositories) {
  //     localStorage.setItem('repositories', JSON.stringify(repositories));
  //   }
  // }

  render() {
    // const { newRepo, repositories, loading, error } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt /> Hello, World!
        </h1>
      </Container>
    );
  }
}
