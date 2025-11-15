import {
  DocumentDetailsPage,
  DocumentsPage,
  LoginPage,
  OrganizationsPage,
} from "@/pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RootLayout } from "./layouts";
import { AuthContextProvider } from "./providers";
import { PrivateRoute, PublicRoute } from "./routes";

export const AppContent = () => (
  <Router>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<RootLayout />}>
          <Route path="/organizations" element={<OrganizationsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/details/:id" element={<DocumentDetailsPage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export const App = () => (
  <AuthContextProvider>
    <AppContent />
  </AuthContextProvider>
);
