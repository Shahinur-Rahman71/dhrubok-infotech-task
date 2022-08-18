import React from "react";

import { NavSidebar } from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";

export const DashboardLayout = ({ children }) => {
  return (
    <BodyWrapper>
      <div className="flex h-screen bg-gray-200">
        <NavSidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header Part */}
          <div style={{height: '90px',backgroundColor: 'gray',fontWeight: 'bold',fontFamily: 'sans-serif',fontStyle: 'italic'}}>
            <div style={{padding: '10px',color: '#fff'}}>
              <p>Name: Shahinur Rahman Shanto</p>
              <p>Permanent Address: MeherChandi, Rajshahi.</p>
              <p>Phone: 01720464404</p>
            </div>
          </div>
          <main className="content" style={{overflow: 'scroll'}}>
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
