import React from "react";

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
export const Row = ({ fluid, classes, children }) =>
{
  const cls=classes ? classes : '';
  return (
  <div className={`row${fluid ? "-fluid" : ""} ${cls}`}>
    {children}
  </div>
  )
};
export const Col = ({ size, classes, children }) =>
{
  const col=size ? size.split(" ").map(size => "col-" + size).join(" ") : 'col';
  const cls=classes ? classes : '';
  return (
  <div className={`${col} ${cls}`}>
    {children}
  </div>
  )
};
