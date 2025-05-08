import { useQuery } from '@tanstack/react-query';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export default function BarChart() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['citasPorMes'],
    queryFn: async () => {
      const res = await fetch('https://egguzmassage.com/api/citas/citas-mensuales');
      if (!res.ok) throw new Error('Error al cargar las citas');
      return res.json();
    }
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar los datos.</p>;

  const labels = data.map(item => meses[item.mes - 1]);
  const valores = data.map(item => item.total);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Citas por mes',
        data: valores,
        backgroundColor: '#a3d4f8',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
    },
  };

  return (
    <div className='card card__full' style={{ width: '100%', padding: '20px' }}>
      <h3>Citas mensuales</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
}
