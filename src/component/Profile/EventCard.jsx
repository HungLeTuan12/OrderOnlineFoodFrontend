import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export const EventCard = () => {
  return (
    <div>
      {/* <Card>
        <CardMedia
          sx={{ height: 345 }}
          image="https://images.pexels.com/photos/4846242/pexels-photo-4846242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></CardMedia>
        <CardContent>
          <Typography variant="h4">VietNam Fast food</Typography>
          <Typography variant="body2">50% off on your first order</Typography>
          <div className="py-2 space-y-2">
            <p>Bac Ninh</p>
            <p className="text-sm text-blue-500">February 14, 2024 12:00AM</p>
            <p className="text-sm text-red-500">February 14, 2024 12:00AM</p>
          </div>
        </CardContent>
        {true && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card> */}
      <Card>
        <CardMedia
          sx={{ height: 345 }}
          image="https://images.pexels.com/photos/4846242/pexels-photo-4846242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></CardMedia>
        <CardContent>
          <Typography variant="h4">VietNam Fast Food</Typography>
          <Typography variant="body2">50% off on your order</Typography>
          <div className="py-2 space-y-2">
            <p>Bac Ninh</p>
            <p className="text-sm text-blue-500">February 14, 2024 12:00AM</p>
            <p className="text-sm text-red-500">February 14, 2024 12:00AM</p>
          </div>
        </CardContent>
        {true && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};
