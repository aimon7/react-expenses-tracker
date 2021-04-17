import ChartBar from './ChartBar';

import './Chart.css';

function Chart(props) {
    const extractedValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...extractedValues);

    const chartBar = props.dataPoints.map((dataPoint, index) => {
           return <ChartBar key={index} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />
    });

    return (
        <div className="chart">
            {chartBar}
        </div>
    );
}

export default Chart;
