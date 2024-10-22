import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://hostel-management-server-six.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
