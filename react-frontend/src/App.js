import React from "react";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export default function App() {
  return (
    <>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          // maybe push to the route
        }}
        items={[
          {
            title: "Dashboard",
            itemId: "/dashboard",
            // elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Management",
            itemId: "/management",
            // elemBefore: () => <Icon name="users" />,
            subNav: [
              {
                title: "Projects",
                itemId: "/management/projects",
              },
              {
                title: "Members",
                itemId: "/management/members",
              },
            ],
          },
          {
            title: "Another Item",
            itemId: "/another",
            subNav: [
              {
                title: "Teams",
                itemId: "/management/teams",
              },
            ],
          },
        ]}
      />
    </>
  );
}
