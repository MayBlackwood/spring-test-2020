import React, { useState, useEffect } from "react";
import moment from "moment";

import Input from "./../../common/Input";
import Card from "./../../common/Card";

import { getCardsData } from "../../api";
import {
  addDisabledCardId,
  getDisabledCardsIds,
  restoreDisabledCardId,
} from "./../../helpers";

import "./index.scss";

function LeftNav(props) {
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    loadCards();
  });

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const getFilteredCards = () => {
    return cards.filter(
      (card) => card.name.toLowerCase().search(searchValue.toLowerCase()) !== -1
    );
  };

  const loadCards = async () => {
    let cards = await getCardsData();
    const disabledCardsIds = getDisabledCardsIds();

    cards = cards.map((item) => {
      const disabledCard = disabledCardsIds.find((el) => el.id === item.id);
      if (disabledCard) {
        item.disabled = true;
        item.deletedDate = disabledCard.deletedDate;
      }
      return item;
    });
    cards.sort(sortCardsByField("disabled"));

    setCards(cards);
  };

  const sortCardsByField = (field) => {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  };

  const handleCardButtonClick = (e, id) => {
    e.stopPropagation();
    const { activePostId, resetPost } = props;
    const index = cards.findIndex((item) => item.id === id);
    const newCards = [...cards];
    const card = newCards[index];
    card.disabled = !card.disabled;
    if (card.disabled) {
      card.id === activePostId && resetPost();
      card.deletedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
      newCards.splice(index, 1);
      newCards.push(card);
      addDisabledCardId(id, card.deletedDate);
    } else {
      card.deletedDate = null;
      newCards.splice(index, 1);
      newCards.unshift(card);
      restoreDisabledCardId(id);
    }
    setCards(newCards);
  };

  const { handleCardClick, activePostId } = props;
  const filteredCards = getFilteredCards();

  return (
    <div className="left-nav-wrapper">
      <div className="search-input">
        <Input
          placeholder="Search..."
          value={searchValue}
          name="searchInput"
          handleChange={handleSearchInputChange}
        />
      </div>
      <div className="cards-wrapper">
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            data={card}
            selected={activePostId === card.id}
            onCardClick={() => handleCardClick(card)}
            onButtonClick={(e) => handleCardButtonClick(e, card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default LeftNav;
