import React from "react";

type TProps = {
  children: React.ReactNode;
  creator: string;
  addInfo: string;
};

function Footer({ children, creator, addInfo }: TProps) {
  return (
    <div>
      <h6>
        {children}
        <p>{creator}</p>
        <span>{addInfo}</span>
      </h6>
    </div>
  );
}

export default Footer;
