import React from 'react';
import { Grid, Menu} from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Grid centered container>
            <Menu.Item> MEN </Menu.Item>
            <Menu.Item> WOMEN </Menu.Item>
            <Menu.Item> KIDS </Menu.Item>
            <Menu.Item> BARANDS </Menu.Item>
            <Menu.Item> SEARCH </Menu.Item>

          </Grid>
        </Menu>
    );
  }
}