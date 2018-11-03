import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default class thankYou extends Component {
  render() {
    return (
    <Paper style = {{margin: 'auto',padding : '25px'}}>

        <Typography variant="h3" align="center" color="textPrimary" gutterBottom style={{margin:'25px',marginBottom : '65px'}}>
            Thank You.
        </Typography>
        <Typography variant="h5" align="center" color="textPrimary" gutterBottom style={{margin:'25px',marginBottom : '65px'}}>
            We will contact you soon
        </Typography>
    </Paper>
    )
  }
}
