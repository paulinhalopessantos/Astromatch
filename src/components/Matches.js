import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ClearIcon from "@material-ui/icons/Clear";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;

  & > img {
    width: 50px;
    height: 50px;
    border: 1px solid #2196f3;
    border-radius: 60px;
  }

  & > p {
    color: #f73378;
    margin-left: 20px;
    font-size: 20px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-self: flex-start;
  border-bottom: 1px solid lightgrey;

  & > :nth-child(3) {
    display: flex;
    align-self: center;
    margin-left: 60px;
  }

  & > button {
    outline-style: none;
    border: none;
    background-color: white;
    cursor: pointer;
    margin-left: 10px;
  }

  & > p {
    display: flex;
    align-self: center;
    margin-left: 90px;
    font-size: 20px;
    font-weight: bold;
    color: #2196f3;
    box-shadow: 1px 1px 1px pink;

    & > span {
      color: #f73378;
    }
  }
`;
const MatchesContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  width: 400px;
  height: 600px;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;
`;
const Photo = styled.div``;

function Matches(props) {
  return (
    <Container>
      <MatchesContainer>
        <HeaderContainer>
          <button
            onClick={() => {
              props.page("profile");
            }}
          >
            <ArrowBackIosIcon color="secondary" fontSize="large" />
          </button>
          <p>
            <span>astro</span>match
          </p>

          <button
            onClick={() => {
              props.clear();
            }}
          >
            <ClearIcon color="secondary" fontSize="large" />
          </button>
        </HeaderContainer>
        {props.matches &&
          props.matches.map((match) => {
            return (
              <MatchContainer>
                <img src={match.photo} />
                <p> {match.name}</p>
              </MatchContainer>
            );
          })}
      </MatchesContainer>
    </Container>
  );
}

export default Matches;
