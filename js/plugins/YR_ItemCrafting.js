//==============================================================================
// YR_ItemCrafting.js
//==============================================================================

/*:
 * @plugindesc ver 1.05 System for crafting items.
 * @author Yorae Rasante (heavily influenced by Yanfly, MrTrivel and SumRndmDde)
 *
 * @param Disciplines
 * @type struct<DisciplinesData>[]
 * @desc The disciplines of craft
 * @default
 * 
 * 
 * @param maskAll
 * @text Hide Results
 * @type boolean
 * @on Yes
 * @off No
 * @desc Should results be originally hidden?
 * @default false
 * 
 * @param defaultMaskText
 * @text Mask Text
 * @type text
 * @desc Default name to show should results be hidden
 * @default ????
 * 
 * @param defaultMaskIcon
 * @text Mask Icon
 * @type number
 * @min 0
 * @desc Default icon to show should results be hidden
 * @default 0
 * 
 * @param ---Color---
 * @default
 * 
 * @param discBaseColor
 * @text Discipline Color
 * @parent ---Color---
 * @type text
 * @desc Base color of the disciplines in the crafting scene - in hex.
 * @default #FFFFFF
 *
 * @param discBaseGaugeColor1
 * @text Discipline Gauge Color1
 * @parent ---Color---
 * @type text
 * @desc Base color 1 of the disciplines' experience gauge - in hex.
 * @default #23b94d
 *
 * @param discBaseGaugeColor2
 * @text Discipline Gauge Color2
 * @parent ---Color---
 * @type text
 * @desc Base color 2 of the disciplines' experience gauge - in hex.
 * @default #60e021
 * 
 * @param categColor
 * @text Category Color
 * @parent ---Color---
 * @type text
 * @desc Color of Categories - in hex.
 * @default #FFD700
 * 
 * @param okColor
 * @text Ok Color
 * @parent ---Color---
 * @type text
 * @desc Color of Ingredients/Requirements that fulfill the conditions.
 * @default #4CC417
 * 
 * @param notOkColor
 * @text Not Ok Color
 * @parent ---Color---
 * @type text
 * @desc Color of Ingredients/Requirements that do not fulfill the conditions.
 * @default #C24641
 * 
 * @param ---Visual---
 * @default
 * 
 * @param showDesc
 * @text Show Description
 * @parent ---Visual---
 * @type boolean
 * @on Yes
 * @off No
 * @desc Should the description window be visible?
 * @default true
 * 
 * @param descPos
 * @text Description Position
 * @parent showDesc
 * @type boolean
 * @on top
 * @off bottom
 * @desc Position of the description if visible
 * @default true
 * 
 * @param maskDesc
 * @text Use Masked Description
 * @parent showDesc
 * @type boolean
 * @on yes
 * @off ni
 * @desc Show mask text if item is masked
 * @default true
 * 
 * @param goldIcon
 * @text Gold Icon
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Icon for Gold
 * @default 0
 * 
 * @param discGaugeWidth
 * @text Exp Gauge Width
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Width of Disciplines' Experience Gauge
 * @default 450
 * 
 * @param discWindowWidth
 * @text Discipline Window Width
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Width of Disciplines' Name/Exp Window
 * @default 600
 * 
 * @param recipeListWidth
 * @text Recipe List Width
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Width of Recipe List Window
 * @default 400
 * 
 * @param recipeInfoWidth
 * @text Recipe Info Width
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Width of Recipe Info Window
 * @default 400
 * 
 * @param indItemChoiceWidth
 * @text Ind. Item Choice Width
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Width of Choice Window of Independent Items
 * (needs to be using Item Core)
 * @default 400
 * 
 * @param indItemChoiceHeight
 * @text Ind. Item Choice Height
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Max Height of Choice Window of Independent Items
 * (needs to be using Item Core)
 * @default 560
 * 
 * @param indItemListWidth
 * @text Ind. Item List Width
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Width of List Window of Independent Items
 * (needs to be using Item Core)
 * @default 400
 * 
 * @param indItemListHeight
 * @text Ind. Item List Height
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Max Height of List Window of Independent Items
 * (needs to be using Item Core)
 * @default 560
 * 
 * @param indItemInfoWidth
 * @text Ind. Item Info Width
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Width of Info Window of Independent Items
 * (needs to be using Item Core)
 * @default 400
 * 
 * @param quantWidth
 * @text Quantity Choice Width
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Width of Choice Window for Quantity
 * @default 448 
 * 
 * @param quantHeigth
 * @text Quantity Choice Height
 * @parent ---Visual---
 * @type number
 * @min 0
 * @desc Max Height of Choice Window for Quantity
 * @default 560
 *
 * @param showQuantButtons
 * @text Show Quantity Buttons
 * @parent ---Visual---
 * @type boolean
 * @on Yes
 * @off No
 * @desc Show quantity buttons for mouse?
 * @default true
 * 
 * 
 * @param ---Terms---
 * @default
 * 
 * @param textLevel
 * @text Discipline Level
 * @parent ---Terms---
 * @type text
 * @desc Text for discipline's level.
 * @default Level:
 * 
 * @param textMaxLevel
 * @text Max Level
 * @parent ---Terms---
 * @type text
 * @desc Text for discipline's max level.
 * @default MAX
 * 
 * @param closedCategory
 * @text Closed Category Symbol
 * @parent ---Terms---
 * @type text
 * @desc Symbol to mark closed category.
 * @default +
 *
 * @param openCategory
 * @text Open Category Symbol
 * @parent ---Terms---
 * @type text
 * @desc Symbol to mark open category.
 * @default -
 * 
 * @param textRecipes
 * @text Recipes
 * @parent ---Terms---
 * @type text
 * @desc Text to represent recipes number.
 * @default Recipes:
 * 
 * @param textIngredients
 * @text Ingredients
 * @parent ---Terms---
 * @type text
 * @desc Text to represent recipe's ingredients.
 * @default Ingredients
 * 
 * @param textRequirements
 * @text Requirements
 * @parent ---Terms---
 * @type text
 * @desc Text to represent recipe's requirements.
 * @default Requirements
 * 
 * @param textResults
 * @text Results
 * @parent ---Terms---
 * @type text
 * @desc Text to represent recipe's results.
 * @default Results
 * 
 * @param textQuantity
 * @text Quantity
 * @parent ---Terms---
 * @type text
 * @desc Text to represent quantity of recipes to produce.
 * @default Quantity:
 * 
 * @param textConfirm
 * @text Comfirm (Independent Items)
 * @parent ---Terms---
 * @type text
 * @desc Text to confirm choice of Independent Items
 * (needs to be using Item Core)
 * @default Confirm
 * 
 * @param textEmptyItem
 * @text Empty Item (Independent Items)
 * @parent ---Terms---
 * @type text
 * @desc Text of empty Independent Item
 * (needs to be using Item Core)
 * @default <<Empty>>
 * 
 * @param ---Item Info---
 * @default
 * 
 * @param nameHpPercHeal
 * @text HP Percentage Heal
 * @parent ---Item Info---
 * @type text
 * @desc Term for HP Heal by %
 * @default HP Heal%
 * 
 * @param nameHpFixedcHeal
 * @text HP Fixed Heal
 * @parent ---Item Info---
 * @type text
 * @desc Term for HP Heal by fixed value
 * @default HP Heal
 * 
 * @param nameMpPercHeal
 * @text MP Percentage Heal
 * @parent ---Item Info---
 * @type text
 * @desc Term for MP Heal by %
 * @default MP Heal%
 * 
 * @param nameMpFixedcHeal
 * @text MP Fixed Heal
 * @parent ---Item Info---
 * @type text
 * @desc Term for MP Heal by fixed value
 * @default MP Heal
 * 
 * @param nameStateAdded
 * @text Added States
 * @parent ---Item Info---
 * @type text
 * @desc Term for states to be added by item
 * @default State Added
 * 
 * @param nameBuffAdded
 * @text Added Buffs
 * @parent ---Item Info---
 * @type text
 * @desc Term for buffs to be added by item
 * @default Buff Added
 * 
 * @param nameStateRemoved
 * @text Removed States
 * @parent ---Item Info---
 * @type text
 * @desc Term for states to be removed by item
 * @default State Removed
 * 
 * @param nameBuffRemoved
 * @text Removed Buffs
 * @parent ---Item Info---
 * @type text
 * @desc Term for buffs to be removed by item
 * @default Buff Removed
 *
 * @param maxIconsItemInfo
 * @text Maximum Icons
 * @parent ---Item Info---
 * @type number
 * @min 0
 * @desc Maximum number of icons drawn for states and buffs.
 * @default 4
 * 
 * 
 * @param extraInfo
 * @text Extra Info
 * @parent ---Item Info---
 * @type struct<ItemInfoValues>[]
 * @desc The extra information for items
 * @default
 * 
 * @param equipInfo
 * @text Equipment Info
 * @parent ---Item Info---
 * @type struct<ItemInfoValues>[]
 * @desc The information for weapons and armors
 * @default ["{\"name\":\"TextManager.param(0)\",\"value\":\"item.params[0]\",\"show\":\"value\",\"format\":\"val\",\"pos\":\"value > 0\",\"neg\":\"value < 0\"}","{\"name\":\"TextManager.param(1)\",\"value\":\"item.params[1]\",\"show\":\"value\",\"format\":\"val\",\"pos\":\"value > 0\",\"neg\":\"value < 0\"}","{\"name\":\"TextManager.param(2)\",\"value\":\"item.params[2]\",\"show\":\"value\",\"format\":\"val\",\"pos\":\"value > 0\",\"neg\":\"value < 0\"}","{\"name\":\"TextManager.param(3)\",\"value\":\"item.params[3]\",\"show\":\"value\",\"format\":\"val\",\"pos\":\"value > 0\",\"neg\":\"value < 0\"}","{\"name\":\"TextManager.param(4)\",\"value\":\"item.params[4]\",\"show\":\"value\",\"format\":\"val\",\"pos\":\"value > 0\",\"neg\":\"value < 0\"}","{\"name\":\"TextManager.param(5)\",\"value\":\"item.params[5]\",\"show\":\"value\",\"format\":\"val\",\"pos\":\"value > 0\",\"neg\":\"value < 0\"}","{\"name\":\"TextManager.param(6)\",\"value\":\"item.params[6]\",\"show\":\"value\",\"format\":\"val\",\"pos\":\"value > 0\",\"neg\":\"value < 0\"}","{\"name\":\"TextManager.param(7)\",\"value\":\"item.params[7]\",\"show\":\"value\",\"format\":\"val\",\"pos\":\"value > 0\",\"neg\":\"value < 0\"}"]
 * 
 * @param ---Sound---
 * @default
 *
 * @param baseSE
 * @text Default SE
 * @parent ---Sound---
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc This is the default SE played when synthesizing an item.
 * This is case sensitive. Do not include the extension.
 * @default Twine
 *
 * @param baseVol
 * @text Default Volume
 * @parent ---Sound---
 * @type number
 * @min 0
 * @desc This is the default volume when synthesizing an item.
 * @default 100
 *
 * @param basePitch
 * @text Default Pitch
 * @parent ---Sound---
 * @type number
 * @desc This is the default pitch when synthesizing an item.
 * @default 100
 *
 * @param basePan
 * @text Default Pan
 * @parent ---Sound---
 * @type number
 * @desc This is the default pan when synthesizing an item.
 * @default 0
 * 
 * @help
 * Version 1.05
 * 
 * This is a plugin for an item crafting system.
 * It was made because other crafting plugins aren't compatible
 * with Yanfly's YEP_ItemCore Independent Items. Not even Yanfly's.
 * 
 * When making it, I based it a lot on MrTrivel's own plugin.
 * 
 * For showing the stats of the Independent Items, I based myself on
 * SumRndmDde's SRD_EquipCompareUpgrade
 * 
 * Notetags Item/Weapon/Armor:
 *   <Mask: string>
 *     This notetag will make the item's name be hidden at first.
 *     The name set here will be the one shown for it until crafted.
 *     Also, the results won't be shown
 * 
 *   <Mask Icon: x>
 *     This notetag will make the item's name be hidden at first.
 *     The icon set here will be the one shown for it until crafted.
 *     Also, the results won't be shown
 * 
 *   <Recipe>
 *     Parameter
 *     Parameter
 *   </Recipe>
 *     The parameters inside this notetag block  will be the recipe.
 *     A different block will be a new recipe for the item.
 * 
 *   An example block will all available parameters:
 *     <Recipe>
 *       Discipline: x
 *       Discipline: x, y, z
 *       Discipline: x to y
 *         (These add the recipe to a Discipline.
 *          This is needed, for the recipe will only show
 *          on disciplines it is set for.
 *          They can be combined)
 *       
 *       Category: x
 *       Discipline x Category: y
 *         (These add the recipe to a discipline's category.
 *          The first is for all with the same category name.
 *          The second will set it for just that one discipline.
 *          If in more than one category, it will repeat.
 *          This is not needed, without it it'll be shown outside
 *          the categories either way
 *          WARNING: Type a category's name, not number.
 *                   That is because some disciplines may share categories
 *                   in a different order.
 *          WARNING: Discipline x Category: y does not substitute
 *                   for Discipline: x. It just limits the category
 *                   to only that discipline. Discipline: x is still
 *                   needed.)
 *       
 *       Ingredient Item x
 *       Ingredient Item x: y
 *       Ingredient Weapon x
 *       Ingredient Weapon x: 2
 *       Ingredient Armor x
 *       Ingredient Armor x: 2
 *       Ingredient Gold: x
 *       Ingredient Variable x: y
 *         (These add the ingredients to the recipe.
 *          Variables show the variable name and value)
 *       
 *       Requirement Item x
 *       Requirement Item x: y
 *       Requirement Weapon x
 *       Requirement Weapon x: 2
 *       Requirement Armor x
 *       Requirement Armor x: 2
 *       Requirement Gold: x
 *       Requirement Variable x: y
 *       Requirement Discipline x Level: y
 *       Requirement Eval: code ||| text
 *         (These add the requirements to the recipe.
 *          They are like ingredients, but are not removed
 *          when the recipe is made.
 *          Variables show the variable name and value,
 *          Discipline is a needed Discipline level,
 *          Eval runs a code and shows text colored if true or false)
 *       
 *       Result Item x
 *       Result Item x: y
 *       Result Weapon x
 *       Result Weapon x: 2
 *       Result Armor x
 *       Result Armor x: 2
 *       Result Gold: x
 *       Result Variable x: y
 *       Result Discipline Exp: x (all disciplines recipe belongs to)
 *       Result Discipline x Exp: y
 *       Result Eval: code ||| text
 *         (These add the results to the recipe.
 *          The original item is added automatically.
 *          While masked, the results won't be shown.
 *          Variables show the variable name and value,
 *          Discipline Exp is experience to all disciplines it is for,
 *          while Discipline x Exp is added just to that discipline,
 *          neither being shown, and they can be combined,
 *          Eval runs a code and shows text)
 *       
 *       Learned From Start
 *       Learned Level: x (any discipline recipe belongs to)
 *       Learned Discipline x Level: y
 *         (When the recipe is learned.
 *          when nothing is set, can only be learned by plugin command)
 *       
 *       SE Name: x
 *       SE Volume: x
 *       SE Pitch: x
 *       SE Pan: x
 *         (If Name is set, this sound will be played when craft is done.
 *          It supercedes the base and discipline sounds)
 *     </Recipe>
 * 
 * Plugin Commands:
 *   CRAFT START disciplineId
 *     Opens the craft scene of the discipline
 * 
 *   CRAFT GAINEXP disciplineId value
 *     gains experience for the discipline
 * 
 *   CRAFT LEARN ITEM itemId
 *   CRAFT LEARN WEAPON weaponId
 *   CRAFT LEARN ARMOR armorId
 *     Learns all recipes of the item
 * 
 *   CRAFT LEARN ITEM itemId recipe
 *   CRAFT LEARN WEAPON weaponId recipe
 *   CRAFT LEARN ARMOR armorId recipe
 *     Learns said recipe of the item (starts from 0)
 * 
 *   CRAFT SHOW disciplineId
 *   CRAFT HIDE disciplineId
 *     Show/Hide Craft option on the menu
 * 
 *   CRAFT ENABLE disciplineId
 *   CRAFT DISABLE disciplineId
 *     Enable/Disable Craft option on the menu
 * 
 * 
 * To set on MainMenuManager:
 *   Menu X Name      : 'Craft'
 *   Menu X Symbol    : craft1
 *   Menu X Main Bind : this.commandYRCraft.bind(this, 1)
 * 
 * 
 * Script calls:
 *   $gameParty.getDisciplineExp(disciplineId);
 *     Gets the experience of the discipline
 * 
 *   $gameParty.getDisciplineLevel(disciplineId);
 *     Gets the level of the discipline
 * 
 *   $gameParty.isItemRecipeLearned(itemId, recipeId);
 *   $gameParty.isWeaponRecipeLearned(weaponId, recipeId);
 *   $gameParty.isArmorRecipeLearned(armorId, recipeId);
 *      Returns if recipe is learned.
 *      Leave without a recipeId to know of any recipe of the item.
 * 
 *   $gameParty.learnItemRecipe(itemId, recipeId);
 *   $gameParty.learnWeaponRecipe(weaponId, recipeId);
 *   $gameParty.learnArmorRecipe(armorId, recipeId);
 *      Learns recipe.
 *      Leave without a recipeId to learn all recipes of the item.
 */

