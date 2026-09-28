import { useQuery } from "@tanstack/react-query";

export const useAIModels = async () => {
	return useQuery({
		queryKey: ["ai-models"],
		queryFn: () => fetch("/api/ai/get-models").then((res) => res.json()),
	});
};
