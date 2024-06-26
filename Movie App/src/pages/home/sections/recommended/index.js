import React from "react";

import styles from "./recommended.module.scss";
import NewRelease from "../new-releases";

function Recommended() {
  return (
    <section>
      <NewRelease title ='Recommended'
                 category1 = 'Movies'
                 category2 = 'Series'
                 category3 = 'Animation'
                 option = 'View all'
      />

        <NewRelease/>
    </section>
  );
}

export default Recommended;
