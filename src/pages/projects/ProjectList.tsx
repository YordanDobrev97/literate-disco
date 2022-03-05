import { useState } from 'react'
import { Link } from 'react-router-dom'

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

import { Navbar } from '../../components/navbar/Navbar'
import styles from '../../styles/projects.module.css'

interface Project {
  id: number,
  name: string,
  image: string,
  link: string
}

export const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: 'E-commerce',
      image: '/ecommerce.png',
      link: 'ecommerce',
    },
    {
      id: 2,
      name: 'Tips Calculator',
      image: '/calculator.png',
      link: 'calculator'
    },
    {
      id: 3,
      name: 'Github user search',
      image: '/github.png',
      link: 'github'
    }
  ])
  return (
    <>
    <Navbar />
      <Grid m={6} style={{ display: 'flex', justifyContent: 'center' }} xs={12}>
      {projects && projects.map((project) => {
        return (
          <Card key={project.id} style={{ margin: '10px', width: '30%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={project.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Landing page made according to a specific figma design
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link className={styles.projectLink} to={`/projects/${project.link}`}>Visit</Link>
              </Button>
            </CardActions>
          </Card>
        )
      })}
    </Grid>
    </>
  )
}