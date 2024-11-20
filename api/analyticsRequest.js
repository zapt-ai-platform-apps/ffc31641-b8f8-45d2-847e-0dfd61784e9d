import { authenticateUser } from "./_apiUtils.js";
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.PROJECT_ID
    }
  }
});

export default async function handler(req, res) {
  try {
    const user = await authenticateUser(req);

    // Simulate fetching analytics data
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Sales',
        data: [50, 75, 150, 100, 200],
        borderColor: '#0f4c75',
        backgroundColor: 'rgba(15, 76, 117, 0.5)',
      }]
    };

    res.status(200).json(chartData);
  } catch (error) {
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}