import React from 'react';

// template
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';

// expansion panel
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// grid
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	expPanel: {
		width: '100%',
	},
	grid: {
		flexGrow: 1,
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<MuiLink color="inherit" href="https://material-ui.com/">
				Your Website
      </MuiLink>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default function Index() {
	const classes = useStyles();
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<div className={classes.grid} mb={2}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper}>
								<Typography variant="h4" component="h1" gutterBottom>
									Next.js example
								</Typography>
								<Link href="/about" color="secondary">
									Go to the about page
								</Link>
								<ProTip /></Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper}>
								<Typography variant="h4" component="h1" gutterBottom>
									Next.js example
									</Typography>
								<Link href="/about" color="secondary">
									Go to the about page
								</Link>
								<ProTip />
							</Paper>
						</Grid>
					</Grid>
				</div>
				<Copyright />
			</Box>

			<div className={classes.expPanel}>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className={classes.heading}>Expansion Panel 1</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
							sit amet blandit leo lobortis eget.
				</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography className={classes.heading}>Expansion Panel 2</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
							sit amet blandit leo lobortis eget.
				</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel disabled>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel3a-content"
						id="panel3a-header"
					>
						<Typography className={classes.heading}>Disabled Expansion Panel</Typography>
					</ExpansionPanelSummary>
				</ExpansionPanel>
			</div>

		</Container>
	);
}
