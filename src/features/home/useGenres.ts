import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../../services/apiClient";
import genres from "../../utils/data/genres";
import Genre from "../../models/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
