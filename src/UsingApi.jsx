import Chart from './components/chart';
import { useState, useEffect } from 'react';

function AppFromApi() {

    const [decibelLevels, setDecibelLevels] = useState([]);

    const fetchDecibelLevels = async () => {
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/csml-2023/databases/(default)/documents/noise/dataByID/cBPtGd6rxSRKJ9YpJNpxH7GvJhj1?key=AIzaSyD0hnDMTjZybGuNtGTUbF6zoaTWh1c_rLA&orderBy=timestamp&pageSize=200');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            const data = jsonData.documents.map(doc => ({
                level: parseInt(doc.fields.data.integerValue),
                time: parseInt(doc.fields.timestamp.integerValue)
            }));

            console.log("Decibels: ", data);

            setDecibelLevels(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchDecibelLevels();
    }, []);

    if (decibelLevels.length === 0) {
        return <div>Loading...</div>;
    }
    // Render the Line component with the formatted data and some options
    return (
        <div>
            <h1 className='text-3xl font-bold text-white'>Line Chart with Decibel Levels and Time</h1>
            <Chart data={decibelLevels} />
        </div>
    );
}

export default AppFromApi;