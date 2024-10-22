import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseFetchSecure = (url) => {
  const axiosSecure = UseAxiosSecure();

  const {
    data: data = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axiosSecure.get(url);
      return res.data;
    },
  });

  return [data, loading, refetch];
};

export default UseFetchSecure;
