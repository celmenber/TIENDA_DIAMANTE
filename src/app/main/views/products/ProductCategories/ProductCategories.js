import {
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { setCategories } from "src/app/action/ProductAction";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef } from "react";
import { useProduct } from "src/app/hooks";
import { styled } from "@mui/styles";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  width: "max-content",
  "& .MuiToggleButtonGroup-grouped": {
    margin: 5,
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: 90,
    },
    "&:first-of-type": {
      borderRadius: 90,
    },
  },
}));

const Root = ({ children }) => {
  const wraper = useRef(null);
  const handleScroll = (distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      wraper.current.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, 25);
  };
  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        height: "inherit",
        width: "inherit",
      }}
    >
      <Button
        endIcon={<ChevronLeft />}
        onClick={() => handleScroll(300, -25)}
      />
      <div style={{ overflow: "hidden" }} ref={wraper}>
        {children}
      </div>
      <Button
        endIcon={<ChevronRight />}
        onClick={() => handleScroll(300, 25)}
      />
    </div>
  );
};

const ProductCategories = () => {
  const {
    selectCategories: categories,
    selectBaseCategories: baseCategories,
    setCategories,
  } = useProduct();
  const mapCategories = baseCategories.map((category) => {
    return (
      <ToggleButton
        value={category}
        aria-label={category.name}
        key={category.id}
      >
        {category.slug}
      </ToggleButton>
    );
  });
  const handleCategories = (event, newCategories) => {
    if (newCategories.length) {
      setCategories(newCategories);
    }
  };

  return (
    <Root>
      <StyledToggleButtonGroup
        onChange={handleCategories}
        value={categories}
        color="secondary"
        aria-label="Categorias"
      >
        {mapCategories}
      </StyledToggleButtonGroup>
    </Root>
  );
};

export default ProductCategories;
