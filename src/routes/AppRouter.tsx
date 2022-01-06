// components
import { Routes, Route, Navigate } from "react-router-dom";
// views
import ShowDetails from "../views/ShowDetails";
import EpisodeDetails from "../views/EpisodeDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/show" element={<ShowDetails />} />
      <Route path="/show/episode" element={<EpisodeDetails />} />
      <Route path="*" element={<Navigate to="/show" />} />
    </Routes>
  );
};

export default AppRouter;
