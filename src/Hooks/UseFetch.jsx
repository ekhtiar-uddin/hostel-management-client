import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseFetch = (url) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: data = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axiosPublic.get(url);
      return res.data;
    },
  });

  return [data, loading, refetch];
};

export default UseFetch;
