import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseReviewTitle = (name) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allReviews = [],
    isLoading: loadingReview,
    refetch: refetchReviews,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews?title=${name}`);
      return res.data;
    },
  });

  return [allReviews, loadingReview, refetchReviews];
};

export default UseReviewTitle;
