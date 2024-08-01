export const fetchData = async (endpoint) => {
  const mockData = {
    customers: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      thisYear: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
      lastYear: [90, 180, 270, 360, 450, 540, 630, 720, 810, 900, 990, 1080],
    },
    orders: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      orders: [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600],
      projections: [450, 550, 650, 750, 850, 950, 1050, 1150, 1250, 1350, 1450, 1550],
    },
    revenue: {
      labels: ['15-25 Years Old', '26-35 Years Old', '36-45 Years Old', '>45 Years Old'],
      values: [54, 20, 14, 12],
    },
    cards: {
        title: ['Customers','Order','Revenue','Growth'],
        values: [3812,1673,2000,2500],
        percentage: [+15.72,+21.12,-12.76,+32.56]
    },
    transactions: [
        { invoice: '#1023', date: 'Jan 6, 2022', amount: '$25.50', status: 'Paid', customer: 'Stephanie Willias', account: 'olivia@untitledui.com' },
        { invoice: '#1024', date: 'Jan 8, 2022', amount: '$15.15', status: 'Paid', customer: 'Roberto Acker', account: 'rob@untitledui.com' },

        { invoice: '#1025', date: 'Jan 10, 2022', amount: '$34.50', status: 'Pending', customer: 'Zaid H', account: 'zaid@untitledui.com' },
        { invoice: '#1026', date: 'Jan 12, 2022', amount: '$12.50', status: 'Paid', customer: 'Jun J', account: 'junj@untitledui.com' },
        { invoice: '#1027', date: 'Jan 15, 2022', amount: '$70.00', status: 'Canceled', customer: 'Oliver R', account: 'oliver@untitledui.com' },
        { invoice: '#1028', date: 'Jan 28, 2022', amount: '$21.35', status: 'Pending', customer: 'Depay Roberto ', account: 'depay@untitledui.com' },
       
      ],
  };

  return mockData[endpoint] || null;
};
