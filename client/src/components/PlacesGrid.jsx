import React, { PropTypes } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';

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

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const PlacesGrid = ({
  onChange,
  booking
}) => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Platser</Subheader>
      {tilesData.map((tile) => (
        <GridTile  onChange={onChange}
          key={tile.imgId}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

PlacesGrid.propTypes = {
  onChange: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired
};

export default PlacesGrid;
