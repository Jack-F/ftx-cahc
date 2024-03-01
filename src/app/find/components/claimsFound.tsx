"use client";

import { getSome, searchWithConditions } from "@/server/api/search";
import { useMutation, useQuery } from "@tanstack/react-query";
import ClaimItem from "./claim-item";
import { ClaimSchema } from "@/app/models/Claim.model";
import { Key } from "react";
import SearchForm from "@/app/_components/search-form";

export default function ClaimsFound() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["searchResults"],
    queryFn: getSome,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching claims: {JSON.stringify(error)}</div>;
  }

  const mutation = useMutation(searchWithConditions, {
    onSuccess: (data) => {
      // Replace 'demoData' cache with new data from server
      queryClient.setQueryData(["demoData"], data);
    },
    onError: (error) => {
      console.log("Search error", error);
      // do something with the error
    },
  });
  return (
    <>
      <SearchForm performSearch={mutation} />
      <ul
        role="list"
        className="divide-y divide-gray-700 overflow-hidden bg-white shadow-lg ring-1 ring-gray-700 sm:rounded-xl"
      >
        {data.claims.map(
          (claimData: typeof ClaimSchema, idx: Key | null | undefined) => (
            <ClaimItem key={idx} claimData={claimData} />
          ),
        )}
      </ul>
    </>
  );
}
