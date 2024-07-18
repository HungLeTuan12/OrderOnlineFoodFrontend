import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RestaurantCard = () => {
  return (
    <Card className="w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "open" : "closed"}
        ></Chip>
      </div>
      {/* Title and icon heart */}
      <div className="p-4 textPart lg:flex w-full justify-between">
        {/* Title */}
        <div className="space-y-1">
          <p className="font-semibold text-lg">VietNam Fast Food</p>
          <p className="text-gray-500 text-sm">
            Craving it all ? Dive into our flobal fla...
          </p>
        </div>
        {/* Heart icon */}
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};
export default RestaurantCard;
