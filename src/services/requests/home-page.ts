import React from "react";
import { request } from "../api";

const Posts = () => {
  const [data, setData] = React.useState({ data: [], loading: false });

  React.useEffect(() => {
    (async () => {
      setData({ ...data, loading: true });
      const response = await request.get("/posts");
      setData({ ...data, loading: false });
      setData({ ...data, data: response.data });
    })();
  }, []);

  return data
};

export default Posts;
