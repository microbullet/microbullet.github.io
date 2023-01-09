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

### Functions

#### _draw

Parameters:

Usage:

#### _flr

Parameters:

Usage:

#### _init

Parameters:

Usage:

#### _load

Parameters:

Usage:

#### _log

Parameters:

Usage:

#### _music

Parameters:

Usage:

#### _pal

Parameters:

Usage:

#### _sfx

Parameters:

Usage:

#### _update

Parameters:

Usage:

#### abort

Parameters:

Usage:

#### abort_brutal

Parameters:

Usage:

#### abs

Parameters:

Usage:

#### ach_event

Parameters:

Usage:

#### acos

Parameters:

Usage:

#### act_menu

Parameters:

Usage:

#### activate_scepter

Parameters:

Usage:

#### activate_soul

Parameters:

Usage:

#### add

Parameters:

Usage:

#### add_card

Parameters:

Usage:

#### add_child

Parameters:

Usage:

#### add_event

Parameters:

Usage:

#### add_indexes

Parameters:

Usage:

#### add_scepter

Parameters:

Usage:

#### add_soul

Parameters:

Usage:

#### add_soul_slot

Parameters:

Usage:

#### add_spawner

Parameters:

Usage:

#### addfont

Parameters:

Usage:

#### aft

Parameters:

Usage:

#### all

Parameters:

Usage:

#### all_bads

Parameters:

Usage:

#### apal

Parameters:

Usage:

#### apply_options

Parameters:

Usage:

#### arand

Parameters:

Usage:

#### asin

Parameters:

Usage:

#### ask_card

Parameters:

Usage:

#### ask_disrupt

Parameters:

Usage:

#### aspr

Parameters:

Usage:

#### assert

Parameters:

Usage:

#### asspr

Parameters:

Usage:

#### atan2

Parameters:

Usage:

#### band

Parameters:

Usage:

#### bank

Parameters:

Usage:

#### bget

Parameters:

Usage:

#### bind

Parameters:

Usage:

#### black_mist_check

Parameters:

Usage:

#### blade_hit

Parameters:

Usage:

#### bnksize

Parameters:

Usage:

#### bnot

Parameters:

Usage:

#### boost

Parameters:

Usage:

#### boot

Parameters:

Usage:

#### bor

Parameters:

Usage:

#### boss_turn

Parameters:

Usage:

#### bprint

Parameters:

Usage:

#### brd

Parameters:

Usage:

#### bres

Parameters:

Usage:

#### bres_2

Parameters:

Usage:

#### bright

Parameters:

Usage:

#### bset

Parameters:

Usage:

#### btn

Parameters:

Usage:

#### btnclr

Parameters:

Usage:

#### btnp

Parameters:

Usage:

#### btnr

Parameters:

Usage:

#### btnv

Parameters:

Usage:

#### build_stack

Parameters:

Usage:

#### bxor

Parameters:

Usage:

#### camera

Parameters:

Usage:

#### carry_nearby_pieces

Parameters:

Usage:

#### cd

Parameters:

Usage:

#### ceil

Parameters:

Usage:

#### changelog

Parameters:

Usage:

#### check_cards_auto_flip

Parameters:

Usage:

#### check_collections

Parameters:

Usage:

#### check_condition

Parameters:

Usage:

#### check_fatality

Parameters:

Usage:

#### check_folly_shields

Parameters:

Usage:

#### chk_achievement

Parameters:

Usage:

#### chkinfo

Parameters:

Usage:

#### chnlfx

Parameters:

Usage:

#### chnlprog

Parameters:

Usage:

#### chr

Parameters:

Usage:

#### chunk

Parameters:

Usage:

#### circ

Parameters:

Usage:

#### circfill

Parameters:

Usage:

#### clean_up

Parameters:

Usage:

#### clip

Parameters:

Usage:

#### clipboard

Parameters:

Usage:

#### clone

Parameters:

Usage:

#### close_menu

Parameters:

Usage:

#### cls

Parameters:

Usage:

#### color

Parameters:

Usage:

#### colorize_piece

Parameters:

Usage:

#### concat

Parameters:

Usage:

#### controls

Parameters:

Usage:

#### cos

Parameters:

Usage:

