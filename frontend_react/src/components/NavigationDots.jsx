/* eslint-disable jsx-a11y/control-has-associated-label */

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "work", "skills", "testimonial", "contact"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
          target="_blank"
          rel="noopener noreferrer"
        />
      )
    )}
  </div>
);

export default NavigationDots;
