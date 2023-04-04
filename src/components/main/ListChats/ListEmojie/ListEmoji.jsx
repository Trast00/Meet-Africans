import React from 'react'
import { Twemoji } from 'react-emoji-render';
import styles from './ListEmoji.module.css';

/* TODO:
- style emojie
- Add emojie animation
- Add emojie menu open/close animation
- reference Twemoji
*/

const ListEmoji = () => {
  const smileysAndEmotions = [":)", ":-)", ":D", ":P", ";)", ":*", "<3", ":O", ":|", ":(", ":'(", ":@", ":$", ":/", ":sick:", ":woozy_face:", ":exploding_head:", ":smiling_face_with_3_hearts:", ":face_with_tears_of_joy:", ":rolling_on_the_floor_laughing:", ":smiling_face_with_sunglasses:", ":smiling_face_with_smiling_eyes:", ":smiling_face_with_heart-eyes:", ":face_blowing_a_kiss:", ":kissing_face:", ":kissing_face_with_closed_eyes:", ":kissing_face_with_smiling_eyes:", ":smiling_face_with_halo:", ":smiling_face_with_horns:", ":angry_face:", ":pouting_face:", ":face_with_raised_eyebrow:", ":face_with_monocle:", ":thinking_face:", ":zipper-mouth_face:", ":nauseated_face:", ":face_with_thermometer:", ":face_with_head-bandage:", ":face_with_rolling_eyes:", ":face_with_hand_over_mouth:", ":face_savoring_food:", ":face_with_tongue:"];
  const peopleAndBody = [
    ":baby:", ":boy:", ":girl:", ":man:", ":woman:", ":older_man:",
    ":older_woman:", ":cop:", ":construction_worker:", ":guardsman:",
    ":detective:", ":woman_detective:", ":princess:", ":bride_with_veil:",
    ":prince:", ":man_in_tuxedo:", ":angel:", ":santa:", ":mrs_claus:",
    ":mage:", ":woman_mage:", ":man_mage:", ":elf:", ":woman_elf:"
  ];
  const animalsAndNature = [
    ":dog:", ":cat:", ":mouse:", ":hamster:", ":rabbit:", ":fox_face:",
    ":bear:", ":panda_face:", ":koala:", ":tiger:", ":lion_face:",
    ":cow:", ":pig:", ":frog:", ":monkey_face:", ":chicken:", ":penguin:",
    ":bird:", ":baby_chick:", ":hatching_chick:", ":duck:", ":owl:",
    ":horse:", ":unicorn:", ":turtle:"
  ];
  return (
    <div className={styles.container}>
      <p className={styles.category}>List emojies:</p>
      <ul className={styles.emojis}>
        {smileysAndEmotions.map((emoji, index) => (
          <li key={index}><Twemoji text={emoji} className={styles.emoji} /></li> 
        ))}
      </ul>
    </div>
  )
}

export default ListEmoji