#### crop_to

Parameters:

Usage:

#### ctrlr

Parameters:

Usage:

#### cub

Parameters:

Usage:

#### custom_sort

Parameters:

Usage:

#### cyc

Parameters:

Usage:

#### dark_bishop_up

Parameters:

Usage:

#### decay_up

Parameters:

Usage:

#### defbtn

Parameters:

Usage:

#### del

Parameters:

Usage:

#### delbnk

Parameters:

Usage:

#### delchk

Parameters:

Usage:

#### delfnt

Parameters:

Usage:

#### deli

Parameters:

Usage:

#### delmus

Parameters:

Usage:

#### delsfx

Parameters:

Usage:

#### delsrf

Parameters:

Usage:

#### delta

Parameters:

Usage:

#### delwin

Parameters:

Usage:

#### desktop_path

Parameters:

Usage:

#### dirload

Parameters:

Usage:

#### discord

Parameters:

Usage:

#### disrupt

Parameters:

Usage:

#### dist

Parameters:

Usage:

#### dr_boss

Parameters:

Usage:

#### dr_credits

Parameters:

Usage:

#### dr_crosshair

Parameters:

Usage:

#### dr_dark_bishop

Parameters:

Usage:

#### dr_flip_card

Parameters:

Usage:

#### dr_piece

Parameters:

Usage:

#### draw_arms

Parameters:

Usage:

#### draw_game

Parameters:

Usage:

#### draw_icon

Parameters:

Usage:

#### dre

Parameters:

Usage:

#### dsq

Parameters:

Usage:

#### dt

Parameters:

Usage:

#### earn_extra_turn

Parameters:

Usage:

#### ease_atk

Parameters:

Usage:

#### ease_bounce_out

Parameters:

Usage:

#### ease_flat

Parameters:

Usage:

#### ease_in

Parameters:

Usage:

#### ease_in_back

Parameters:

Usage:

#### ease_in_out

Parameters:

Usage:

#### ease_out

Parameters:

Usage:

#### ease_out_back

Parameters:

Usage:

#### ease_out_in

Parameters:

Usage:

#### ease_uturn

Parameters:

Usage:

#### end_game

Parameters:

Usage:

#### end_level

Parameters:

Usage:

#### endgif

Parameters:

Usage:

#### error

Parameters:

Usage:

#### escape

Parameters:

Usage:

#### ev_backup

Parameters:

Usage:

#### ev_promote

Parameters:

Usage:

#### ev_raise_dead

Parameters:

Usage:

#### ev_rat_atk

Parameters:

Usage:

#### ev_reveal

Parameters:

Usage:

#### ev_side_spawn

Parameters:

Usage:

#### ev_spawn_item

Parameters:

Usage:

#### ev_surrender

Parameters:

Usage:

#### exe

Parameters:

Usage:

#### execute

Parameters:

Usage:

#### execution

Parameters:

Usage:

#### execution_boss

Parameters:

Usage:

#### execution_dark_bishop

Parameters:

Usage:

#### execution_lancers

Parameters:

Usage:

#### exhaust_card_with

Parameters:

Usage:

#### expbnk

Parameters:

Usage:

#### expfnt

Parameters:

Usage:

#### export

Parameters:

Usage:

#### export_icon_png

Parameters:

Usage:

#### expsrf

Parameters:

Usage:

#### fade_to

Parameters:

Usage:

#### fast_tracker

Parameters:

Usage:

#### fbrd

Parameters:

Usage:

#### file

Parameters:

Usage:

#### fillp

Parameters:

Usage:

#### find

Parameters:

Usage:

#### fire

Parameters:

Usage:

#### flip

Parameters:

Usage:

#### flip_card

Parameters:

Usage:

#### flr

Parameters:

Usage:

#### fntspec

Parameters:

Usage:

#### folder

Parameters:

Usage:

#### font

Parameters:

Usage:

#### foreach

Parameters:

Usage:

#### format

Parameters:

Usage:

#### format_gameplay_datas

Parameters:

Usage:

#### fps

Parameters:

Usage:

#### fpslimit

Parameters:

Usage:

#### freeze

Parameters:

Usage:

#### fwait

Parameters:

Usage:

