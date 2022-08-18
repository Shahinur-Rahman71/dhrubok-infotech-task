import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      <div>
        <button
          className="btn-menu"
          onClick={(): void => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >

        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "React",
              // itemId: "/",
              elemBefore: () => <Icon name="coffee" />,
              subNav: [
                {
                  title: "Counter",
                  itemId: "/react/counter",
                  // Optional
                  elemBefore: () => <Icon name="coffee" />
                },
                {
                  title: "Form",
                  itemId: "/react/form",
                  elemBefore: () => <Icon name="coffee" />
                },
                {
                  title: "List",
                  itemId: "/react/list",
                  elemBefore: () => <Icon name="coffee" />
                }
              ]
            },
          ]}
        />
      </div>
    </React.Fragment>
  );
};
