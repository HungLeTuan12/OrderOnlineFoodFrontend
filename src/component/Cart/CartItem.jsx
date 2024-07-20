import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Chip, IconButton } from "@mui/material";

export const CartItem = () => {
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        {/* Image */}
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://images.pexels.com/photos/3622476/pexels-photo-3622476.jpeg"
            alt=""
          />
        </div>
        {/* Decrease and increase quantity */}
        <div className="flex items-center justify-between lg:w-[70%]">
          {/* Image and quantity */}
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>Biryani</p>
            <div className="flex justify-between items-center">
              {/* Quantity decresae and increase */}
              <div className="flex items-center space-x-1">
                <IconButton>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="w-5 h-5 text-xs flex items-center justify-center">
                  5
                </div>
                <IconButton>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
              {/* Price */}
            </div>
          </div>
          {/* Price */}
          <div>
            <p>1956$</p>
          </div>
        </div>
      </div>
      {/* Different Option */}
      <div className="pt-3 space-x-2">
        {[1, 1, 1].map((item) => (
          <Chip label={"Bread"} />
        ))}
      </div>
    </div>
  );
};
