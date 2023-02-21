import * as React from 'react';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import { createTheme } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

import accounting from "accounting";


export default function ChecoutCard({ product: { id, name, productType, image, price, rating, description } }) {
    const theme = createTheme();

    return (
        <Card sx={{ maxWidth: 345, marginTop: '2rem', padding: theme.spacing(3) }}>
            <CardHeader
                action={
                    <Typography
                        aria-label="settings"
                        variant='h5'
                        color="textSecondary">
                        {accounting.formatMoney(price)}
                    </Typography>
                }
                title={name}
                subheader="in Stock"
            />
            <CardMedia
                component="img"
                height="auto"
                image={image}
                alt={name}
                title={name}
                sx={{ width: '250px', height: '250px', objectFit: 'cover'}}
            />
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'end' }}>
                <IconButton>
                    <DeleteIcon fontSize='large' />
                </IconButton>

            </CardActions>
        </Card>
    );
}