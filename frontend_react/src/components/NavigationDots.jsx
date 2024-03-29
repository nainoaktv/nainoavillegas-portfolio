import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {[
        "home",
        "about",
        "services",
        "work",
        "skills",
        "testimonial",
        "contact",
      ].map((item, idx) => (
        <a
          href={`#${item}`}
          key={item + idx}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#66FCF1" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
