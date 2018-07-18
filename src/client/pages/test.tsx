import React, { Component } from 'react';
import Link from '@next/link';

export default class TestPage extends Component<{}> {
  render() {
    return (
      <Link route="home">
        <a>Home</a>
      </Link>
    );
  }
}
