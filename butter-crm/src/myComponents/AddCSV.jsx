import { useState } from "react";
import Papa from "papaparse";
import { CSVLink } from "react-csv";

export default function Depature(data){
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setCsvData(result.data);
          setHeaders(Object.keys(result.data[0] || {}));
        },
      });
    }
  };

  return (
    <div>
      <h3>CSV Import & Export</h3>
      
      {/* CSV Import */}
      <input type="file" accept=".csv" onChange={handleFileUpload} />

      {csvData.length > 0 && (
        <>
          <table border="1">
            <thead>
              <tr>
                {headers.map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((key, colIndex) => (
                    <td key={colIndex}>{row[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* CSV Export */}
          <CSVLink
            data={[headers, ...csvData.map((row) => headers.map((key) => row[key]))]}
            filename={"exported_data.csv"}
            className="btn btn-success"
          >
            Download CSV
          </CSVLink>
        </>
      )}
    </div>
  );
};
