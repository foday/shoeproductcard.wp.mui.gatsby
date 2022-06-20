import React from 'react'
import {Card, CardMedia, CardActions, CardContent} from '@material-ui/core'
import {Button, Typography} from '@material-ui/core'

function ProductCard() {
  return (
    <div>
        <Card sx={{maxWidth: 345}}>
            <CardMedia 
                component="img"
                image="adidas_chinese.jpg"
                title="chinese adidas"
                alt="adidas product card"
            />
        </Card>
    </div>
  )
}

export default ProductCard