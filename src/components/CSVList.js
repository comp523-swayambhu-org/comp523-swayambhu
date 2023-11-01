import { React, useState, useEffect } from 'react';
import Annotation from './Annotation';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Papa from 'papaparse';
import csvData from '../annotations.csv'; // Import the CSV file

export default function CSVList() {
  const [parsedData, setParsedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(csvData);
      const text = await response.text();
      Papa.parse(text, {
        header: true, // If the CSV has a header row
        dynamicTyping: true, // Convert numeric values to numbers
        complete: (result) => {
          setParsedData(result.data);
          setIsLoading(false);
        },
      });
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <List>
        {parsedData.map((row) => (
          <div>
            <Annotation
              num={row.num}
              title={row.title}
              description={row.description}
              url={row.url}
            />
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}
