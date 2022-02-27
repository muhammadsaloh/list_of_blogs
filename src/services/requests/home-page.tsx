import React from "react";
import { request } from "../api";

export const Posts = (query?: any) => {
  const [data, setData] = React.useState({ data: [], loading: false });

  React.useEffect(() => {
    (async () => {
      setData({ ...data, loading: true });
      const response = await request.get(`/posts?${query}`);
      setData({ ...data, loading: false });
      setData({ ...data, data: response.data });
    })();
  }, [query]);

  return data;
};

export const SinglePost = (postId?: number) => {
  const [data, setData] = React.useState<any>({ data: [], loading: false });

  React.useEffect(() => {
    (async () => {
      if (postId) {
        setData({ ...data, loading: true });
        const response = await request.get(`/posts/${postId}/comments`);
        setData({ ...data, loading: false });
        setData({ ...data, data: response.data });
      }
    })();
  }, [postId]);

  return data;
};
