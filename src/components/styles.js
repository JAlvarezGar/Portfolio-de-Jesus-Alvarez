import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const ContainerA = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  color: #fff;
  background: linear-gradient(
    340deg,
    rgba(142, 153, 151, 1) 0%,
    rgba(89, 89, 89, 1) 59%
  );

  h1 {
    margin-left: 50px;
  }
  #divFotoTypeWriter {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding-top: 80px;
    width: 50vw;
    max-height: 60vh;
    position: relative;
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    /* border: 1px solid yellow; */

    margin: 0 auto;
    height: 70vh;
    -webkit-box-shadow: 6px 13px 14px 0px rgba(163, 157, 163, 1);
    -moz-box-shadow: 6px 13px 14px 0px rgba(163, 157, 163, 1);
    box-shadow: 6px 13px 14px 0px rgba(163, 157, 163, 1);
  }
  #TwButton {
    display: flex;
    flex-direction: column;
    max-height: 60%;
    max-width: 90%;
    /* border: 1px solid red; */
  }

  #typeWriter {
    display: flex;
    flex-direction: column;

    min-height: 400px;
    width: 95%;
    margin-left: 10px;
    /* border: 1px solid green; */
  }
  .foto {
    max-width: 100px;
    object-fit: contain;
    margin-left: 20px;
  }
  @media(max-width:800px){
    #divFotoTypeWriter{
      flex-direction: column;
    }
    .foto {
      max-width:60px;
    }
  }
  @media (max-width: 414px) {

    #divFotoTypeWriter {
      padding-top: 10px;
    }

    .foto {
      display: none;
    }
    #divFotoTypeWriter {
      width: 95%;
    }
    #typeWriter {
      margin-top: 20px;
      width: 100%;
      /* border: 1px solid green; */
    }
  }
`;

const ContainerB = styled.div`
  min-height: 100vh;
  color: #000;
  width: 100%;
  div {
    background-color: #fff;
    color: #000;
    width: 60vw;
    margin: 0 auto;
    height: 80vh;
    -webkit-box-shadow: -1px 15px 32px 10px rgba(157, 194, 227, 1);
    -moz-box-shadow: -1px 15px 32px 10px rgba(157, 194, 227, 1);
    box-shadow: -1px 15px 32px 10px rgba(157, 194, 227, 1);
  }
  h1 {
    margin-left: 50px;
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  position: sticky;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  color: #000;
  background-color: #fafafa;

  & #foto {
    margin: 10px;
    width: 70px;
    object-fit: contain;
    &:hover {
      cursor: pointer;
    }
  }
  & ul {
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    min-width: 450px;
    justify-content: space-between;
    /* da formato a cada link del header */
    &:hover a {
      cursor: pointer;
      border-bottom: 3px solid #000;
    }

    /* hay que cambiar el tamaño cuando acabe */
    @media (max-width: 650px) {
      display: none;
    }
  }
  & button {
    color: tomato;
    @media (min-width: 650px) {
      display: none;
    }
  }

  @media (max-width: 650px) {
    justify-content: space-between;
    button {
      margin-right: 20px;
    }
  }
`;

export { ContainerA, ContainerHeader, ContainerB };

export const useStyles = makeStyles({
  display: "flex",

  menuLateral: {
    fontFamily: "Noto Sans",
    fontSize: "24px",
    color: "tomato",
    cursor: "pointer",
    width: "30vw",
  },

  cancelIcon: {
    marginLeft: "15px",
    color: "tomato",
    justifyContent: "flex-end",
    margin: "10px",
    cursor: "pointer",
  },
  menuIcons: {
    cursor: "pointer",
  },
  btCV: {
    padding: "10px",
       backgroundColor: "tomato",
      color:"#fff",
    
    position: "absolute",
    bottom: "20px",
    right: "20px",
    " &:hover": {
      backgroundColor: "#fff",
      color: "tomato",
    },
  },
});
