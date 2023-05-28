import React, { useState } from 'react'
import '../../assets/css/main.css';
import { Card, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';


const SingleCard = ({ card, setDetails }) => {
    const { image, category, title, description } = card;

    return (
        <>
            <Card onClick={() => setDetails(card)} className='single-card' sx={{ maxWidth: 395 }}>
                <CardMedia
                    component="img"
                    height="240"
                    image={image}
                />
                <CardActions className='card-category'>
                    <Button className='card-category-text' size="small">{category}</Button>
                </CardActions>
                <CardContent>
                    <Typography className='card-title' align='left' gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                        }}
                        className='card-description' align='left' variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className='publisher pub-hover' startIcon={<PersonOutlineIcon />}>
                        Habib Rayhan
                    </Button>
                    <Button className='published-time pub-hover' startIcon={<QueryBuilderIcon />}>
                        16 May, 2023
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default SingleCard;