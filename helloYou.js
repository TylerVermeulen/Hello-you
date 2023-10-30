var readlineSync = require('readline-sync');

function start(){
    console.log("")
    console.log("Hello and Welcome to this interactive novel")
    console.log("")
    console.log("Before we start i have got a single rule for you")
    console.log("")
    console.log("Only react with the given numbers")
    console.log("")
    console.log("Understood?")
    console.log("")
    console.log("1 - Yes")
    gekozen = readlineSync.question('2 - No')
    if (gekozen == 1 ){
        intro() 
    } else if (gekozen == 2) {
        console.log("Okido see you later!")
    } else {
        console.log("Sadly that is not a proper answer")
        start()
    }
}

function intro(){
    console.log("")
    console.log("You wake up in an unknown location.")
    console.log("")
    console.log("You look around and see nothing familiar around you.")
    console.log("")
    console.log("The last thing you remember is: that you were walking through your home town (New York) and suddenly everything went black.")
    console.log("")
    console.log("You remember that your name is: Alex Northman.")
    console.log("")
    console.log("After you started walking down a pathway you saw up ahead, you encounter a unknown creature that is in the middle of the pathway… What do you do? ")
    console.log("")
    console.log("Do you want to try to talk with it. Yes or No?")
    console.log("")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze1() 
    } else if (gekozen == 2) {
        keuze11()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze1()
    }
}
function keuze1(){
    console.log("")
    console.log("You try to communicate with the creature after you walk closer you see that it is small at least smaller than a human.")
    console.log("")
    console.log("It looks like nothing you have ever seen before, or maybe a little bit like a dwarf you have read about in books.")
    console.log("")
    console.log("When you are a two meters away from the creature you say Hi the creature turn around")
    console.log("")
    console.log("and you see its face it is covered in food it looks like he was eating tomato’s and some other vegetables.")
    console.log("")
    console.log("The creature looks at you with a terrified face and goes: wh-what are you?")
    console.log("")
    console.log("I have never seen such a species before.")
    console.log("")
    console.log("You tell the creature a short story about how you got to the place after you finish your story you ask the creature if it had a name and were you are.")
    console.log("")
    console.log("The creature responds with: m-my name is Jennifer and you are in the land of the lost it is a world beneath the surface of the earth.")
    console.log("")
    console.log("You were shocked to find out that you are inside the earth… after a little while you ask if Jennifer if she has a place to live.")
    console.log("")
    console.log("She responds with yes I do! It is not to far away from here, would you like to come over to maybe figure out how to get back up to the surface…")
    console.log("")
    console.log("Are you going with Jennifer to her house Yes or No?")
    console.log("")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze5() 
    } else if (gekozen == 2) {
        keuze2()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze1()
    }
}

function keuze2(){
    console.log("")
    console.log("After rejecting Jennifer’s offer you ask if there is anything dangerous in this world?")
    console.log("")
    console.log("Jennifer responds with a nervous reaction: Why do you think this is the most peaceful place to ever live!")
    console.log("")
    console.log("I never want to leave from this place.")
    console.log("")
    console.log("You doubt Jennifer for a split second but you don’t think to much of it.")
    console.log("")
    console.log("You ask if Jennifer knows a good place to set up a camp and she responds with telling you to go to the west because to the east there are a lot of mountains to climb and that is not useful while travelling.")
    console.log("")
    console.log("Do you go west or east?")
    console.log("")
    console.log("1 - West")
    gekozen = readlineSync.question('2 - East')
    if (gekozen == 1 ){
        keuze6() 
    } else if (gekozen == 2){
        keuze3()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze2()
    }
}

