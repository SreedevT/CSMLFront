import { useState, useEffect } from 'react';
import { dbTest } from './firebase.config';
import { collection, getDocs, onSnapshot, query, orderBy } from 'firebase/firestore';
import Chart from './components/chart';

function TestApp() {
    // Get a reference to a query that filters by timestamp
    const decibelLevelsRef = collection(dbTest, 'decibel_levels');
    const levelQuery = query(decibelLevelsRef, orderBy('timestamp', 'asc'),);

    const [decibelLevels, setDecibelLevels] = useState([{ level: 0, time: 0 }]);

    // const filterDataByDate = (data, startDate) => {
    //     const startTimestamp = startDate.getTime();
    //     return data.filter(entry => entry.time >= startTimestamp);
    // };

    const fetchDecibelLevels = async () => {
        await getDocs(levelQuery).then((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => ({ level: doc.data().level, time: doc.data().time }));
            setDecibelLevels(data);

            console.log("TEST Decibels: ", data);
        });
    };

    // Define a function to listen for real-time updates
    const subscribeToDecibelLevels = () => {

        const unsubscribe = onSnapshot(levelQuery, (querySnapshot) => {
            console.log("TEST Snapshot is working");
            const data = querySnapshot.docs.map(doc => ({ level: parseInt(doc.data().level), time: parseInt(doc.data().time) }));
            setDecibelLevels(data);
            console.log("TEST Decibels in subscribe: ", data);

        });

        // Return a function that can be used to unsubscribe from the listener
        return unsubscribe;
    };

    // Use the useEffect hook to fetch the data once when the component mounts
    useEffect(() => {
        fetchDecibelLevels();
    }, []);
    // Use the useEffect hook to subscribe to real-time updates when the component mounts
    useEffect(() => {
        // Call the subscribe function and store the unsubscribe function
        const unsubscribe = subscribeToDecibelLevels();

        // Return a function that will call the unsubscribe function when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);

    if (decibelLevels.length === 0) {
        return <div>Loading...</div>;
    }
    // Render the Line component with the formatted data and some options
    return (
        <div>
            <h1>Line Chart with Decibel Levels and Time</h1>

            <Chart data={decibelLevels} />
        </div>
    );
}

export default TestApp;