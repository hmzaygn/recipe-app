import React from "react";
import { useLocation } from "react-router";
import DetailsImg from "../../assets/diet.svg";
import Navbar from "../../components/navbar/Navbar";
import DietHeader, {
  MealDesc,
  NutrientText,
  RecipeText,
  DetailPage,
} from "./Details.styled";

const Details = () => {
  const { state } = useLocation();
  const { ingredientLines, images, label, totalNutrients, calories } =
    state.recipe;

  return (
    <>
      <Navbar />
      <DetailPage>
        <DietHeader>
          <h2>{label}</h2>
          <img src={DetailsImg} alt="diet" />
        </DietHeader>

        <MealDesc>
          <ul>
            <NutrientText>
              <span>{totalNutrients.CA.label} :</span>{" "}
              {totalNutrients.CA.quantity.toFixed(1)}
              {totalNutrients.CA.unit}
            </NutrientText>

            <NutrientText>
              <span>{totalNutrients.CHOCDF.label} :</span>{" "}
              {totalNutrients.CHOCDF.quantity.toFixed(1)}
              {totalNutrients.CHOCDF.unit}
            </NutrientText>

            <NutrientText>
              <span>{totalNutrients.CHOLE.label} :</span>
              {totalNutrients.CHOLE.quantity.toFixed(1)}
              {totalNutrients.CHOLE.unit}
            </NutrientText>

            <NutrientText>
              <span>{totalNutrients.ENERC_KCAL.label} :</span>
              {totalNutrients.ENERC_KCAL.quantity.toFixed(1)}
              {totalNutrients.ENERC_KCAL.unit}
            </NutrientText>

            <NutrientText>
              <span>Calories :</span> {calories.toFixed(1)}
            </NutrientText>

            <NutrientText>
              <span>{totalNutrients.FAT.label} :</span>
              {totalNutrients.FAT.quantity.toFixed(1)}
              {totalNutrients.FAT.unit}
            </NutrientText>

            <NutrientText>
              <span>{totalNutrients.PROCNT.label} :</span>
              {totalNutrients.PROCNT.quantity.toFixed(1)}
              {totalNutrients.PROCNT.unit}
            </NutrientText>
          </ul>

          <div>
            <img src={images.REGULAR.url} alt="" />
          </div>

          <ul>
            {ingredientLines.map((lines, index) => {
              return (
                <RecipeText key={index}>
                  {index + 1} - {lines}
                </RecipeText>
              );
            })}
          </ul>
        </MealDesc>
      </DetailPage>
    </>
  );
};

export default Details;
