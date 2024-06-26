import React from "react";
import { ArrowRight } from "lucide-react";
import NewReleaseData from "../../../../data/NewRelease";
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./releases.module.scss";

function NewRelease({ title,option, category1, category2, category3 }) {
  return (
    <section className={styles.newRelease}>
      <div className={styles.newReleaseContainer} id="newReleaseContainer">
        <div className={styles.newReleaseTitle}>
          <div className={styles.newReleaseTitleLeft}>
            {title && <h2>{title}</h2>}
            {category1 && <p style={{ backgroundColor: '#FF0000', fontWeight: 'bold',color:'#ffff' }}>{category1}</p>}
            {category2 && <p>{category2}</p>}
            {category3 && <p>{category3}</p>}
          </div>
          <div className={styles.newReleaseTitleRight}>
            {option && <h2 style={{ color: "#939393" }}>{option}</h2>}
            {option && <ArrowRight size={48} color="#939393" strokeWidth={1.7} />}
          </div>
        </div>

        <div className={styles.newReleaseContent} id="newReleaseContent">
          {NewReleaseData.map((item) => (
            <div className={styles.newReleaseContentItem} key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className={styles.newReleaseContentItemText}>
                <h3>{item.title}</h3>
                <div className={styles.newReleaseContentItemTextRight}>
                  <div className={styles.hd_tag}>
                    <p>HD</p>
                  </div>
                  <div className={styles.duration}>
                    <Icon icon={"ion:timer-outline"} />
                    <p>{item.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewRelease;