/*~struct~DisciplinesData:
 * @param discName
 * @text Name
 * @type text
 * @desc Name shown in the crafting scene for the discipline
 * @default
 *
 * @param discIcon
 * @text Icon
 * @type number
 * @min 0
 * @decimals 0
 * @desc Icon shown for the discipline on the crafting scene.
 * @default 0
 * 
 * @param discColor
 * @text Color
 * @type text
 * @desc Color of the discipline in the crafting scene - in hex.
 * @default
 *
 * @param discMaxLevel
 * @text Max Level
 * @type number
 * @min 0
 * @decimals 0
 * @desc Max level the discipline can reach. 0 or 1 means no levels.
 * @default 0
 * 
 * @param discGaugeColor1
 * @text Exp Gauge Color1
 * @type text
 * @desc Color 1 of the discipline's experience gauge - in hex.
 * @default
 *
 * @param discGaugeColor2
 * @text Exp Gauge Color2
 * @type text
 * @desc Color 2 of the discipline's experience gauge - in hex.
 * @default
 *
 * @param discExpFormula
 * @text Experience Formula
 * @type text
 * @desc Formula used for calculating the experience needed for next level.
 * @default level * 1
 *
 * @param discCategories
 * @text Categories
 * @type text[]
 * @desc Categories the Discipline is split into
 *
 * @param discBackground
 * @text Scene Background
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Background for the scene when crafting with this discipline
 *
 * @param discShowInMenu
 * @text Show In Menu
 * @type text
 * @desc Show this discipline in the menu?
 * @default false
 *
 * @param discEnableInMenu
 * @text Enable in Menu
 * @type text
 * @desc Enable this discipline in the menu?
 * @default true
 * 
 * @param ---Sound---
 * @default
 *
 * @param discSE
 * @text SE
 * @parent ---Sound---
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc This is the default SE played when synthesizing an item.
 * This is case sensitive. Do not include the extension.
 * @default 
 *
 * @param discVol
 * @text Volume
 * @parent ---Sound---
 * @type number
 * @min 0
 * @desc The default volume when synthesizing an item.
 * @default 100
 *
 * @param discPitch
 * @text Pitch
 * @parent ---Sound---
 * @type number
 * @desc The default pitch when synthesizing an item.
 * @default 100
 *
 * @param discPan
 * @text Pan
 * @parent ---Sound---
 * @type number
 * @desc The default pan when synthesizing an item.
 * @default 0
 */
/*~struct~ItemInfoValues:
 *
 * @param name
 * @text Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param value
 * @text Value
 * @desc The evaluation of the stat.
 * Use 'item' to represent the item.
 * @default
 *
 * @param show
 * @text Show Eval
 * @desc The evaluation to show the info.
 * Use 'value' to represent the value.
 * @default value
 *
 * @param format
 * @text Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param pos
 * @text Positive Eval
 * @desc The evaluation to show the info with positive color.
 * Use 'value' to represent the value.
 * @default value > 0
 *
 * @param neg
 * @text Negative Eval
 * @desc The evaluation to show the info with positive color.
 * Use 'value' to represent the value.
 * @default value < 0
*/

var Imported = Imported || {};
Imported.YR_ItemCrafting = true;

var YR = YR || {};
YR.ItemCraft = YR.ItemCraft || {};


//Set plugin parameters
YR.parameters = PluginManager.parameters('YR_ItemCrafting');
YR.ItemCraft.discs = JSON.parse(YR.parameters['Disciplines']);
for (var i = 0; i < YR.ItemCraft.discs.length; i++) {
  YR.ItemCraft.discs[i] = JSON.parse(YR.ItemCraft.discs[i]);
  YR.ItemCraft.discs[i].discIcon = Number(YR.ItemCraft.discs[i].discIcon);
  YR.ItemCraft.discs[i].discMaxLevel = Number(YR.ItemCraft.discs[i].discMaxLevel);
  if (YR.ItemCraft.discs[i].discColor == '') YR.ItemCraft.discs[i].discColor = YR.parameters['discBaseColor'];
  if (YR.ItemCraft.discs[i].discGaugeColor1 == '') YR.ItemCraft.discs[i].discGaugeColor1 = YR.parameters['discBaseGaugeColor1'];
  if (YR.ItemCraft.discs[i].discGaugeColor2 == '') YR.ItemCraft.discs[i].discGaugeColor2 = YR.parameters['discBaseGaugeColor2'];
  if (YR.ItemCraft.discs[i].discSE == '') {
    YR.ItemCraft.discs[i].discSE = YR.parameters['baseSE'];
  }
  if (YR.ItemCraft.discs[i].discCategories) YR.ItemCraft.discs[i].discCategories = JSON.parse(YR.ItemCraft.discs[i].discCategories);
}
if (YR.parameters['extraInfo']) {
    YR.ItemCraft.extraInfo = JSON.parse(YR.parameters['extraInfo']);
    for (var i = 0; i < YR.ItemCraft.discs.length; i++) {
        if (YR.ItemCraft.extraInfo[i]) YR.ItemCraft.extraInfo[i] = JSON.parse(YR.ItemCraft.extraInfo[i]);
    }
}
if (YR.parameters['equipInfo']) {
    YR.ItemCraft.equipInfo = JSON.parse(YR.parameters['equipInfo']);
    for (var i = 0; i < YR.ItemCraft.discs.length; i++) {
        if (YR.ItemCraft.equipInfo[i]) YR.ItemCraft.equipInfo[i] = JSON.parse(YR.ItemCraft.equipInfo[i]);
    }
}
YR.ItemCraft.maskAll = eval(YR.parameters['maskAll']);
YR.ItemCraft.maskText = String(YR.parameters['defaultMaskText']);
YR.ItemCraft.maskIcon = Number(YR.parameters['defaultMaskIcon']);
YR.ItemCraft.showDesc = eval(YR.parameters['showDesc']);
YR.ItemCraft.descPos = eval(YR.parameters['descPos']);
YR.ItemCraft.maskDesc = eval(YR.parameters['maskDesc']);
YR.ItemCraft.goldIcon = Number(YR.parameters['goldIcon']);
YR.ItemCraft.discGaugeWidth = Number(YR.parameters['discGaugeWidth']);
YR.ItemCraft.discWindowWidth = Number(YR.parameters['discWindowWidth']);
YR.ItemCraft.recipeListWidth = Number(YR.parameters['recipeListWidth']);
YR.ItemCraft.recipeInfoWidth = Number(YR.parameters['recipeInfoWidth']);
YR.ItemCraft.indItemChoiceWidth = Number(YR.parameters['indItemChoiceWidth']);
YR.ItemCraft.indItemChoiceHeight = Number(YR.parameters['indItemChoiceHeight']);
YR.ItemCraft.indItemListWidth = Number(YR.parameters['indItemListWidth']);
YR.ItemCraft.indItemListHeight = Number(YR.parameters['indItemListHeight']);
YR.ItemCraft.indItemInfoWidth = Number(YR.parameters['indItemInfoWidth']);
YR.ItemCraft.quantWidth = Number(YR.parameters['quantWidth']);
YR.ItemCraft.quantHeigth = Number(YR.parameters['quantHeigth']);
YR.ItemCraft.closedCategory = String(YR.parameters['closedCategory']);
YR.ItemCraft.openCategory = String(YR.parameters['openCategory']);
YR.ItemCraft.categColor = String(YR.parameters['categColor']);
YR.ItemCraft.okColor = String(YR.parameters['okColor']);
YR.ItemCraft.notOkColor = String(YR.parameters['notOkColor']);
YR.ItemCraft.textLevel = String(YR.parameters['textLevel']);
YR.ItemCraft.textMaxLevel = String(YR.parameters['textMaxLevel']);
YR.ItemCraft.textRecipes = String(YR.parameters['textRecipes']);
YR.ItemCraft.textIngredients = String(YR.parameters['textIngredients']);
YR.ItemCraft.textRequirements = String(YR.parameters['textRequirements']);
YR.ItemCraft.textResults = String(YR.parameters['textResults']);
YR.ItemCraft.textQuantity = String(YR.parameters['textQuantity']);
YR.ItemCraft.textEmptyItem = String(YR.parameters['textEmptyItem']);
YR.ItemCraft.textConfirm = String(YR.parameters['textConfirm']);
YR.ItemCraft.showQuantButtons = eval(YR.parameters['showQuantButtons']);
YR.ItemCraft.nameHpPercHeal = String(YR.parameters['nameHpPercHeal']);
YR.ItemCraft.nameHpFixedcHeal = String(YR.parameters['nameHpFixedcHeal']);
YR.ItemCraft.nameMpPercHeal = String(YR.parameters['nameMpPercHeal']);
YR.ItemCraft.nameMpFixedcHeal = String(YR.parameters['nameMpFixedcHeal']);
YR.ItemCraft.nameStateAdded = String(YR.parameters['nameStateAdded']);
YR.ItemCraft.nameBuffAdded = String(YR.parameters['nameBuffAdded']);
YR.ItemCraft.nameStateRemoved = String(YR.parameters['nameStateRemoved']);
YR.ItemCraft.nameBuffRemoved = String(YR.parameters['nameBuffRemoved']);
YR.ItemCraft.maxIconsItemInfo = Number(YR.parameters['maxIconsItemInfo']);
YR.ItemCraft.baseVol = Number(YR.parameters['baseVol']);
YR.ItemCraft.basePitch = Number(YR.parameters['basePitch']);
YR.ItemCraft.basePan = Number(YR.parameters['basePan']);


//Set notetags
YR.ItemCraft.DM_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!YR.ItemCraft.DM_isDatabaseLoaded.call(this)) return false;
  if (!YR._loaded_YRItemCraft) {
    this.processYRItemCraftNotetags($dataItems);
    this.processYRItemCraftNotetags($dataWeapons);
    this.processYRItemCraftNotetags($dataArmors);
    YR._loaded_YRItemCraft = true;
  }
  return true;
};

DataManager.processYRItemCraftNotetags = function(group) {
    if (DataManager.isItem(group[1])) {
        var itemType = "item";
    }
    else if (DataManager.isWeapon(group[1])) {
        var itemType = "weapon";
    }
    else if (DataManager.isArmor(group[1])) {
        var itemType = "armor";
    }

    var noteMask = /<MASK:[ ](.*)>/i;
    var noteMaskIcon = /<MASK ICON:[ ]*(\d+)>/i;
    
    var noteRecipeStart = /<RECIPE>/i;
    var noteRecipeEnd = /<\/RECIPE>/i;

    var noteDiscInd = /Discipline:[ ]*(\d+(?:\s*,\s*\d+)*)/i;
    var noteDiscArray = /Discipline:[ ]*(\d+)[ ](?:THROUGH|to)[ ](\d+)/i;
    var noteCatAll = /Category:[ ]*(.+)/i;
    var noteCatDisc = /Discipline[ ](\d+)[ ]Category:[ ]*(.+)/i;

    var noteIngItem = /Ingredient Item[ ]*(\d+)/i;
    var noteIngItemN = /Ingredient Item[ ]*(\d+)[:][ ]*(\d+)/i;
    var noteIngWeapon = /Ingredient Weapon[ ]*(\d+)/i;
    var noteIngWeaponN = /Ingredient Weapon[ ]*(\d+)[:][ ]*(\d+)/i;
    var noteIngArmor = /Ingredient Armor[ ]*(\d+)/i;
    var noteIngArmorN = /Ingredient Armor[ ]*(\d+)[:][ ]*(\d+)/i;
    var noteIngGold = /Ingredient Gold[:][ ]*(\d+)/i;
    var noteIngVar = /Ingredient Variable[ ]*(\d+)[:][ ]*(\d+)/i;

    var noteReqItem = /Requirement Item[ ]*(\d+)/i;
    var noteReqItemN = /Requirement Item[ ]*(\d+)[:][ ]*(\d+)/i;
    var noteReqWeapon = /Requirement Weapon[ ]*(\d+)/i;
    var noteReqWeaponN = /Requirement Weapon[ ]*(\d+)[:][ ]*(\d+)/i;
    var noteReqArmor = /Requirement Armor[ ]*(\d+)/i;
    var noteReqArmorN = /Requirement Armor[ ]*(\d+)[:][ ]*(\d+)/i;
    var noteReqGold = /Requirement Gold[:][ ]*(\d+)/i;
    var noteReqVar = /Requirement Variable[ ]*(\d+)[:][ ]*(\d+)/i;
    var noteReqDiscLevel = /Requirement Discipline (\d+) Level[ ]*[:][ ]*(\d+)/i;
    var noteReqCode = /Requirement Eval:[ ](.*)[ ]*[|][|][|][ ]*(.*)/i;

    var noteResItem = /Result Item[ ]*(\d+)/i;
    var noteResItemN = /Result Item[ ]*(\d+)[:][ ]*(\d+)/i;
    var noteResWeapon = /Result Weapon[ ]*(\d+)/i;
    var noteResWeaponN = /Result Weapon[ ]*(\d+)[:][ ]*(\d+)/i;
    var noteResArmor = /Result Armor[ ]*(\d+)/i;
    var noteResArmorN = /Result Armor[ ]*(\d+)[:][ ]*(\d+)/i;
    var noteResGold = /Result Gold[:][ ]*(\d+)/i;
    var noteResVar = /Result Variable[ ]*(\d+)[:][ ]*(\d+)/i;
    var noteResDiscExp = /Result Discipline Exp[ ]*[:][ ]*(\d+)/i;
    var noteResDiscNExp = /Result Discipline (\d+) Exp[ ]*[:][ ]*(\d+)/i;
    var noteResCode = /Result Eval:[ ](.*)[ ]*[|][|][|][ ]*(.*)/i;

    var noteLearnStart = /Learned From Start/i;
    var noteLearnDiscLevel = /Learned Level[:][ ]*(\d+)/i;
    var noteLearnDiscNLevel = /Learned Discipline (\d+) Level[ ]*[:][ ]*(\d+)/i;

    var noteSoundEffectName = /Sound Effect Name[:][ ]*(.+)/i;
    var noteSoundEffectVolume = /Sound Effect Volume[:][ ]*(\d+)/i;
    var noteSoundEffectPitch = /Sound Effect Pitch[:][ ]*(\d+)/i;
    var noteSoundEffectPan = /Sound Effect Pan[:][ ]*(-?\d+)/i;

    for (var n = 1; n < group.length; n++) {
        var obj = group[n];
        var notedata = obj.note.split(/[\r\n]+/);

        obj.masked = YR.ItemCraft.maskAll;
        obj.maskText = YR.ItemCraft.maskText;
        obj.maskIcon = YR.ItemCraft.maskIcon;
        obj._recipes = [];

        var recipeIndex = 0;
        var recipe = undefined;
        var categories = [];
        var ingItem = [];
        var ingWeapon = [];
        var ingArmor = [];
        var ingGold = 0;
        var ingVar = [];
        var reqItem = [];
        var reqWeapon = [];
        var reqArmor = [];
        var reqGold = 0;
        var reqVar = [];
        var reqDisc = [];
        var reqEval = [];
        var resItem = [];
        var resWeapon = [];
        var resArmor = [];
        var resGold = 0;
        var resVar = [];
        var resDiscExp = [];
        var resEval = [];
        var learn = [];
        var learnFromStart = false;

        for (var i = 0; i < notedata.length; i++) {
            var line = notedata[i];
            if (line.match(noteMask)) {
                obj.masked = true;
                obj.maskText = String(RegExp.$1);
            } else if (line.match(noteMaskIcon)) {
                obj.masked = true;
                obj.maskIcon = Number(RegExp.$1);
            } else if (line.match(noteRecipeStart)) {
                recipe = new Item_Recipes(itemType, n, recipeIndex);
            } else if (recipe !== undefined) {
                if (line.match(noteRecipeEnd)) {
                    recipe._disciplines.sort(function(a, b) {return a - b;});
                    recipe._disciplines = recipe._disciplines.filter(function(value, index, self) {return self.indexOf(value) === index;});
                    categories.forEach(function(category) {
                        if (category[0] === "all") {
                            recipe._disciplines.forEach(function(disc) {
                                recipe._categories.push([disc, category[1]]);
                            }, this);
                        } else recipe._categories.push(category);
                    }, this);

                    ingItem.forEach(function(item, index) {
                        if (item && item !== 0) recipe._ingredients.push(["item", index, item]);
                    }, this);
                    ingWeapon.forEach(function(item, index) {
                        if (item && item !== 0) recipe._ingredients.push(["weapon", index, item]);
                    }, this);
                    ingArmor.forEach(function(item, index) {
                        if (item && item !== 0) recipe._ingredients.push(["armor", index, item]);
                    }, this);
                    if (ingGold > 0) recipe._ingredients.push(["gold", ingGold]);
                    ingVar.forEach(function(item, index) {
                        if (item && item !== 0) recipe._ingredients.push(["variable", index, item]);
                    }, this);

                    reqItem.forEach(function(item, index) {
                        if (item && item !== 0) recipe._requirements.push(["item", index, item]);
                    }, this);
                    reqWeapon.forEach(function(item, index) {
                        if (item && item !== 0) recipe._requirements.push(["weapon", index, item]);
                    }, this);
                    reqArmor.forEach(function(item, index) {
                        if (item && item !== 0) recipe._requirements.push(["armor", index, item]);
                    }, this);
                    if (reqGold > 0) recipe._requirements.push(["gold", reqGold]);
                    reqVar.forEach(function(item, index) {
                        if (item && item !== 0) recipe._requirements.push(["variable", index, item]);
                    }, this);
                    reqDisc.forEach(function(item, index) {
                        if (item && item !== 0) recipe._requirements.push(["discipline", index, item]);
                    }, this);
                    reqEval.forEach(function(item) {
                        if (item && item !== 0) recipe._requirements.push(["eval", item[0], item[1]]);
                    }, this);

                    if (itemType === 'item') {
                        resItem[n] = resItem[n] || 0;
                        resItem[n]++;
                    } else if (itemType === 'weapon') {
                        resWeapon[n] = resWeapon[n] || 0;
                        resWeapon[n]++;
                    } else if (itemType === 'armor') {
                        resArmor[n] = resArmor[n] || 0;
                        resArmor[n]++;
                    }

                    resItem.forEach(function(item, index) {
                        if (item && item !== 0) recipe._results.push(["item", index, item]);
                    }, this);
                    resWeapon.forEach(function(item, index) {
                        if (item && item !== 0) recipe._results.push(["weapon", index, item]);
                    }, this);
                    resArmor.forEach(function(item, index) {
                        if (item && item !== 0) recipe._results.push(["armor", index, item]);
                    }, this);
                    if (resGold > 0) recipe._results.push(["gold", reqGold]);
                    resVar.forEach(function(item, index) {
                        if (item && item !== 0) recipe._results.push(["variable", index, item]);
                    }, this);
                    if (resDiscExp[0]) {
                        recipe._disciplines.forEach(function(disc) {
                            resDiscExp[disc] = resDiscExp[disc] || 0;
                            resDiscExp[disc] += resDiscExp[0];
                        }, this);
                    }
                    resDiscExp.forEach(function(item, index) {
                        if (item && index !== 0 && item !== 0) {
                            recipe._results.push(["discipline", index, item]);
                        }
                    }, this);
                    resEval.forEach(function(item) {
                        if (item && item !== 0) recipe._results.push(["eval", item[0], item[1]]);
                    }, this);

                    if (learn[0]) {
                        recipe._disciplines.forEach(function(disc) {
                            learn[disc] = learn[disc] || 0;
                            learn[disc] += learn[0];
                        }, this);
                    }
                    if (learnFromStart) recipe._learned.push("start");
                    learn.forEach(function(item, index) {
                        if (item && index !== 0 && item !== 0) {
                            recipe._learned.push([index, item]);
                        }
                    }, this);

                    obj._recipes.push(recipe);
                    recipe = undefined;
                    categories = [];
                    ingItem = [];
                    ingWeapon = [];
                    ingArmor = [];
                    ingGold = 0;
                    ingVar = [];
                    reqItem = [];
                    reqWeapon = [];
                    reqArmor = [];
                    reqGold = 0;
                    reqVar = [];
                    reqDisc = [];
                    reqEval = [];
                    resItem = [];
                    resWeapon = [];
                    resArmor = [];
                    resGold = 0;
                    resVar = [];
                    resDiscExp = [];
                    resEval = [];
                    learn = [];
                    learnFromStart = false;
                } else if (line.match(noteDiscInd)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    recipe._disciplines = recipe._disciplines.concat(array);
                } else if (line.match(noteDiscArray)) {
                    var array = [];
                    for (var j = parseInt(RegExp.$1); j <= parseInt(RegExp.$2); j++) {
                        array.push(j);
                    }
                    recipe._disciplines = recipe._disciplines.concat(array);
                } else if (line.match(noteCatDisc)) {
                    categories.push([Number(RegExp.$1), String(RegExp.$2)]);
                } else if (line.match(noteCatAll)) {
                    categories.push(["all", String(RegExp.$1)]);
                } else if (line.match(noteIngItemN)) {
                    ingItem[Number(RegExp.$1)] = ingItem[Number(RegExp.$1)] || 0;
                    ingItem[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteIngItem)) {
                    ingItem[Number(RegExp.$1)] = ingItem[Number(RegExp.$1)] || 0;
                    ingItem[Number(RegExp.$1)]++;
                } else if (line.match(noteIngWeaponN)) {
                    ingWeapon[Number(RegExp.$1)] = ingWeapon[Number(RegExp.$1)] || 0;
                    ingWeapon[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteIngWeapon)) {
                    ingWeapon[Number(RegExp.$1)] = ingWeapon[Number(RegExp.$1)] || 0;
                    ingWeapon[Number(RegExp.$1)]++;
                } else if (line.match(noteIngArmorN)) {
                    ingArmor[Number(RegExp.$1)] = ingArmor[Number(RegExp.$1)] || 0;
                    ingArmor[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteIngArmor)) {
                    ingArmor[Number(RegExp.$1)] = ingArmor[Number(RegExp.$1)] || 0;
                    ingArmor[Number(RegExp.$1)]++;
                } else if (line.match(noteIngGold)) {
                    ingGold += Number(RegExp.$1);
                } else if (line.match(noteIngVar)) {
                    ingVar[Number(RegExp.$1)] = ingVar[Number(RegExp.$1)] || 0;
                    ingVar[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteReqItemN)) {
                    reqItem[Number(RegExp.$1)] = reqItem[Number(RegExp.$1)] || 0;
                    reqItem[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteReqItem)) {
                    reqItem[Number(RegExp.$1)] = reqItem[Number(RegExp.$1)] || 0;
                    reqItem[Number(RegExp.$1)]++;
                } else if (line.match(noteReqWeaponN)) {
                    reqWeapon[Number(RegExp.$1)] = reqWeapon[Number(RegExp.$1)] || 0;
                    reqWeapon[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteReqWeapon)) {
                    reqWeapon[Number(RegExp.$1)] = reqWeapon[Number(RegExp.$1)] || 0;
                    reqWeapon[Number(RegExp.$1)]++;
                } else if (line.match(noteReqArmorN)) {
                    reqArmor[Number(RegExp.$1)] = reqArmor[Number(RegExp.$1)] || 0;
                    reqArmor[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteReqArmor)) {
                    reqArmor[Number(RegExp.$1)] = reqArmor[Number(RegExp.$1)] || 0;
                    reqArmor[Number(RegExp.$1)]++;
                } else if (line.match(noteReqGold)) {
                    reqGold += Number(RegExp.$1);
                } else if (line.match(noteReqVar)) {
                    reqVar[Number(RegExp.$1)] = reqVar[Number(RegExp.$1)] || 0;
                    reqVar[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteReqDiscLevel)) {
                    reqDisc[Number(RegExp.$1)] = reqDisc[Number(RegExp.$1)] || 0;
                    reqDisc[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteReqCode)) {
                    reqEval.push([RegExp.$1, RegExp.$2]);
                } else if (line.match(noteResItemN)) {
                    resItem[Number(RegExp.$1)] = resItem[Number(RegExp.$1)] || 0;
                    resItem[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteResItem)) {
                    resItem[Number(RegExp.$1)] = resItem[Number(RegExp.$1)] || 0;
                    resItem[Number(RegExp.$1)]++;
                } else if (line.match(noteResWeaponN)) {
                    resWeapon[Number(RegExp.$1)] = resWeapon[Number(RegExp.$1)] || 0;
                    resWeapon[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteResWeapon)) {
                    resWeapon[Number(RegExp.$1)] = resWeapon[Number(RegExp.$1)] || 0;
                    resWeapon[Number(RegExp.$1)]++;
                } else if (line.match(noteResArmorN)) {
                    resArmor[Number(RegExp.$1)] = resArmor[Number(RegExp.$1)] || 0;
                    resArmor[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteResArmor)) {
                    resArmor[Number(RegExp.$1)] = resArmor[Number(RegExp.$1)] || 0;
                    resArmor[Number(RegExp.$1)]++;
                } else if (line.match(noteResGold)) {
                    resGold += Number(RegExp.$1);
                } else if (line.match(noteResVar)) {
                    resVar[Number(RegExp.$1)] = resVar[Number(RegExp.$1)] || 0;
                    resVar[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteResDiscNExp)) {
                    resDiscExp[Number(RegExp.$1)] = resDiscExp[Number(RegExp.$1)] || 0;
                    resDiscExp[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteResDiscExp)) {
                    resDiscExp[0] = resDiscExp[0] || 0;
                    resDiscExp[0] += Number(RegExp.$1);
                } else if (line.match(noteResCode)) {
                    resEval.push([RegExp.$1, RegExp.$2]);
                } else if (line.match(noteLearnStart)) {
                    learnFromStart = true;
                } else if (line.match(noteLearnDiscLevel)) {
                    learn[0] = learn[0] || 0;
                    learn[0] += Number(RegExp.$1);
                } else if (line.match(noteLearnDiscNLevel)) {
                    learn[Number(RegExp.$1)] = learn[Number(RegExp.$1)] || 0;
                    learn[Number(RegExp.$1)] += Number(RegExp.$2);
                } else if (line.match(noteSoundEffectName)) {
                    recipe._seName = String(RegExp.$1);
                } else if (line.match(noteSoundEffectVolume)) {
                    recipe._seVol = Number(RegExp.$1);
                } else if (line.match(noteSoundEffectPitch)) {
                    recipe._sePitch = Number(RegExp.$1);
                } else if (line.match(noteSoundEffectPan)) {
                    recipe._sePan = Number(RegExp.$1);
                }
            }
        }
    }
}


