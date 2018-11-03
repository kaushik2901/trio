import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import aPainting from './images/paintings/1.png';
import bPainting from './images/paintings/2.png';
import cPainting from './images/paintings/3.png';
// import dPainting from './images/paintings/4.png';
import ePainting from './images/paintings/5.png';
import fPainting from './images/paintings/6.png';
// import gPainting from './images/paintings/7.png';
import hPainting from './images/paintings/8.png';
// import iPainting from './images/paintings/9.png';

const styles = theme => ({
    layout: {
        width: 'auto',
        paddingTop: '100px',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px'
        },
        padding: '20px'
    },
    toolbarMain: {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
    },
    mainFeaturedPost: {
      background: "linear-gradient(to right, #006972 0%,#008080 100%,#008080 100%)",
      color: theme.palette.common.white,
      marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
      padding: `${theme.spacing.unit * 6}px`,
      [theme.breakpoints.up('md')]: {
        paddingRight: 0,
      },
    },
    mainGrid: {
      marginTop: theme.spacing.unit * 3,
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    mainPost: {

    },
    image: {
        width: '100%',
        background: 'rgba(0,0,0,0.4)',
        filter: 'brightness(50%)',
        borderRadius: '4px'
    }
  });



class Blog extends Component {

    state = {
        openBlog: false,
        blogTitle: "",
        blogDate: "",
        blogContent: ""
    }

    handleOpen = () => {
        this.setState({
            openBlog: true
        })
    }

    handleClose = () => {
        this.setState({
            openBlog: false
        })
    }

    handlePost = post => {
        this.setState({
            openBlog: true,
            blogTitle: post.title,
            blogDate: post.date,
            blogContent: post.content
        })
    }

    render() {

        let { classes } = this.props;
        let { featuredPosts } = this.props;
        
        return (
            <div className={classes.layout}>

                <Dialog
                    scroll="paper"
                    open={this.state.openBlog}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                    >
                    <DialogTitle id="responsive-dialog-title">{this.state.blogTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText dangerouslySetInnerHTML={{__html: this.state.blogContent}}>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                        Close
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Main featured post */}
                <Paper className={classes.mainFeaturedPost}>
                <Grid container>
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    The beautiful thing about learning is that..
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                    No one can take it away from you.
                    </Typography>
                    </div>
                </Grid>
                </Grid>
                </Paper>
                <Grid container spacing={32} alignItems="stretch" className={classes.mainGrid}>
                    <Grid item md={8} className={classes.mainPost}>
                        <div style={{position: 'relative'}}>
                            <img alt="" src={fPainting} className={classes.image} />
                            <div style={{position: 'absolute', bottom: '0%', left: '0px', padding: "10px"}}>
                                <Typography variant="caption" style={{color: 'white', textAlign: 'right'}}>Fenal Gajera</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4} className={classes.secondGrid}>
                        <Grid container spacing={32}>
                            <Grid item xs={12} className={classes.mainPost}>
                                <div style={{position: 'relative'}}>
                                    <img alt="" src={bPainting} className={classes.image} />
                                    <div style={{position: 'absolute', bottom: '0%', left: '0px', padding: "10px"}}>
                                    <Typography variant="caption" style={{color: 'white', textAlign: 'right'}}>Fenal Gajera</Typography>
                                    </div>
                                </div>
                                {/* <img alt="" src={bPainting} className={classes.image} /> */}
                            </Grid>
                            <Grid item xs={12} className={classes.mainPost}>
                                <div style={{position: 'relative'}}>
                                    <img alt="" src={hPainting} className={classes.image} />
                                    <div style={{position: 'absolute', bottom: '0%', left: '0px', padding: "10px"}}>
                                    <Typography variant="caption" style={{color: 'white', textAlign: 'right'}}>Fenal Gajera</Typography>
                                    </div>
                                </div>
                                {/* <img alt="" src={hPainting} className={classes.image} /> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* End main featured post */}
                {/* Sub featured posts */}
                <Grid container spacing={40} className={classes.cardGrid}>
                {featuredPosts.map(post => (
                    <Grid item key={post.title} xs={12} md={6}>
                        <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                <Button href={"/#/Blog/"+ post.id } >Read more</Button>
                            </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMedia}
                                image={post.image} // eslint-disable-line max-len
                                title="Image title"
                            />
                        </Hidden>
                        </Card>
                    </Grid>
                ))}
                </Grid>
                <Grid container spacing={32} alignItems="stretch" className={classes.mainGrid}>
                    <Grid item md={4} className={classes.secondGrid}>
                        <Grid container spacing={32}>
                            <Grid item xs={12} className={classes.mainPost}>
                                <div style={{position: 'relative'}}>
                                    <img alt="" src={ePainting} className={classes.image} />
                                    <div style={{position: 'absolute', bottom: '0%', left: '0px', padding: "10px"}}>
                                    <Typography variant="caption" style={{color: 'white', textAlign: 'right'}}>Fenal Gajera</Typography>
                                    </div>
                                </div>
                                {/* <img alt="" src={ePainting} className={classes.image} /> */}
                            </Grid>
                            <Grid item xs={12} className={classes.mainPost}>
                                <div style={{position: 'relative'}}>
                                    <img alt="" src={cPainting} className={classes.image} />
                                    <div style={{position: 'absolute', bottom: '0%', left: '0px', padding: "10px"}}>
                                    <Typography variant="caption" style={{color: 'white', textAlign: 'right'}}>Fenal Gajera</Typography>
                                    </div>
                                </div>
                                {/* <img alt="" src={cPainting} className={classes.image} /> */}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={8} className={classes.mainPost}>
                        <div style={{position: 'relative'}}>
                            <img alt="" src={aPainting} className={classes.image} />
                            <div style={{position: 'absolute', bottom: '0%', left: '0px', padding: "10px"}}>
                            <Typography variant="caption" style={{color: 'white', textAlign: 'right'}}>Fenal Gajera</Typography>
                            </div>
                        </div>
                    </Grid> 
                </Grid>
                {/* End sub featured posts */}

            </div>
        );
    }
}

Blog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);



