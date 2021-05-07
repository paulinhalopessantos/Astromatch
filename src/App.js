import axios from "axios";
import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";
import Matches from "./components/Matches";

function App() {
  const [profile, setProfile] = useState({});
  const [choosen, setChoosen] = useState(false);
  const [page, setPage] = useState("profile");
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getProfile();
  }, [choosen]);

  useEffect(() => {
    getMatches();
  }, []);

  useEffect(() => {
    choosePerson();
  }, [matches]);

  const getProfile = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paula-lopes-cruz/person";
    axios
      .get(url)
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {});
  };

  const choosePerson = () => {
    const body = {
      id: profile.id,
      choice: choosen,
    };

    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paula/choose-person";
    axios
      .post(url, body)
      .then((res) => {})
      .catch((err) => {});
  };

  const changePage = (page) => {
    setPage(page);
  };

  const getMatches = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paula/matches";
    axios
      .get(url)
      .then((res) => {
        setMatches(res.data.matches);
        getMatches();
      })
      .catch((err) => {});
  };

  const clearMatches = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paula/clear";
    axios
      .put(url)
      .then((res) => {
        setMatches([]);
        alert("Matches apagados com sucesso!");
      })
      .catch((err) => {
        alert("Ocorreu um erro. Desculpe pelo transtorno. Tente novamente");
      });
  };
  const renderPage = (page) => {
    switch (page) {
      case "profile":
        return (
          profile && (
            <Profile
              name={profile.name}
              age={profile.age}
              bio={profile.bio}
              photo={profile.photo}
              choosenPerson={choosenPerson}
              notChoosenPerson={notChoosenPerson}
              choosePerson={choosePerson}
              page={changePage}
            />
          )
        );
      case "matches":
        return (
          <Matches page={changePage} matches={matches} clear={clearMatches} />
        );
    }
  };

  const choosenPerson = () => {
    setChoosen(!choosen);
  };

  const notChoosenPerson = () => {
    setChoosen(!choosen);
  };

  return <div>{renderPage(page)}</div>;
}

export default App;
