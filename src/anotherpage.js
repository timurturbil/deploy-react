import logo from './logo.svg';
import './App.css';
import profileImage from './img/myimage.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory } from "react-router-dom";

function  yeniApp() {
    const history = useHistory();
    const navigateTo = () => history.push('/');
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
  
          <Typography variant="body2" component="p">
            {'Dart & Flutter & Javascript & React'},
          </Typography>
        </CardContent>
      </Card>
      </div>
      </div>
    );
  
}

export default yeniApp;