#### fx_ascend

Parameters:

Usage:

#### fx_cart

Parameters:

Usage:

#### fx_crumb

Parameters:

Usage:

#### fx_detect

Parameters:

Usage:

#### fx_dust

Parameters:

Usage:

#### fx_emote

Parameters:

Usage:

#### fx_frame_drop

Parameters:

Usage:

#### fx_screen_flash

Parameters:

Usage:

#### fx_shield

Parameters:

Usage:

#### fx_spawn

Parameters:

Usage:

#### fx_trg

Parameters:

Usage:

#### fx_twinkle

Parameters:

Usage:

#### fx_unlock

Parameters:

Usage:

#### fx_wrong

Parameters:

Usage:

#### gameover

Parameters:

Usage:

#### gco

Parameters:

Usage:

#### gen_gfx

Parameters:

Usage:

#### get_all_cards

Parameters:

Usage:

#### get_atk_targets

Parameters:

Usage:

#### get_boost

Parameters:

Usage:

#### get_card

Parameters:

Usage:

#### get_center

Parameters:

Usage:

#### get_delay

Parameters:

Usage:

#### get_desc

Parameters:

Usage:

#### get_disp_stats

Parameters:

Usage:

#### get_empty_soul_slot

Parameters:

Usage:

#### get_firepower

Parameters:

Usage:

#### get_firerange

Parameters:

Usage:

#### get_free_card_slot

Parameters:

Usage:

#### get_global_pos

Parameters:

Usage:

#### get_index_table

Parameters:

Usage:

#### get_inventory

Parameters:

Usage:

#### get_lang

Parameters:

Usage:

#### get_menu_desc

Parameters:

Usage:

#### get_mouse_target

Parameters:

Usage:

#### get_move_range

Parameters:

Usage:

#### get_nearest_piece

Parameters:

Usage:

#### get_nei_with

Parameters:

Usage:

#### get_patterns

Parameters:

Usage:

#### get_piece_name

Parameters:

Usage:

#### get_piece_tempo

Parameters:

Usage:

#### get_pieces

Parameters:

Usage:

#### get_plural

Parameters:

Usage:

#### get_real_bads

Parameters:

Usage:

#### get_recoil_square

Parameters:

Usage:

#### get_slot_card

Parameters:

Usage:

#### get_slot_card_with

Parameters:

Usage:

#### get_slot_cards

Parameters:

Usage:

#### get_soul_range

Parameters:

Usage:

#### get_spread

Parameters:

Usage:

#### get_sq_di

Parameters:

Usage:

#### get_square_at

Parameters:

Usage:

#### get_square_coef

Parameters:

Usage:

#### get_square_pos

Parameters:

Usage:

#### get_time_string

Parameters:

Usage:

#### get_zone

Parameters:

Usage:

#### get_zone_targets

Parameters:

Usage:

#### getfenv

Parameters:

Usage:

#### getinp

Parameters:

Usage:

#### getmetatable

Parameters:

Usage:

#### gifframe

Parameters:

Usage:

#### giflen

Parameters:

Usage:

#### gifstream

Parameters:

Usage:

#### give_ammo

Parameters:

Usage:

#### goto_sq

Parameters:

Usage:

#### grab_item

Parameters:

Usage:

#### grid_rect

Parameters:

Usage:

#### gsq

Parameters:

Usage:

#### gsq_zone

Parameters:

Usage:

#### gtime

Parameters:

Usage:

#### has

Parameters:

Usage:

#### has_card

Parameters:

Usage:

#### hdclear

Parameters:

Usage:

#### help

Parameters:

Usage:

#### hex

Parameters:

Usage:

#### hide_hint

Parameters:

Usage:

#### hit

Parameters:

Usage:

#### hmod

Parameters:

Usage:

#### hrnd

Parameters:

Usage:

#### hsv

Parameters:

Usage:

#### impulse

Parameters:

Usage:

#### inc_ammo

Parameters:

Usage:

#### inc_army

Parameters:

Usage:

#### inc_stats

Parameters:

Usage:

#### increase_card_turns

Parameters:

Usage:

#### init_achievements

Parameters:

Usage:

#### init_banks

Parameters:

Usage:

#### init_cards_hint

