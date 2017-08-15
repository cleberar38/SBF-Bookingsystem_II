import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { AppBar } from 'material-ui/AppBar';


import strings  from './lang_config.jsx';
import default_lang from './default_lang.jsx';

strings.setLanguage(default_lang.lang);

const HomePage = ({
	
}) => (
	
  <Card className="container">
    <CardTitle title={strings.title} subtitle="This is the hemsida demo." />
  </Card>
);

export default HomePage;