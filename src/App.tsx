import {
  DocumentDetailsPage,
  DocumentsPage,
  LoginPage,
  OrganizationsPage,
} from "@/pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RootLayout } from "./layouts";

export const AppContent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<RootLayout />}>
        <Route path="/organizations" element={<OrganizationsPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/details/:id" element={<DocumentDetailsPage />} />
      </Route>
    </Routes>
  </Router>
);

export const App = () => <AppContent />;
