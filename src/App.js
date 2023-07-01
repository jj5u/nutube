import Root from "./pages/Root";
import Error from "./pages/Error";
import Video from "./pages/Video";
import SearchResult from "./pages/SearchResult";
import VideoList from "./components/VideoList";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <VideoList />,
      },
      {
        path: "q/:query",
        element: <SearchResult />,
      },
      {
        path: "id/:videoId",
        element: <Video />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
