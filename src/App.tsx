import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const AppContent = () => (
  <Router>
    <Routes>
      <Route index />
    </Routes>
  </Router>
);

export const App = () => <AppContent />;
