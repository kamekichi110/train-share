gdjs.GameCode = {};
gdjs.GameCode.GDPoisonObjects1= [];
gdjs.GameCode.GDPoisonObjects2= [];
gdjs.GameCode.GDPoisonObjects3= [];
gdjs.GameCode.GDPoisonObjects4= [];
gdjs.GameCode.GDPoisonObjects5= [];
gdjs.GameCode.GDPoisonObjects6= [];
gdjs.GameCode.GDroadObjects1= [];
gdjs.GameCode.GDroadObjects2= [];
gdjs.GameCode.GDroadObjects3= [];
gdjs.GameCode.GDroadObjects4= [];
gdjs.GameCode.GDroadObjects5= [];
gdjs.GameCode.GDroadObjects6= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDScoreTextObjects5= [];
gdjs.GameCode.GDScoreTextObjects6= [];
gdjs.GameCode.GDHighScoreObjects1= [];
gdjs.GameCode.GDHighScoreObjects2= [];
gdjs.GameCode.GDHighScoreObjects3= [];
gdjs.GameCode.GDHighScoreObjects4= [];
gdjs.GameCode.GDHighScoreObjects5= [];
gdjs.GameCode.GDHighScoreObjects6= [];
gdjs.GameCode.GDStatueObjects1= [];
gdjs.GameCode.GDStatueObjects2= [];
gdjs.GameCode.GDStatueObjects3= [];
gdjs.GameCode.GDStatueObjects4= [];
gdjs.GameCode.GDStatueObjects5= [];
gdjs.GameCode.GDStatueObjects6= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDPlayerObjects5= [];
gdjs.GameCode.GDPlayerObjects6= [];
gdjs.GameCode.GDTutorialTextObjects1= [];
gdjs.GameCode.GDTutorialTextObjects2= [];
gdjs.GameCode.GDTutorialTextObjects3= [];
gdjs.GameCode.GDTutorialTextObjects4= [];
gdjs.GameCode.GDTutorialTextObjects5= [];
gdjs.GameCode.GDTutorialTextObjects6= [];
gdjs.GameCode.GDGroundTileObjects1= [];
gdjs.GameCode.GDGroundTileObjects2= [];
gdjs.GameCode.GDGroundTileObjects3= [];
gdjs.GameCode.GDGroundTileObjects4= [];
gdjs.GameCode.GDGroundTileObjects5= [];
gdjs.GameCode.GDGroundTileObjects6= [];
gdjs.GameCode.GDSkyBackgroundObjects1= [];
gdjs.GameCode.GDSkyBackgroundObjects2= [];
gdjs.GameCode.GDSkyBackgroundObjects3= [];
gdjs.GameCode.GDSkyBackgroundObjects4= [];
gdjs.GameCode.GDSkyBackgroundObjects5= [];
gdjs.GameCode.GDSkyBackgroundObjects6= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setString("Touch anywhere On screen to jump/start");
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setTextAlignment("center");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Highscore", "Highscore");
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDHighScoreObjects1 */
{gdjs.evtTools.storage.readNumberFromJSONFile("Highscore", "Highscore", runtimeScene, runtimeScene.getScene().getVariables().get("TempSaveValue"));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("TempSaveValue")));
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects1[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Playing");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Preparing";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10121628);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.mp3", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10122836);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStatueObjects3Objects = Hashtable.newFrom({"Statue": gdjs.GameCode.GDStatueObjects3});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).add(Math.round(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 100));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Statue"), gdjs.GameCode.GDStatueObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStatueObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDStatueObjects3 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(500);
}{for(var i = 0, len = gdjs.GameCode.GDStatueObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDStatueObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Bonus.mp3", false, 100, 0.5);
}}

}


};gdjs.GameCode.mapOfEmptyGDGroundTileObjects = Hashtable.newFrom({"GroundTile": []});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects = Hashtable.newFrom({"GroundTile": gdjs.GameCode.GDGroundTileObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects = Hashtable.newFrom({"GroundTile": gdjs.GameCode.GDGroundTileObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects4Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDroadObjects4Objects = Hashtable.newFrom({"road": gdjs.GameCode.GDroadObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStatueObjects5Objects = Hashtable.newFrom({"Statue": gdjs.GameCode.GDStatueObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStatueObjects4Objects = Hashtable.newFrom({"Statue": gdjs.GameCode.GDStatueObjects4});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDroadObjects4, gdjs.GameCode.GDroadObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDroadObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDroadObjects5[i].getVariableNumber(gdjs.GameCode.GDroadObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDroadObjects5[k] = gdjs.GameCode.GDroadObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDroadObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDroadObjects5 */
gdjs.GameCode.GDStatueObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStatueObjects5Objects, (( gdjs.GameCode.GDroadObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDroadObjects5[0].getPointX("RewardUp")), (( gdjs.GameCode.GDroadObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDroadObjects5[0].getPointY("RewardUp")), "");
}{for(var i = 0, len = gdjs.GameCode.GDStatueObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDStatueObjects5[i].setScale(gdjs.GameCode.GDStatueObjects5[i].getScaleMean() * (60 / (Math.max((gdjs.GameCode.GDStatueObjects5[i].getWidth()), (gdjs.GameCode.GDStatueObjects5[i].getHeight())))));
}
}}

}


{

/* Reuse gdjs.GameCode.GDroadObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDroadObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDroadObjects4[i].getVariableNumber(gdjs.GameCode.GDroadObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDroadObjects4[k] = gdjs.GameCode.GDroadObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDroadObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDroadObjects4 */
gdjs.GameCode.GDStatueObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStatueObjects4Objects, (( gdjs.GameCode.GDroadObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDroadObjects4[0].getPointX("RewardDown")), (( gdjs.GameCode.GDroadObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDroadObjects4[0].getPointY("RewardDown")), "");
}{for(var i = 0, len = gdjs.GameCode.GDStatueObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDStatueObjects4[i].setScale(gdjs.GameCode.GDStatueObjects4[i].getScaleMean() * (60 / (Math.max((gdjs.GameCode.GDStatueObjects4[i].getWidth()), (gdjs.GameCode.GDStatueObjects4[i].getHeight())))));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects5Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects5});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects5);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects5);
gdjs.GameCode.GDPoisonObjects5.length = 0;

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("SpawneddangerInField")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("dangerInField"));
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects5Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects5[0].getPointX("")), (( gdjs.GameCode.GDGroundTileObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects5[0].getAABBTop()), "");
}{runtimeScene.getScene().getVariables().get("SpawneddangerInField").add(1);
}{for(var i = 0, len = gdjs.GameCode.GDPoisonObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPoisonObjects5[i].setScale(gdjs.GameCode.GDPoisonObjects5[i].getScaleMean() * (100 / (Math.max((gdjs.GameCode.GDPoisonObjects5[i].getWidth()), (gdjs.GameCode.GDPoisonObjects5[i].getHeight())))));
}
}
{ //Subevents: 
gdjs.GameCode.eventsList8(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("SpawneddangerInField").setNumber(0);
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);
gdjs.GameCode.GDPoisonObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects4Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointX("")), (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getAABBTop()), "");
}{for(var i = 0, len = gdjs.GameCode.GDPoisonObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPoisonObjects4[i].setScale(gdjs.GameCode.GDPoisonObjects4[i].getScaleMean() * (100 / (Math.max((gdjs.GameCode.GDPoisonObjects4[i].getWidth()), (gdjs.GameCode.GDPoisonObjects4[i].getHeight())))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);
gdjs.GameCode.GDroadObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDroadObjects4Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointX("")), (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getAABBTop()) - 64, "");
}{for(var i = 0, len = gdjs.GameCode.GDroadObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDroadObjects4[i].returnVariable(gdjs.GameCode.GDroadObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(0, 2));
}
}{for(var i = 0, len = gdjs.GameCode.GDroadObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDroadObjects4[i].setScale(gdjs.GameCode.GDroadObjects4[i].getScaleMean() * (125 / (Math.max((gdjs.GameCode.GDroadObjects4[i].getWidth()), (gdjs.GameCode.GDroadObjects4[i].getHeight())))));
}
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("dangerInField").setNumber(gdjs.randomInRange(1, 1 + Math.round(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 3000, 0, 4))));
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getBehavior("PlatformerObject").getMaxSpeed() < 800 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("PlatformerObject").setMaxSpeed((gdjs.GameCode.GDPlayerObjects4[i].getBehavior("PlatformerObject").getMaxSpeed()) + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 6);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 0.7;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 30);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundTileObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundTileObjects4[i].getX() < (( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointX("")) - (gdjs.GameCode.GDGroundTileObjects4[i].getWidth()) - 100 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundTileObjects4[k] = gdjs.GameCode.GDGroundTileObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundTileObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundTileObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDGroundTileObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGroundTileObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDGroundTileObjects) < 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundTileObjects4 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects, (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getX()) + (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getWidth()), (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getY()), "");
}{for(var i = 0, len = gdjs.GameCode.GDGroundTileObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGroundTileObjects4[i].setWidth(1280);
}
}{for(var i = 0, len = gdjs.GameCode.GDGroundTileObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGroundTileObjects4[i].setHeight(224);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "obstacle_spawn") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 2));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}
{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2ObjectsGDgdjs_9546GameCode_9546GDroadObjects2ObjectsGDgdjs_9546GameCode_9546GDStatueObjects2Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects2, "road": gdjs.GameCode.GDroadObjects2, "Statue": gdjs.GameCode.GDStatueObjects2});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Poison"), gdjs.GameCode.GDPoisonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
/* Reuse gdjs.GameCode.GDPoisonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Statue"), gdjs.GameCode.GDStatueObjects2);
gdjs.copyArray(runtimeScene.getObjects("road"), gdjs.GameCode.GDroadObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").abortJump();
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Dead");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "obstacle_spawn");
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2ObjectsGDgdjs_9546GameCode_9546GDroadObjects2ObjectsGDgdjs_9546GameCode_9546GDStatueObjects2Objects);
}{for(var i = 0, len = gdjs.GameCode.GDPoisonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoisonObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDroadObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDroadObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDStatueObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDStatueObjects2[i].clearForces();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death.mp3", false, 80, 1);
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("SkyBackground"), gdjs.GameCode.GDSkyBackgroundObjects3);
{for(var i = 0, len = gdjs.GameCode.GDSkyBackgroundObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSkyBackgroundObjects3[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 4);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Playing";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDTutorialTextObjects2, gdjs.GameCode.GDTutorialTextObjects3);

{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects3[i].setString("Touch anywhere On screen to restart");
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDTutorialTextObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setTextAlignment("center");
}
}}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10140828);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setString("Press any key to restart the game");
}
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameCode.GDHighScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects2[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("Highscore", "Highscore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Dead";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameCode.GDHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkyBackground"), gdjs.GameCode.GDSkyBackgroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects1[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDSkyBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSkyBackgroundObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 4);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList18(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPoisonObjects1.length = 0;
gdjs.GameCode.GDPoisonObjects2.length = 0;
gdjs.GameCode.GDPoisonObjects3.length = 0;
gdjs.GameCode.GDPoisonObjects4.length = 0;
gdjs.GameCode.GDPoisonObjects5.length = 0;
gdjs.GameCode.GDPoisonObjects6.length = 0;
gdjs.GameCode.GDroadObjects1.length = 0;
gdjs.GameCode.GDroadObjects2.length = 0;
gdjs.GameCode.GDroadObjects3.length = 0;
gdjs.GameCode.GDroadObjects4.length = 0;
gdjs.GameCode.GDroadObjects5.length = 0;
gdjs.GameCode.GDroadObjects6.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects5.length = 0;
gdjs.GameCode.GDScoreTextObjects6.length = 0;
gdjs.GameCode.GDHighScoreObjects1.length = 0;
gdjs.GameCode.GDHighScoreObjects2.length = 0;
gdjs.GameCode.GDHighScoreObjects3.length = 0;
gdjs.GameCode.GDHighScoreObjects4.length = 0;
gdjs.GameCode.GDHighScoreObjects5.length = 0;
gdjs.GameCode.GDHighScoreObjects6.length = 0;
gdjs.GameCode.GDStatueObjects1.length = 0;
gdjs.GameCode.GDStatueObjects2.length = 0;
gdjs.GameCode.GDStatueObjects3.length = 0;
gdjs.GameCode.GDStatueObjects4.length = 0;
gdjs.GameCode.GDStatueObjects5.length = 0;
gdjs.GameCode.GDStatueObjects6.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects5.length = 0;
gdjs.GameCode.GDPlayerObjects6.length = 0;
gdjs.GameCode.GDTutorialTextObjects1.length = 0;
gdjs.GameCode.GDTutorialTextObjects2.length = 0;
gdjs.GameCode.GDTutorialTextObjects3.length = 0;
gdjs.GameCode.GDTutorialTextObjects4.length = 0;
gdjs.GameCode.GDTutorialTextObjects5.length = 0;
gdjs.GameCode.GDTutorialTextObjects6.length = 0;
gdjs.GameCode.GDGroundTileObjects1.length = 0;
gdjs.GameCode.GDGroundTileObjects2.length = 0;
gdjs.GameCode.GDGroundTileObjects3.length = 0;
gdjs.GameCode.GDGroundTileObjects4.length = 0;
gdjs.GameCode.GDGroundTileObjects5.length = 0;
gdjs.GameCode.GDGroundTileObjects6.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects1.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects2.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects3.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects4.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects5.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects6.length = 0;

gdjs.GameCode.eventsList19(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
