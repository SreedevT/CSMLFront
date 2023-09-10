import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { Line } from 'react-chartjs-2'; // Import the Line component from react-chartjs-2

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
            level: doc.fields.data.integerValue,
            time: doc.fields.timestamp.integerValue
          }));
      
          console.log("Decibels: ", data);
      
          setDecibelLevels(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };      

    // Define a function to listen for real-time updates
    // const subscribeToDecibelLevels = () => {

    //     const unsubscribe = onSnapshot(levelQuery, (querySnapshot) => {
    //         console.log("This part is working");
    //         const data = querySnapshot.docs.map(doc => ({ level: doc.data().level, time: doc.data().time }));
    //         setDecibelLevels(data);
    //     });

    //     // Return a function that can be used to unsubscribe from the listener
    //     return unsubscribe;
    // };

    // Use the useEffect hook to fetch the data once when the component mounts
    useEffect(() => {
        fetchDecibelLevels();
    }, []);
    // Use the useEffect hook to subscribe to real-time updates when the component mounts
    // useEffect(() => {
    //     // Call the subscribe function and store the unsubscribe function
    //     const unsubscribe = subscribeToDecibelLevels();

    //     // Return a function that will call the unsubscribe function when the component unmounts
    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);

    if (decibelLevels.length === 0) {
        return <div>Loading...</div>;
    }
    // Render the Line component with the formatted data and some options
    return (
        <div>
            <h1>Line Chart with Decibel Levels and Time</h1>
            <LineChart width={600} height={400} data={decibelLevels} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <XAxis dataKey="time" type="number" domain={['dataMin', 'dataMax']} label={{ value: 'Time (s)', position: 'bottom' }} />
                <YAxis dataKey="level" type="number" domain={['dataMin', 'dataMax']} label={{ value: 'Decibel (dB)', position: 'left', angle: -90 }} />
                <CartesianGrid strokeDasharray="3" />
                <Tooltip formatter={(value) => `${value} dB`} />
                <Legend />
                <Line type="monotone" dataKey="level" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
}

export default AppFromApi;