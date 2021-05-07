import React, { useState } from "react";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearIcon from "@material-ui/icons/Clear";
import PeopleIcon from "@material-ui/icons/People";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;
const ProfileContainer = styled.div`
  width: clap(330px, 50%, 500px);
  height: 600px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-self: flex-start;
  border-bottom: 1px solid lightgrey;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 50px;

  & > p {
    display: flex;
    align-self: center;
    margin-left: 110px;
    font-size: 20px;
    font-weight: bold;
    color: #2196f3;
    box-shadow: 1px 1px 1px pink;

    & > span {
      color: #f73378;
    }

    & > button {
      outline-style: none;
      border: none;
      background-color: white;
      cursor: pointer;
      margin-right: 5px;
    }
  }
`;
const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-self: flex-end;

  & > button:nth-child(1) {
    border-color: lightGrey;
  }

  & > button:nth-child(2) {
    border-color: lightgrey;
  }

  & > button {
    border-radius: 10px;
    height: 60px;
    width: 60px;
    margin: 45px;
    align-self: center;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
const ProfileSecondary = styled.div`
  background-image: url(${(props) => props.photo});
  width: 350px;
  height: 420px;
  background-size: 100%;
  position: absolute;
  background-repeat: no-repeat;
  border-radius: 10px;
`;
const ProfilePrimary = styled.div`
  background-image: url(${(props) => props.photo});
  width: 350px;
  height: 420px;
  background-size: 100%;
  filter: blur(5px);
  position: absolute;
`;

const InformationContainer = styled.div`
  position: absolute;
  color: white;
  display: flex;
  flex-direction: column;
  width: 350px;

  & > div {
    font-weight: bold;
    font-size: 20px;
    margin-top: 200px;

    & > p {
      margin-top: 90px;
      background-color: #f73378;
    }
  }
`;

const Profile = (props) => {
  return (
    <Container>
      <ProfileContainer>
        <HeaderContainer>
          <p>
            <span>astro</span>match
          </p>
          <p>
            <button
              onClick={() => {
                props.page("matches");
              }}
            >
              <PeopleIcon color="secondary" fontSize="large" />
            </button>
          </p>
        </HeaderContainer>

        <ProfilePrimary photo={props.photo} />
        <ProfileSecondary photo={props.photo} />

        <InformationContainer>
          <div>
            <p>
              {props.name}, {props.age}
            </p>
          </div>
          <p> {props.bio}</p>
        </InformationContainer>

        <ButtonContainer>
          <button
            onClick={() => {
              props.notChoosenPerson();
            }}
          >
            <ClearIcon color="primary" fontSize="large" />
          </button>
          <button
            onClick={() => {
              props.choosenPerson();
            }}
          >
            <FavoriteIcon color="secondary" />
          </button>
        </ButtonContainer>
      </ProfileContainer>
    </Container>
  );
};
export default Profile;