//Set Party data
YR.ItemCraft.GP_init = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function() {
    YR.ItemCraft.GP_init.apply(this, arguments);
    this._selectedDiscipline = 0;
    this._discExp = []
    this._discLevel = []
    this._discShow = []
    this._discEnabled = []
    this._discCategoriesOpen = [];
    for (var i = 0; i < YR.ItemCraft.discs.length; i++) {
        this._discExp[i] = 0;
        this._discLevel[i] = 1;
        this._discShow[i] = YR.ItemCraft.discs[i].discShowInMenu;
        this._discEnabled[i] = YR.ItemCraft.discs[i].discEnableInMenu;
        this._discCategoriesOpen[i] = [];
    }
    this._itemRecipesLearned = [];
    this._weaponRecipesLearned = [];
    this._armorRecipesLearned = [];
    this._itemUnmasked = [];
    this._weaponUnmasked = [];
    this._armorUnmasked = [];
};

Game_Party.prototype.getDisciplineExpForLevel = function(discipline, level){
    if (level <= 1) return 0;
    level = level - 1;
    var code = YR.ItemCraft.discs[discipline].discExpFormula;
    try {
        var value = eval(code);
      } catch (e) {
        var value = 0;
        Yanfly.Util.displayError(e, code, 'DISCIPLINE EXPERIENCE FORMULA ERROR');
      }
      return value;
}

Game_Party.prototype.getDisciplineExp = function(discipline){
    return this._discExp[discipline - 1];
}

Game_Party.prototype.getDisciplineLevel = function(discipline){
    return this._discLevel[discipline - 1];
}

Game_Party.prototype.increaseDiscExp = function(discipline, value){
    this._discExp[discipline - 1] += value;
    while (YR.ItemCraft.discs[discipline - 1].discMaxLevel > this._discLevel[discipline - 1] && this.getDisciplineExpForLevel(discipline - 1, this._discLevel[discipline - 1] + 1) <= this._discExp[discipline - 1]) {
        this._discLevel[discipline - 1]++;
    }
}

Game_Party.prototype.isItemRecipeLearned = function(itemId, recipeId){
    if(!this._itemRecipesLearned[itemId]) {this._itemRecipesLearned[itemId] = []; return false;}
    if (recipeId) {
        return (!!$dataItems[itemId]._recipes[recipeId].isLearned())
    } else {
        return ($dataItems[itemId]._recipes.filter(function(recipe) {return recipe.isLearned()}).length > 0);
    }
}

Game_Party.prototype.isWeaponRecipeLearned = function(weaponId, recipeId){
    if(!this._weaponRecipesLearned[weaponId]) {this._weaponRecipesLearned[weaponId] = []; return false;}
    if (recipeId) {
        return (!!$dataWeapons[weaponId]._recipes[recipeId].isLearned())
    } else {
        return ($dataWeapons[weaponId]._recipes.filter(function(recipe) {return recipe.isLearned()}).length > 0);
    }
}

Game_Party.prototype.isArmorRecipeLearned = function(armorId, recipeId){
    if(!this._armorRecipesLearned[armorId]) {this._armorRecipesLearned[armorId] = []; return false;}
    if (recipeId) {
        return (!!$dataArmors[armorId]._recipes[recipeId].isLearned())
    } else {
        return ($dataArmors[armorId]._recipes.filter(function(recipe) {return recipe.isLearned()}).length > 0);
    }
}

Game_Party.prototype.learnItemRecipe = function(itemId, recipeId) {
    if (recipeId) {
        this._itemRecipesLearned[itemId][recipeId] = true;
    } else {
        if(!this._itemRecipesLearned[itemId]) this._itemRecipesLearned[itemId] = []; $dataItems[itemId]._recipes.forEach(function(recipe, recipeIndex){this._itemRecipesLearned[itemId][recipeIndex] = true;}, this);
    }
}

Game_Party.prototype.learnWeaponRecipe = function(weaponId, recipeId) {
    if (recipeId) {
        this._weaponRecipesLearned[weaponId][recipeId] = true;
    } else {
        if(!this._weaponRecipesLearned[weaponId]) this._weaponRecipesLearned[weaponId] = []; $dataWeapons[weaponId]._recipes.forEach(function(recipe, recipeIndex){this._weaponRecipesLearned[weaponId][recipeIndex] = true;}, this);
    }
}

Game_Party.prototype.learnArmorRecipe = function(armorId, recipeId) {
    if (recipeId) {
        this._armorRecipesLearned[armorId][recipeId] = true;
    } else {
        if(!this._armorRecipesLearned[armorId]) this._armorRecipesLearned[armorId] = []; $dataArmors[armorId]._recipes.forEach(function(recipe, recipeIndex){this._armorRecipesLearned[armorId][recipeIndex] = true;}, this);
    }
}

//Item_Recipe class
function Item_Recipes() {
    this.initialize.apply(this, arguments);
}

Item_Recipes.prototype.initialize = function(itemType, itemId, index) {
    this._disciplines = [];
    this._categories = [];
    this._ingredients = [];
    this._requirements = [];
    this._results = [];
    this._learned = [];
    this._item = [itemType, itemId];
    this._recipeIndex = index;
    this._seName = '';
    this._seVol = YR.ItemCraft.baseVol;
    this._sePitch = YR.ItemCraft.basePitch;
    this._sePan = YR.ItemCraft.basePan;
};

Item_Recipes.prototype.isFromDiscipline = function(disciplineId) {
    return this._disciplines.contains(disciplineId+1);
}

Item_Recipes.prototype.isFromDisciplineCategory = function(disciplineId, categoryName) {
    var value = false;
    this._categories.forEach(function(category) {
        if (category[0] === disciplineId && String(category[1]) === String(categoryName)) value = true;
    }, this);
    return value;
}

Item_Recipes.prototype.isLearned = function() {
    var value = false;
    this._learned.forEach(function(learned) {
        if (learned === "start") value = true;
        if ($gameParty._discLevel[learned[0]-1] >= learned[1]) value = true;
    }, this);
    if (value) return true;
    if (this._item[0] === "item") var recipeList = $gameParty._itemRecipesLearned;
    else if (this._item[0] === "weapon") var recipeList = $gameParty._weaponRecipesLearned;
    else if (this._item[0] === "armor") var recipeList = $gameParty._armorRecipesLearned;
    return (recipeList[this._item[1]] && recipeList[this._item[1]][this._recipeIndex]);
}

