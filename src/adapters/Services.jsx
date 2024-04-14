import { useQuery } from "react-query";
import fetchJsonData from "./fetchJsonData";

export const use_Service = ({ service, params = {}, single = false }) => {
  const disabled = Object.values(params).some((param) => !param);
  const query = useQuery(
    [service, params],
    () => fetchJsonData({ service, ...params }, "_"),
    {
      refetchOnWindowFocus: false,
      enabled: !disabled,
      staleTime: 30 * 60 * 1000, // 30 minutos en milisegundos
      retry: false,
    }
  );
  const data = query.data?.info;
  return { ...query, data: data ?? (single ? {} : []) };
};
