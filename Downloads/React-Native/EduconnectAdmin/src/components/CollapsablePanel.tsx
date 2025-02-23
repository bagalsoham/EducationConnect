import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface CollapsiblePanelProps {
  title: string;
  children: React.ReactNode;
}

const CollapsiblePanel: React.FC<CollapsiblePanelProps> = ({
  title,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapsible-panel">
      {/* Full-width container */}
      <button
        className="panel-button" // We use this class for the button
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">{title}</span>
        {open ? <FiMinus /> : <FiPlus />}
      </button>
      {open && <div className="panel-content">{children}</div>}
      <style>{`
        .collapsible-panel {
          width: 90%;  /* Set width to 90% */
          margin: 1.5rem auto;  /* Centering the panel horizontally */
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .panel-button {
          width: 100%;  /* Ensure button spans the full width */
          background-color: #d9ebfc;
          border: none;
          padding: 2rem;
          text-align: left;
          font-size: 1.25rem;  /* Increased font size */
          font-weight: bold;  /* Set font weight to bold */
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .panel-button:hover {
          background-color: #bdd6f7;  /* Slightly darker blue on hover */
        }

        .panel-content {
          padding: 1rem;
          background-color: #ffffff;
          border-top: 1px solid #d9ebfc;  /* Subtle border between button and content */
          border-radius: 0 0 0.5rem 0.5rem;
          width: 100%;  /* Ensure content matches the width of the button */
        }
      `}</style>
    </div>
  );
};

export default CollapsiblePanel;
