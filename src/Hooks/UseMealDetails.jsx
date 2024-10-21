import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseMealDetails = (id) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: mealDetails = {},
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["mealDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/meals/${id}`);
      return res.data;
    },
  });

  return [mealDetails, loading, refetch];
};

export default UseMealDetails;
