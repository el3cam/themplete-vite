import { useQuery, useMutation } from "react-query";
import { fetchData } from "./fetchData";

export const useQueryExample = () => {
	return useExampleQueryService({
		service: "service_name",
		params: {},
		single: true,
	});
};

export const useMutateExample = () => {
	return useMutation({
		mutationFn: (params) =>
			fetchData({
				service: "services",
				data: { service: "service_name", ...params },
			}),
		onSuccess: () => {},
	});
};

export const useExampleQueryService = ({
	service,
	params = {},
	single = false,
}) => {
	const disabled = Object.values(params).some((param) => !param);
	const query = useQuery(
		[service, params],
		() =>
			fetchDatafetchData({
				service: "services",
				data: { service, ...params },
			}),
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
