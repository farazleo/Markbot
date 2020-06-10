import React from "react";
import svgArr from "../svgs";
import svgArr1 from "../Travelsvgs";
import Button from "@material-ui/core/Button";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import EditIcon from "@material-ui/icons/Edit";
import GoogleFontLoader from "react-google-font-loader";
import { exportComponentAsPNG } from "react-component-export-image";
import Modal from "@material-ui/core/Modal";
import ColorPicker from "material-ui-color-picker";
import { SliderPicker } from "react-color";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
const handwritingFonts = [
  "Permanent Marker",
  "Amatic SC",
  "Pacifico",
  "Dancing Script",
  "Sacramento",
  "Just Another Hand",
  "Berkshire Swash",
  "Niconne",
  "Yesteryear",
];
const serifFonts = [
  "Spartan",
  "Trade Winds",
  "Anton",
  "Niconne",
  "Fjalla One",
  "Fredoka One",
  "Luckiest Guy",
  "Sigmar One",
  "Satisfy",
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15,
    webkitBoxShadow: "3px 3px 3px #7b7b7b",
    mozBoxShadow: "3px 3px 3px #7b7b7b",
    boxShadow: "3px 3px 3px #7b7b7b",
  },
  control: {
    padding: theme.spacing(2),
  },
  h2: {},
  buttonLayout: {
    flexDirection: "row",
    textAlign: "center",
  },
  button: {
    marginTop: theme.spacing(5),
    background: "#ffff",
  },
  modal: {
    position: "absolute",
    width: 400,
    left: 550,
    top: 250,
    height: 250,
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    borderRadius:20,
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function Logo(props) {
  const classes = useStyles();
  const download = React.useRef();
  const [modal, setModal] = React.useState(false);
  const [color, setColor] = React.useState("#EC0B0B");
  return (
    <React.Fragment>
      <GoogleFontLoader
        fonts={[
          {
            font: "Permanent Marker",
          },
          {
            font: "Amatic SC",
          },
          {
            font: "Pacifico",
          },
          {
            font: "Dancing Script",
          },
          {
            font: "Sacramento",
          },
          {
            font: "Just Another Hand",
          },
          {
            font: "Berkshire Swash",
          },
          {
            font: "Niconne",
          },
          {
            font: "Yesteryear",
          },
          {
            font: "Niconne",
          },

          {
            font: "Spartan",
          },
          {
            font: "Trade Winds",
          },
          {
            font: "Anton",
          },
          {
            font: "Niconne",
          },
          {
            font: "Fjalla One",
          },
          {
            font: "Fredoka One",
          },
          {
            font: "Luckiest Guy",
          },
          {
            font: "Sigmar One",
          },
          {
            font: "Satisfy",
          },
        ]}
      />
      <div
        ref={download}
        style={
          props.align == "Left"
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : {}
        }
      >
        <img
          style={{ width: "80px", height: "80px" }}
          src={
            props.businessType == "Food"
              ? svgArr[props.value]
              : svgArr1[props.value]
          }
        />

        <h2
          className={classes.h2}
          style={{
            fontFamily:
              props.businessType == "Food"
                ? handwritingFonts[props.value]
                : serifFonts[props.value],
            color: props.color,
            textAlign: "center",
          }}
        >
          {props.businessName}
        </h2>
      </div>
      <div className={classes.buttonLayout}>
        <Button
          onClick={(event) => {
            exportComponentAsPNG(download);
          }}
          className={classes.button}
        >
          <SystemUpdateAltIcon />
        </Button>
        <Button onClick={() => setModal(true)} className={classes.button}>
          <EditIcon />
        </Button>
        <Modal open={modal} onClose={() => setModal(false)}>
          <Paper className={classes.modal}>
            <Button
              onClick={() => setModal(false)}
              style={{ position: "absolute", right: 20 }}
            >
              <HighlightOffIcon />
            </Button>
            <React.Fragment ref={download}>
              <div
                style={
                  props.align == "Left"
                    ? {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {position: 'absolute', right: 200}
                }
              >
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={
                    props.businessType == "Food"
                      ? svgArr[props.value]
                      : svgArr1[props.value]
                  }
                />

                <h2
                  className={classes.h2}
                  style={{
                    fontFamily:
                      props.businessType == "Food"
                        ? handwritingFonts[props.value]
                        : serifFonts[props.value],
                    color: color ? color : props.color,
                    fontSize: "30px",
                  }}
                >
                  {props.businessName}
                </h2>
              </div>
            </React.Fragment>

            {/* <ColorPicker
              onChange={(color) => setColor(color)}
              label="Edit Color"
            />
             */}
            <div style = {
              props.align == "Left"
                    ? {
                        marginTop: 50
                      }
                    : {marginTop:150}}> 
              <SliderPicker
                onChange={(color) => setColor(color.hex)}
                color={color}
                
              />
            </div>

            <Button
            style={{position: 'absolute', right: 200}}
              onClick={(event) => {
                exportComponentAsPNG(download);
              }}
              className={classes.button}
            >
              <SystemUpdateAltIcon />
            </Button>
          </Paper>
        </Modal>
      </div>
    </React.Fragment>
  );
}
