import { useEffect, useState } from "react";
import { axiosSecure } from "./UseAxiosSecure";

const useFilterSearch = (asc, search) => {
  const [allMeals, setAllMeals] = useState([]);

  useEffect(() => {
    axiosSecure(`/meals?sort=${asc ? "asc" : "desc"}&search=${search}`).then(
      (res) => setAllMeals(res.data)
    );
  }, [asc, search]);

  return allMeals;
};

export default useFilterSearch;
