import { useEffect, useRef } from 'react';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  annotationPlugin
);

const factorial = (n) => {
  const results = [1];
  if (n == 0 || n == 1) { return results[0]; }
  for (let i = 1; i < n; i++) {
    results.push(results[i-1] * (i+1));
  }
  return results[n-1];
}

const poissonDistributionApprox = (lambda) => {
  // Normal Distribution N(λ,λ) is used to approximate Poisson Distribution when λ is too large
  const minX = Math.round(lambda*0.9);
  const maxX = Math.round(lambda*1.3);
  const X = [];
  const Y = [];
  for (let x = minX; x <= maxX; x++) {
    const y = 1 / Math.sqrt(2 * Math.PI * lambda) * Math.exp(-1 * (x - lambda) ** 2 / (2 * lambda));
    X.push(x);
    Y.push(y);
  }
  return { X, Y };
}

const poissonDistribution = (lambda) => {
  const minX = lambda - 10;
  const maxX = lambda + 30;
  const X = [];
  const Y = [];
  for (let x = minX; x <= maxX; x++) {
    const prob = Math.exp(-lambda) * Math.pow(lambda, x) / factorial(x);
    X.push(x);
    Y.push(prob);
  }
  return { X, Y }
}

const PoissonChart = ({ lambda }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    let X, Y;
    if (lambda <= 20) {
      ({ X, Y } = poissonDistribution(lambda));
    } else {
      ({ X, Y } = poissonDistributionApprox(lambda));
    }

    const ctx = canvasRef.current.getContext('2d');

    // Destroy any existing chart instance before creating a new one
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: X,
        datasets: [
          {
            label: `Poisson Distribution (λ = ${lambda})`,
            data: Y,
            borderColor: 'blue',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',  // Use a linear scale
            position: 'bottom',
          },
        },
        plugins: {
          // Configure the annotation plugin for a dotted mean line
          annotation: {
            annotations: {
              meanLine: {
                type: 'line',
                scaleID: 'x',
                value: lambda, // Position the line at the mean (λ)
                borderColor: 'red',
                borderWidth: 2,
                borderDash: [5, 5], // Dotted line style
                label: {
                  content: 'Mean',
                  enabled: true,
                  position: 'start'
                }
              }
            }
          }
        }
      }
    });

    // Clean up chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [lambda]);

  return <canvas ref={canvasRef} className="h-full" />;
};

export default PoissonChart;