Parameters:

Usage:

#### init_codex

Parameters:

Usage:

#### init_credits

Parameters:

Usage:

#### init_game

Parameters:

Usage:

#### init_intro

Parameters:

Usage:

#### init_menu

Parameters:

Usage:

#### init_new_turn

Parameters:

Usage:

#### init_safe_mode

Parameters:

Usage:

#### init_test

Parameters:

Usage:

#### init_vig

Parameters:

Usage:

#### inpnum

Parameters:

Usage:

#### inv_kin

Parameters:

Usage:

#### ipairs

Parameters:

Usage:

#### irnd

Parameters:

Usage:

#### is_card_available

Parameters:

Usage:

#### is_free

Parameters:

Usage:

#### is_king

Parameters:

Usage:

#### is_locked

Parameters:

Usage:

#### is_orth_view

Parameters:

Usage:

#### jesterize

Parameters:

Usage:

#### join

Parameters:

Usage:

#### kl

Parameters:

Usage:

#### leave_sq

Parameters:

Usage:

#### lerp

Parameters:

Usage:

#### level_up

Parameters:

Usage:

#### line

Parameters:

Usage:

#### load

Parameters:

Usage:

#### load_lang

Parameters:

Usage:

#### load_mod

Parameters:

Usage:

#### load_params

Parameters:

Usage:

#### lockaudio

Parameters:

Usage:

#### log

Parameters:

Usage:

#### logdupe

Parameters:

Usage:

#### loop

Parameters:

Usage:

#### lprint

Parameters:

Usage:

#### ls

Parameters:

Usage:

#### lshr

Parameters:

Usage:

#### ltime

Parameters:

Usage:

#### man

Parameters:

Usage:

#### mantxt

Parameters:

Usage:

#### match

Parameters:

Usage:

#### max

Parameters:

Usage:

#### mdr

Parameters:

Usage:

#### memcpy

Parameters:

Usage:

#### memsbs

Parameters:

Usage:

#### memset

Parameters:

Usage:

#### merge_funcs

Parameters:

Usage:

#### mid

Parameters:

Usage:

#### min

Parameters:

Usage:

#### min_digits

Parameters:

Usage:

#### mk_bullet

Parameters:

Usage:

#### mk_but

Parameters:

Usage:

#### mk_hint_but

Parameters:

Usage:

#### mk_menu_but

Parameters:

Usage:

#### mk_part

Parameters:

Usage:

#### mk_sq_but

Parameters:

Usage:

#### mk_square_but

Parameters:

Usage:

#### mk_text_but

Parameters:

Usage:

#### mkdir

Parameters:

Usage:

#### mke

Parameters:

Usage:

#### modchk

Parameters:

Usage:

#### mouse

Parameters:

Usage:

#### move_hero

Parameters:

Usage:

#### mpal

Parameters:

Usage:

#### msg

Parameters:

Usage:

#### music

Parameters:

Usage:

#### muslen

Parameters:

Usage:

#### musvol

Parameters:

Usage:

#### mv

Parameters:

Usage:

#### mvt

Parameters:

Usage:

#### namefind

Parameters:

Usage:

#### new_card

Parameters:

Usage:

#### new_level

Parameters:

Usage:

#### new_piece

Parameters:

Usage:

#### new_turn

Parameters:

Usage:

#### newbnk

Parameters:

Usage:

#### newchk

Parameters:

Usage:

#### newfnt

Parameters:

Usage:

#### newgif

Parameters:

Usage:

#### newmus

Parameters:

Usage:

#### newsfx

Parameters:

Usage:

#### newsrf

Parameters:

Usage:

#### newwin

Parameters:

Usage:

#### nxt

Parameters:

Usage:

#### nxtmusic

Parameters:

Usage:

#### on_death

Parameters:

Usage:

#### open_menu

Parameters:

Usage:

#### opp_atk

Parameters:

Usage:

#### opp_move

Parameters:

Usage:

#### opp_turn

Parameters:

Usage:

#### opt

Parameters:

Usage:

#### ord

Parameters:

Usage:

#### orth

Parameters:

Usage:

#### ospr

Parameters:

Usage:

#### pairs

Parameters:

Usage:

#### pal

