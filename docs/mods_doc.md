# Modding

## Prerequisites

### Things that you absolutely need to have before you begin modding
- Basic knowledge file structures and how to navigate through menus 
- A text editor of some kind 
- An image editor (Windows should come pre-packaged with an image editor)
- Shotgun King version 1.3 or above 
- The directory in which your [Shotgun king] exe is stored 

### Some things that are preferred to have 
- Visual studio code 
- Access to version 1.3 (currently only available on itch)
- Intermediate coding knowledge, specifically lua

### Some things to note before modding 
- The game is very easy to break and is prone to crashing
- Never change the names of any of the files in the mod folder *(pending on the new update)* 
- Crash logs rarely provide you with help you can understand. if you encounter any problems that aren't explained in the documentation ask the PUNCAKE discord for help and most people will help, if you can’t find a reliable answer then contact me on discord at “Spooky#9159” 

### How to install mods 
- Go into your SK directory and create a folder called mods  
- Get the [Base Mod.zip](https://github.com/microbullet/microbullet.github.io/files/9674152/Mod.Base.zip) file.
- Unzip the file
- Put the Base mod folder into the mods folder  
- If your file structure looks like “mods > base mod > files” then you are good to go 

## Simple modding 

### Texture modding 

Texture modding is the simplest type of modding as it requires no coding experience and works almost every time (golden gun incident). Texture modding just requires that you edit the image with the texture you are looking for 

In the sample mod folder, there are 4 images that can be edited, they are 
- The intro where the king is holding his shotgun 
- The sprite sheet for all the in-game unit sprites 
- The card sprite sheet that contains all the cards and some spares 
- The Image with all the cutscenes on it 

When texture modding here’s what to watch out for 
- You cannot extend the images, or it breaks the textures (for now (we hope)) 
- The game is limited to 5 colors and any other color will appear transparent, the 5 colors are:

![colors](https://user-images.githubusercontent.com/73013941/168457764-4457721d-0dd4-4752-b0ea-7b7b53eed9f6.png)

*(Image credit: Tye#3868)*

### Text modding 

Text modding is changing what the text boxes say in the menus and in game, text modding can be used for either changing certain names of things in game or even adding in new languages to the game, it’s as simple as changing one of the id’s  

Format:  

Id of item::what is displayed 
E.g. 
play::begin  

Text modding can be done with a “<language here>.txt” file and including it in either the mod folder or in the dedicated “lang” folder  

##  Intermediate modding

This section will (try) to FULLY cover the script.lua file and stuff you can do with it

### Syntax used in this section
```
<int>                               = a float 

<bool>                              = either 1 or 0 meaning true or false 

<identifiers>                       = interchangeable for any of the identifiers 

<variable>                          = one of the changeable values of the king such as firing arc 

<function>                          = <identifier>_<variable>=<int>, or does an action with a given input 
```
 
### `<identifiers>`: 
```
pawn_    or 0                       = Used to identify the pawn in the script 

knight_  or 1                       = Used to identify the knight in the script 

bishop_  or 2                       = Used to identify the bishop in the script 

rook_    or 3                       = Used to identify the castle in the script 

queen_   or 4                       = Used to identify the queen in the script 

king_    or 5                       = Used to identify the king in the script 

boss_    or 6                       = Used to identify the king boss in the script 

all_     or 7                       = Used to identify all pieces in the script 

leader_  or 8                       = Used to identify king or bishop in the script depending on theocracy  
```
 

### Card specific functions 
```
need=<int> or need={<int>,<int>}    = card requires specific pieces to appear 

need_<special>                      = card requires a specfic special to appear 

need_<variable>=<int>               = requires <variable> to equal <int> to appear 

need_<identifier>_<variable>=<int>  = requires the <identifier>’s <variable> to equal <int> to appear 
```

### Card specific variables 
```
pwe=<int>                           = determines how rare the card is, set to 0 and it won't appear 

gid=<int>                           = determines what number card image it is on the card sheet 

n=<int>                             = determines the max of this card you can have 

delay=<int>                         = waits for <int> turns to enable things before it 
 
period=<int>                        = do the [effects] every <int> turns (only works with gain)
```

### Non-specific functions 
```
gain=<int> or gain={<int>, <int>}   = adds specific units to the white army

sac=<int> or sac={<int>,<int>}      = removes specific units 
```

### Non-specific variables 

Booleans: 
```
grab=<bool>                         = decides whether you can pick up a unit and throw it 
 
crown=<bool>                        = decides whether you have the effect of sacred crown or not 

presence=<bool>                     = determines whether you have august Presence enabled 

hop=<int>                           = if <int> > 0 then determines the damage of taunting hop  

heir=<bool>                         = determines whether a secret heir is picked every round 

pikemen=<bool>                      = determines whether you have pikemen enabled 

Assault=<bool>                      = determines whether assault is active or not 

theocracy=<bool>                    = determines whether theocracy is enabled 

militia=<bool>                      = determines whether militia is active.
 
mist=<bool>                         = determines whether this card saves you from death or not 
 
steed=<bool>                        = determines how many extra spaces you can move per knight soul
```
  
### Variables: 
```
ammo_max=<int>                      = adds an <int> of ammos to the ammo reserves 

chamber_max=<int>                   = adds <int> to the number of shots you can fire before reloading 

alarm=<int>                         = reduces the time it takes for backs to arrive by <int> turns

knockback=<int>                     = you have an <int>% chance to knock a piece back 

firerange=<int>                     = increases fire range by <int> 

ammo_regen=<int>                    = increases the ammo you get from moving by <int> 

spread=<int>                        = increases the firing arc by <int> 

special=” <special>”                = gives the player the right click ability <special> 

soul_slot=<+int>                    = increases the king’s soul slots by <+int> 

soul_sink=<-Int>                    = decreases the king’s soul slots by <-int> 

firepower=<int>                     = gain <int> firepower  

pierce=<int>                        = gain <int> pierce
 
hop=<int>                           = gain <int> taunting hop damage 
 
xmax=<int>                          = determines the length of the board
 
ymax=<int>                          = determines the height of the board

wand={<int>}                        = gain <int> wand, explained further 

bad_shells=<int>                    = <int> of your shots will have double the potential spread 

moat=<int>                          = if <int> > 0 then determines what row the moat is on 

absolution=<int>                    = gain <int> firepower for every empty soul slot  

flip_on=”contact” o r”inner”        = determines whether the card flips for specific conditions 
```
 

### `<Identifier>` variables 
```
<identifier>_castle=<bool>          = determines whether castling is enabled for <identifier> 

<identifier>_cage=<int>             = limits the <identifier> to <int> spaces of movement 

<identifier>_tempo=<int>            = increases the time between all <identifier>s moves 

<identifier>_flying=<bool>          = determines whether <identifier> can ignore obstacles 

<identifier>_orth=<bool>            = determines whether <identifier>s can move like queens 

<identifier>_joust=<bool>           = determines whether you get an extra turn for killing an <identifier>

<identifier>_poison=<int>           = applies poison to all <identifier>’s for <int> turns 

<identifier>_shell=<int>            = gain <int> ammo when you kill a <identifier>	 

<identifier>_hp=<int>               = changes the hp of every <identifier> by <int> 
 
<identifier>_iron=<bool>            = decides whether or not the <identifier> is invincible.
 
<identifier>_bodyguard=<bool>       = decides whether <identifier> needs to be killed before the king can die
 
<identifier>_shield=<bool>          = determines whether <identifier>s shield is active or not 
```
 
### Card syntax 

`{[gid], [id], [n], [pwe], [effects]},` 

## Wand section
### Prerequisites
Most of the wands are hardcoded in their function and currently there is no way to modify what the want will do, however some of the wands have a variable that can be changed in order to alter its function slightly, an example of this is the wand of wrath which does a default of 8 damage to random enemies, the 8 in this example can be changed to whatever suits the mod.
 
### Syntax
In the sript.lua the syntax for denoting a wand is

`wand={<int>, <int/variable>},`
 
An `<int/variable>` isn't used for 2 wands (those being gust and frenzy), however the {} is still required.
 
### In game
In shotgun king there are 5 wands, these wands are unfortunately hardcoded to what the numbers inputted to them will alter however the numbers on 3 of the wands can be altered, these wands nad what the following input changes are:
 - Wrath, following `<input>` provides it's source of damage number, can be any defined variable above 1.
 - Downpour, the `<int>` determines the total damage it deals
 - Wings, the `<input>` determines how manys spaces you can move using the wand

### Sprites
The sprites that the wands take in the top right are determined by their number (0 being the first and 4 being the last), the sprites can be found on the gfx.png sheet. 
 
### Modifications 
Trying to modify the wand number to outside the range of 0-4 the the sprite will show up but it will softlock the game. (citation needed)
 
## Advanced Modding 
If, at this point something you want to do still isn't possible than the further stuff should answer your questions, be warned though, it is much more difficult than the previous sections
 
### Modes:
 
#### Important variables:

##### Ban list
 
The `ban={"card names"}` is a very useful feature for mods as it cuts down on the bloat of massive exclusion lists in the script.lua function
 
Syntax:
```
ban={
 "card_name_1",
 "card_name_2",
 "card_name_3"
}
```
    
#### Setup
 
The `setup={"<var>"}` variable is currently only used to change the max number of cards of each type you can hold
 
Syntax:
 
```
setup={
	slots_max={10,10},
}
```
 
#### Base 
The base variable functions roughly the same as the old HERO_INIT variable in the script.lua file, except it applies to a mode

Syntax:

```
base={
	condition_1=0, condition_2=1,
	variable_1="x", variable_2="y"
}
```

## Common crash reasons 
- Not having correct syntax, this includes things like commas or equal signs. 
- Having a card mentioned in the exclusion area that doesn’t exist 
- Having the pwe value too high (like a billion high) 
- Not having a mode or card mentioned in the english.txt file