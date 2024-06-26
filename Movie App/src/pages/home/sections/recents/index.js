import React from "react";
import { ArrowRight } from "lucide-react";
import RecentlyUpdatedData from "../../../../data/RecentlyUpdatedData";
import styles from "./recents.module.scss";

function RecentlyUpdated() {
  return (
    <section className={styles.recentlyUpdated}>
      <div className={styles.recentbody}>
        <h2>Recently Updated</h2>
        
        <div className={styles.items}>
          {RecentlyUpdatedData.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.title} />
              <div className={styles.details}>
                <h3>{item.title}</h3>
                <p>{item.episodeDetail}</p>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
          <div className={styles.arrow}>
            <ArrowRight size={100} color="#000000" strokeWidth={1.7} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentlyUpdated;
