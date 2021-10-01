import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ToolBar from './ToolBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Days from './Component/Days';
import Step from './Component/Step';
import Grid from '@mui/material/Grid';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';

const featuredPosts =[
  {
    title: '당기기 운동',
    description:
      '등과 이두를 타겟팅으로 하는 운동으로 덤벨이나 바벨을 당기면서 해당 부위에 자극을 주고 근육을 성장할 수 있는 운동 법.',
    image: '/img/press.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: '유산소 운동 ',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: '/img/run.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: '미는 운동',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: '/img/pullup.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: '하체 운동',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: '/img/squat.jpg',
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

            <Typography variant="h3" component="p" align="center">
              <Step/>
            </Typography>
        </Box>
        <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Footer/>
      </Container>
  </div>
  );
}

