// /Checfk the this.stae.city it updates it i keep city but does not update on selected city !!

import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
        marginTop: '20px'
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        // marginTop: theme.spacing.unit * 4,
        textAlign: 'center'
    },
    textField: {
        width: '100%'
    },
    layout: {
        width: 'auto',
        [theme.breakpoints.up('md')]: {
            marginRight: '100px',
            marginLeft: '100px'
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const cityData = [  {'Ahmedabad' : ['Paldi','Vasna','Ahmd3','Admd4']},
                    {'Vadodara' : ['Vad1','Vad2','Vad3','Vad4']},
                    {'Surat' : ['Sur1','Sur2','Sur3','Sur4']},
                    {'Rajkot' : ['Raj1','Raj2','Raj3','Raj4']}   ]

const subjectData = ['Chemistry','Biology','Physics','English'];
class Search extends Component {
    
    constructor(props){
        super(props);
        let mCity  = Object.keys(cityData[0])[0];
        let locality = cityData[0][mCity];
        console.log(mCity,locality);
        
        this.state = { selectedCity: mCity,selectedLocality : locality[0] , localityArray : locality, selectedSubject : subjectData[0] };
      }

    

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render(){
        const { classes } = this.props;
        return (
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography variant="h4" align="center" color="textSecondary" paragraph>
                    Search Here
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={16} justify="center" alignItems={'center'}>                
                            <Grid item xs={12} sm>
                                <TextField
                                    id="city"
                                    select
                                    label="City"
                                    className={classes.textField}
                                    value={this.state.selectedCity}
                                    onChange={this.handleChange('selectedCity')}
                                    SelectProps={{
                                        native: true,
                                        MenuProps: {
                                        className: classes.menu,
                                        },
                                    }}
                                    margin="normal"
                                    variant="outlined"
                                    >
                                    {cityData.map(option => {
                                        let key = Object.keys(option)[0];
                                        return (
                                            <option key={key} value={key}>
                                            {key}
                                            </option>
                                        )}
                                    )}

                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm>
                                <TextField
                                    id="locality"
                                    select
                                    label="Locality"
                                    className={classes.textField}
                                    value={this.state.selectedLocality}
                                    onChange={this.handleChange('selectedLocality')}
                                    SelectProps={{
                                        native: true,
                                        MenuProps: {
                                        className: classes.menu,
                                        },
                                    }}
                                    margin="normal"
                                    variant="outlined"
                                    >
                                    {this.state.localityArray.map(option => {
                                        return(
                                            <option key={option} value={option}>
                                            {option}
                                            </option>
                                        )}
                                    )}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm>
                                <TextField
                                    id="subject"
                                    select
                                    label="subject"
                                    className={classes.textField}
                                    value={this.state.selectedSubject}
                                    onChange={this.handleChange('selectedSubject')}
                                    SelectProps={{
                                        native: true,
                                        MenuProps: {
                                        className: classes.menu,
                                        },
                                    }}
                                    margin="normal"
                                    variant="outlined"
                                    >
                                    {subjectData.map(option => (
                                        <option key={option} value={option}>
                                        {option}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="outlined" className={classes.Button} >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                {/* End hero unit */}
                <Grid container spacing={40}>
                    {cards.map(card => (
                    <Grid item key={card} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                            Heading
                            </Typography>
                            <Typography>
                            This is a media card. You can use this section to describe the content.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                            View
                            </Button>
                            <Button size="small" color="primary">
                            Edit
                            </Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                </div>
            </main>
        );
    }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