Parameters:

Usage:

#### pal_inc

Parameters:

Usage:

#### pal_piece

Parameters:

Usage:

#### palette

Parameters:

Usage:

#### palt

Parameters:

Usage:

#### pause_pal

Parameters:

Usage:

#### peek

Parameters:

Usage:

#### peek2

Parameters:

Usage:

#### peek4

Parameters:

Usage:

#### pget

Parameters:

Usage:

#### pick

Parameters:

Usage:

#### play

Parameters:

Usage:

#### play_events

Parameters:

Usage:

#### plur

Parameters:

Usage:

#### poke

Parameters:

Usage:

#### poke2

Parameters:

Usage:

#### poke4

Parameters:

Usage:

#### pop_child

Parameters:

Usage:

#### pow

Parameters:

Usage:

#### pprint

Parameters:

Usage:

#### print

Parameters:

Usage:

#### progress

Parameters:

Usage:

#### pset

Parameters:

Usage:

#### punkcake_intro

Parameters:

Usage:

#### quit

Parameters:

Usage:

#### quitting

Parameters:

Usage:

#### rand

Parameters:

Usage:

#### rank_select

Parameters:

Usage:

#### rawget

Parameters:

Usage:

#### rawset

Parameters:

Usage:

#### read

Parameters:

Usage:

#### read_gameplay_file

Parameters:

Usage:

#### recal_scepters

Parameters:

Usage:

#### rect

Parameters:

Usage:

#### rect_col

Parameters:

Usage:

#### rectfill

Parameters:

Usage:

#### rectshade

Parameters:

Usage:

#### refill_ammo

Parameters:

Usage:

#### reg_add

Parameters:

Usage:

#### reload

Parameters:

Usage:

#### remove_buts

Parameters:

Usage:

#### remove_soul_slot

Parameters:

Usage:

#### remysys_set_glob

Parameters:

Usage:

#### remysys_timestamp

Parameters:

Usage:

#### rep

Parameters:

Usage:

#### require

Parameters:

Usage:

#### reset

Parameters:

Usage:

#### reset_save

Parameters:

Usage:

#### resume

Parameters:

Usage:

#### retire

Parameters:

Usage:

#### reverse

Parameters:

Usage:

#### rgb

Parameters:

Usage:

#### rlog

Parameters:

Usage:

#### rm

Parameters:

Usage:

#### rnd

Parameters:

Usage:

#### rotate

Parameters:

Usage:

#### rotl

Parameters:

Usage:

#### rotr

Parameters:

Usage:

#### round

Parameters:

Usage:

#### run

Parameters:

Usage:

#### safe_require

Parameters:

Usage:

#### safesize

Parameters:

Usage:

#### safesub

Parameters:

Usage:

#### save

Parameters:

Usage:

#### sbs

Parameters:

Usage:

#### scan_cancel

Parameters:

Usage:

#### screen_shake

Parameters:

Usage:

#### serialize

Parameters:

Usage:

#### set_army

Parameters:

Usage:

#### set_instructions

Parameters:

Usage:

#### set_mode

Parameters:

Usage:

#### setfenv

Parameters:

Usage:

#### setmetatable

Parameters:

Usage:

#### setup_piece

Parameters:

Usage:

#### sfillp

Parameters:

Usage:

#### sfx

Parameters:

Usage:

#### sfxlen

Parameters:

Usage:

#### sfxvol

Parameters:

Usage:

#### sget

Parameters:

Usage:

#### sgn

Parameters:

Usage:

#### shader

Parameters:

Usage:

#### shdrf

Parameters:

Usage:

#### shdrf2

Parameters:

Usage:

#### shdrf3

Parameters:

Usage:

#### shdrf4

Parameters:

Usage:

#### shdri

Parameters:

Usage:

#### shdri2

Parameters:

Usage:

#### shdri3

Parameters:

Usage:

#### shdri4

Parameters:

Usage:

#### shdrsrf

Parameters:

Usage:

#### shl

Parameters:

Usage:

#### show_danger

Parameters:

Usage:

#### show_hint

Parameters:

Usage:

#### shpr

Parameters:

Usage:

#### shr

Parameters:

Usage:

#### shuffle

Parameters:

