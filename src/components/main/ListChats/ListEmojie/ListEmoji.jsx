import React from 'react'
import { Twemoji } from 'react-emoji-render';
import styles from './ListEmoji.module.css';

/* TODO:
- reference Twemoji
*/

const ListEmoji = (props) => {
  const {handleAddEmoji} = props

  const facesEmojies = [
    "😀", "😃", "😄", "😁", "😆", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😅",
    "😇", "😍", "🤩", "😘", "😗", "😚", "😋", "😛", "😜", "🤪", "😝", 
    "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", 
    "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", 
    "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐", 
    "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", 
    "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", 
    "😤", "😡", "🤬", "🤯", "😷", "🤕", "🥴", "🤢", "🤮", "🥵", "🥶", "😵"
  ];
  const peopleAndBody = [
  ":baby:", ":boy:", ":girl:", ":man:", ":woman:", ":older_man:",
  ":older_woman:", ":cop:", ":construction_worker:", ":guardsman:",
  ":detective:", ":woman_detective:", ":princess:", ":bride_with_veil:",
  ":prince:", ":man_in_tuxedo:", ":angel:", ":santa:", ":mrs_claus:",
  ":mage:", ":elf:", ":person_with_blond_hair:", ":woman_with_headscarf:", ":man_with_gua_pi_mao:",
  ":older_man:", ":older_woman:", ":man_with_chinese_cap:", ":woman_in_motorized_wheelchair:",
  ":man_in_motorized_wheelchair:", ":woman_in_manual_wheelchair:", ":man_in_manual_wheelchair:", 
  ":mermaid:", ":merman:", ":vampire:", ":zombie:"
  ];
  const animalsAndNature = [
    ":dog:", ":cat:", ":mouse:", ":hamster:", ":rabbit:", ":fox_face:",
    ":bear:", ":panda_face:", ":koala:", ":tiger:", ":lion_face:",
    ":cow:", ":pig:", ":frog:", ":monkey_face:", ":chicken:", ":penguin:",
    ":bird:", ":baby_chick:", ":hatching_chick:", ":duck:", ":owl:",
    ":horse:", ":unicorn:", ":turtle:", ":elephant:", ":rhinoceros:", ":hippopotamus:", ":giraffe:", ":zebra:",
    ":camel:", ":water_buffalo:", ":ox:", ":goat:", ":sheep:", ":ram:",
    ":deer:", ":chipmunk:", ":raccoon:", ":skunk:", ":badger:",
    ":bat:", ":spider:", ":scorpion:", ":snail:", ":butterfly:", ":bee:",
    ":ant:", ":lady_beetle:", ":fish:", ":tropical_fish:", ":blowfish:",
    ":shark:", ":whale:", ":dolphin:", ":crocodile:", ":snake:", ":lizard:"
  ];
  const foodAndParty = [
    "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏",
    "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥑", "🍆", "🥔", "🥕",
    "🌽", "🌶️", "🥒", "🥬", "🥦", "🧄", "🧅", "🍄", "🥜", "🌰",
    "🍞", "🥐", "🥖", "🥨", "🥯", "🥞", "🧇", "🧀", "🍖", "🍗",
    "🥩", "🥓", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙",
    "🍲", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🥮",
    "🍡", "🥟", "🥠", "🥡", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂",
    "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯", "🍼", "🥛",
    "🍺", "🍻", "🥂", "🍷", "🥃", "🍸", "🍹", "🧉", "🍾", "🥄",
    "🍴", "🥢", "🥤", "🥛"
  ];
  const partyEmojis = [
    ":confetti_ball:", ":balloon:", ":tada:", ":birthday:", ":gift:", ":cake:",
    ":partying_face:", ":fireworks:", ":sparkler:", ":clinking_glasses:",
    ":beers:", ":cocktail:", ":wine_glass:", ":tropical_drink:", ":champagne:",
    ":beer:", ":sake:", ":tea:", ":coffee:", ":cup_with_straw:", ":popcorn:"
  ];

  const categories = [facesEmojies, peopleAndBody, animalsAndNature, foodAndParty, partyEmojis]
  return (
    <div className={styles.container}>
      <p className={styles.category}>List emojies:</p>
      {categories.map(categori => (
        <ul className={styles.emojis}>
          {categori.map((emoji, index) => (
          <li key={index} ><Twemoji text={emoji} className={styles.emoji} onClick={e=> handleAddEmoji(e)} /></li> 
          ))}
        </ul>
      ))}

    </div>
  )
}

export default ListEmoji