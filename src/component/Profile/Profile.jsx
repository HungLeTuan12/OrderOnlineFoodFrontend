import React, { useState } from "react";
import { ProfileNavigation } from "./ProfileNavigation";
import { Route, Routes } from "react-router-dom";
import { Events } from "./Events";
import { UserProfile } from "./UserProfile";
import { Address } from "./Address";
import { Orders } from "./Orders";
import { Favourites } from "./Favourites";
export const Profile = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="lg:flex justify-between">
      {/* Left */}
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation open={openSideBar} />
      </div>
      {/* Right */}
      <div className="sticky z-[40] lg:w-[80%]">
        <Routes>
          <Route path="/" element={<UserProfile />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/events" element={<Events />}></Route>
        </Routes>
      </div>
    </div>
  );
};
