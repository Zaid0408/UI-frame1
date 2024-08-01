import Head from 'next/head';
import CustomerChart from './CustomerChart';
import OrdersChart from './OrdersChart';
import RevenueChart from './RevenueChart';
import Cards from'./cards';
import Transactions from'./Transaction';
import { Container, Grid, Typography } from '@mui/material';
import styles from './page.css';
import NavBar from './navbar_comp/navbar'

export default function Home() {
  return (
    <div style={{backgroundColor:'#e5e5e5'}}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth="lg" >
          <Grid container spacing={3}>
          <Grid item xs={12}  style={{width:'100%',marginBottom:'20px'}}>
              <NavBar />
            </Grid>
          <Grid item xs={12} md={6} style={{marginBottom:'20px',backgroundColor:'#e5e5e5',padding:'20px',width:'400px'}}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6} style={{marginBottom:'20px',backgroundColor:'white',padding:'20px',borderRadius:'0.5rem',boxShadow:'0 4px 6px rgba(0, 0, 0, 0.1)'}} >
              <Typography variant="h6" style={{ marginBottom: '1rem',color: 'black' }}>
                <strong>Projections v/s Actuals</strong>
              </Typography>
              <OrdersChart />
            </Grid>
            <Grid item xs={12} md={6} style={{backgroundColor:'white',padding:'20px',height:'400px',borderRadius:'0.5rem',boxShadow:'0 4px 6px rgba(0, 0, 0, 0.1)'}}>
              <Typography variant="h6"style={{ marginBottom: '1rem',color: 'black' }}>
                <strong>Total Customers</strong>
              </Typography>
              <CustomerChart />
            </Grid>
            <Grid item xs={12} md={6} style={{backgroundColor:'white',padding:'20px',borderRadius:'0.5rem',boxShadow:'0 4px 6px rgba(0, 0, 0, 0.1)'}}>
              <Typography variant="h6" style={{ marginBottom: '1rem',color: 'black' }}>
                <strong>Customer Segmentation</strong>
              </Typography>
              <div style={{height : '300px',position:'relative'}}>
                <RevenueChart />
              </div>
            </Grid>
            <Grid item xs={12}  style={{marginTop:'20px',backgroundColor:'#e5e5e5',padding:'2px',width:'100%'}}>
              <Transactions />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
