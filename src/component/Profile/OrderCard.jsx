import { Button, Card } from "@mui/material";
import React from "react";
export const OrderCard = () => {
  return (
    <Card>
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center space-x-5">
          {/* Img */}
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://images.pexels.com/photos/16585776/pexels-photo-16585776/free-photo-of-a-poke-bowl-with-chicken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          {/* Name and price */}
          <div>
            <p>Sausage</p>
            <p>$399</p>
          </div>
        </div>
        {/* Button */}
        <div>
          <Button disabled className="cursor-not-allowed">
            Completed
          </Button>
        </div>
      </div>
    </Card>
  );
};
