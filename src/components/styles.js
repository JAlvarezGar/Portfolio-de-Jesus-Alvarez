import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const ContainerA = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  color: #fff;
  background: linear-gradient(
    340deg,
    rgba(34, 195, 169, 1) 0%,
    rgba(57, 47, 94, 1) 59%
  );
  h1 {
    margin-left: 50px;
  }
  #divFotoTypeWriter {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 300px;
    min-height: 60vh;
    background-color: #fff;
    color: #000;
    
    margin: 0 auto;
    height: 70vh;
    -webkit-box-shadow: -1px 15px 32px 10px rgba(157, 194, 227, 1);
    -moz-box-shadow: -1px 15px 32px 10px rgba(157, 194, 227, 1);
    box-shadow: -1px 15px 32px 10px rgba(157, 194, 227, 1);
  }
  .foto {
    
    max-width: 150px;
    object-fit: contain;
    margin-left: 20px;
    margin-top:0;
    /* border: 1px solid red; */
  }
  #typeWriter{
    max-width: 300px;
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
});
