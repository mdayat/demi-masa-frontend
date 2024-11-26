import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@components/RootLayout";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const PhoneVerification = lazy(() => import("./pages/PhoneVerification"));
const Profile = lazy(() => import("./pages/Profile"));

const ErrorBoundary = lazy(() =>
  import("@components/ErrorBoundary").then(({ ErrorBoundary }) => ({
    default: ErrorBoundary,
  }))
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <Suspense fallback={<></>}>
        <ErrorBoundary />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<></>}>
            <Home />
          </Suspense>
        ),
      },

      {
        path: "dashboard",
        element: (
          <Suspense fallback={<></>}>
            <Dashboard />
          </Suspense>
        ),
      },

      {
        path: "phone-verification",
        element: (
          <Suspense fallback={<></>}>
            <PhoneVerification />
          </Suspense>
        ),
      },

      {
        path: "profile",
        element: (
          <Suspense fallback={<></>}>
            <Profile />
          </Suspense>
        ),
      },
    ],
  },
]);
