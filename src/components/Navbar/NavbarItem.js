import React from "react";
import classNames from "classnames";

export default ({ link, label, classNames: cNames = [] }) => (
  <a href={link} className={classNames([...cNames, "navbar--item"])}>
    {label}
  </a>
);
