import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseReview = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: reviews = [],
    isLoading: loadingReview,
    refetch: refetchReviews,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews`);
      return res.data;
    },
  });

  return [reviews, loadingReview, refetchReviews];
};

export default UseReview;
