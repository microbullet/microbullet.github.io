# Shotgun King Documentation
## Prerequisites 

### Things that you absolutely need to have before you begin modding Shotgun King: The Final Checkmate.  

- Basic knowledge file structures and how to navigate through menus 
- A text editor of some kind 
- An image editor, Windows should come pre-packaged with an image editor 
- Shotgun King version 1.24 or above 
- The directory in which your [Shotgun king] exe is stored 

### Some things that are preferred to have 
- Visual studio code 
- Access to version 1.244 
- Basic coding knowledge (Lua) 

### Some things to note before modding 
- The game is prone to crashing and not working properly 
- Never change the names of any of the files in the mod folder 
- Crash logs rarely provide you with help you can understand. if you encounter any problems that aren't explained in the documentation ask the PUNCAKE discord for help and most people will help, if you can’t find a reliable answer then contact me at “Spooky scary skeletone#6108” 

## How to install mods 
- Go into your SK directory and add a folder called mods  
- Get the [Base mod.zip](https://github.com/microbullet/microbullet.github.io/files/8694444/Base.mod.zip)
 folder 
- Put the Base mod folder into the mods folder  
- If your file structure looks like “mods > base mod > files” then you are good to go 

## Smple modding 

### Texture modding 

Texture modding is the simplest type of modding as it requires no coding experience and works almost every time. Texture modding just requires that you edit the image with the texture you are looking for 

In the sample mod folder, there are 4 images that can be edited, they are 
- The intro where the king is holding his shotgun 
- The sprite sheet for all the in-game unit sprites 
- The card sprite sheet that contains all the cards and some spares 
- The Image with all the cutscenes on it 

When texture modding here’s what to watch out for 
- You cannot extend the images, or it breaks the textures (for now (we hope)) 
- The game is limited to 5 colors and any other color will appear transparent, the 5 colors are 
- ![colors](https://user-images.githubusercontent.com/73013941/168457764-4457721d-0dd4-4752-b0ea-7b7b53eed9f6.png)

### Text modding 

Text modding is changing what the text boxes say in the menus and in game, text modding can be used for either changing certain names of things in game or even adding in new languages to the game, it’s as simple as changing one of the id’s  

Format:  

Id of item::what is displayed 
E.g. 
play::begin  

Text modding can be done with a “<language here>.txt” file and including it in either the mod folder or in the dedicated “lang” folder  

## Complex modding  

Now we’re in the juicy section, this section will (try to) FULLY break down the script.lua file and exactly what everything means 

### Syntax used in the documentation 
```
<Int> 	 		      = a float 

<bool> 		        = either 1 or 0 meaning true or false 

<identifiers>  		= interchangeable for any of the identifiers 

<variable> 		    = one of the changeable values of the king such as firing arc 

<function>		    = <identifier>_<variable>=<int>, or does an action with a given input 
```
 
### `<identifiers>`: 
```
pawn_ 	 or 0		  = Used to identify the pawn in the script 

knight_ or 1 		  = Used to identify the knight in the script 

bishop_ or2	  	  = Used to identify the bishop in the script 

rook_ or 3  		  = Used to identify the castle in the script 

queen_ or 4	   	  = Used to identify the queen in the script 

king_   	or 5	  = Used to identify the king in the script 

boss_   or 6		  = Used to identify the king boss in the script 

all_   or 7		    = Used to identify all pieces in the script 

leader_ or 8	 	  = Used to identify the piece you need to kill (usually king, changes based on floor number or theocracy)
```
 

### Card specific functions 
```
need=<int> or need={<int>,<int>}  	= card requires specific pieces to appear 

need_<special>=1				              = card requires a specfic special to appear 
 
need_soul=<int>				              = card requires at least <int> soul slots to appear

need_<variable>=<int> 			        = requires <variable> to equal <int> to appear 

need_<identifier>_<variable>=<int> 	= requires the <identifier>’s <variable> to equal <int> to appear 
```

### Card specific variables 
```
pwe=<int>	  = determines how rare the card is, set to 0 and it won't appear 

gid=<int>	  = determines what number card image it is on the card sheet 

n=<int>	    = determines the max of this card you can have 

delay=<int>	= waits for <int> turns to enable things before it 
 
period=<int> = do the [effects] every <int> turns
```

## Non-specific functions 
```
gain=<int> or gain={<int>, <int>} = gains specific units 

sac=<int> or sac={<int>,<int>}  	= removes specific units 
```

## Non-specific variables 

Booleans: 
```
grab=<bool>			            = decides whether you can pick up a unit and throw it 
 
crown=<bool>			      = decides whether you have the effect of sacred crown or not 

presence=<bool>		    = determines whether you have august Presence enabled 

hop=<bool> 			        = determines whether you have taunting hop enabled 

heir=<bool> 			      = determines whether a secret heir is picked every round 

pikemen=<bool>		      = determines whether you have pikemen enabled 

Assault=<bool>		      = determines whether assault is active or not 

theocracy=<bool>		    = determines whether theocracy is enabled 
```
  
## Variables: 
```
ammo_max=<int> 		          = adds an <int> of ammos to the ammo reserves 

chamber_max=<int> 		      = adds <int> to the number of shots you can fire before reloading 

alarm=<int>			            = reduces the time it takes for backs to arrive by <int> turns

knockback=<int>		          = you have an <int>% chance to knock a piece back 

firerange=<int>		          = increases fire range by <int> 

ammo_regen=<int> 		        = increases the ammo you get from moving by <int> 

spread=<int>			          = increases the firing arc by <int> 

special=”<special>”	      = gives the player the right click ability <special> 

soul_slot=<int> 		        = increases the king’s soul slots by <int> 

soul_sink=<Int> 		        = decreases the king’s soul slots by <int> 

firepower=<int> 		        = gain <int> firepower  

pierce=<int> 		 	          = gain <int> pierce 
 
steed=<int> 		      = determines how many extra turns you get for killing a knight

wand={<int>}			          = gain <int> wand, explained further 

bad_shells=<int>    	      = <int> of your shots will have double the potential spread 

moat=<int>			            = if <int> > 0 then determines what row the moat is on 

absolution=<int> 		        = gain <int> firepower for every empty soul slot  

mist=<int> 			            = get saved from death <int> times 

flip_on=”contact”or”inner” 	= determines whether the card flips for specific conditions 
```
 

## `<Identifier>` variables 
```
<identifier>_castle=<bool>	  = determines whether castling is enabled for <identifier> 

<identifier>_cage=<int>	      = limits the <identifier> to <int> spaces of movement 

<identifier>_tempo=<int>	    = increases the time between all <identifier>s moves (can be negative)

<identifier>_flying=<bool>	  = determines whether <identifier> can ignore obstacles 

<identifier>_orth=<bool>	    = determines whether <identifier>s can move (not capture) like rooks

<identifier>_joust=<bool> 	  = determines whether you get an extra turn for killing an <identifier>

<identifier>_poison=<int>	    = applies poison to all <identifier>’s for <int> turns 

<identifier>_shell=<int> 	    = gain <int> ammo when you kill a <identifier>	 

<identifier>_hp=<int>		      = changes the hp of every <identifier> by <int> 
 
<identifier>_iron=<bool>     = decides whether or not the <identifier> is invincible.
 
<identifier>_bodyguard=<bool> = decides whether <identifier> needs to be killed before the king can die
 
<identifier>_shield=<bool>		= determines whether <identifier>s shield is active or not 
```
 
## Card syntax 

`{[gid], [id], [n], [pwe], [effects]},` 

Careful! You will need to add the ID of each card to your <language>.txt file.
 
## Difficulties 

Difficulties are areas of play that determine how hard the game is.  

In game dev terms difficulties are just selectable options that alter non-specific variables for an entire run  

  
## Difficulty syntax
  
`{[number], [id], [effects]},`
  
## HERO_INIT (the base values) 
```
ammo_max=5, 

chamber_max=2, 

firepower=4, 

firerange=3, 

ammo_regen=1, 

spread=57, 

knockback=0, 

pierce=0, 

special="none", 

DEV=false -- enable to win floors instantly with space (testing purposes) 
```
 
## Common crash reasons 
- Not having correct syntax, this includes things like commas or equal signs. 
- Having a card mentioned in the exclusion area that doesn’t exist 
- Having the pwe value too high (like a billion high) 
- Not having a difficulty or card mentioned in the english.txt file   
