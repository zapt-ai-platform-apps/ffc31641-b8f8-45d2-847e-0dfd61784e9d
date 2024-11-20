import { createSignal, onMount } from 'solid-js';
import { Line } from 'solid-chartjs';
import { Chart, Title, Tooltip, Legend, Colors, ArcElement, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { createEvent } from '../supabaseClient';
import { useNavigate } from '@solidjs/router';

Chart.register(Title, Tooltip, Legend, Colors, ArcElement, LineElement, PointElement, CategoryScale, LinearScale);

function Dashboard(props) {
  const [chartData, setChartData] = createSignal({});
  const [loading, setLoading] = createSignal(false);
  const navigate = useNavigate();

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const result = await createEvent('analytics_request', {
        app_id: import.meta.env.VITE_PUBLIC_APP_ID,
        type: 'sales_performance'
      });
      setChartData(result);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  onMount(fetchAnalytics);

  return (
    <div class="flex h-full">
      <Sidebar />
      <div class="flex-1 flex flex-col">
        <TopBar onSignOut={handleSignOut} />
        <div class="p-6 overflow-auto">
          <h1 class="text-2xl font-bold mb-4 text-lightGray">Dashboard</h1>
          <div class="bg-darkBackground rounded-lg p-4 shadow-md">
            <Show when={!loading()} fallback={<p>Loading analytics...</p>}>
              <Line data={chartData()} options={{ responsive: true }} />
            </Show>
          </div>
          <div class="mt-8 flex justify-center">
            <a
              href="https://www.zapt.ai"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-gray-500 hover:text-gray-400"
            >
              Made on ZAPT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;