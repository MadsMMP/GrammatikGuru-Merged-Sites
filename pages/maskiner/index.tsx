import React from 'react';
import { Box, Col, Container, Grid } from '@mantine/core';
import AppNavbar from '../../components/bot_components/navbar';

const MaskinerIndex = () => {
  return (
    <Container>
      <Grid gutter="md">
        <Col span={4}>
          <Box pt={20}>
            <h1>Bot Machines</h1>
            <p>Select a bot machine from the sidebar to explore its features.</p>
          </Box>
        </Col>
        <Col span={8}>
          <AppNavbar />
        </Col>
      </Grid>
    </Container>
  );
};

export default MaskinerIndex;