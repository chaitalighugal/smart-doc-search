import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [file, setFile] = useState(null);
    const [summary, setSummary] = useState("");

    const API_URL = "https://your-api-gateway-url.amazonaws.com"; // Replace with API Gateway URL

    const uploadVideo = async () => {
        let formData = new FormData();
        formData.append("file", file);
        await axios.post(`${API_URL}/upload`, formData, {
            headers: { "filename": file.name }
        });
        alert("Upload Successful!");
    };

    const fetchSummary = async () => {
        const response = await axios.get(`${API_URL}/summary/video1`);
        setSummary(response.data.summary);
    };

    return (
        <div>
            <h1>AI Video Summarizer</h1>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={uploadVideo}>Upload</button>
            <button onClick={fetchSummary}>Get Summary</button>
            <p>{summary}</p>
        </div>
    );
}

export default App;
