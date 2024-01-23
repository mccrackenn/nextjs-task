import React from 'react';

const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">npx create-next-app@latest nextjs-tutorial</pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
