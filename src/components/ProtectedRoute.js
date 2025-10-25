import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, role, children }) {
    if (!user) return <Navigate to="/" />;
    if (role && user.role !== role) return <Navigate to="/map" />;
    return children;
}
