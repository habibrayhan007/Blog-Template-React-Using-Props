import React, { useState } from 'react'
import '../../assets/css/main.css';
import { Card, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';



const CardDetails = ({ carddetails, setDetails }) => {
    console.log(carddetails);

    const previousPage = () => {
        console.log("back button");
        setDetails();
    };


    return (
        <>
            {
                <div className='card-details-container' >
                    <Card className='single-card' sx={{ maxWidth: 800 }}>
                        <CardContent>
                            <Typography align='left' gutterBottom variant="h4" component="div">
                                {carddetails.title}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="500"
                            image={carddetails.image}
                        />
                        <CardContent>
                            <Typography className='card-details-description' align='left' variant="body2" color="text.secondary">
                                {carddetails.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className='category-btn' size="small" startIcon={<FolderIcon />}>
                                Category: <span className='card-category-btn'>{carddetails.category}</span>
                            </Button>
                        </CardActions>
                    </Card>
                    <Button onClick={previousPage} size="large" variant="contained">back</Button>
                </div>
            }
        </>
    )
}

export default CardDetails;