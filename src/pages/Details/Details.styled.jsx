import styled from "styled-components";

const DietHeader = styled.div`
  /* border: 1px solid red; */
  margin-top: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h2 {
    font-size: 2rem;
    color: white;
    padding: 0 2rem 0 1rem;
  }
  img {
    width: 250px;
    padding: 0 1rem 0 1rem;
  }
`;

export const MealDesc = styled.div`
  width: 70%;
  border: 1px solid white;
  border-radius: 20px;
  margin: 3rem 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: white 0 0 30px 0px;
  img {
    border: 1px solid white;
    border-radius: 20px;
    padding: 10px;
    width: 300px;
  }

  ul {
    width: 30%;
    min-width: 20rem;
    padding: 0 1rem 0 1rem;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    width: fit-content;
  }
`;

export const NutrientText = styled.li`
  list-style: none;
  font-size: 1.5rem;
  text-align: end;
  span {
    // color: white;
    font-weight: 600;
  }
`;

export const RecipeText = styled(NutrientText)`
  text-align: start;
`;

export const DetailPage = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
  align-items: center;
`;

export default DietHeader;
