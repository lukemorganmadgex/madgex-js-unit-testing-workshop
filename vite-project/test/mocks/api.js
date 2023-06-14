import { rest } from 'msw';

const BASE_URL = '/api';

const jobs = [
  { id: 1, title: 'Web developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '25,000.00' },
  { id: 2, title: 'Senior Web developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '35,000.00' },
  { id: 3, title: 'Web designer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '25,000.00' },
  { id: 4, title: 'Senior Web designer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '35,000.00' },
  { id: 5, title: 'QA Tester', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '25,000.00' }
];

export const apiRequests = [
  rest.get(`${BASE_URL}/jobs`, (req, res, ctx) => {
    const count = req.url.searchParams.get("jobCount");
    let data = (count && count > 0) ? jobs.slice(0, parseInt(count, 10)) : jobs;
    return res(
      ctx.status(200),
      ctx.json({
        data,
      })
    );
  }),
];
