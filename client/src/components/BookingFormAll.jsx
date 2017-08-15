import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import * as Colors from 'material-ui/styles/colors';
import Auth from '../modules/Auth';
import RaisedButton from 'material-ui/RaisedButton';
import strings  from './lang_config.jsx';
import default_lang from './default_lang.jsx';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

strings.setLanguage(default_lang.lang);

const days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
const months = ["December", "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November"];

const d = new Date();
const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1;
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();
const week = dateObj.getUTCDay();
const hours = dateObj.getHours();
const minutes = dateObj.getUTCMinutes();

const newdate = year + "/" + months[month] + "/" + day + "/" + days[week] + "/" + hours + ":" + minutes ;

console.log("THE NEW DATE: ", newdate);

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    imgId: 'SD1',
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/1/attachments/99',
    title: 'Kungstorget',
    author: 'jill111',
    featured: true,
  },
  {
    imgId: 'SD2',
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/2/attachments/141',
    title: 'Henry Dunkers plats',
    author: 'pashminu',
  },
  {
    imgId: 'SD3',
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/3/attachments/143',
    title: 'Henry Dunkers plats',
    author: 'Danson67',
  },
  {
    imgId: 'SD4',
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/4/attachments/121',
    title: 'Kajpromenaden',
    author: 'fancycrave1',
    featured: true,
  },
  {
    imgId: 'SD5',
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/4/attachments/121',
    title: 'Kajpromenaden',
    author: 'Hans',
  },
  {
    imgId: 'SD6',
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/6/attachments/101',
    title: 'Kallis',
    author: 'fancycravel',
  },
  {
    imgId: 'SD7',
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/7/attachments/125',
    title: 'Trädgårdsgatan (går inte att boka från maj 2017)',
    author: 'jill112',
  },
  {
    imgId: 'SD8',
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/8/attachments/127',
    title: 'Campus',
    author: 'BkrmadtyaKarki',
  },
  {
    imgId: 'SD9',
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/9/attachments/129',
    title: 'Campus',
    author: 'BkrmadtyaKarki1',
  },

];

const moment = require('moment');
const w = moment().weekday();
const daysToSubtract = ((w + 3 + Math.floor(hours/16)))%7 ;
const beginningOfWeek = moment().add(-daysToSubtract, 'days');
const endOfWeek = moment().add(14-daysToSubtract, 'days');

console.log(beginningOfWeek);
console.log(endOfWeek);
console.log(daysToSubtract);

const BookingFormAll = ({
	onSubmit,
	onChange,
  handleChange,
	booking,
  value
}) => (
  <div>
  	<form action="/" onSubmit={onSubmit}>
  		<div style={styles.root}>
  			<GridList
  				cellHeight={180}z
  				style={styles.gridList}
  			>
  				<Subheader>Platser</Subheader>
  				{tilesData.map((tile) => (
  					<GridTile  onClick={onChange}
              key={tile.imgId}
  						title={tile.title}
  						subtitle={<span>by <b>{tile.author}</b></span>}
  						actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
  					>
  						<img name={tile.imgId} src={tile.img} />
  					</GridTile>
  				))}
  			</GridList>
  		</div>
      <div className="center-container">
        <DatePicker hintText={newdate} mode="landscape" minDate={new Date(beginningOfWeek)} maxDate = {new Date(endOfWeek)}/>
      </div>
	    <div className="center-container">
        <DropDownMenu value={value} onChange={handleChange}>
          <MenuItem value={1} label="06:00 - 10:00" primaryText="06:00 - 10:00" />
          <MenuItem value={2} label="10:00 - 15:00" primaryText="10:00 - 15:00" />
          <MenuItem value={4} label="15:00 - 20:00" primaryText="15:00 - 20:00" />
          <MenuItem value={5} label="20:00 - 24:00" primaryText="20:00 - 24:00" />
          <MenuItem value={6} label="24:00 - 04:00" primaryText="24:00 - 04:00" />
        </DropDownMenu>
      </div>
	    <div className="button-line center-container">
			<RaisedButton type="submit" label={strings.sendBtn} primary />
		</div>
	</form>
  </div>
);


BookingFormAll.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired
};

export default BookingFormAll;