Usage:

#### shuffle_copy

Parameters:

Usage:

#### sig

Parameters:

Usage:

#### sin

Parameters:

Usage:

#### sleep

Parameters:

Usage:

#### slicer

Parameters:

Usage:

#### spawn_dark_bishop

Parameters:

Usage:

#### spawn_hero

Parameters:

Usage:

#### spawn_pieces

Parameters:

Usage:

#### split

Parameters:

Usage:

#### spr

Parameters:

Usage:

#### sprgrid

Parameters:

Usage:

#### spritesheet

Parameters:

Usage:

#### sqp

Parameters:

Usage:

#### sqr

Parameters:

Usage:

#### sqrdist

Parameters:

Usage:

#### sqrt

Parameters:

Usage:

#### srand

Parameters:

Usage:

#### srfmem

Parameters:

Usage:

#### srfname

Parameters:

Usage:

#### srfshot

Parameters:

Usage:

#### srfsize

Parameters:

Usage:

#### sset

Parameters:

Usage:

#### sspr

Parameters:

Usage:

#### start_lvl_music

Parameters:

Usage:

#### steal

Parameters:

Usage:

#### steam

Parameters:

Usage:

#### step

Parameters:

Usage:

#### stop

Parameters:

Usage:

#### storm

Parameters:

Usage:

#### stringify_table

Parameters:

Usage:

#### strwidth

Parameters:

Usage:

#### sub

Parameters:

Usage:

#### sugar_step

Parameters:

Usage:

#### sum_el

Parameters:

Usage:

#### sysbat

Parameters:

Usage:

#### syslang

Parameters:

Usage:

#### table_from_file

Parameters:

Usage:

#### table_from_file_old

Parameters:

Usage:

#### table_from_string

Parameters:

Usage:

#### target

Parameters:

Usage:

#### tbl_import

Parameters:

Usage:

#### tbl_index

Parameters:

Usage:

#### tbz

Parameters:

Usage:

#### tcamera

Parameters:

Usage:

#### tear_apart

Parameters:

Usage:

#### throw_grenade

Parameters:

Usage:

#### throw_piece

Parameters:

Usage:

#### time

Parameters:

Usage:

#### toggle_target

Parameters:

Usage:

#### tonum

Parameters:

Usage:

#### tostr

Parameters:

Usage:

#### trace_cover

Parameters:

Usage:

#### trace_hdist

Parameters:

Usage:

#### trace_heros_dists

Parameters:

Usage:

#### traceback

Parameters:

Usage:

#### track_mouse

Parameters:

Usage:

#### transfer

Parameters:

Usage:

#### transp

Parameters:

Usage:

#### tri

Parameters:

Usage:

#### tri_angle

Parameters:

Usage:

#### trifill

Parameters:

Usage:

#### trig_achievement

Parameters:

Usage:

#### twv

Parameters:

Usage:

#### txtinp

Parameters:

Usage:

#### txtwidth

Parameters:

Usage:

#### type

Parameters:

Usage:

#### uadd

Parameters:

Usage:

#### unflip_card

Parameters:

Usage:

#### unlockaudio

Parameters:

Usage:

#### unpack

Parameters:

Usage:

#### unpause

Parameters:

Usage:

#### upe

Parameters:

Usage:

#### uplift

Parameters:

Usage:

#### uppercase

Parameters:

Usage:

#### url

Parameters:

Usage:

#### wait

Parameters:

Usage:

#### warp

Parameters:

Usage:

#### white_king_up

Parameters:

Usage:

#### window

Parameters:

Usage:

#### winspec

Parameters:

Usage:

#### wipe

Parameters:

Usage:

#### wlog

Parameters:

Usage:

#### write

Parameters:

Usage:

#### write_big_at

Parameters:

Usage:

#### xpl

Parameters:

Usage:

#### xpl_boss

Parameters:

Usage:

#### xpl_king

Parameters:

Usage:

#### ysort
Parameters:

Usage:


## Common crash reasons 
- Not having correct syntax, this includes things like commas or equal signs. 
- Having a card mentioned in the exclusion area that doesn’t exist 
- Having the pwe value too high (like a billion high) 
- Not having a mode or card mentioned in the english.txt file