Item_Recipes.prototype.isCraftable = function(quantity) {
    var numbQuant = quantity || 1;
    var value = true;
    this._ingredients.forEach(function(ingredient) {
        if (ingredient[0] === "item") {
            var item = $dataItems[ingredient[1]];
            if (Imported.YEP_ItemCore && DataManager.isIndependent(item)) {
                if ($gameParty.numIndependentItems(item) < numbQuant * ingredient[2]) value = false;
            } else {
                if ($gameParty.numItems(item) < numbQuant * ingredient[2]) value = false;
            }
        } else if (ingredient[0] === "weapon") {
            var item = $dataWeapons[ingredient[1]];
            if (Imported.YEP_ItemCore && DataManager.isIndependent(item)) {
                if ($gameParty.numIndependentItems(item) < numbQuant * ingredient[2]) value = false;
            } else {
                if ($gameParty.numItems(item) < numbQuant * ingredient[2]) value = false;
            }
        } else if (ingredient[0] === "armor") {
            var item = $dataArmors[ingredient[1]];
            if (Imported.YEP_ItemCore && DataManager.isIndependent(item)) {
                if ($gameParty.numIndependentItems(item) < numbQuant * ingredient[2]) value = false;
            } else {
                if ($gameParty.numItems(item) < numbQuant * ingredient[2]) value = false;
            }
        } else if (ingredient[0] === "gold") {
            if ($gameParty.gold() < numbQuant * ingredient[1]) value = false;
        } else if (ingredient[0] === "variable") {
            if ($gameVariables.value(ingredient[1]) < numbQuant * ingredient[2]) value = false;
        }
    }, this);
    
    this._requirements.forEach(function(requirement) {
        if (requirement[0] === "item") {
            var item = $dataItems[requirement[1]];
            if (Imported.YEP_ItemCore && DataManager.isIndependent(item)) {
                if ($gameParty.numIndependentItems(item) < requirement[2]) value = false;
            } else {
                if ($gameParty.numItems(item) < requirement[2]) value = false;
            }
        } else if (requirement[0] === "weapon") {
            var item = $dataWeapons[requirement[1]];
            if (Imported.YEP_ItemCore && DataManager.isIndependent(item)) {
                if ($gameParty.numIndependentItems(item) < requirement[2]) value = false;
            } else {
                if ($gameParty.numItems(item) < requirement[2]) value = false;
            }
        } else if (requirement[0] === "armor") {
            var item = $dataArmors[requirement[1]];
            if (Imported.YEP_ItemCore && DataManager.isIndependent(item)) {
                if ($gameParty.numIndependentItems(item) < requirement[2]) value = false;
            } else {
                if ($gameParty.numItems(item) < requirement[2]) value = false;
            }
        } else if (requirement[0] === "gold") {
            if ($gameParty.gold() < requirement[1]) value = false;
        } else if (requirement[0] === "variable") {
            if ($gameVariables.value(requirement[1]) < requirement[2]) value = false;
        } else if (requirement[0] === "discipline") {
            if ($gameParty._discLevel[requirement[1]-1] < requirement[2]) value = false;
        } else if (requirement[0] === "eval") {
            if (!eval(requirement[1])) value = false;
        }
    }, this);

    if (Imported.YEP_ItemCore) {
        var resultItems = 0;
        var resultWeapons = 0;
        var resultArmors = 0;
        this._results.forEach(function(result) {
            if (result[0] === "item") {
                if (DataManager.isIndependent($dataItems[result[1]]) && (resultItems + (result[2] * numbQuant)) + $gameParty.items().length > Yanfly.Param.ItemMaxItems) {
                    value = false;
                    return;
                } else if (DataManager.isIndependent($dataItems[result[1]])) {
                    resultItems += (result[2] * numbQuant);
                } else if (Yanfly.Param.ItemMaxItems > 0) {
                    if (!($gameParty.hasItem($dataItems[result[1]])) && (resultItems + 1) + $gameParty.items().length > Yanfly.Param.ItemMaxItems) {
                        value = false;
                        return;
                    } else if ($gameParty.numItems($dataItems[result[1]]) + (result[2] * numbQuant) > $gameParty.maxItems($dataItems[result[1]])) {
                        value = false;
                        return;
                    } else if (!($gameParty.hasItem($dataItems[result[1]]))) resultItems++;
                } else if ($gameParty.numItems($dataItems[result[1]]) + (result[2] * numbQuant) > $gameParty.maxItems($dataItems[result[1]])) {
                    value = false;
                    return;
                }
            } else if (result[0] === "weapon") {
                if (DataManager.isIndependent($dataWeapons[result[1]]) && (resultWeapons + (result[2] * numbQuant)) + $gameParty.weapons().length > Yanfly.Param.ItemMaxWeapons) {
                    value = false;
                    return;
                } else if (DataManager.isIndependent($dataWeapons[result[1]])) {
                    resultWeapons += (result[2] * numbQuant);
                } else if (Yanfly.Param.ItemMaxWeapons > 0) {
                    if (!($gameParty.hasItem($dataWeapons[result[1]])) && (resultWeapons + 1) + $gameParty.weapons().length > Yanfly.Param.ItemMaxWeapons) {
                        value = false;
                        return;
                    } else if ($gameParty.numItems($dataWeapons[result[1]]) + (result[2] * numbQuant) > $gameParty.maxItems($dataWeapons[result[1]])) {
                        value = false;
                        return;
                    } else if (!($gameParty.hasItem($dataWeapons[result[1]]))) resultWeapons++;
                } else if ($gameParty.numItems($dataWeapons[result[1]]) + (result[2] * numbQuant) > $gameParty.maxItems($dataWeapons[result[1]])) {
                    value = false;
                    return;
                }
            } else if (result[0] === "armor") {
                if (DataManager.isIndependent($dataArmors[result[1]]) && (resultArmors + (result[2] * numbQuant)) + $gameParty.armors().length > Yanfly.Param.ItemMaxArmors) {
                    value = false;
                    return;
                } else if (DataManager.isIndependent($dataArmors[result[1]])) {
                    resultArmors += (result[2] * numbQuant);
                } else if (Yanfly.Param.ItemMaxArmors > 0) {
                    if (!($gameParty.hasItem($dataArmors[result[1]])) && (resultArmors + 1) + $gameParty.armors().length > Yanfly.Param.ItemMaxArmors) {
                        value = false;
                        return;
                    } else if ($gameParty.numItems($dataArmors[result[1]]) + (result[2] * numbQuant) > $gameParty.maxItems($dataArmors[result[1]])) {
                        value = false;
                        return;
                    } else if (!($gameParty.hasItem($dataArmors[result[1]]))) resultArmors++;
                } else if ($gameParty.numItems($dataArmors[result[1]]) + (result[2] * numbQuant) > $gameParty.maxItems($dataArmors[result[1]])) {
                    value = false;
                    return;
                }
            }
        }, this);
    } else {
        this._results.forEach(function(result) {
            if (result[0] === "item") {
                if ($gameParty.numItems($dataItems[result[1]]) + (result[2] * numbQuant) > $gameParty.maxItems($dataItems[result[1]])) {
                    value = false;
                    return;
                }
            } else if (result[0] === "weapon") {
                if ($gameParty.numItems($dataWeapons[result[1]]) + (result[2] * numbQuant) > $gameParty.maxItems($dataWeapons[result[1]])) {
                    value = false;
                    return;
                }
            } else if (result[0] === "armor") {
                if ($gameParty.numItems($dataArmors[result[1]]) + (result[2] * numbQuant) > $gameParty.maxItems($dataArmors[result[1]])) {
                    value = false;
                    return;
                }
            }
        }, this);
    }

    return value;
}

Item_Recipes.prototype.nonIndependentIngredients = function () {
    var arrayNonIndependent = [];
    this._ingredients.forEach(function(ingredient) {
        if (ingredient[0] === "item") {
            var item = $dataItems[ingredient[1]];
            if (!Imported.YEP_ItemCore || !DataManager.isIndependent(item)) {
                arrayNonIndependent.push(ingredient);
            }
        } else if (ingredient[0] === "weapon") {
            var item = $dataWeapons[ingredient[1]];
            if (!Imported.YEP_ItemCore || !DataManager.isIndependent(item)) {
                arrayNonIndependent.push(ingredient);
            }
        } else if (ingredient[0] === "armor") {
            var item = $dataArmors[ingredient[1]];
            if (!Imported.YEP_ItemCore || !DataManager.isIndependent(item)) {
                arrayNonIndependent.push(ingredient);
            }
        } else if (ingredient[0] === "gold") {
            arrayNonIndependent.push(ingredient);
        } else if (ingredient[0] === "variable") {
            arrayNonIndependent.push(ingredient);
        }
    }, this);

    return arrayNonIndependent;
}

Item_Recipes.prototype.independentIngredients = function () {
    if (!Imported.YEP_ItemCore) return [];

    var arrayIndependent = [];
    this._ingredients.forEach(function(ingredient) {
        if (ingredient[0] === "item") {
            var item = $dataItems[ingredient[1]];
        } else if (ingredient[0] === "weapon") {
            var item = $dataWeapons[ingredient[1]];
        } else if (ingredient[0] === "armor") {
            var item = $dataArmors[ingredient[1]];
        }
        
        if (DataManager.isIndependent(item)) {
            for (var i = 0; i < ingredient[2]; i++) arrayIndependent.push(ingredient);
        }
    }, this);
    
    return arrayIndependent;
}



//Adding command to menu
YR.ItemCraft.SM_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
    YR.ItemCraft.SM_createCommandWindow.call(this);
    YR.ItemCraft.discs.forEach(function(discipline, i) {
        this._commandWindow.setHandler('YRcraft' + String(i+1), this.commandYRCraft.bind(this, i+1));
    }, this);
};

YR.ItemCraft.WMC_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
    YR.ItemCraft.WMC_addOriginalCommands.apply(this, arguments);
    YR.ItemCraft.discs.forEach(function(discipline, i) {
        var discName = YR.ItemCraft.discs[i].discName;
        if (eval($gameParty._discShow[i])) {
            this.addCommand(discName, 'YRcraft' + String(i+1), eval($gameParty._discEnabled[i]));
        }
    }, this);
};

Scene_Menu.prototype.commandYRCraft = function(disciplineId) {
    $gameParty._selectedDiscipline = disciplineId-1;
    SceneManager.push(Scene_YRCraft);
};


//Scene_YRCraft
function Scene_YRCraft() {
    this.initialize.apply(this, arguments);	
};

Scene_YRCraft.prototype = Object.create(Scene_MenuBase.prototype);
Scene_YRCraft.prototype.constructor = Scene_YRCraft;

Scene_YRCraft.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
    this._disciplineId = $gameParty._selectedDiscipline;
    this._discipline = YR.ItemCraft.discs[this._disciplineId];
    this._recipe = null;
    this._indItem = null;
};

Scene_YRCraft.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createDisciplineWindow();
    if (YR.ItemCraft.showDesc) this.createDescriptionWindow();
    this.createRecipeListWindow();
    this.createRecipeInfoWindow();
    this.createQuantityWindow();
    if (Imported.YEP_ItemCore) {
        this.createIndependentItemChoiceWindow();
        this._indItemInfoWindows = [];
        this.createIndependentItemListWindow();
        this._indItemInfoVisibility = false;
        this.updateIndItemInfoWindows();
    }
};

Scene_YRCraft.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
    if (this._discipline.discBackground)
        this._backgroundSprite.bitmap = ImageManager.loadSystem(this._discipline.discBackground);
    else
        this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};

Scene_YRCraft.prototype.createDisciplineWindow = function() {
    var x = (Graphics.boxWidth - YR.ItemCraft.discWindowWidth) / 2;
    this._discWindow = new Window_YRCraftDiscipline(x, 0, this._disciplineId);
    this.addWindow(this._discWindow);
};

Scene_YRCraft.prototype.createDescriptionWindow = function() {
    this._descWindow = new Window_Help();
    this.addWindow(this._descWindow);
    if (YR.ItemCraft.descPos) this._descWindow.y = this._discWindow.height;
    else this._descWindow.y = Graphics.boxHeight - this._descWindow.height;
}

Scene_YRCraft.prototype.createRecipeListWindow = function() {
    var x = (Graphics.boxWidth - (YR.ItemCraft.recipeListWidth + YR.ItemCraft.recipeInfoWidth)) / 2;
    var y = this._discWindow.height;
    if (YR.ItemCraft.showDesc && YR.ItemCraft.descPos) y+= this._descWindow.height;
    this._recipeListWindow = new Window_YRCraftRecipeList(x, y, this._disciplineId);
    this._recipeListWindow.setHandler('ok', this.recipeListWindowOk.bind(this));
    this._recipeListWindow.setHandler('cancel', this.recipeListWindowCancel.bind(this));
    this.addWindow(this._recipeListWindow);
    if (YR.ItemCraft.showDesc) {
        this._recipeListWindow._descWindow = this._descWindow;
        this._recipeListWindow._descWindow.refresh();
        if (!YR.ItemCraft.descPos) this._recipeListWindow.height -= this._descWindow.height;
    }
    this._recipeListWindow.select(0);
    this._recipeListWindow.activate();
};

Scene_YRCraft.prototype.createRecipeInfoWindow = function() {
    var x = this._recipeListWindow.x + this._recipeListWindow.width;
    var y = this._discWindow.height;
    if (YR.ItemCraft.showDesc && YR.ItemCraft.descPos) y+= this._descWindow.height;
    this._recipeInfoWindow = new Window_YRCraftRecipeInfo(x, y, this._disciplineId);
    this.addWindow(this._recipeInfoWindow);
    this._recipeListWindow.setHelpWindow(this._recipeInfoWindow);
    this._recipeListWindow.updateHelp();
    if (YR.ItemCraft.showDesc && !YR.ItemCraft.descPos) this._recipeInfoWindow.height -= this._descWindow.height;
};

Scene_YRCraft.prototype.createQuantityWindow = function() {
    this._quantityWindow = new Window_YRCraftQuantity();
    this._quantityWindow.setHandler('ok', this.quantityWindowOk.bind(this));
    this._quantityWindow.setHandler('cancel', this.quantityWindowCancel.bind(this));
    this.addWindow(this._quantityWindow);
    this._quantityWindow.visible = false;
}

Scene_YRCraft.prototype.createIndependentItemChoiceWindow = function() {
    this._indItemChoiceWindow = new Window_YRIndependentItemChoice(this._recipe);
    this._indItemChoiceWindow.setHandler('ok', this.indItemChoiceOk.bind(this));
    this._indItemChoiceWindow.setHandler('cancel', this.indItemChoiceCancel.bind(this));
    this.addWindow(this._indItemChoiceWindow);
    this._indItemChoiceWindow.visible = false;
};

Scene_YRCraft.prototype.createIndependentItemListWindow = function() {
    var x = (Graphics.boxWidth - YR.ItemCraft.indItemListWidth - YR.ItemCraft.indItemInfoWidth)/2;
    var y = (Graphics.boxHeight - YR.ItemCraft.indItemListHeight) / 2;
    var w = YR.ItemCraft.indItemInfoWidth;
    var h = YR.ItemCraft.indItemListHeight;
    this._indItemListWindow = new Window_YRIndependentItemList(x, y);
    x += YR.ItemCraft.indItemListWidth;
    this._indItemStatusWindow = new Window_YRIndependentItemStatus(x, y, w, h);
    if (typeof Window_ItemInfo === 'function') this._itemInfoWindow = new Window_ItemInfo(x, y, w, h);
    else this._itemInfoWindow = new Window_YRItemInfo(x, y, w, h);
    this._indItemListWindow.setHandler('ok', this.indItemListOk.bind(this));
    this._indItemListWindow.setHandler('cancel', this.indItemListCancel.bind(this));
    this.addWindow(this._indItemListWindow);
    this.addWindow(this._indItemStatusWindow);
    this.addWindow(this._itemInfoWindow);
    this._indItemListWindow.setInfoWindow(this._itemInfoWindow);
    this._indItemListWindow.setStatusWindow(this._indItemStatusWindow);
    this._indItemInfoWindows.push(this._indItemStatusWindow);
    this._indItemInfoWindows.push(this._itemInfoWindow);
    this._indItemListWindow.visible = false;
    this._indItemStatusWindow.visible = false;
    this._itemInfoWindow.visible = false;
};

Scene_YRCraft.prototype.update = function() {
    Scene_MenuBase.prototype.update.call(this);
    if (Imported.YEP_ItemCore && this._indItemListWindow.active) this.updateIndItemInfoWindowTriggers();
};

Scene_YRCraft.prototype.updateIndItemInfoWindowTriggers = function() {
    if (!this._indItemInfoVisibility) return;
    if (Input.isRepeated('right')) {
      this.shiftIndItemInfoWindows();
    } else if (Input.isRepeated('left')) {
      this.unshiftIndItemInfoWindows();
    } else if (Input.isRepeated('tab')) {
      this.shiftIndItemInfoWindows();
    } else if (this.isIndItemInfoWindowTouched()) {
      this.shiftIndItemInfoWindows();
    }
};

Scene_YRCraft.prototype.isIndItemInfoWindowTouched = function() {
    if (!TouchInput.isTriggered()) return false;
    var x = TouchInput.x;
    var y = TouchInput.y;
    var rect = new Rectangle();
    rect.x = this._indItemStatusWindow.x;
    rect.y = this._indItemStatusWindow.y;
    rect.width = this._indItemStatusWindow.x + this._indItemStatusWindow.width;
    rect.height = this._indItemStatusWindow.y + this._indItemStatusWindow.height;
    return (x >= rect.x && y >= rect.y && x < rect.width && y < rect.height);
};

Scene_YRCraft.prototype.updateIndItemInfoWindows = function() {
    var length = this._indItemInfoWindows.length;
    for (var i = 0; i < length; ++i) {
      var win = this._indItemInfoWindows[i];
      win.visible = false;
    }
    this._indItemInfoWindows[0].visible = this._indItemInfoVisibility;
};

Scene_YRCraft.prototype.shiftIndItemInfoWindows = function() {
    var win = this._indItemInfoWindows.shift();
    this._indItemInfoWindows.push(win);
    this.updateIndItemInfoWindows();
    this.playIndItemInfoWindowSound();
};

Scene_YRCraft.prototype.unshiftIndItemInfoWindows = function() {
    var win = this._indItemInfoWindows.pop();
    this._indItemInfoWindows.unshift(win);
    this.updateIndItemInfoWindows();
    this.playIndItemInfoWindowSound();
};

Scene_YRCraft.prototype.playIndItemInfoWindowSound = function() {
    if (this._indItemInfoWindows.length <= 1) return;
    SoundManager.playCursor();
};

Scene_YRCraft.prototype.recipeListWindowOk = function() {
    var recipe = this._recipeInfoWindow.item(this._recipeInfoWindow.index());
    if (recipe && recipe.isCraftable(1) && !recipe.independentIngredients().length) {
        this._recipeListWindow.deactivate();
        this._quantityWindow._ingredients = recipe._ingredients;
		this._quantityWindow.show();
		this._quantityWindow.activate();
		this._quantityWindow.showButtons();
		this._quantityWindow.select(0);
    } else if (recipe && recipe.isCraftable(1)) {
        this._recipeListWindow.deactivate();
        this._indItemChoiceWindow.nonIndIng = recipe.nonIndependentIngredients();
        this._indItemChoiceWindow.indIng = recipe.independentIngredients();
        this._indItemChoiceWindow.indIngSet = [];
        this._indItemChoiceWindow.show();
		this._indItemChoiceWindow.activate();
		this._indItemChoiceWindow.select(0);
    } else {
        this._recipeListWindow.playBuzzerSound();
        this._recipeListWindow.activate();
    }
}

Scene_YRCraft.prototype.recipeListWindowCancel = function() {
    $gameParty._discCategoriesOpen[this._disciplineId] = this._recipeListWindow._categoriesOpen;
    this.popScene();
}

