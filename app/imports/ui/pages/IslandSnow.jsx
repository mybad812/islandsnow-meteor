import React from 'react';
import IslandSnowLogo from '../components/IslandSnowLogo';
import MiddleMenu from '../components/MiddleMenu';
import FullWidthimage from '../components/FullWidthimage';

export default class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthimage/>
        </div>
    );
  }
}