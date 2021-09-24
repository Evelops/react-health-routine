import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ToolBar from './ToolBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Days from './Component/Days';
import Grid from '@mui/material/Grid';
import FeaturedPost from './FeaturedPost';

const featuredPosts =[
  {
    title: '당기기 운동',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: '유산소 운동 ',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: '미는 운동',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: '하체 운동',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

export default function App() {
  return(
  <div>
    <CssBaseline/>
    <ToolBar/>
    <Container>
        <Box sx={{ my: 2 }}>
        <Typography variant="h2" component="div" align="center" color="text.primary">
              <Days/>
            </Typography>
            <Typography variant="h5" component="p" align="center" color="text.secondary">
            Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization. Quickly build an effective pricing table for your potential customers with
          this layout. It&apos; Quickly build an effective pricing table for your potential customers with
          this layout. It&apos; Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;
            </Typography>
        </Box>
        <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

        
      </Container>
  </div>
  );
}

