import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = ({ api, key }) => {
  //     const [menu, setMenu] = useState([]);
  //     const [loading, setLoading] = useState(true);
  //     useEffect(()=> {
  //         fetch(api)
  //         .then(res => res.json())
  //         .then(data => {
  //             setMenu(data);
  //             setLoading(false);
  //         })
  //     }, [api])
  // return [menu, loading];

  const axiosPublic = useAxiosPublic();
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await axiosPublic.get(api);
      return res.data;
    },
  });
  return [menu, loading, refetch];
};

export default useMenu;
