import { Avatar, Badge, Box, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { pink } from "@mui/material/colors";
import "./Navbar.css";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../State/store";
export const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  // Handle avatar click
  const handleAvatarClick = () => {
    if (auth.user?.role === "ROLE_CUSTOMER") {
      navigate("/my-profile");
    } else {
      navigate("/admin/restaurant");
    }
  };
  return (
    // ul
    <Box className="px-5 sticky z-50  py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      {/* li */}
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li
          onClick={() => navigate("/")}
          className="logo font-semibold text-gray-300 text-2xl"
        >
          <i>Hung Market</i>
        </li>
      </div>
      {/* navbar right */}
      <div className="flex items-center space-x-4 lg:space-x-10">
        {/* search button */}
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        {/* user infor */}
        <div className="">
          {auth.user ? (
            <Avatar
              onClick={handleAvatarClick}
              sx={{ bgcolor: "white", color: pink.A400 }}
              className="cursor-pointer"
            >
              {auth.user?.fullName[0].toUpperCase()}
            </Avatar>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <Person></Person>
            </IconButton>
          )}
        </div>
        {/* cart */}
        <div className="">
          <IconButton>
            <Badge color="secondary" badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};
