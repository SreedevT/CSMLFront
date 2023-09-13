import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';

function formatUnixTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleTimeString(); // Get hours & minutes
}

function Chart({data}) {
    // Access the 'data' prop passed from the parent component
    const [chartData, setChartData] = useState(data);
    useEffect(() => {
        setChartData(data);
    }, [data]);

    return (
        <div>
            <LineChart width={600} height={400} data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <XAxis dataKey="time" type="number" allowDataOverflow={true} domain={['dataMax - 60', 'dataMax + 60']} tickFormatter={formatUnixTime} label={{ value: 'Time (s)', position: 'bottom' }} />
                <YAxis dataKey="level" type="number" domain={[0, 'dataMax']} label={{ value: 'Decibel (dB)', position: 'left', angle: -90 }} />
                {/* <CartesianGrid strokeDasharray="3 3" stroke="#808080" /> */}
                <Tooltip formatter={(value) => `${value} dB`} labelFormatter={formatUnixTime} />
                <Line type="monotone" dataKey="level" stroke="#8884d8" activeDot={{ r: 8 }} dot={false} />
            </LineChart>
        </div>
    );
}

//TODO Data from firestore is now in string format, so we need to convert it to number
Chart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.number.isRequired,
        level: PropTypes.number.isRequired,
    })).isRequired,
};


export default Chart;