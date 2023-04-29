import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../../services/apiClient";
import platforms from "../../utils/data/platforms";
import Platform from "../../models/Platform";

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
