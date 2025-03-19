import React from 'react';

export default function Menu({ children }) {
  const [open, setOpen] = React.useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className='menu'>
      {React.Children.map(children, (child) => {
        // ✅ Ensure child is a React component before passing props
        if (React.isValidElement(child) && typeof child.type !== 'string') {
          return React.cloneElement(child, { open, toggle });
        }
        return child; // Return plain elements (e.g., div, span) unchanged
      })}
    </div>
  );
}
