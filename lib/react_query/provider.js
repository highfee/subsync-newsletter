"use client";
import { Next13ProgressBar } from "next13-progressbar";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Providers({ children }) {
  const [client] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <Next13ProgressBar
        height="3px"
        color="#0A2FFF"
        options={{ showSpinner: false }}
        showOnShallow
      />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
