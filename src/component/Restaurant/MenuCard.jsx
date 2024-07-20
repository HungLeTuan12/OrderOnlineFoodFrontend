import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ingredients = [
  {
    category: "Nuts & seeds",
    ingredient: ["Cashews"],
  },
  {
    category: "Protein",
    ingredient: ["Ground beef", "Bacon strips"],
  },
];
const MenuCard = () => {
  const handleCheckBoxChange = (value) => {
    console.log(value);
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {/* Div om anh and content */}
        <div className="lg:flex items-center justify-between">
          {/* Image */}
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          {/* Content */}
          <div className="ml-5 space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className="font-semibold text-xl">Burger</p>
            <p>499</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              quidem! Quidem ea soluta pariatur veniam, beatae ducimus explicabo
              rem ullam facilis tenetur ad commodi repellat voluptatum,
              architecto, iusto amet corporis?
            </p>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form action="">
          {/* Checkbox */}
          <div className="flex gap-5 flex-wrap">
            {/* Checkbox */}
            {ingredients.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredient.map((item) => (
                    <FormControlLabel
                      control={
                        <Checkbox onChange={() => handleCheckBoxChange(item)} />
                      }
                      label={item}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          {/* Button add to cart */}
          <div className="pt-5">
            <Button type="submit" variant="contained" disabled={false}>
              {true ? "Add To Cart" : "Out of stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};
export default MenuCard;
