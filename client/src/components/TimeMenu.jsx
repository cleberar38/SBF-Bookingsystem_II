import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  root: {
    left: 550,
  },
};

/*
var days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

var d = new Date();
var dateObj = new Date();
var month = dateObj.getUTCMonth();
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var week = dateObj.getUTCDay();
var time = dateObj.getHours();
var minutes = dateObj.getUTCMinutes();

newdate = year + "/" + months[month] + "/" + day + "/" + days[week] + "/" + time + ":" + minutes ;*/

export default class TimeMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
       this.setState({value})
  };

  render() {
    return (
      <div className="center-container">
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} label="06:00 - 10:00" primaryText="06:00 - 10:00" />
          <MenuItem value={2} label="10:00 - 15:00" primaryText="10:00 - 15:00" />
          <MenuItem value={4} label="15:00 - 20:00" primaryText="15:00 - 20:00" />
          <MenuItem value={5} label="20:00 - 24:00" primaryText="20:00 - 24:00" />
          <MenuItem value={6} label="24:00 - 04:00" primaryText="24:00 - 04:00" />
        </DropDownMenu>
      </div>
    );
  }
}
