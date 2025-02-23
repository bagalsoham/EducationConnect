import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/Profile.css"; // Import the CSS file for styling

const Profile: React.FC = () => {
  const { i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);

  // Only provide English and Indian regional languages
  const availableLanguages = [
    { code: "en", name: "English" },
    { code: "hi", name: "Hindi" },
    { code: "ta", name: "Tamil" },
    { code: "te", name: "Telugu" },
    { code: "bn", name: "Bengali" },
  ];

  const handleLanguageChange = (code: string) => {
    // Change the website language using react-i18next
    i18n.changeLanguage(code);
  };

  return (
    <div className="profile-container">
      <h1 className="profile-header">Admin Profile</h1>

      {/* Basic Profile Information */}
      <div className="profile-info">
        <p>
          <strong>Name:</strong> Admin Name
        </p>
        <p>
          <strong>Email:</strong> admin@example.com
        </p>
        <p>
          <strong>Role:</strong> Administrator
        </p>
      </div>

      {/* Language Translation Feature */}
      <div className="language-toggle">
        <button
          className="language-button"
          onClick={() => setShowLanguages(!showLanguages)}
        >
          {showLanguages ? "Hide Languages" : "Translate Website"}
        </button>
      </div>

      {showLanguages && (
        <div className="language-list">
          <h3>Select Language:</h3>
          <ul>
            {availableLanguages.map((lang) => (
              <li key={lang.code}>
                <button onClick={() => handleLanguageChange(lang.code)}>
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
