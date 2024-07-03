import { Card } from '@mui/joy'
import { Button, CardContent, Typography } from '@mui/material'
import React from 'react'
import CardActions from '@mui/joy/CardActions';
import { Grid } from '@mui/material/Grid/Grid'

interface Props {
  day: string,
  specialist: string,
}

const FechaTurnoCard: React.FC<Props> = (props) => {
  return (
    <Grid xs={12} sm={6}>
    <Card variant="outlined" sx={{ mt: 2 }} key={`${day}-${specialist}`}>
      <CardContent>
          <Typography>{props.day}</Typography>
          <Typography>{props.specialist}</Typography>
      </CardContent>
      <CardActions>
          <Button variant="container">Solicitar</Button>
      </CardActions>
    </Card>
  </Grid>
  )
}

export default FechaTurnoCard;
