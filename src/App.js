import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function App() {
	return (
		<Paper style={{
			padding: 0,
			margin: 0,
			height: '100vh',
			backgroundColor: '#fafafa',
			borderRadius: 0
		}}
		elevation={0}
		>
			<AppBar color='primary' position='static' style={{height: '64px'}}>
				<Toolbar>
					<Typography color='inherit'>Todos</Typography>
				</Toolbar>
			</AppBar>
		</Paper>
	)
}
