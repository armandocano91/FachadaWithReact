import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {blue300,indigo900,orange200,deepOrange300,pink400,purple500} from 'material-ui/styles/colors';
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn,} from 'material-ui/Table';

const style = {margin: 5};

const Dashboard = () => (
  <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
          color={orange200}
          backgroundColor={deepOrange300}
          size={200}
          style={style}
        />
      }
    >
    </ListItem>
    </List>

);



export default Dashboard;
