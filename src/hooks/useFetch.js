// // import { useEffect, useState } from "react";

// // export const useFetchData = (url, errorMessage, options) => {
// //   const [fetchData, setFetchData] = useState({});
// //   const [loading, setLoading] = useState(false);

// //   const [error, setError] = useState("");

// //   const [opt, setOpt] = useState({
// //     headers: { "Content-Type": "application/json" },
// //     ...options,
// //   });

// //   useEffect(() => {
// //     const a = async () => {
// //       setLoading(true);
// //       try {
// //         const response = await fetch(url, options);
// //         if (!response.ok) {
// //           throw new Error(`http status: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         console.log(data);
// //         setFetchData(data);
// //       } catch (error) {
// //         console.log(error.message);
// //         setError(!!errorMessage ? errorMessage : error.message);
// //       }
// //       setLoading(false);
// //     };
// //     a();
// //   }, [url]);

// //   return {
// //     data: fetchData,
// //     loading,
// //     error,
// //   };
// // };
// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
