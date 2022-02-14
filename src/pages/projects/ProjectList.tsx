import {
    Button,
    CardActionArea,
    CardActions,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material'

export const ProjectList = () => {
    return (
        <Grid m={6} style={{display: 'flex', justifyContent: 'center'}} xs={12}>
            <Card style={{margin: '10px', width: '30%'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image='/ecommerce.png'
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Equalizer landing page
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Live preview
                    </Button>
                </CardActions>
            </Card>

            <Card style={{margin: '10px', width: '30%'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/equalizer-landing-page.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Equalizer landing page
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Live preview
                    </Button>
                </CardActions>
            </Card>

            <Card style={{margin: '10px', width: '30%'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/github.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Equalizer landing page
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Live preview
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}