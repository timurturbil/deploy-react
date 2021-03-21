
import './App.css';
import profileImage from './img/myimage.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory } from "react-router-dom";
import './App.css';
function  YeniApp() {
    return (
      <div className="App">
       <img src={profileImage} className="photo"/>
       <h2 className="isim">Ben Timur Turbil Hoşgeldin</h2>
      
      <div className="same">
      <Card className="heey">
        <CardContent>
          <Typography variant="h5" component="h2">
            Software Developer
          </Typography>
          <Typography variant="h10" component="h10">
            Dart, Flutter, Javascript, React 
          </Typography>
        </CardContent>
      </Card>
      </div>
      </div>
    );
}

export default YeniApp;