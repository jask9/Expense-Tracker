import React from "react";

function Card(props) {
  const classes = "card " + props.className;

  // we add a "classes" constant which has card as a default class which is always applied,
  // and props.className. So now anything we receive as a class name from outside is added to that string.
  // So with that, we're now making sure that any value set on the class named prop is added to this long string of class names
  // which is then finally set on the div inside of the card.

  return <div className={classes}>{props.children}</div>;
}
// Children, is a reserved name and the value of this special children prop
// will always be the content between the opening and closing tags of your custom component.

export default Card;
