import React from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PaymentsIcon from "@mui/icons-material/Payments";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
const menu = [
  {
    title: "Orders",
    icon: <DeliveryDiningIcon />,
  },
  {
    title: "Favourties",
    icon: <FavoriteIcon />,
  },
  {
    title: "Address",
    icon: <AddLocationIcon />,
  },
  {
    title: "Payments",
    icon: <PaymentsIcon />,
  },
  {
    title: "Notifications",
    icon: <NotificationsIcon />,
  },
  {
    title: "Events",
    icon: <EventIcon />,
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
  },
];
export const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.title.toLowerCase()}`);
  };
  return (
    <div>
      <Drawer
        variant={isSmallScreen ? "temporary" : "permament"}
        onClose={handleClose}
        open={isSmallScreen ? open : true}
        anchor="left"
        sx={{ zIndex: 1 }}
      >
        {/* <div className="w-[20vw] lg:w-[20w] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16">
          {menu.map((item, i) => (
            <>
              <div
                onClick={() => handleNavigate(item)}
                className="px-5 flex items-center space-x-5 cursor-pointer"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </>
          ))}
        </div> */}
        <div className="w-[20vw] lg:w-[20vw] flex flex-col text-xl justify-center gap-8 pt-16 h-[100vh]">
          {menu.map((item, i) => (
            <>
              <div
                onClick={() => handleNavigate(item)}
                className="flex items-center space-x-5 px-5 cursor-pointer"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
};
