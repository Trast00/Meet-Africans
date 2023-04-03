import React from 'react'
import Emoji from 'react-emoji-render';
import { Twemoji } from 'react-emoji-render';

const ListEmoji = () => {
  const smileysAndEmotions = [":)", ":-)", ":D", ":P", ";)", ":*", "<3", ":O", ":|", ":(", ":'(", ":@", ":#", ":$", ":&", ":X", ":S", ":/", ":\\", ":sick:", ":woozy_face:", ":exploding_head:", ":crazy_face:", ":smiling_face_with_3_hearts:"];
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
    <div className='max-width'>
      <p>List emojies:</p>
      <ul className='list-emojies'>
        {smileysAndEmotions.map(emoji => (
          <li><Twemoji text={emoji}/></li> 
        ))}
      </ul>
    </div>
  )
}

export default ListEmoji