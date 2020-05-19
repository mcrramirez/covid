import { useState, useEffect } from "react";

export default function useDataFeed(url) {
  const [datafeed, setDataFeed] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      console.log("fetching data...");
      const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => {
          setError(err);
        });
      console.log(data);
      setDataFeed(data);
    }
    fetchData();
  }, [url]);

  return { datafeed, error };
}
