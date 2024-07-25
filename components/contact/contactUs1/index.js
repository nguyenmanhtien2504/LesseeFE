/**
 * It returns a fragment containing the GetInTouchSection and ContactDetailsSection components
 * @returns A React component
 */
import React from "react";
import ContactDetailsSection from "./ContactDetails";
import GetInTouchSection from "./GetInTouch";

const BodyContent = () => {
  return (
    <>
     <div className="contact-1">
        <GetInTouchSection />
      </div>
      <ContactDetailsSection />      
    </>
  );
};

export default BodyContent;
