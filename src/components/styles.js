import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

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


#divCard{
    display: grid;
    grid-template-columns: 15.625rem 15.625rem 15.625rem;
    grid-gap: 1rem;
    margin: 0 auto;
    

}



  h1 {
    margin-left: 50px;
  }
  #divFotoTypeWriter {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding-top: 80px;
    width: 50vw;
    max-height: 50vh;
    position: relative;
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    /* border: 1px solid red; */

    margin: 0 auto;
    height: 70vh;
    /* -webkit-box-shadow: 6px 13px 14px 0px rgba(163, 157, 163, 1);
    -moz-box-shadow: 6px 13px 14px 0px rgba(163, 157, 163, 1);
    box-shadow: 6px 13px 14px 0px rgba(163, 157, 163, 1); */
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
    border-radius:10px;
  }
  @media (max-width: 880px) {
    #divFotoTypeWriter {
      flex-direction: column;
      max-height: 60vh;
      width: 60%;
    }
    .foto {
      max-width: 60px;
    }
  }
  @media (max-width: 600px)  {
    width:100%;
    #divFotoTypeWriter {
      padding-top: 10px;
      max-height: 60vh;
      width: 95%;
    }

    .foto {
      display: none;
    }

    #typeWriter {
    }
  }
 
`;

const ContainerB = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  color: #808080;
  position: relative;


  .timeLineDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
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
    color: "#fff",

    position: "absolute",
    bottom: "20px",
    right: "20px",
    " &:hover": {
      backgroundColor: "#fff",
      color: "tomato",
    },
  },
});
