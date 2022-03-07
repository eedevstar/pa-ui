import React from "react";

import {
  Routes as RoutesBase,
  Route
} from "react-router-dom";

import { Home } from "../pages/Home";
import { AddNew } from "../pages/AddNew";
import { Dashboard } from "../pages/Dashboard";
import { User } from "../pages/User";
import { Setting } from "../pages/Setting";

export const Routes = () => {
  return (
    <RoutesBase>
      <Route path="/home" element={<Home />} />
      <Route path="/addnew" element={<AddNew />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user" element={<User />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/" element={<Home />} />
    </RoutesBase>
  )
}