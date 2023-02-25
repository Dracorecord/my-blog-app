import Overview from "../Images/Capture.JPG";
import Origin from "../Images/Origin.JPG"
import Tatoo from "../Images/Tattoo.JPG"

function About() {
    return(
       <ul class="list-group">

    <br></br>
    <br></br>

  <li class="list-group-item active" aria-current="true">Overview
  <br></br>
  <img src={Overview}  alt="..."/>
  
  </li>
  <li class="list-group-item">Mobile Legends: Bang Bang is a mobile multiplayer online battle arena (MOBA) game developed and published by Moonton, a subsidiary of ByteDance. Released in 2016, the game grew in popularity worldwide, most prominently in Southeast Asia, and has since crossed 1 billion downloads, with peak monthly players of 100 million.In 2021, Mobile Legends: Bang Bang achieved an all-time gross of US$1 billion with 44 percent of its revenue emanating from outside Asia, making it the top mobile game of its genre with the most global appeal.

At its core, the game pits 2 teams of 5 against each other in real time with at least 10-second matchmaking and 10-minute matches. Featuring traditional battle arena gameplay, players must fight over three lanes to take the enemy's tower and defend their own. Like classic MOBAs, there is no hero training to level up or pay to play angle—winners and losers are decided based on skill, ability, and strategy.</li>
  
    <br></br>
    <br></br>

  <li class="list-group-item active" aria-current="true">Game Play
  <br></br>
  <img src={Origin}  alt="..."/>
  </li>
  <li class="list-group-item">Mobile Legends: Bang Bang is a multiplayer online battle arena (MOBA) game designed for mobile phones. The game is free-to-play and is only monetized through in-game purchases like characters and skins. Each player can control a selectable character, called a Hero, with unique abilities and traits. There are six roles that define the main purpose of heroes: Tank, Marksman, Assassin, Fighter, Mage, and Support. These roles determine the responsibilities of players for their respective teams. Players can also set specific builds for heroes which include in-game items and emblems.</li>

    <br></br>
    <br></br>

  
  <li class="list-group-item active" aria-current="true">Development
  <br></br>
  </li>
  <li class="list-group-item">After Moonton's staff of 20 finished developing its first game called Magic Rush: Heroes, released in 2015 to commercial success, they proceeded with developing the company's next project, a mobile multiplayer online battle arena (MOBA) game later titled Mobile Legends. The staff's experience with engineering Magic Rush: Heroes for a global market, such as customizing its features for the differing cultures and state of telecommunications of various countries, became beneficial for them to effectively design Mobile Legends as an appealing game for global players.</li>

    <br></br>
    <br></br>

<li class="list-group-item active" aria-current="true">Characters and lore
<br></br>
<img src={Tatoo}  alt="..."/>
</li>
  <li class="list-group-item">Mobile Legends: Bang Bang initially had 10 selectable characters, referred to as Heroes, upon its release in 2016. It later grew to 70 by November 2018, and as of December 2021, 112 heroes are in the live server. The fictional setting where majority of the heroes reside and stories take place is called the Land of Dawn. It is a world divided in seven distinct regions where each location comprises its own historical events, fables, battles, factions, and heroes of different races; some of which are related and/or have intertwining lives. Moonton uses this setting to introduce new heroes and create series of stories.</li>

    <br></br>
    <br></br>
</ul>




    )
}

export default About;