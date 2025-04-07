import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // State hooks
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [images, setImages] = useState(null);
  const [data2, setData2] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          `https://nxsinfotech.com/server/wp-json/wp/v2/pages/285`,
          `https://nxsinfotech.com/server/wp-json/wp/v2/pages/20`,
          `https://nxsinfotech.com/server/wp-json/acf/v2/options`,
          `https://nxsinfotech.com/server/wp-json/wp/v2/testimonial?per_page=100`,
        ];

        const responses = await Promise.all(
          urls.map((url) =>
            axios.get(url).catch((err) => {
              console.error(`Error fetching ${url}:`, err);
              return null;
            })
          )
        );

        // Check if responses are valid JSON
        for (const res of responses) {
          if (res && res.headers["content-type"]?.includes("text/html")) {
            throw new Error(`Invalid JSON response from ${res.config.url}`);
          }
        }

        setData(responses[0]?.data || null);
        setData1(responses[1]?.data || null);
        setImages(responses[2]?.data || null);
        setData2(responses[3]?.data || null);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center text-lg font-bold mt-10">Loading...</div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Content & Images</h1>

      {/* Page 285 Content */}
      {data && (
        <div className="mb-8 p-4 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">{data.title.rendered}</h2>
          <div
            className="text-gray-700 mt-2"
            dangerouslySetInnerHTML={{ __html: data.content.rendered }}
          />
        </div>
      )}

      {/* Page 20 Content */}
      {data1 && (
        <div className="mb-8 p-4 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">{data1.title.rendered}</h2>
          <div
            className="text-gray-700 mt-2"
            dangerouslySetInnerHTML={{ __html: data1.content.rendered }}
          />
        </div>
      )}

      {/* Display Images */}
      {images && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.values(images).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      )}

      {/* Testimonials */}
      {data2 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data2.map((testimonial, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-lg shadow-lg"
              >
                <h3 className="font-bold">{testimonial.title.rendered}</h3>
                <div
                  className="text-gray-700 mt-2"
                  dangerouslySetInnerHTML={{
                    __html: testimonial.content.rendered,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
