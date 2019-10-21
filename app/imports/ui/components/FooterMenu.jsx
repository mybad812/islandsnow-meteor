import React from 'react';
import {Grid, List} from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns="three">
            <Grid.Column>
              NAVIGATION
              <hr/>
              <List>
                <List.Item></List.Item>
                <List.Item></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              MAIN　MENU
              <hr/>
              <List>
                <List.Item></List.Item>
                <List.Item></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              CONNECT
              <hr/>
              <List>
                <List.Item></List.Item>
                <List.Item></List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}