import React, { useState } from "react";
import { ContainerHeader, useStyles } from "./styles";
import { Link, animateScroll as scroll } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import EmojiSymbolsIcon from "@material-ui/icons/EmojiSymbols";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { IconButton, ListItem, ListItemIcon } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { Drawer, Divider } from "@material-ui/core";



const links = [
  {
    id: "about",
    text: " About me",
    icon: <PersonPinIcon />,
  },
  {
    id: "skills",
    text: "Skills",
    icon: <EmojiSymbolsIcon />,
  },
  {
    id: "work",
    text: "Work",
    icon: <FolderSpecialIcon />,
  },

  {
    id: "contact",
    text: "Contact",
    icon: <InfoIcon />,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const classes= useStyles();
  return (
    <>
      <ContainerHeader>
        <img
          id="foto"
          src="https://lh3.googleusercontent.com/ntz9tcC65r_Mh1hO5kcE13JkB0HGAHxaX5t5K7Rf22-JZJOR0dPof-AJsXUK1Oz-VSxkLeR5WQQHIe4BFAnLfzC5ksMz8pt7bEhqarrK9_heAOaRDyZ8Wo7X7hUcNmK_xKBz-vDV1w=w2400"
        />
        <ul>
          {links.map(({ id, text }, index) => (
            <Link
              key={index}
              to={id}
              spy={true}
              smooth={true}
              duration={700}
              offset={-100}
            >
              {text}
            </Link>
          ))}
        </ul>

        <IconButton id="menu" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      </ContainerHeader>
      
        <Drawer class="textIcon" anchor="right" open={open} onClose={() => setOpen(false)}>
            <CancelIcon onClick={() => setOpen(false)} className={classes.cancelIcon}/>
          
          <Divider />
          {links.map(({ id, text, icon }, index) => (
            <Link
              key={index}
              to={id}
              spy={true}
              smooth={true}
              duration={700}
              offset={-100}
            >
              <ListItem>
                <div>
                  <ListItemIcon className={classes.menuIcons}>{icon}</ListItemIcon>
                </div>
                <p className={classes.menuLateral}>{text}</p>
              </ListItem>
            </Link>
          ))}
        </Drawer>
     
    </>
  );
}
