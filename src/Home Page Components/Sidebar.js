import React, { useState, useEffect, useContext } from "react";
import "../Styles-HomePageComponents/Sidebar.css";
import DeckForm from "./DeckForm";
// import CreateDeckButton from "./CreateDeckButton";
import { CardContext, DeckContext } from "../MainApp";
// import EditAndDeleteButtons from "./EditAndDeleteButtons";
import SidebarData from "./SidebarData";
import { Link } from "react-router-dom";
import Button from "./Button";
import { v4 } from "uuid";

export default function Sidebar({
  children,
  handleDeckChange,
  className,
  selectedID,
}) {
  const value = useContext(DeckContext);
  const { decks, setDecks } = useContext(DeckContext);

  useEffect(() => {
    const deckItems = JSON.parse(localStorage.getItem("decks"));
    if (deckItems) {
      setDecks(deckItems);
    }
  }, []);

  const selectedStyle =
    "all-cards-deck" === selectedID
      ? { backgroundColor: "rgba(142, 142, 142, 0.20)" }
      : { backgroundColor: "" };

  return (
    <div className="sidebar">
      <h4>
        Flip<span>Learn</span>
      </h4>
      <div className="deck-list-container">
        <ul className="folder-names">
          <div
            id={"all-cards-deck"}
            className={className}
            onClick={handleDeckChange}
            value={"All Cards"}
            style={selectedStyle}
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icons">
                <path
                  id="Vector"
                  d="M12.25 4.875H1.75C1.51801 4.87477 1.29558 4.78251 1.13154 4.61846C0.967493 4.45442 0.875232 4.23199 0.875 4V2.25C0.875232 2.01801 0.967493 1.79558 1.13154 1.63154C1.29558 1.46749 1.51801 1.37523 1.75 1.375H12.25C12.482 1.37523 12.7044 1.46749 12.8685 1.63154C13.0325 1.79558 13.1248 2.01801 13.125 2.25V4C13.1248 4.23199 13.0325 4.45442 12.8685 4.61846C12.7044 4.78251 12.482 4.87477 12.25 4.875ZM1.75 2.25V4H12.25V2.25H1.75ZM12.25 13.625H1.75C1.51801 13.6248 1.29558 13.5325 1.13154 13.3685C0.967493 13.2044 0.875232 12.982 0.875 12.75V11C0.875232 10.768 0.967493 10.5456 1.13154 10.3815C1.29558 10.2175 1.51801 10.1252 1.75 10.125H12.25C12.482 10.1252 12.7044 10.2175 12.8685 10.3815C13.0325 10.5456 13.1248 10.768 13.125 11V12.75C13.1248 12.982 13.0325 13.2044 12.8685 13.3685C12.7044 13.5325 12.482 13.6248 12.25 13.625ZM1.75 11V12.75H12.25V11H1.75ZM12.25 9.25H1.75C1.51801 9.24977 1.29558 9.15751 1.13154 8.99346C0.967493 8.82942 0.875232 8.60699 0.875 8.375V6.625C0.875232 6.39301 0.967493 6.17058 1.13154 6.00654C1.29558 5.84249 1.51801 5.75023 1.75 5.75H12.25C12.482 5.75023 12.7044 5.84249 12.8685 6.00654C13.0325 6.17058 13.1248 6.39301 13.125 6.625V8.375C13.1248 8.60699 13.0325 8.82942 12.8685 8.99346C12.7044 9.15751 12.482 9.24977 12.25 9.25ZM1.75 6.625V8.375H12.25V6.625H1.75Z"
                  fill="#4B4B4B"
                />
              </g>
            </svg>
            All Cards
          </div>
          <p className="sidebar-title">Decks</p>
          {Array.isArray(decks) ?
            (decks.map((deck, index) => {
              return (
                <SidebarData
                  className={className}
                  key={index}
                  id={deck.id}
                  value={deck.deck}
                  selectedID={selectedID}
                  handleDeckChange={handleDeckChange}
                />
              );
            }))
            :(
              null
            )}
        </ul>
        {children}
      </div>

      <Link to="/quiz" style={{ width: "100%", marginTop: "auto" }}>
        <Button className={"play-quiz-btn"} value={"Play Quiz"} />
      </Link>
    </div>
  );
}
