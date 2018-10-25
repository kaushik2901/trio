import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';


const styles = theme => ({
    wrapper:{
        marginTop : '30px',
    },
    textField: {
        width: "100%"
    },
});

const cityData = [  {'Ahmedabad' : ['Paldi','Vasna','Ahmd3','Admd4']},
                    {'Vadodara' : ['Vad1','Vad2','Vad3','Vad4']},
                    {'Surat' : ['Sur1','Sur2','Sur3','Sur4']},
                    {'Rajkot' : ['Raj1','Raj2','Raj3','Raj4']}   ];

const subjectData = ['Chemistry','Biology','Physics','English'];


class SearchBar extends Component {

    constructor(props){
        super(props);
        let mCity  = props.selectedCity;
        let locality = cityData.find(e => Object.keys(e)[0] === mCity)[mCity];
        
        this.state = { selectedCity: mCity,selectedLocality : props.selectedLocality , localityArray : locality, selectedSubject : props.selectedSubject };
    }

    static defaultProps = {
        selectedCity : Object.keys(cityData[0])[0],
        selectedLocality : cityData[0][Object.keys(cityData[0])[0]][0],
        selectedSubject : subjectData[0],

     };

     
    handleChange = name => e => {
        let value = e.target.value;
        this.setState({
            [name] : value,
        },
        () => {        
            if(name === 'selectedCity'){
                let newLocalityArray = cityData.find(e => Object.keys(e)[0] === this.state.selectedCity);
                this.setState({
                    localityArray : newLocalityArray[this.state.selectedCity],
                }); 
            }
        });      
    }


    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
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
                        <Button variant="outlined" component={NavLink} to={'Search'} >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(SearchBar);