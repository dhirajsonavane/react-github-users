import React, { useState, useEffect } from "react";
import User from "./User";
import Grid from '@material-ui/core/Grid';

const UserList = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.github.com/users");
      res
        .json()
        .then((res) => setPlanets(res))
        .catch((err) => setErrors(err));
    }
    fetchData();
  }, []);

  return !planets.length ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Grid container style={{ padding: 24 }}>
        {planets.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} lg={4} xl={3}>
            <User user={p} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserList;
