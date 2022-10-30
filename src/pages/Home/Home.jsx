import React from "react";
import axios from "axios";
import HomeContainer, { CardContainer, Form, SearchArea } from "./Home.styled";
import { useState } from "react";
import Card from "./Card";
import uuid from "../../../node_modules/uuid/dist/v1";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("Breakfast");
  const [submit, setSubmit] = useState({
    food: "",
    time: "Breakfast",
  });
  const [cardData, setCardData] = useState([]);

  const getRecipe = async (submit) => {
    const appId = "63d407fc";
    const appKey = "62ab89211a87feb3d9bc6fb407ba7068";
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=${appId}&app_key=${appKey}&mealType=${select}`;

    await axios(url).then((res) => setCardData(res.data.hits));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit({ food: input, time: select });
    getRecipe(submit);
  };

  return (
    <>
      <Navbar />
      <HomeContainer>
        <SearchArea>
          <h2>Food App</h2>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search A Food"
              onChange={(e) => setInput(e.target.value)}
            />
            <select
              name="foodTypes"
              id="foodTypes"
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Dinner">Dinner</option>
              <option value="Lunch">Lunch</option>
              <option value="Snack">Snack</option>
              <option value="Teatime">teatime</option>
            </select>
            <button>Search</button>
          </Form>
        </SearchArea>
        <CardContainer>
          {cardData.length > 0 &&
            cardData.map((item) => <Card key={uuid()} item={item} />)}
        </CardContainer>

        {/* <Card cardData={cardData} /> */}
      </HomeContainer>
    </>
  );
};

export default Home;
