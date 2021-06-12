import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useStyles} from './styleHook';

const Tea6 = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Tea Number 6"
      />
      <CardMedia
        className={classes.media}
        image="./logons.png"
        title="tea 6"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Some hints about the tea could go here. Click the down arrow when you are ready to reveal details about the tea.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton 

            onClick={() => window.open("https://www.nannuoshan.org", "_blank")}
            // containerelement={<Link target="_blank" to="https://www.nannuoshan.org" />}
            aria-label="purchase">
          
            <AddShoppingCartIcon />
          </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>2021 Old Arbor Sheng Pu'erh</Typography>
          <Typography paragraph>
            See the letter in the box for more info...
          </Typography>
          <Typography>
            Brewing Instructions: Boiling water, gongfu style.
          </Typography>
        </CardContent>
      </Collapse>
    </Card> 
  );
}

export default Tea6;
