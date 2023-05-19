const express = require('express');
const app = express();
const port = 3000;

const jobs = [
  { id: 1, title: 'Web developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '25,000.00' },
  { id: 2, title: 'Senior Web developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '35,000.00' },
  { id: 3, title: 'Web designer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '25,000.00' },
  { id: 4, title: 'Senior Web designer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '35,000.00' },
  { id: 5, title: 'QA Tester', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '25,000.00' }
];

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/jobs', (req, res) => {

  if (req.query['jobCount']) {
    const jobSlice = jobs.slice(0, parseInt(req.query['jobCount'], 10));
    res.json({
      status: 'success',
      data: jobSlice,
    });
  }

  res.json({
    status: 'success',
    data: jobs,
  });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});