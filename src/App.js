import { Container, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import MyBtn from "./Components/MyBtn";

function App() {
  const [data, setData] = useState([]);
  const [showPhoto, setShowPhoto] = useState(false);
  const [morePhoto, setMorePhoto] = useState(false);

  const showMars = async () => {
    const getApi = await axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=20&camera=mast&api_key=YArdxfqqeIojUSp6Gp2DuNlvp7EeJ7xwvq4JwYHp&page=1"
    );
    console.log(getApi.data.photos);
    const res = getApi.data.photos;
    setData(res);
    setShowPhoto(!showPhoto);
    setMorePhoto(true);
  };

  const getMorePhoto = async () => {
    const getApi = await axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=20&camera=mast&api_key=YArdxfqqeIojUSp6Gp2DuNlvp7EeJ7xwvq4JwYHp"
    );
    const res = getApi.data.photos;
    setData(res);
  };

  const showOpportunityCam = async () => {
    const getApi = await axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/photos?sol=2&camera=navcam&api_key=YArdxfqqeIojUSp6Gp2DuNlvp7EeJ7xwvq4JwYHp"
    );
    console.log(getApi.data.photos);
    const res = getApi.data.photos;
    setData(res);
    setShowPhoto(!showPhoto);
    setMorePhoto(true);
  };

  const showSpiritCam = async () => {
    const getApi = await axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/Spirit/photos?sol=2&camera=pancam&api_key=YArdxfqqeIojUSp6Gp2DuNlvp7EeJ7xwvq4JwYHp&page=1"
    );
    console.log(getApi.data.photos);
    const res = getApi.data.photos;
    setData(res);
    setShowPhoto(!showPhoto);
    setMorePhoto(true);
  };

  const list = data.map((item) => {
    return (
      <img
        key={item.id}
        className="img-item"
        style={{ width: 280 }}
        src={item.img_src}
        alt={item.id}
        sx={{ border: 2, borderColor: "primary.main" }}
      ></img>
    );
  });

  return (
    <Container>
      <MyBtn
        showMars={showMars}
        showOpportunityCam={showOpportunityCam}
        showSpiritCam={showSpiritCam}
      />
      <div>{showPhoto && list}</div>
      {morePhoto && (
        <Button variant="contained" sx={{ p: 1, m: 1 }} onClick={getMorePhoto}>
          Load more...
        </Button>
      )}
    </Container>
  );
}

export default App;
