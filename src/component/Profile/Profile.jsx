import React, { useState } from "react";
import { ProfileNavigation } from "./ProfileNavigation";
export const Profile = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="lg:flex justify-between">
      {/* Left */}
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation open={openSideBar} />
      </div>
      {/* Right */}
      <div className="lg:w-[80%]"></div>
    </div>
  );
};