Scene_YRCraft.prototype.quantityWindowOk = function() {
    var recipe = this._recipeInfoWindow.item(this._recipeInfoWindow.index());
    if (recipe.isCraftable(this._quantityWindow._multiplier)) {
        this.playCraftSound();
        var ingredients = recipe.nonIndependentIngredients();
        ingredients.forEach(function(ing) {
            if (ing[0] === "item" || ing[0] === "weapon" || ing[0] === "armor") {
                if (ing[0] === "item") var ingItem = $dataItems[ing[1]];
                if (ing[0] === "weapon") var ingItem = $dataWeapons[ing[1]];
                if (ing[0] === "armor") var ingItem = $dataArmors[ing[1]];
                $gameParty.loseItem(ingItem, this._quantityWindow._multiplier * ing[2], true);
            } else if (ing[0] === "gold") $gameParty.gainGold(-1 * ing[1] * this._quantityWindow._multiplier);
            else if (ing[1] === "variable") $gameVariables.setValue(ing[1], $gameVariables.value(ing[1]) - ing[2] * this._quantityWindow._multiplier);
        }, this);

        var results = recipe._results;
        results.forEach(function(res) {
            if (res[0] === "item") {
                $gameParty.gainItem($dataItems[res[1]], res[2] * this._quantityWindow._multiplier, true);
            }
            else if (res[0] === "weapon") {
                $gameParty.gainItem($dataWeapons[res[1]], res[2] * this._quantityWindow._multiplier, true);
            }
            else if (res[0] === "armor") {
                $gameParty.gainItem($dataArmors[res[1]], res[2] * this._quantityWindow._multiplier, true);
            }
            else if (res[0] === "gold") {
                $gameParty.gainGold(res[1] * this._quantityWindow._multiplier);
            }
            else if (res[0] === "variable") {
                $gameVariables.setValue(res[1], $gameVariables.value(res[1]) + res[2] * this._quantityWindow._multiplier);
            }
            else if (res[0] === "eval") {
                for (var i = 0; i < this._quantityWindow._multiplier; i++) {
                    eval(res[1]);
                }
            }
            else if (res[0] === "discipline") {
                $gameParty.increaseDiscExp(res[1], res[2] * this._quantityWindow._multiplier);
                this._discWindow.refresh();
            }
        }, this);
        if (recipe._item[0] === "item") {
            var maskedArray = $gameParty._itemUnmasked;
        }
        if (recipe._item[0] === "weapon") {
            var maskedArray = $gameParty._weaponUnmasked;
        }
        if (recipe._item[0] === "armor") {
            var maskedArray = $gameParty._armorUnmasked;
        }
        maskedArray[recipe._item[1]] = true;

        this._recipeListWindow.refresh();
        this._quantityWindow.refresh();
		this._quantityWindow.select(0);
        this._quantityWindow._multiplier = 1;
        this._quantityWindow.hideButtons();
        this._quantityWindow.hide();
        this._recipeListWindow.activate();
    } else {
        this._quantityWindow.playBuzzerSound();
		this._quantityWindow.activate();
		this._quantityWindow.select(0);
    }
}

Scene_YRCraft.prototype.quantityWindowCancel = function() {
    this._quantityWindow.deselect();
    this._quantityWindow.deactivate();
    this._quantityWindow._multiplier = 1;
    this._quantityWindow.hideButtons();
    this._quantityWindow.hide();
    this._recipeListWindow.activate();
}

Scene_YRCraft.prototype.indItemChoiceOk = function() {
    var recipe = this._recipeInfoWindow.item(this._recipeInfoWindow.index());
    if (this._indItemChoiceWindow.index() === this._indItemChoiceWindow.maxItems()-1) {
        if (this._indItemChoiceWindow.isReadyToCraft()) {
            this.playCraftSound();
            var ingredients = recipe.nonIndependentIngredients();
            ingredients.forEach(function(ing) {
                if (ing[0] === "item" || ing[0] === "weapon" || ing[0] === "armor") {
                    if (ing[0] === "item") var ingItem = $dataItems[ing[1]];
                    if (ing[0] === "weapon") var ingItem = $dataWeapons[ing[1]];
                    if (ing[0] === "armor") var ingItem = $dataArmors[ing[1]];
                    $gameParty.loseItem(ingItem, this._quantityWindow._multiplier * ing[2], true);
                } else if (ing[0] === "gold") $gameParty.gainGold(-1 * ing[1] * this._quantityWindow._multiplier);
                else if (ing[1] === "variable") $gameVariables.setValue(ing[1], $gameVariables.value(ing[1]) - ing[2] * this._quantityWindow._multiplier);
            }, this);

            this._indItemChoiceWindow.indIng.forEach(function(ing, indexItem) {
                if (ing[0] === "item") var database = $dataItems;
                if (ing[0] === "weapon") var database = $dataWeapons;
                if (ing[0] === "armor") var database = $dataArmors;
                var removedItem = database[this._indItemChoiceWindow.indIngSet[indexItem]];
                if (Imported.YEP_X_AttachAugments) ItemManager.removeAllAugments(removedItem);
                $gameParty.loseItem(removedItem, 1, true);
            }, this);

            var results = recipe._results;
            results.forEach(function(res) {
                if (res[0] === "item") {
                    $gameParty.gainItem($dataItems[res[1]], res[2], true);
                }
                else if (res[0] === "weapon") {
                    $gameParty.gainItem($dataWeapons[res[1]], res[2], true);
                }
                else if (res[0] === "armor") {
                    $gameParty.gainItem($dataArmors[res[1]], res[2], true);
                }
                else if (res[0] === "gold") {
                    $gameParty.gainGold(res[1]);
                }
                else if (res[0] === "variable") {
                    $gameVariables.setValue(res[1], $gameVariables.value(res[1]) + res[2]);
                }
                else if (res[0] === "eval") {
                    eval(res[1]);
                }
                else if (res[0] === "discipline") {
                    $gameParty.increaseDiscExp(res[1], res[2]);
                    this._discWindow.refresh();
                }
            }, this);
                
            if (recipe._item[0] === "item") {
                var maskedArray = $gameParty._itemUnmasked;
            }
            if (recipe._item[0] === "weapon") {
                var maskedArray = $gameParty._weaponUnmasked;
            }
            if (recipe._item[0] === "armor") {
                var maskedArray = $gameParty._armorUnmasked;
            }
            maskedArray[recipe._item[1]] = true;

            this._indItemChoiceWindow.indIngSet = [];

            this._recipeListWindow.refresh();
            this._indItemChoiceWindow.deselect();
            this._indItemChoiceWindow.deactivate();
            this._indItemChoiceWindow._multiplier = 1;
            this._indItemChoiceWindow.hide();
            this._recipeListWindow.activate();
        } else {
            this._indItemChoiceWindow.playBuzzerSound();
            this._indItemChoiceWindow.activate();
            this._indItemChoiceWindow.select(0);
        }
    } else {
        this._indItemChoiceWindow.deactivate();
        this._indItemListWindow.indIng = this._indItemChoiceWindow.indIng[this._indItemChoiceWindow.index()];
        this._indItemListWindow.indIngSet = this._indItemChoiceWindow.indIngSet;
        this._indItemListWindow.show();
        this._indItemInfoVisibility = true;
        this.updateIndItemInfoWindows();
		this._indItemListWindow.activate();
        this._indItemListWindow.select(0);
    }
}

Scene_YRCraft.prototype.indItemChoiceCancel = function() {
    this._indItemChoiceWindow.deselect();
    this._indItemChoiceWindow.deactivate();
    this._indItemChoiceWindow._multiplier = 1;
    this._indItemChoiceWindow.hide();
    this._recipeListWindow.activate();
}

Scene_YRCraft.prototype.indItemListOk = function() {
    this._indItemChoiceWindow.indIngSet[this._indItemChoiceWindow.index()] = this._indItemListWindow.item(this._indItemListWindow.index()).id;
    this._indItemListWindow.deselect();
    this._indItemListWindow.deactivate();
    this._indItemListWindow._multiplier = 1;
    this._indItemListWindow.hide();
    this._indItemStatusWindow.hide();
    this._itemInfoWindow.hide();
    this._indItemInfoVisibility = false;
    this._indItemChoiceWindow.refresh();
    this._indItemChoiceWindow.activate();
}

Scene_YRCraft.prototype.indItemListCancel = function() {
    this._indItemListWindow.deselect();
    this._indItemListWindow.deactivate();
    this._indItemListWindow._multiplier = 1;
    this._indItemListWindow.hide();
    this._indItemStatusWindow.hide();
    this._itemInfoWindow.hide();
    this._indItemInfoVisibility = false;
    this._indItemChoiceWindow.activate();
}

Scene_YRCraft.prototype.playCraftSound = function() {
    var recipe = this._recipeInfoWindow.item(this._recipeInfoWindow.index());
    if (recipe._seName === '') {
        var se = {
        name: this._discipline.discSE,
        volume: this._discipline.discVol,
        pitch: this._discipline.discPitch,
        pan: this._discipline.discPan
        }
    } else {
        var se = {
            name: recipe._seName,
            volume: recipe._seVol,
            pitch: recipe._sePitch,
            pan: recipe._sePan
            }
    }
    AudioManager.playSe(se);
};


//Window_YRCraftRecipeList
function Window_YRCraftRecipeList() {
    this.initialize.apply(this, arguments);	
};

Window_YRCraftRecipeList.prototype = Object.create(Window_Selectable.prototype);
Window_YRCraftRecipeList.prototype.constructor = Window_YRCraftRecipeList;

Window_YRCraftRecipeList.prototype.initialize = function(x, y, disciplineId) {
    this._disciplineId = disciplineId;
    this._discipline = YR.ItemCraft.discs[disciplineId];
    this._categories = this._discipline.discCategories;
    this._categoriesOpen = $gameParty._discCategoriesOpen[this._disciplineId];
    this._categoriesRecipes = [];
    this._noCategoriesRecipes = [];
    var width = YR.ItemCraft.recipeListWidth;
    var height = Graphics.boxHeight - y;
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_YRCraftRecipeList.prototype.refresh = function() {
    this.calculateCategories();
    Window_Selectable.prototype.refresh.call(this);
}

Window_YRCraftRecipeList.prototype.calculateCategories = function() {
    this._categoriesRecipes = [];
    this._noCategoriesRecipes = [];
    var settled = false;
    $dataItems.forEach(function(item, i) {
        if (!item) return;
        if (item._recipes.length === 0) return;
        if (Imported.YEP_ItemCore && i > Yanfly.Param.ItemStartingId) return;
        item._recipes.forEach(function(recipe) {
            if (!recipe.isFromDiscipline(this._disciplineId) || !recipe.isLearned()) return;
            if (recipe._categories.length === 0) this._noCategoriesRecipes.push(recipe);
            else if (this._categories) {
                this._categories.forEach(function(category, i) {
                    if (recipe.isFromDisciplineCategory(this._disciplineId+1, category)) {
                        this._categoriesRecipes[i] = this._categoriesRecipes[i] || [];
                        this._categoriesRecipes[i].push(recipe);
                        settled = true;
                    }
                }, this);
                if (!settled) {this._noCategoriesRecipes.push(recipe);
                settled = false;}
            } else this._noCategoriesRecipes.push(recipe);
        }, this);
    }, this);
    $dataWeapons.forEach(function(item) {
        if (!item) return;
        if (item._recipes.length === 0) return;
        item._recipes.forEach(function(recipe) {
            if (!recipe.isFromDiscipline(this._disciplineId) || !recipe.isLearned()) return;
            if (recipe._categories.length === 0) this._noCategoriesRecipes.push(recipe);
            else if (this._categories) {
                this._categories.forEach(function(category, i) {
                    if (recipe.isFromDisciplineCategory(this._disciplineId+1, category)) {
                        this._categoriesRecipes[i] = this._categoriesRecipes[i] || [];
                        this._categoriesRecipes[i].push(recipe);
                        settled = true;
                    }
                }, this);
                if (!settled) {this._noCategoriesRecipes.push(recipe);
                settled = false;}
            } else this._noCategoriesRecipes.push(recipe);
        }, this);
    }, this);
    $dataArmors.forEach(function(item) {
        if (!item) return;
        if (item._recipes.length === 0) return;
        item._recipes.forEach(function(recipe) {
            if (!recipe.isFromDiscipline(this._disciplineId) || !recipe.isLearned()) return;
            if (recipe._categories.length === 0) this._noCategoriesRecipes.push(recipe);
            else if (this._categories) {
                this._categories.forEach(function(category, i) {
                    if (recipe.isFromDisciplineCategory(this._disciplineId+1, category)) {
                        this._categoriesRecipes[i] = this._categoriesRecipes[i] || [];
                        this._categoriesRecipes[i].push(recipe);
                        settled = true;
                    }
                }, this);
                if (!settled) {this._noCategoriesRecipes.push(recipe);
                settled = false;}
            } else this._noCategoriesRecipes.push(recipe);
        }, this);
    }, this);

    this._noCategoriesRecipes = this._noCategoriesRecipes.filter(this.filterCategoryRecipes);
    this._categoriesRecipes.forEach(function(category, i) {
        if (category.length) this._categoriesRecipes[i] = category.filter(this.filterCategoryRecipes);
    }, this);
};

Window_YRCraftRecipeList.prototype.filterCategoryRecipes = function(value, index, self) {
    for (var i = index + 1; i < self.length; i++) {
        if (self[i]._item[0] === value._item[0] && self[i]._item[1] === value._item[1]) return false;
    }
    return true;
}

Window_YRCraftRecipeList.prototype.maxItems = function() {
    var items = 0;
    items += this._noCategoriesRecipes.length;
    this._categoriesRecipes.forEach(function(category, i) {
        if (category.length && this._categoriesOpen[i]) items += category.length + 1;
        else if (category.length) items++;
    }, this);
    
    return items;
};

Window_YRCraftRecipeList.prototype.item = function(index) {
    if (index < this._noCategoriesRecipes.length) return this._noCategoriesRecipes[index]._item;

    var itemCount = this._noCategoriesRecipes.length;

    for (var i = 0; i < this._categoriesRecipes.length; i++) {
        if (!this._categoriesRecipes[i] || !this._categoriesRecipes[i].length) continue;

        if (itemCount === index) return ["category", i];
        itemCount++;

        if (this._categoriesOpen[i] && index < itemCount + this._categoriesRecipes[i].length) {
            return this._categoriesRecipes[i][index - itemCount]._item;
        }
        if (this._categoriesOpen[i]) itemCount += this._categoriesRecipes[i].length;
    }
    return null;
};

Window_YRCraftRecipeList.prototype.drawItem = function(index) {
    var item = this.item(index);
    if (item) {
        var rect = this.itemRectForText(index);

        if (item[0] === "category") {
            if (this._categoriesOpen[item[1]]) text = YR.ItemCraft.openCategory + " " + this._categories[item[1]];
            if (!this._categoriesOpen[item[1]]) text = YR.ItemCraft.closedCategory + " " + this._categories[item[1]];
            this.changeTextColor(YR.ItemCraft.categColor);
            this.drawText(text, rect.x + this.textPadding(), rect.y);
            this.resetTextColor();
        } else {
            if (item[0] === "item") {
                item = $dataItems[item[1]];
                var maskedArray = $gameParty._itemUnmasked;
            }
            else if (item[0] === "weapon") {
                item = $dataWeapons[item[1]];
                var maskedArray = $gameParty._weaponUnmasked;
            }
            else if (item[0] === "armor") {
                item = $dataArmors[item[1]];
                var maskedArray = $gameParty._armorUnmasked;
            }

            if (maskedArray && maskedArray[item.id]) var masked = false;
            else var masked = item.masked;

            if (masked) {
                this.drawIcon(item.maskIcon, rect.x+15, rect.y+2);
                this.drawText(item.maskText, rect.x+15+4+Window_Base._iconWidth, rect.y);
                this.resetTextColor();
            } else {
                this.drawIcon(item.iconIndex, rect.x+15, rect.y+2);
                this.drawText(item.name, rect.x+15+4+Window_Base._iconWidth, rect.y);
            }
        }
    }
};

Window_YRCraftRecipeList.prototype.processOk = function() {
    var item = this.item(this._index);
    if (!item) return;
    if (item[0] === "category") {
        this._categoriesOpen[item[1]] = !this._categoriesOpen[item[1]];
        this.refresh();
    } else {
        var recipe = SceneManager._scene._recipeInfoWindow.item(SceneManager._scene._recipeInfoWindow.index());
        if (this.isCurrentItemEnabled() && recipe && recipe.isCraftable(1)) {
            this.playOkSound();
            this.updateInputData();
            this.deactivate();
            this.callOkHandler();
        } else {
            this.playBuzzerSound();
        }
    }
};

Window_YRCraftRecipeList.prototype.setHelpWindow = function(helpWindow) {
    this._helpWindow = helpWindow;
};

Window_YRCraftRecipeList.prototype.updateHelp = function() {
    this._helpWindow.setItem(this.item(this.index()));
    if (YR.ItemCraft.showDesc) this.updateDesc();
};

Window_YRCraftRecipeList.prototype.updateDesc = function() {
    var item = this.item(this.index());
    var unmasked = false;
    if (!item) this._item = null;
    else if (item[0] === "item") {
        item = $dataItems[item[1]];
        var maskedArray = $gameParty._itemUnmasked;
    }
    else if (item[0] === "weapon") {
        item = $dataWeapons[item[1]];
        var maskedArray = $gameParty._weaponUnmasked;
    }
    else if (item[0] === "armor") {
        item = $dataArmors[item[1]];
        var maskedArray = $gameParty._armorUnmasked;
    }
    else this._item = null;
    if (item) {
        if (maskedArray && maskedArray[item.id]) unmasked = true;
        else unmasked = !item.masked;
    }
    if (!YR.ItemCraft.maskDesc || unmasked) this._descWindow.setItem(item);
    else this._descWindow.setItem(null);
};

Window_YRCraftRecipeList.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        var lastIndex = this.index();
        var helpIndex = this._helpWindow.index()
        if (Input.isRepeated('down')) {
            this.cursorDown(Input.isTriggered('down'));
            if (YR.ItemCraft.showDesc) this._descWindow.refresh();
        }
        if (Input.isRepeated('up')) {
            this.cursorUp(Input.isTriggered('up'));
            if (YR.ItemCraft.showDesc) this._descWindow.refresh();
        }
        if (Input.isRepeated('right')) {
            this._helpWindow.cursorRight(Input.isTriggered('right'));
            this._helpWindow.refresh();
        }
        if (Input.isRepeated('left')) {
            this._helpWindow.cursorLeft(Input.isTriggered('left'));
            this._helpWindow.refresh();
        }
        if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
            this.cursorPagedown();
        }
        if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
            this.cursorPageup();
        }
        if (this.isRecipeInfoWindowTouched()) {
            this._helpWindow.cursorRight(true);
            this._helpWindow.refresh();
        }
        if ((this.index() !== lastIndex) || (this._helpWindow.index() !== helpIndex)) {
            SoundManager.playCursor();
        }
    }
};

