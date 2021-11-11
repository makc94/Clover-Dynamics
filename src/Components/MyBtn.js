import { Button, ButtonGroup } from "@mui/material";

const MyBtn = ({ showMars, showOpportunityCam, showSpiritCam }) => {
  return (
    <ButtonGroup
      variant="contained"
      aria-label="outlined primary button group"
      sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
    >
      <Button onClick={showMars} sx={{ m: 1, p: 1 }}>
        Curiosity cam
      </Button>
      <Button onClick={showOpportunityCam} sx={{ m: 1, p: 1 }}>
        Opportunity cam
      </Button>
      <Button onClick={showSpiritCam} sx={{ m: 1, p: 1 }}>Spirit cam</Button>
    </ButtonGroup>
  );
};

export default MyBtn;