function keuze3(){
    console.log("")
    console.log("You decide to go east to get to a higher point for a better view of the lands.")
    console.log("")
    console.log("After a hike for about twenty minutes you see the cliff edge of the mountain. ")
    console.log("")
    gekozen = readlineSync.question('1 = Continue')
    if (gekozen == 1 ){
        keuze4() 
    } else {
        console.log("Sadly that is not a proper answer")
        keuze3()
    }
}
function keuze4(){
    console.log("")
    console.log("After a little bit of thinking you decided to go anyways.")
    console.log("")
    console.log("You climb and climb but your feet slips on a rock and you almost fall, at this point your twenty to twenty-five meters up the cliff… ")
    console.log("")
    console.log("After more climbing you almost see the top!")
    console.log("")
    console.log("But your exhausted from climbing but you don’t give up and see a little platform to the right of you.")
    console.log("")
    console.log("You decided to go to the platform to get a rest.")
    console.log("")
    console.log("When you reach the small platform you sit on it but it starts crumbling and then the platform detaches form the cliff and you start falling to the ground.")
    console.log("")
    console.log("After a few seconds you fall face first to the ground and die.")
    console.log("")
    console.log("You died want to start over?")
    console.log("")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        start() 
    } else if (gekozen == 2) {
        console.log("Okido see you later")
    } else {
        console.log("Sadly that is not a proper answer")
        keuze4()
    }
}
function keuze5(){
    console.log("")
    console.log("You decided to join Jennifer on her business and then go visit her house.")
    console.log("")
    console.log("After a little while of walking you see a small house build in to a weird looking tree.")
    console.log("")
    console.log("You enter the small house while almost bumping your head in the entrance.")
    console.log("")
    console.log("Jennifer says: Make yourself at home.")
    console.log("")
    console.log("I don’t get visitors very often so I hope you don’t mind the mess.")
    console.log("")
    console.log("You don’t mind because your apartment has always been such a mess, you notice something in the corner of the room…")
    console.log("")
    console.log("It look like some bones from a creature, after inspecting the bones a little bit more you see that they are human bones!")
    console.log("")
    console.log("You were surprised and started to doubt what Jennifer’s goal is with you.")
    console.log("")
    console.log("You want to leave as soon as possible, so you ask Jennifer where is a good place to setup a base camp.")
    console.log("")
    console.log("Jennifer knows a good place to set up a camp and she responds with telling you to go to the west because to the east there are a lot of mountains to climb and that is not useful while travelling.")
    console.log("")
    console.log("Do you go west or east?")
    console.log("")
    console.log("1 = West")
    gekozen = readlineSync.question('2 = East')
    if (gekozen == 1 ){
        keuze6() 
    } else if (gekozen == 2) {
        keuze3()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze5()
    }
}
function keuze6(){
    console.log("")
    console.log("You decided to go east to setup a camp and also so you can explore more of the lands without having to build a camp afterwards.")
    console.log("")
    console.log("After ten minutes of walking you spot a open spot in the woods but it is still well hidden.")
    console.log("")
    console.log("Do you make your camp in the hidden spot Yes or No?")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze9() 
    } else if (gekozen == 2) {
        keuze7()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze6()
    }
}
function keuze7(){
    console.log("")
    console.log("You decided to walk further down the path to maybe find a better spot. \n \nAfter even more walking you enter a open field. \n \nYou make your small camp and you decide to go find some food, \n \nyou find some weird looking berry’s but you choose to eat because you are very hungry and thirsty. \n \nAfter you found a river and drank something you feel a lot better and you head back to the camp. \n \nYou come back to your camp and you think what you should do next, are you going to stay up for longer or are you going to sleep. ")
    console.log("")
    console.log("Do you go to bed?")
    console.log("")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze8() 
    } else if (gekozen == 2) {
        keuze9()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze7()
    }
}
function keuze8(){
    console.log("You go to sleep. \n \nAfter what you think are a few hours you hear some rumbling in the bushes. \n \nYou get out of your makeshift hut and look around, you don’t see anything at first but you see a tiny hat pointing above the bushes. \n \nDo you shout at the thing in the bushes or do you hide somewhere else. \n \nDo you shout (Yes) or hide (no)? ")
    console.log("1 = Shout")
    gekozen = readlineSync.question('2 = Hide')
    if (gekozen == 1 ){
        good1() 
    } else if (gekozen == 2) {
        bad1()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze8()
    }
}
function keuze9(){
    console.log("Your not sleepy enough to sleep so you stay up for a little longer. \n \nWhen you are still awake you make a sharp stick, because you had nothing else to do. \n \nYou start to get sleepy and fall asleep in your hut. \n \nSometime later you wake up because you thought you heard something and you see a figurine standing outside your hut! \n \nDo you call out to the figurine or fight it with your stick? \n \nDo you fight or call out to? \n \n ")
    console.log("1 = Fight")
    gekozen = readlineSync.question('2 = Call out')
    if (gekozen == 1 ){
        neutr1() 
    } else if (gekozen == 2) {
        good1()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze9()
    }
}
function keuze10(){
    console.log("You chose to avoid the creature because it might be dangerous, \n \nyou take a turn to get away from the creature and after ten minutes of walking you end up on top of a hill. \n \nThe view is much better on top of the hill and you see a weird white shaft about 10 kilometers to the north from your position and you see a big building 10 kilometers to the south of your position. \n \nDo you go north or south?\n \n")
    console.log("1 = North")
    gekozen = readlineSync.question('2 = South')
    if (gekozen == 1 ){
        keuze11() 
    } else if (gekozen == 2) {
        keuze19()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze10()
    }
}
function keuze11(){
    console.log("you chose to go to the with shaft because it looks like it is going to the surface. \n \nYou start your long hike after what feels like two/three hours later are getting very sleepy from al the walking you have done. \n \nYou see a light source in the distance. \n \nDo you go towards the light source Yes or No?\n \n ")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze12() 
    } else if (gekozen == 2) {
        keuze131()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze11()
    }
}
function keuze12(){
    console.log("You are curious about the light source so you go towards it. \n \nSome time passes and you see the light moving in a weird way… \n \nDo you continue to follow the light Yes or No?\n \n ")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        neutr2() 
    } else if (gekozen == 2) {
        keuze132()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze12()
    }
}
function keuze131(){
    console.log("You don’t want to find out who is committing that light source so you walk around the light source. \n \nAfter some more walking you find a river with flowing water so you drink something a go take a nap. \n \nYou fall asleep. \n \nAfter a nice nap you find yourself in a thick jungle now that you can see around you. \n \nThe river is flowing toward the white shaft you see in the distance. \n \nDo you continue to walk along the river bank (Yes) or not (No)?\n \n")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze14() 
    } else if (gekozen == 2) {
        keuze16()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze131()
    }
}
function keuze132(){
    console.log("You do not trust the light source anymore so you head around the light source. \n \nYou walk some more and find a nice place to take a rest. \n \nYou go to sleep. \n \nAfter a nice nap you find yourself in a thick jungle now that you can see around you. \n \nYou hear some flowing water and you walk towards the sound of the water. \n \nYou find a river that is flowing towards the white shaft. \n \nDo you continue to walk along the river bank (Yes) or not (No)?\n \n")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze14() 
    } else if (gekozen == 2) {
        keuze16()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze132()
    }
}
function keuze14(){
    console.log("You go walk along the riverbank because it leads straight to the white shaft after a little while of walking you reach a lake! \n \nYou observe the lake to see if there is a way around the lake, but you see a small boat. \n \nDo you take the boat (Yes) or walk around the lake (No)?\n \n")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze15() 
    } else if (gekozen == 2) {
        keuze16()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze14()
    }
}
function keuze15(){
    console.log("You take the boat because that is faster in every way. \n \nYou step into the boat it is a little bit small but you can make do, you see two paddles. \n \nYou grab the paddles and start rowing to get to the other side. \n \nWhen you reach the middle of the lake you see a shadow in the water. \n \nSuddenly a black tenacle comes out of the water and grabs you! \n \nThe tentacle drags you underwater and you try to break free but you can’t. \n \nAfter a few minutes everything goes dark… \n \nYou died want to start over? \n \n")
    console.log("")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        intro() 
    } else if (gekozen == 2) {
        console.log("Thanks for playing and ill see you later :)")
    } else {
        console.log("Sadly that is not a proper answer")
        keuze15()
    }
}
function keuze16(){
    console.log("You go away from the river because you think their could be dangerous creatures near the riverbank, \n \nbut you keep close to river it is your compass to the white shaft thing. \n \nAfter a little while of walking you see the river expanding and you see a small lake instead of the river you continue walking along side the river but something catches your eyes. \n \nA beautiful flower growing next to the lake. \n \nDo you get the flower Yes or No?\n \n ")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze18() 
    } else if (gekozen == 2) {
        keuze17()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze16()
    }
}
function keuze17(){
    console.log("You don’t get the flower because you think to yourself the their still could be danger in the water. \n \nYou continue to walk to the white shaft. \n \nSome time later you reach the bottom of the white tower. \n \nYou see two men with weapons and two woman with white lab coats on. \n \n")
    gekozen = readlineSync.question('1 = Call out to them')
    if (gekozen == 1 ){
        good2() 
    } else {
        console.log("Sadly that is not a proper answer")
        keuze17()
    }
}
function keuze18(){
    console.log("You are so hypnotized by the flower before you know it you are next to it. \n \nYou want to grab the flower, but as soon as you come in contact with the flower you fall unconscious. \n \nAfter some time you wakeup in a fully white room with some glass to the left of it and you see two people standing there.  \n \nWe don’t want to hurt you, we just want to ask some questions the first man said.\n \n")
    gekozen = readlineSync.question('1 = Continue')
    if (gekozen == 1 ){
        neutr2() 
    } else {
        console.log("Sadly that is not a proper answer")
        keuze18()
    }
}
function keuze19(){
    console.log("You chose to go south because the building looks more interesting than the white shaft. \n \nAfter a little while of walking you see two deformed creatures. \n \nYou try to avoid them but they spot you somehow? \n \nThey shout HEY WHO ARE YOU. Do you respond Yes or No?\n \n")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze211() 
    } else if (gekozen == 2) {
        keuze20()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze19()
    }
}
function keuze20(){
    console.log("You take a run because your scared to talk to the creatures but they start following you and screaming. \n \nHEY WE JUST WANT TO TALK. \n \nAfter a little while of running away from them you hide behind some bushes. \n \nThey are still calling out to you, WE DON’T WANT TO HARM YOU WE JUST WANT TO TALK! \n \nDo you risk talking to them or not?\n \n")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze212() 
    } else if (gekozen == 2) {
        keuze5()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze20()
    }
}
function keuze211(){
    console.log("You take up all your courage to talk to the creatures. \n \nYou walk up to them and say: Hey who are you? \n \nThe creatures respond with: I am Derric and my friend here is called Hank. \n \nYou ask them if they know a way to that big building. \n \nDerric responds: Just keep walking that way and you will reach it some time soon! \n \nYou thank them and continue your journey towards the big building\n \n. You continue to walk towards the building after a short while you see a giant wall with a gate to your left. \n \nDo you climb the wall (yes) or walk towards the gate (no)?\n \n")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze8() 
    } else if (gekozen == 2) {
        keuze5()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze211()
    }
}
function keuze212(){
    console.log("You take up all your courage to talk to the creatures. \n \nYou walk up to them and say: Hey who are you? \n \nThe creatures respond with: are why are you running away from us? \n \nOh our names are Derric and Hank. \n \nYou respond with: I was scared because I don’t know who I can trust down here, but do you know a way to that big building? \n \nDerric responds: Just keep walking towards it and you will be there in no time. \n \nYou thank them and depart ways with Derrick and Hank. \n \nYou continue to walk towards the building after a short while you see a giant wall with a gate to your left. \n \nDo you climb the wall (yes) or walk towards the gate (no)?\n \n")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        keuze8() 
    } else if (gekozen == 2) {
        keuze5()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze212()
    }
}
function keuze22(){
    console.log("je bent bij keuze 22")
    console.log("1 = go to keuze 5")
    gekozen = readlineSync.question('2 = go to keuze 8')
    if (gekozen == 2 ){
        keuze8() 
    } else if (gekozen == 1) {
        keuze5()
    } else {
        console.log("Sadly that is not a proper answer")
        keuze22()
    }
}
function neutr1(){
    console.log("You decide to fight what is outside your tent and when you storm out with the stick in your hand you see two armored man with guns and a flashlight standing right in front of you. \n \n In the adrenaline that is flowing through you, you attack the man. \n \n Before you can even reach the man you are knocked out by the handle of the gun, \n \n when you wake up you see yourself lying in a lab.. \n \n ")
    console.log("")
    console.log("Go again?")
    console.log("")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        intro() 
    } else if (gekozen == 2) {
        console.log("Thanks for playing and ill see you later :)")
    } else {
        console.log("Sadly that is not a proper answer")
        neutr1()
    }
}
function neutr2(){
    console.log("You answer their questions and then they let you out of your cell to inspect you on diseases and bacteria that may be on you. \n \nThen they push you out of their building and you need to find your way back home by lifting for rides and stuff. ")
    console.log("")
    console.log("Go again?")
    console.log("")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        intro() 
    } else if (gekozen == 2) {
        console.log("Thanks for playing and ill see you later :)")
    } else {
        console.log("Sadly that is not a proper answer")
        neutr2()
    }
}
function bad1(){
    console.log("You sleep and sleep until you feel a itching pain in your back, you were bitten by Jennifer! \n \n You feel your head getting lighter and lighter, \n \n just then you see Jennifer walking up towards you… She ask you to die already she hasn’t had dinner in two weeks, \n \n you feel your body getting weaker and weaker until you die never to be seen again…\n \n ")
    console.log("")
    console.log("Go again?")
    console.log("")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        intro() 
    } else if (gekozen == 2) {
        console.log("Thanks for playing and ill see you later :)")
    } else {
        console.log("Sadly that is not a proper answer")
        bad1()
    }
}
function good1(){
    console.log("You call out to the thing outside your tent with hello and are you friendly. \n \nThe thing responds with: ‘Yes we are, are you weaponed come out with you hands in the air!’ \n \nYou doubt them for a second but you go outside anyways because maybe they can help you? \n \nYou get outside and you see two armored man with guns and a flashlight standing right in front of you. \n \nYou are so happy to see people after such a long time and ask them if they know a way out of this place, \n \nthe men know a way out so they bring you to a elevator that sends you in to a lab of some sorts where there are multiple scientist waiting for you to ask some questions. \n \nAfter a few days you are brought home and fall right asleep on the couch.\n \n")
    console.log("")
    console.log("Go again?")
    console.log("")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        intro() 
    } else if (gekozen == 2) {
        console.log("Thanks for playing and ill see you later :)")
    } else {
        console.log("Sadly that is not a proper answer")
        good1()
    }
}
function good2(){
    console.log("You call out to the people and walk out of the bushes. \n \nYou see the two woman getting scared of your voice and the two men point their gun towards you. \n \nYou walk closer and the four people are amazed because they have never seen another person down here except scientists and guards. \n \nThey take you back up to the surface and bring you back home! The end\n \n")
    console.log("Go again?")
    console.log("")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        intro() 
    } else if (gekozen == 2) {
        console.log("Thanks for playing and ill see you later :)")
    } else {
        console.log("Sadly that is not a proper answer")
        good2()
    }
}
function dead1(){
    console.log("You are to scared to talk to them so you slowly backup and try to not make a noise, but you don’t look behind you and you fall of a cliff. \n \nLuckily you can grab a rock to not fall to your death then you see the two creatures hanging over the cliff edge. \n \nAre you okay? \n \nOne asks before you could even respond to the creature, the stone snaps of the cliff and you came plummeting down to the ground below. \n \nYou died want to start over?\n \n")
    console.log("Go again?")
    console.log("")
    console.log("1 = Yes")
    gekozen = readlineSync.question('2 = No')
    if (gekozen == 1 ){
        intro() 
    } else if (gekozen == 2) {
        console.log("Thanks for playing and ill see you later :)")
    } else {
        console.log("Sadly that is not a proper answer")
        dead1()
    }
}
start()