Window_YRCraftRecipeList.prototype.isRecipeInfoWindowTouched = function() {
    if (!TouchInput.isTriggered()) return false;
    var x = TouchInput.x;
    var y = TouchInput.y;
    var rect = new Rectangle();
    rect.x = this._helpWindow.x;
    rect.y = this._helpWindow.y;
    rect.width = this._helpWindow.x + this._helpWindow.width;
    rect.height = this._helpWindow.y + this._helpWindow.height;
    return (x >= rect.x && y >= rect.y && x < rect.width && y < rect.height);
};


//Window_YRCraftDiscipline
function Window_YRCraftDiscipline() {
    this.initialize.apply(this, arguments);	
};

Window_YRCraftDiscipline.prototype = Object.create(Window_Base.prototype);
Window_YRCraftDiscipline.prototype.constructor = Window_YRCraftDiscipline;

Window_YRCraftDiscipline.prototype.initialize = function(x, y, disciplineId) {
    this._disciplineId = disciplineId;
    this._discipline = YR.ItemCraft.discs[disciplineId];
    var width = YR.ItemCraft.discWindowWidth;
    var height = (this._discipline.discMaxLevel < 2) ? this.fittingHeight(1) : this.fittingHeight(2);
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_YRCraftDiscipline.prototype.refresh = function() {
    this.contents.clear();
    var name = this._discipline.discName;
    var txtWdth = this.textWidth(name) + Window_Base._iconWidth+4;
    var space = this.width - (this.standardPadding() * 2);
    this.changeTextColor(this._discipline.discColor);
    this.drawIcon(this._discipline.discIcon, space/2 - txtWdth/2, 2);
    this.drawText(name, space/2 - txtWdth/2 + Window_Base._iconWidth + 4, 0);
    this.resetTextColor();
    
    if (this._discipline.discMaxLevel > 1) {
        if ($gameParty._discLevel[this._disciplineId] >= this._discipline.discMaxLevel) {
            this.drawGauge(space/2 - YR.ItemCraft.discGaugeWidth/2, this.lineHeight(), YR.ItemCraft.discGaugeWidth, 1, this._discipline.discGaugeColor1, this._discipline.discGaugeColor2);
            this.drawText(String(YR.ItemCraft.textLevel) + " " + String(YR.ItemCraft.textMaxLevel), space/2 - YR.ItemCraft.discGaugeWidth/2, this.lineHeight());
        } else {
            var exp = $gameParty._discExp[this._disciplineId];
            var cExp = $gameParty.getDisciplineExpForLevel(this._disciplineId, $gameParty._discLevel[this._disciplineId]);
            var nExp = $gameParty.getDisciplineExpForLevel(this._disciplineId, $gameParty._discLevel[this._disciplineId] + 1);
            this.drawGauge(space/2 - YR.ItemCraft.discGaugeWidth/2, this.lineHeight(), YR.ItemCraft.discGaugeWidth, (exp - cExp)/(nExp - cExp), this._discipline.discGaugeColor1, this._discipline.discGaugeColor2);
            var txtExp = String(exp) + "/" + String(nExp);
            var txtExpWidth = this.textWidth(txtExp);
            this.drawText(String(YR.ItemCraft.textLevel) + " " + String($gameParty._discLevel[this._disciplineId]), space/2 - YR.ItemCraft.discGaugeWidth/2, this.lineHeight());
            this.drawText(txtExp, space - ((space-YR.ItemCraft.discGaugeWidth)/2) - txtExpWidth, this.lineHeight());
            }
    }
};


//Window_YRCraftRecipeInfo
function Window_YRCraftRecipeInfo() {
    this.initialize.apply(this, arguments);	
};

Window_YRCraftRecipeInfo.prototype = Object.create(Window_Selectable.prototype);
Window_YRCraftRecipeInfo.prototype.constructor = Window_YRCraftRecipeInfo;

Window_YRCraftRecipeInfo.prototype.initialize = function(x, y, disciplineId) {
    this._item = null;
    this._disciplineId = disciplineId;
    this._discipline = YR.ItemCraft.discs[disciplineId];
    this._recipes = [];
    var width = YR.ItemCraft.recipeInfoWidth;
    var height = Graphics.boxHeight - y;
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_YRCraftRecipeInfo.prototype.setItem = function(item) {
    if (!item) this._item = null;
    else if (item[0] === "item") this._item = $dataItems[item[1]];
    else if (item[0] === "weapon") this._item = $dataWeapons[item[1]];
    else if (item[0] === "armor") this._item = $dataArmors[item[1]];
    else this._item = null;

    if (this._item) {
        this._recipes = this._item._recipes;
        this._recipes = this._recipes.filter(this.filterRecipes, this);
    } else this._recipes = [];
    this.deselect();
    this.refresh();
};

Window_YRCraftRecipeInfo.prototype.filterRecipes = function(value) {
    return value.isFromDiscipline(this._disciplineId) && value.isLearned();
};

Window_YRCraftRecipeInfo.prototype.maxCols = function() {
    return Math.max(1, this.maxItems());
};

Window_YRCraftRecipeInfo.prototype.maxRows = function() {
    return 1;
};

Window_YRCraftRecipeInfo.prototype.itemHeight = function() {
    return Math.floor((this.height - this.padding * 2 +
        this.spacing()) / this.maxRows() - this.spacing());
};

Window_YRCraftRecipeInfo.prototype.maxItems = function() {
    if (!this._item) {
        return 0;
    }
    return this._recipes.length;
};

Window_YRCraftRecipeInfo.prototype.deselect = function() {
    this.select(0);
};

Window_YRCraftRecipeInfo.prototype.item = function(index) {
    return this._recipes[index];
};

Window_YRCraftRecipeInfo.prototype.itemWidth = function() {
    return Math.floor(this.width - this.padding * 2);
};

Window_YRCraftRecipeInfo.prototype.updateCursor = function() {};

Window_YRCraftRecipeInfo.prototype.drawItem = function(index) {
    var item = this.item(index);
    if (item && index === this.index()) {
        var rect = this.itemRect(index);
        var line = 0;

        if (this._recipes.length > 1) {
            var text = String(YR.ItemCraft.textRecipes) + " " + String(index + 1) + "/" + String(this._recipes.length);
            var x = (rect.width - this.textWidth(text)) / 2;
            this.drawText(text, x, line * this.lineHeight());
            line += 2;
        }

        if (item._ingredients.length) {
            if (YR.ItemCraft.textIngredients && YR.ItemCraft.textIngredients.length > 0) {
                var title = YR.ItemCraft.textIngredients;
                this.drawText(title, (rect.width - this.textWidth(title)) / 2, line * this.lineHeight());
                line++;
            }

            item._ingredients.forEach(function(ingredient) {
                if (ingredient[0] === "item") {
                    if ($gameParty.numItems($dataItems[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numItems($dataItems[ingredient[1]]);
                    } else if (Imported.YEP_ItemCore && DataManager.isIndependent($dataItems[ingredient[1]]) && $gameParty.numIndependentItems($dataItems[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numIndependentItems($dataItems[ingredient[1]]);
                    } else {
                        var color = YR.ItemCraft.notOkColor;
                        if (Imported.YEP_ItemCore && DataManager.isIndependent($dataItems[ingredient[1]])) {
                            var number = $gameParty.numIndependentItems($dataItems[ingredient[1]]);
                        } else var number = $gameParty.numItems($dataItems[ingredient[1]]);
                    }
                    this.changeTextColor(color);
                    this.drawIcon($dataItems[ingredient[1]].iconIndex, 0, line * this.lineHeight());
                    this.drawText($dataItems[ingredient[1]].name, Window_Base._iconWidth + 4, line * this.lineHeight());
                    var text = String(number) + "/" + String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                }
                else if (ingredient[0] === "weapon") {
                    if ($gameParty.numItems($dataWeapons[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numItems($dataWeapons[ingredient[1]]);
                    } else if (Imported.YEP_ItemCore && DataManager.isIndependent($dataWeapons[ingredient[1]]) && $gameParty.numIndependentItems($dataWeapons[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numIndependentItems($dataWeapons[ingredient[1]]);
                    } else {
                        var color = YR.ItemCraft.notOkColor;
                        if (Imported.YEP_ItemCore && DataManager.isIndependent($dataWeapons[ingredient[1]])) {
                            var number = $gameParty.numIndependentItems($dataWeapons[ingredient[1]]);
                        } else var number = $gameParty.numItems($dataWeapons[ingredient[1]]);
                    }
                    this.changeTextColor(color);
                    this.drawIcon($dataWeapons[ingredient[1]].iconIndex, 0, line * this.lineHeight());
                    this.drawText($dataWeapons[ingredient[1]].name, Window_Base._iconWidth + 4, line * this.lineHeight());
                    var text = String(number) + "/" + String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                }
                else if (ingredient[0] === "armor") {
                    if ($gameParty.numItems($dataArmors[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numItems($dataArmors[ingredient[1]]);
                    } else if (Imported.YEP_ItemCore && DataManager.isIndependent($dataArmors[ingredient[1]]) && $gameParty.numIndependentItems($dataArmors[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numIndependentItems($dataArmors[ingredient[1]]);
                    } else {
                        var color = YR.ItemCraft.notOkColor;
                        if (Imported.YEP_ItemCore && DataManager.isIndependent($dataArmors[ingredient[1]])) {
                            var number = $gameParty.numIndependentItems($dataArmors[ingredient[1]]);
                        } else var number = $gameParty.numItems($dataArmors[ingredient[1]]);
                    }
                    this.changeTextColor(color);
                    this.drawIcon($dataArmors[ingredient[1]].iconIndex, 0, line * this.lineHeight());
                    this.drawText($dataArmors[ingredient[1]].name, Window_Base._iconWidth + 4, line * this.lineHeight());
                    var text = String(number) + "/" + String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                }
                else if (ingredient[0] === "gold") {
                    if ($gameParty.gold() >= ingredient[1]) {
                        var color = YR.ItemCraft.okColor;
                    } else var color = YR.ItemCraft.notOkColor;
                    this.changeTextColor(color);
                    if (YR.ItemCraft.goldIcon > 0) {
                        this.drawIcon(YR.ItemCraft.goldIcon, 0, line * this.lineHeight());
                        this.drawText(TextManager.currencyUnit, Window_Base._iconWidth + 4, line * this.lineHeight());
                    } else {
                        this.drawText(TextManager.currencyUnit, 0, line * this.lineHeight());
                    }
                    var text = String($gameParty.gold()) + "/" + String(ingredient[1]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                }
                else if (ingredient[0] === "variable") {
                    if ($gameVariables.value(ingredient[1]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                    } else var color = YR.ItemCraft.notOkColor;
                    this.changeTextColor(color);
                    this.drawText($dataSystem.variables[ingredient[1]], this.textPadding(), line * this.lineHeight());
                    var text = String($gameVariables.value(ingredient[1])) + "/" + String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                }
                line++;
            }, this);
            line++;
        }

        if (item._requirements.length) {
            var title = YR.ItemCraft.textRequirements;
            this.drawText(title, (rect.width - this.textWidth(title)) / 2, line * this.lineHeight());
            line++;
            item._requirements.forEach(function(ingredient) {
                if (ingredient[0] === "item") {
                    if ($gameParty.numItems($dataItems[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numItems($dataItems[ingredient[1]]);
                    } else if (Imported.YEP_ItemCore && DataManager.isIndependent($dataItems[ingredient[1]]) && $gameParty.numIndependentItems($dataItems[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numIndependentItems($dataItems[ingredient[1]]);
                    } else {
                        var color = YR.ItemCraft.notOkColor;
                        if (Imported.YEP_ItemCore && DataManager.isIndependent($dataItems[ingredient[1]])) {
                            var number = $gameParty.numIndependentItems($dataItems[ingredient[1]]);
                        } else var number = $gameParty.numItems($dataItems[ingredient[1]]);
                    }
                    this.changeTextColor(color);
                    this.drawIcon($dataItems[ingredient[1]].iconIndex, 0, line * this.lineHeight());
                    this.drawText($dataItems[ingredient[1]].name, Window_Base._iconWidth + 4, line * this.lineHeight());
                    var text = String(number) + "/" + String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                }
                else if (ingredient[0] === "weapon") {
                    if ($gameParty.numItems($dataWeapons[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numItems($dataWeapons[ingredient[1]]);
                    } else if (Imported.YEP_ItemCore && DataManager.isIndependent($dataWeapons[ingredient[1]]) && $gameParty.numIndependentItems($dataWeapons[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numIndependentItems($dataWeapons[ingredient[1]]);
                    } else {
                        var color = YR.ItemCraft.notOkColor;
                        if (Imported.YEP_ItemCore && DataManager.isIndependent($dataWeapons[ingredient[1]])) {
                            var number = $gameParty.numIndependentItems($dataWeapons[ingredient[1]]);
                        } else var number = $gameParty.numItems($dataWeapons[ingredient[1]]);
                    }
                    this.changeTextColor(color);
                    this.drawIcon($dataWeapons[ingredient[1]].iconIndex, 0, line * this.lineHeight());
                    this.drawText($dataWeapons[ingredient[1]].name, Window_Base._iconWidth + 4, line * this.lineHeight());
                    var text = String(number) + "/" + String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                }
                else if (ingredient[0] === "armor") {
                    if ($gameParty.numItems($dataArmors[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numItems($dataArmors[ingredient[1]]);
                    } else if (Imported.YEP_ItemCore && DataManager.isIndependent($dataArmors[ingredient[1]]) && $gameParty.numIndependentItems($dataArmors[ingredient[1]]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                        var number = $gameParty.numIndependentItems($dataArmors[ingredient[1]]);
                    } else {
                        var color = YR.ItemCraft.notOkColor;
                        if (Imported.YEP_ItemCore && DataManager.isIndependent($dataArmors[ingredient[1]])) {
                            var number = $gameParty.numIndependentItems($dataArmors[ingredient[1]]);
                        } else var number = $gameParty.numItems($dataArmors[ingredient[1]]);
                    }
                    this.changeTextColor(color);
                    this.drawIcon($dataArmors[ingredient[1]].iconIndex, 0, line * this.lineHeight());
                    this.drawText($dataArmors[ingredient[1]].name, Window_Base._iconWidth + 4, line * this.lineHeight());
                    var text = String(number) + "/" + String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                }
                else if (ingredient[0] === "gold") {
                    if ($gameParty.gold() >= ingredient[1]) {
                        var color = YR.ItemCraft.okColor;
                    } else var color = YR.ItemCraft.notOkColor;
                    this.changeTextColor(color);
                    if (YR.ItemCraft.goldIcon > 0) {
                        this.drawIcon(YR.ItemCraft.goldIcon, 0, line * this.lineHeight());
                        this.drawText(TextManager.currencyUnit, Window_Base._iconWidth + 4, line * this.lineHeight());
                    } else {
                        this.drawText(TextManager.currencyUnit, this.textPadding(), line * this.lineHeight());
                    }
                    var text = String($gameParty.gold()) + "/" + String(ingredient[1]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                }
                else if (ingredient[0] === "variable") {
                    if ($gameVariables.value(ingredient[1]) >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                    } else var color = YR.ItemCraft.notOkColor;
                    this.changeTextColor(color);
                    this.drawText($dataSystem.variables[ingredient[1]], this.textPadding(), line * this.lineHeight());
                    var text = String($gameVariables.value(ingredient[1])) + "/" + String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                }
                else if (ingredient[0] === "discipline") {
                    if ($gameParty._discLevel[ingredient[1]-1] >= ingredient[2]) {
                        var color = YR.ItemCraft.okColor;
                    } else var color = YR.ItemCraft.notOkColor;
                    this.changeTextColor(color);
                    this.drawIcon(this._discipline.discIcon, 0, line * this.lineHeight());
                    this.drawText(YR.ItemCraft.discs[ingredient[1]-1].discName, Window_Base._iconWidth + 4, line * this.lineHeight());
                    var text = YR.ItemCraft.textLevel + " " + String($gameParty._discLevel[ingredient[1]-1]) + "/" + String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                }
                else if (ingredient[0] === "eval") {
                    if (eval(ingredient[1])) {
                        var color = YR.ItemCraft.okColor;
                    } else var color = YR.ItemCraft.notOkColor;
                    this.changeTextColor(color);
                    this.drawText(ingredient[2], this.textPadding(), line * this.lineHeight());
                    this.resetTextColor();
                }
                line++;
            }, this);
            line++;
        }

        if (item._item[0] === "item") {
            itemSource = $dataItems[item._item[1]];
            var maskedArray = $gameParty._itemUnmasked;
        }
        if (item._item[0] === "weapon") {
            itemSource = $dataWeapons[item._item[1]];
            var maskedArray = $gameParty._weaponUnmasked;
        }
        if (item._item[0] === "armor") {
            itemSource = $dataArmors[item._item[1]];
            var maskedArray = $gameParty._armorUnmasked;
        }
        if (maskedArray[item._item[1]]) var masked = true;
        else var masked = itemSource.masked;
        
        if (!masked) {
            var title = YR.ItemCraft.textResults;
            this.drawText(title, (rect.width - this.textWidth(title)) / 2, line * this.lineHeight());
            line++;
            item._results.forEach(function(ingredient) {
                if (ingredient[0] === "item") {
                    this.drawIcon($dataItems[ingredient[1]].iconIndex, 0, line * this.lineHeight());
                    this.drawText($dataItems[ingredient[1]].name, Window_Base._iconWidth + 4, line * this.lineHeight());
                    var text = String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                }
                else if (ingredient[0] === "weapon") {
                    this.drawIcon($dataWeapons[ingredient[1]].iconIndex, 0, line * this.lineHeight());
                    this.drawText($dataWeapons[ingredient[1]].name, Window_Base._iconWidth + 4, line * this.lineHeight());
                    var text = String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                }
                else if (ingredient[0] === "armor") {
                    this.drawIcon($dataArmors[ingredient[1]].iconIndex, 0, line * this.lineHeight());
                    this.drawText($dataArmors[ingredient[1]].name, Window_Base._iconWidth + 4, line * this.lineHeight());
                    var text = String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                }
                else if (ingredient[0] === "gold") {
                    if (YR.ItemCraft.goldIcon > 0) {
                        this.drawIcon(YR.ItemCraft.goldIcon, 0, line * this.lineHeight());
                        this.drawText(TextManager.currencyUnit, Window_Base._iconWidth + 4, line * this.lineHeight());
                    } else {
                        this.drawText(TextManager.currencyUnit, this.textPadding(), line * this.lineHeight());
                    }
                    var text = String(ingredient[1]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                }
                else if (ingredient[0] === "variable") {
                    this.drawText($dataSystem.variables[ingredient[1]], this.textPadding(), line * this.lineHeight());
                    var text = String(ingredient[2]);
                    var x = rect.width - this.textWidth(text);
                    this.drawText(text, x, line * this.lineHeight());
                }
                else if (ingredient[0] === "eval") {
                    this.drawText(ingredient[2], this.textPadding(), line * this.lineHeight());
                }
                line++;
            }, this);
            line++;
        }
    }
};



//Window_YRCraftQuantity
function Window_YRCraftQuantity() {
    this.initialize.apply(this, arguments);	
};

Window_YRCraftQuantity.prototype = Object.create(Window_Selectable.prototype);
Window_YRCraftQuantity.prototype.constructor = Window_YRCraftQuantity;

Window_YRCraftQuantity.prototype.initialize = function() {
    this._multiplier = 1;
    this._ingredients = [];
    var width = YR.ItemCraft.quantWidth;
    var height = 48 + this.standardPadding() * 2;
    var x = (Graphics.boxWidth - width) / 2;
    var y = (Graphics.boxHeight - height) / 2;
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.createButtons();
    this.placeButtons();
    this.hideButtons();
    this.refresh();
};

Window_YRCraftQuantity.prototype.show = function() {
    var height = 48 + this.standardPadding() * 2
    if (this._ingredients.length) height += (this._ingredients.length + 1) * this.lineHeight();
    var y = (Graphics.boxHeight - height) / 2;
    this.y = y;
    this.height = Math.min(height, YR.ItemCraft.quantHeigth);
    this.createContents();
    this.contents.clear();
    this.placeButtons();
    this.hideButtons();
    this.showButtons();
    this.refresh();
    this.visible = true;
};

Window_YRCraftQuantity.prototype.createButtons = function() {
    var bitmap = ImageManager.loadSystem('ButtonSet');
    var buttonWidth = 48;
    var buttonHeight = 48;
    this._buttons = [];
    for (var i = 0; i < 4; i++) {
        var button = new Sprite_Button();
        var x = buttonWidth * i;
        var w = buttonWidth * (i === 4 ? 2 : 1);
        button.bitmap = bitmap;
        button.setColdFrame(x, 0, w, buttonHeight);
        button.setHotFrame(x, buttonHeight, w, buttonHeight);
        button.visible = false;
        this._buttons.push(button);
        this.addChild(button);
    }
    this._buttons[0].setClickHandler(this.onButtonDown2.bind(this));
    this._buttons[1].setClickHandler(this.onButtonDown.bind(this));
    this._buttons[2].setClickHandler(this.onButtonUp.bind(this));
    this._buttons[3].setClickHandler(this.onButtonUp2.bind(this));
};

Window_YRCraftQuantity.prototype.placeButtons = function() {
    this._buttons[0].x = this.standardPadding();
    this._buttons[0].y = this.standardPadding();
    this._buttons[1].x = this.standardPadding() + 48;
    this._buttons[1].y = this.standardPadding();
    this._buttons[2].x = this.width - this.standardPadding() - 96;
    this._buttons[2].y = this.standardPadding();
    this._buttons[3].x = this.width - this.standardPadding() - 48;
    this._buttons[3].y = this.standardPadding();
};

Window_YRCraftQuantity.prototype.showButtons = function() {
    if (!YR.ItemCraft.showQuantButtons) return;
    for (var i = 0; i < this._buttons.length; i++) {
        this._buttons[i].visible = true;
    }
};

Window_YRCraftQuantity.prototype.hideButtons = function() {
    for (var i = 0; i < this._buttons.length; i++) {
        this._buttons[i].visible = false;
    }
};

Window_YRCraftQuantity.prototype.onButtonUp = function() {
    this.cursorUp();
};

Window_YRCraftQuantity.prototype.onButtonUp2 = function() {
    this.cursorRight();
};

Window_YRCraftQuantity.prototype.onButtonDown = function() {
    this.cursorDown();
};

Window_YRCraftQuantity.prototype.onButtonDown2 = function() {
    this.cursorLeft();
};

Window_YRCraftQuantity.prototype.maxItems = function() {
    return 1;
};

Window_YRCraftQuantity.prototype.drawItem = function(index) {
    var rect = this.contents;
    var txt = YR.ItemCraft.textQuantity + " " + String(this._multiplier);
    var txtSize = this.textWidth(txt);
    var x = (rect.width - txtSize)/2;
    var y = (48 - this.lineHeight())/2;
    this.drawText(txt, x, y);
    y = 48 + this.lineHeight();
    var line = 0;

    if (this._ingredients.length) {
        this._ingredients.forEach(function(ingredient) {
            if (ingredient[0] === "item") {
                if ($gameParty.numItems($dataItems[ingredient[1]]) >= this._multiplier * ingredient[2]) {
                    var color = YR.ItemCraft.okColor;
                    var number = $gameParty.numItems($dataItems[ingredient[1]]);
                } else if (Imported.YEP_ItemCore && DataManager.isIndependent($dataItems[ingredient[1]]) && $gameParty.numIndependentItems($dataItems[ingredient[1]]) >= this._multiplier * ingredient[2]) {
                    var color = YR.ItemCraft.okColor;
                    var number = $gameParty.numIndependentItems($dataItems[ingredient[1]]);
                } else {
                    var color = YR.ItemCraft.notOkColor;
                    if (Imported.YEP_ItemCore && DataManager.isIndependent($dataItems[ingredient[1]])) {
                        var number = $gameParty.numIndependentItems($dataItems[ingredient[1]]);
                    } else var number = $gameParty.numItems($dataItems[ingredient[1]]);
                }
                this.changeTextColor(color);
                this.drawIcon($dataItems[ingredient[1]].iconIndex, 0, y + line * this.lineHeight());
                this.drawText($dataItems[ingredient[1]].name, Window_Base._iconWidth + 4, y + line * this.lineHeight());
                var text = String(number) + "/" + String(this._multiplier * ingredient[2]);
                var x = rect.width - this.textWidth(text);
                this.drawText(text, x, y + line * this.lineHeight());
                this.resetTextColor();
            }
            else if (ingredient[0] === "weapon") {
                if ($gameParty.numItems($dataWeapons[ingredient[1]]) >= this._multiplier * ingredient[2]) {
                    var color = YR.ItemCraft.okColor;
                    var number = $gameParty.numItems($dataWeapons[ingredient[1]]);
                } else if (Imported.YEP_ItemCore && DataManager.isIndependent($dataWeapons[ingredient[1]]) && $gameParty.numIndependentItems($dataWeapons[ingredient[1]]) >= this._multiplier * ingredient[2]) {
                    var color = YR.ItemCraft.okColor;
                    var number = $gameParty.numIndependentItems($dataWeapons[ingredient[1]]);
                } else {
                    var color = YR.ItemCraft.notOkColor;
                    if (Imported.YEP_ItemCore && DataManager.isIndependent($dataWeapons[ingredient[1]])) {
                        var number = $gameParty.numIndependentItems($dataWeapons[ingredient[1]]);
                    } else var number = $gameParty.numItems($dataWeapons[ingredient[1]]);
                }
                this.changeTextColor(color);
                this.drawIcon($dataWeapons[ingredient[1]].iconIndex, 0, y + line * this.lineHeight());
                this.drawText($dataWeapons[ingredient[1]].name, Window_Base._iconWidth + 4, y + line * this.lineHeight());
                var text = String(number) + "/" + String(this._multiplier * ingredient[2]);
                var x = rect.width - this.textWidth(text);
                this.drawText(text, x, y + line * this.lineHeight());
                this.resetTextColor();
            }
            else if (ingredient[0] === "armor") {
                if ($gameParty.numItems($dataArmors[ingredient[1]]) >= this._multiplier * ingredient[2]) {
                    var color = YR.ItemCraft.okColor;
                    var number = $gameParty.numItems($dataArmors[ingredient[1]]);
                } else if (Imported.YEP_ItemCore && DataManager.isIndependent($dataArmors[ingredient[1]]) && $gameParty.numIndependentItems($dataArmors[ingredient[1]]) >= this._multiplier * ingredient[2]) {
                    var color = YR.ItemCraft.okColor;
                    var number = $gameParty.numIndependentItems($dataArmors[ingredient[1]]);
                } else {
                    var color = YR.ItemCraft.notOkColor;
                    if (Imported.YEP_ItemCore && DataManager.isIndependent($dataArmors[ingredient[1]])) {
                        var number = $gameParty.numIndependentItems($dataArmors[ingredient[1]]);
                    } else var number = $gameParty.numItems($dataArmors[ingredient[1]]);
                }
                this.changeTextColor(color);
                this.drawIcon($dataArmors[ingredient[1]].iconIndex, 0, y + line * this.lineHeight());
                this.drawText($dataArmors[ingredient[1]].name, Window_Base._iconWidth + 4, y + line * this.lineHeight());
                var text = String(number) + "/" + String(this._multiplier * ingredient[2]);
                var x = rect.width - this.textWidth(text);
                this.drawText(text, x, y + line * this.lineHeight());
                this.resetTextColor();
            }
            else if (ingredient[0] === "gold") {
                if ($gameParty.gold() >= this._multiplier * ingredient[1]) {
                    var color = YR.ItemCraft.okColor;
                } else var color = YR.ItemCraft.notOkColor;
                this.changeTextColor(color);
                if (YR.ItemCraft.goldIcon > 0) {
                    this.drawIcon(YR.ItemCraft.goldIcon, 0, y + line * this.lineHeight());
                    this.drawText(TextManager.currencyUnit, Window_Base._iconWidth + 4, y + line * this.lineHeight());
                } else {
                    this.drawText(TextManager.currencyUnit, this.textPadding(), y + line * this.lineHeight());
                }
                var text = String($gameParty.gold()) + "/" + String(this._multiplier * ingredient[1]);
                var x = rect.width - this.textWidth(text);
                this.drawText(text, x, y + line * this.lineHeight());
                this.resetTextColor();
            }
            else if (ingredient[0] === "variable") {
                if ($gameVariables.value(ingredient[1]) >= this._multiplier * ingredient[2]) {
                    var color = YR.ItemCraft.okColor;
                } else var color = YR.ItemCraft.notOkColor;
                this.changeTextColor(color);
                this.drawText($dataSystem.variables[ingredient[1]], this.textPadding(), y + line * this.lineHeight());
                var text = String($gameVariables.value(ingredient[1])) + "/" + String(this._multiplier * ingredient[2]);
                var x = rect.width - this.textWidth(text);
                this.drawText(text, x, y + line * this.lineHeight());
                this.resetTextColor();
            }
            line++;
        }, this);
        line++;
    }
};

Window_YRCraftQuantity.prototype.itemRect = function(index) {
    var rect = new Rectangle();
    rect.width = this.textWidth(YR.ItemCraft.textQuantity + " 99") + this.textPadding()*2;
    rect.height = this.lineHeight();
    rect.x = this.contentsWidth()/2 - rect.width/2;
    rect.y = (48 - this.lineHeight())/2;
    return rect;
};

Window_YRCraftQuantity.prototype.itemRectForText = function(index) {
    var rect = this.itemRect(index);
    rect.x += this.textPadding();
    return rect;
};

Window_YRCraftQuantity.prototype.updateArrows = function() {
    this.downArrowVisible = this._multiplier > 1;
    this.upArrowVisible = this._multiplier < 99;
};

Window_YRCraftQuantity.prototype.cursorDown = function(wrap) {
    if (this._multiplier > 1)
    {
        this._multiplier--;
        this.refresh();
    }
};

Window_YRCraftQuantity.prototype.cursorUp = function(wrap) {
    if (this._multiplier < 99) 
    {
        var recipe = SceneManager._scene._recipeInfoWindow.item(SceneManager._scene._recipeInfoWindow.index());
        if (recipe.isCraftable(this._multiplier + 1)) this._multiplier++;
        else this.playBuzzerSound();
        this.refresh();
    }
};

Window_YRCraftQuantity.prototype.cursorLeft = function(wrap) {
    if (this._multiplier > 1)
    {
        this._multiplier -= 10;
        if (this._multiplier < 1) this._multiplier = 1;
        this.refresh();
    }
};

Window_YRCraftQuantity.prototype.cursorRight = function(wrap) {
    if (this._multiplier < 99) 
    {
        var recipe = SceneManager._scene._recipeInfoWindow.item(SceneManager._scene._recipeInfoWindow.index());
        if (recipe.isCraftable(Math.min(this._multiplier + 10, 99))) {
            this._multiplier += 10;
            if (this._multiplier > 99) this._multiplier = 99;
        } else this.playBuzzerSound();
        this.refresh();
    }
};

Window_YRCraftQuantity.prototype.isCursorMovable = function() {
    return this.active;
};

Window_YRCraftQuantity.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.updateInputData();
        this.deactivate();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};


//Window_YRIndependentItemChoice
function Window_YRIndependentItemChoice() {
    this.initialize.apply(this, arguments);	
};

Window_YRIndependentItemChoice.prototype = Object.create(Window_Selectable.prototype);
Window_YRIndependentItemChoice.prototype.constructor = Window_YRIndependentItemChoice;

Window_YRIndependentItemChoice.prototype.initialize = function() {
    this.nonIndIng = [];
    this.indIng = [];
    this.indIngSet = [];
    var width = YR.ItemCraft.indItemChoiceWidth;
    var x = (Graphics.boxWidth - width)/2;
    var height = this.windowHeight();
    var y = (Graphics.boxHeight - height)/2;
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_YRIndependentItemChoice.prototype.show = function() {
    this.height = this.windowHeight();
    this.y = (Graphics.boxHeight - this.height) / 2;
    this.createContents();
    this.contents.clear();
    this.refresh();
    this.visible = true;
};

Window_YRIndependentItemChoice.prototype.itemHeight = function() {
    return this.lineHeight() * 2;
};

Window_YRIndependentItemChoice.prototype.windowHeight = function() {
    var height = this.standardPadding() * 2;
    for (var i = 0; i <= this.indIng.length; i++) {
        if (YR.ItemCraft.indItemChoiceHeight < height + this.itemHeight()) {
            return YR.ItemCraft.indItemChoiceHeight;
        } else height += this.itemHeight();
    }
    return height;
};

Window_YRIndependentItemChoice.prototype.maxItems = function() {
    var items = 1;
    items += this.indIng.length;    
    return items;
};

Window_YRIndependentItemChoice.prototype.item = function(index) {
    if (index === this.indIng.length) return "finalize";
    if (this.indIng[index][0] === "item") {return $dataItems[this.indIng[index][1]]}
    else if (this.indIng[index][0] === "weapon") {return $dataWeapons[this.indIng[index][1]]}
    else if (this.indIng[index][0] === "armor") {return $dataArmors[this.indIng[index][1]]};
};

Window_YRIndependentItemChoice.prototype.drawItem = function(index) {
    var item = this.item(index);
    if (item) {
        var rect = this.itemRect(index);

        if (typeof item === "string" || item instanceof String) {
            var txt = YR.ItemCraft.textConfirm;
            var x = rect.x + (rect.width - this.textWidth(txt)) / 2;
            var y = rect.y + (rect.height - this.lineHeight()) / 2;
            if (!this.isReadyToCraft()) this.changePaintOpacity(false);
            this.drawText(txt, x, y);
            this.changePaintOpacity(true);
        } else {
            this.drawIcon(item.iconIndex, rect.x+15, rect.y+2);
            this.drawText(item.name, rect.x+15+4+Window_Base._iconWidth, rect.y);
            if (!this.indIngSet[index]) {
                var txt = YR.ItemCraft.textEmptyItem;
                var x = rect.x + (rect.width - this.textWidth(txt))/2;
                var y = rect.y + this.lineHeight();
                this.drawText(txt, x, y);
            } else {
                if (DataManager.isItem(item)) var indItem = $dataItems[this.indIngSet[index]];
                else if (DataManager.isWeapon(item)) var indItem = $dataWeapons[this.indIngSet[index]];
                else if (DataManager.isArmor(item)) var indItem = $dataArmors[this.indIngSet[index]];

                var txt = indItem.name;
                var x = rect.x + (rect.width - (4+Window_Base._iconWidth+this.textWidth(txt)))/2;
                var y = rect.y + this.lineHeight();
                this.drawIcon(indItem.iconIndex, x, y);
                this.drawText(txt, x+4+Window_Base._iconWidth, y);
            }
        }
    }
};

Window_YRIndependentItemChoice.prototype.isReadyToCraft = function () {
    for (var i = 0; i < this.indIng.length; i++) {
        if (!this.indIngSet[i]) return false;
    }
    return true;
};

Window_YRIndependentItemChoice.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.updateInputData();
        this.deactivate();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};


//Window_YRIndependentItemList
function Window_YRIndependentItemList() {
    this.initialize.apply(this, arguments);	
};

Window_YRIndependentItemList.prototype = Object.create(Window_Selectable.prototype);
Window_YRIndependentItemList.prototype.constructor = Window_YRIndependentItemList;

Window_YRIndependentItemList.prototype.initialize = function(x, y) {
    this.indIng = [];
    this.indIngSet = [];
    this.itemList = [];
    var width =YR.ItemCraft.indItemListWidth;
    var height = YR.ItemCraft.indItemListHeight;
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_YRIndependentItemList.prototype.show = function(index) {
    this.makeList();
    this.refresh();
    this.visible = true;
};

Window_YRIndependentItemList.prototype.makeList = function() {
    if (this.indIng[0] === "item") {var itemBase =  $dataItems[this.indIng[1]]}
    else if (this.indIng[0] === "weapon") {var itemBase =  $dataWeapons[this.indIng[1]]}
    else if (this.indIng[0] === "armor") {var itemBase =  $dataArmors[this.indIng[1]]};
    this.itemList = [];
    var database = DataManager.getDatabase(itemBase);
    for (var i = Yanfly.Param.ItemStartingId + 1; i < database.length; i++) {
        if (itemBase.id === database[i].baseItemId && $gameParty.numItems(database[i]) && !this.indIngSet.contains(database[i].id)) {
            this.itemList.push(database[i]);
        }
    }
};

Window_YRIndependentItemList.prototype.maxItems = function() {
    return this.itemList.length;
};

Window_YRIndependentItemList.prototype.item = function(index) {
    return this.itemList[index];
};

Window_YRIndependentItemList.prototype.drawItem = function(index) {
    var item = this.item(index);
    if (item) {
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.drawItemName(item, rect.x, rect.y, rect.width);
    }
};

Window_YRIndependentItemList.prototype.setInfoWindow = function(infoWindow) {
    this._infoWindow = infoWindow;
    this.update();
};

Window_YRIndependentItemList.prototype.setStatusWindow = function(statusWindow) {
    this._statusWindow = statusWindow;
    this.update();
};

Window_YRIndependentItemList.prototype.callUpdateHelp = function() {
    if (this.active) {
        this.updateHelp();
    }
};

Window_YRIndependentItemList.prototype.updateHelp = function() {
    this._infoWindow.setItem(this.item(this.index()));
    this._statusWindow.setItem(this.item(this.index()));
};


//Window_YRIndependentItemChoice
function Window_YRIndependentItemStatus() {
    this.initialize.apply(this, arguments);	
};

Window_YRIndependentItemStatus.prototype = Object.create(Window_Base.prototype);
Window_YRIndependentItemStatus.prototype.constructor = Window_YRIndependentItemStatus;

Window_YRIndependentItemStatus.prototype.initialize = function(x, y, w, h) {
    Window_Base.prototype.initialize.call(this, x, y, w, h);
    this.refresh();
};

Window_YRIndependentItemStatus.prototype.refresh = function() {
    this.contents.clear();
    this.drawItem();
};

Window_YRIndependentItemStatus.prototype.setItem = function(item) {
    if (this._item === item) return;
    this._item = item;
    this.refresh();
};

Window_YRIndependentItemStatus.prototype.getEffect = function(code) {
    var targetEffect;
    var value1 = 0;
    var value2 = 0;
    this._item.effects.forEach(function(effect) {
        if (effect.code === code) {
            targetEffect = effect;
            value1 += effect.value1;
            value2 += effect.value2;
        }
    }, this);
    return [value1, value2];
};

Window_YRIndependentItemStatus.prototype.getItemIcons = function(code) {
    var array = [];
    this._item.effects.forEach(function(effect) {
      if (code === Game_Action.EFFECT_ADD_STATE && effect.code === code) {
        var state = $dataStates[effect.dataId];
        if (state && state.iconIndex !== 0) array.push(state.iconIndex);
      }
      if (code === Game_Action.EFFECT_REMOVE_STATE && effect.code === code) {
        var state = $dataStates[effect.dataId];
        if (state && state.iconIndex !== 0) array.push(state.iconIndex);
      }
      if (code === Game_Action.EFFECT_ADD_BUFF && effect.code === code) {
        var icon = Game_BattlerBase.ICON_BUFF_START + effect.dataId;
        array.push(icon);
      }
      if (code === Game_Action.EFFECT_ADD_DEBUFF && effect.code === code) {
        var icon = Game_BattlerBase.ICON_DEBUFF_START + effect.dataId;
        array.push(icon);
      }
      if (code === Game_Action.EFFECT_REMOVE_BUFF && effect.code === code) {
        var icon = Game_BattlerBase.ICON_BUFF_START + effect.dataId;
        array.push(icon);
      }
      if (code === Game_Action.EFFECT_REMOVE_DEBUFF && effect.code === code) {
        var icon = Game_BattlerBase.ICON_DEBUFF_START + effect.dataId;
        array.push(icon);
      }
    }, this);
    array = array.slice(0, YR.ItemCraft.maxIconsItemInfo);
    return array;
};

Window_YRIndependentItemStatus.prototype.drawItem = function() {
    var item = this._item;
    if (item) {
        var rect = this.contents;
        if (DataManager.isItem(item)) {
            var line = 0;
            var effect;
            var value;
            var text;
            var x;
            var icons;

            effect = this.getEffect(Game_Action.EFFECT_RECOVER_HP);
            value = effect[0];
            if (value !== 0) {
                text = YR.ItemCraft.nameHpPercHeal;
                this.changeTextColor(this.systemColor());
                this.drawText(text, this.textPadding(), line * this.lineHeight());
                this.resetTextColor();
                text = String(value * 100) + "%";
                x = rect.width - this.textPadding() - this.textWidth(text);
                this.drawText(text, x, line * this.lineHeight());
                line++;
            }

            effect = this.getEffect(Game_Action.EFFECT_RECOVER_HP);
            var value = effect[1];
            if (value !== 0) {
                text = YR.ItemCraft.nameHpFixedcHeal;
                this.changeTextColor(this.systemColor());
                this.drawText(text, this.textPadding(), line * this.lineHeight());
                this.resetTextColor();
                text = String(value);
                x = rect.width - this.textPadding() - this.textWidth(text);
                this.drawText(text, x, line * this.lineHeight());
                line++;
            }

            effect = this.getEffect(Game_Action.EFFECT_RECOVER_MP);
            value = effect[0];
            if (value !== 0) {
                text = YR.ItemCraft.nameMpPercHeal;
                this.changeTextColor(this.systemColor());
                this.drawText(text, this.textPadding(), line * this.lineHeight());
                this.resetTextColor();
                text = String(value * 100) + "%";
                x = rect.width - this.textPadding() - this.textWidth(text);
                this.drawText(text, x, line * this.lineHeight());
                line++;
            }

            effect = this.getEffect(Game_Action.EFFECT_RECOVER_MP);
            value = effect[1];
            if (value !== 0) {
                text = YR.ItemCraft.nameMpFixedcHeal;
                this.changeTextColor(this.systemColor());
                this.drawText(text, this.textPadding(), line * this.lineHeight());
                this.resetTextColor();
                text = String(value);
                x = rect.width - this.textPadding() - this.textWidth(text);
                this.drawText(text, x, line * this.lineHeight());
                line++;
            }

            icons = this.getItemIcons(Game_Action.EFFECT_ADD_STATE);
            if (icons.length) {
                text = YR.ItemCraft.nameStateAdded;
                this.changeTextColor(this.systemColor());
                this.drawText(text, this.textPadding(), line * this.lineHeight());
                this.resetTextColor();
                x = rect.width - this.textPadding() - 2 - icons.length * Window_Base._iconWidth;
                for (var j = 0; j < icons.length; ++j) {
                    var icon = icons[j];
                    this.drawIcon(icon, x, line * this.lineHeight());
                    x += Window_Base._iconWidth;
                }
                line++;
            }

            icons = this.getItemIcons(Game_Action.EFFECT_REMOVE_STATE);
            if (icons.length) {
                text = YR.ItemCraft.nameStateRemoved;
                this.changeTextColor(this.systemColor());
                this.drawText(text, this.textPadding(), line * this.lineHeight());
                this.resetTextColor();
                x = rect.width - this.textPadding() - 2 - icons.length * Window_Base._iconWidth;
                for (var j = 0; j < icons.length; ++j) {
                    var icon = icons[j];
                    this.drawIcon(icon, x, line * this.lineHeight());
                    x += Window_Base._iconWidth;
                }
                line++;
            }

            icons = this.getItemIcons(Game_Action.EFFECT_ADD_BUFF);
            icons = icons.concat(this.getItemIcons(Game_Action.EFFECT_ADD_DEBUFF));
            if (icons.length) {
                text = YR.ItemCraft.nameBuffAdded;
                this.changeTextColor(this.systemColor());
                this.drawText(text, this.textPadding(), line * this.lineHeight());
                this.resetTextColor();
                x = rect.width - this.textPadding() - 2 - icons.length * Window_Base._iconWidth;
                for (var j = 0; j < icons.length; ++j) {
                    var icon = icons[j];
                    this.drawIcon(icon, x, line * this.lineHeight());
                    x += Window_Base._iconWidth;
                }
                line++;
            }

            icons = this.getItemIcons(Game_Action.EFFECT_REMOVE_BUFF);
            icons = icons.concat(this.getItemIcons(Game_Action.EFFECT_REMOVE_DEBUFF));
            if (icons.length) {
                text = YR.ItemCraft.nameBuffRemoved;
                this.changeTextColor(this.systemColor());
                this.drawText(text, this.textPadding(), line * this.lineHeight());
                this.resetTextColor();
                x = rect.width - this.textPadding() - 2 - icons.length * Window_Base._iconWidth;
                for (var j = 0; j < icons.length; ++j) {
                    var icon = icons[j];
                    this.drawIcon(icon, x, line * this.lineHeight());
                    x += Window_Base._iconWidth;
                }
                line++;
            }

            var info = YR.ItemCraft.extraInfo;

            if (info && info.length > 0) {
                for (var i = 0; i < info.length; i++) {
                    value = eval(info[i].value);
                    if (!eval(info[i].show)) continue;
                    text = eval(info[i].name);
                    this.changeTextColor(this.systemColor());
                    this.drawText(text, this.textPadding(), line * this.lineHeight());
                    this.resetTextColor();
                    text = eval(info[i].format.replace(/val/, value));
                    x = rect.width - this.textPadding() - this.textWidth(text);
                    if (eval(info[i].pos)) this.changeTextColor(this.powerUpColor());
                    if (eval(info[i].neg)) this.changeTextColor(this.powerDownColor());
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                    line++;
                }
            }
        } else {
            var info = YR.ItemCraft.equipInfo;

            if (info && info.length > 0) {
                var line = 0;
                var x = 0;
                var text;
                var value;
                
                for (var i = 0; i < info.length; i++) {
                    value = eval(info[i].value);
                    if (!eval(info[i].show)) continue;
                    text = eval(info[i].name);
                    this.changeTextColor(this.systemColor());
                    this.drawText(text, this.textPadding(), line * this.lineHeight());
                    this.resetTextColor();
                    text = eval(info[i].format.replace(/val/, value));
                    x = rect.width - this.textPadding() - this.textWidth(text);
                    if (eval(info[i].pos)) this.changeTextColor(this.powerUpColor());
                    if (eval(info[i].neg)) this.changeTextColor(this.powerDownColor());
                    this.drawText(text, x, line * this.lineHeight());
                    this.resetTextColor();
                    line++;
                }
            }
        }
    }
};



//Window_YRItemInfo
function Window_YRItemInfo() {
    this.initialize.apply(this, arguments);
}

Window_YRItemInfo.prototype = Object.create(Window_Base.prototype);
Window_YRItemInfo.prototype.constructor = Window_YRItemInfo;

Window_YRItemInfo.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._item = null;
    this.deactivate();
    this.refresh();
};

Window_YRItemInfo.prototype.setItem = function(item) {
    if (this._item === item) return;
    this._item = item;
    this.refresh();
};

Window_YRItemInfo.prototype.refresh = function() {
    this.contents.clear();
    var dy = 0;
    if (!this._item) return dy;
    this.preInfoEval();
    dy = this.drawPreItemInfo(dy);
    dy = this.drawItemInfo(dy);
    dy = this.drawItemInfoA(dy);
    dy = this.drawItemInfoB(dy);
    dy = this.drawItemInfoC(dy);
    dy = this.drawItemInfoD(dy);
    dy = this.drawItemInfoE(dy);
    return this.drawItemInfoF(dy);
};

Window_YRItemInfo.prototype.preInfoEval = function() {
    var item = this._item;
    if (item.infoEval === undefined) {
      item.infoEval = DataManager.getBaseItem(item).infoEval;
    }
    if (item.infoEval === '') return;
    var weapon = this._item;
    var armor = this._item;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var code = item.infoEval;
    try {
      eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'ITEM WINDOW PRE INFO EVAL ERROR');
    }
};

Window_YRItemInfo.prototype.drawPreItemInfo = function(dy) {
    return dy;
};

Window_YRItemInfo.prototype.drawItemInfo = function(dy) {
    var dx = this.textPadding();
    var dw = this.contents.width - this.textPadding() * 2;
    this.resetFontSettings();
    this.drawItemName(this._item, dx, dy, dw);
    return dy + this.lineHeight();
};

Window_YRItemInfo.prototype.drawItemInfoA = function(dy) {
    dy = this.drawInfoTextTop(dy);
    return dy;
};

Window_YRItemInfo.prototype.drawItemInfoB = function(dy) {
    return dy;
};

Window_YRItemInfo.prototype.drawItemInfoC = function(dy) {
    return dy;
};

Window_YRItemInfo.prototype.drawItemInfoD = function(dy) {
    return dy;
};

Window_YRItemInfo.prototype.drawItemInfoE = function(dy) {
    return dy;
};

Window_YRItemInfo.prototype.drawItemInfoF = function(dy) {
    dy = this.drawInfoTextBottom(dy);
    return dy;
};

Window_YRItemInfo.prototype.drawDarkRect = function(dx, dy, dw, dh) {
    var color = this.gaugeBackColor();
    this.changePaintOpacity(false);
    this.contents.fillRect(dx + 1, dy + 1, dw - 2, dh - 2, color);
    this.changePaintOpacity(true);
};

Window_YRItemInfo.prototype.drawInfoTextTop = function(dy) {
    var item = this._item;
    if (item.infoTextTop === undefined) {
      item.infoTextTop = DataManager.getBaseItem(item).infoTextTop;
    }
    if (item.infoTextTop === '') return dy;
    var info = item.infoTextTop.split(/[\r\n]+/);
    for (var i = 0; i < info.length; ++i) {
      var line = info[i];
      this.resetFontSettings();
      this.drawTextEx(line, this.textPadding(), dy);
      dy += this.contents.fontSize + 8;
    }
    return dy;
};

Window_YRItemInfo.prototype.drawInfoTextBottom = function(dy) {
    var item = this._item;
    if (item.infoTextBottom === undefined) {
      item.infoTextBottom = DataManager.getBaseItem(item).infoTextBottom;
    }
    if (item.infoTextBottom === '') return dy;
    var info = item.infoTextBottom.split(/[\r\n]+/);
    for (var i = 0; i < info.length; ++i) {
      var line = info[i];
      this.resetFontSettings();
      this.drawTextEx(line, this.textPadding(), dy);
      dy += this.contents.fontSize + 8;
    }
    return dy;
};


//Game_Interpreter
YR.ItemCraft.GI_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	YR.ItemCraft.GI_pluginCommand.call(this, command, args);
	if (command.toLowerCase() === "craft") {
		switch (args[0].toUpperCase())
			{
			case 'START':
			{
				$gameParty._selectedDiscipline = Number(args[1])-1;
                SceneManager.push(Scene_YRCraft);
			} break;
			case 'GAINEXP':
			{
                $gameParty.increaseDiscExp(Number(args[1]), Number(args[2]));
			} break;
			case 'LEARN':
			{
                if (args[1].toLowerCase() === "item") {
                    $gameParty._itemRecipesLearned[args[2]] = $gameParty._itemRecipesLearned[args[2]] || [];
                    if (args[3]) $gameParty._itemRecipesLearned[args[2]][args[3]] = true;
                    else {
                        $dataItems[args[2]]._recipes.forEach(function(recipe,  recipeIndex) {
                            $gameParty._itemRecipesLearned[args[2]][recipeIndex] = true;
                        }, this);
                    }
                }
                if (args[1].toLowerCase() === "weapon") {
                    $gameParty._weaponRecipesLearned[args[2]] = $gameParty._weaponRecipesLearned[args[2]] || [];
                    if (args[3]) $gameParty._weaponRecipesLearned[args[2]][args[3]] = true;
                    else {
                        $dataWeapons[args[2]]._recipes.forEach(function(recipe,  recipeIndex) {
                            $gameParty._weaponRecipesLearned[args[2]][recipeIndex] = true;
                        }, this);
                    }
                }
                if (args[1].toLowerCase() === "armor") {
                    $gameParty._armorRecipesLearned[args[2]] = $gameParty._armorRecipesLearned[args[2]] || [];
                    if (args[3]) $gameParty._armorRecipesLearned[args[2]][args[3]] = true;
                    else {
                        $dataArmors[args[2]]._recipes.forEach(function(recipe,  recipeIndex) {
                            $gameParty._armorRecipesLearned[args[2]][recipeIndex] = true;
                        }, this);
                    }
                }
            } break;
            case 'SHOW': {
                YR.ItemCraft.discs[args[1]-1].discShowInMenu = true;
            } break;
            case 'HIDE': {
                YR.ItemCraft.discs[args[1]-1].discShowInMenu = false;
            } break;
            case 'ENABLE': {
                YR.ItemCraft.discs[args[1]-1].discEnableInMenu = true;
            } break;
            case 'DISABLE': {
                YR.ItemCraft.discs[args[1]].discEnableInMenu = false;
            } break;			
		}
	}
};