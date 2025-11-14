import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LoginPage, OrganizationsPage, DocumentsPage, DocumentDetailsPage } from "@/pages";

export const AppContent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/organizations" element={<OrganizationsPage />} />
      <Route path="/documents" element={<DocumentsPage />} />
      <Route path="/details/:id" element={<DocumentDetailsPage />} />
    </Routes>
  </Router>
);

export const App = () => <AppContent />;
