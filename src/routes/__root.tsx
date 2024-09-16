import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar/Navbar";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div className="h-screen max-w-[640px] lg:max-w-[1280px] md:max-w-[768px] mx-auto px-8 flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="flex-grow h-full min-h-full">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  ),
});
