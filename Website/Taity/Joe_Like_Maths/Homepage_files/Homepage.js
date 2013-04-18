// Created by iWeb 2.0.4 local-build-20110413

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,167),url:'Homepage_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Homepage_files/stroke_1.png'},{rect:new IWRect(1,-1,223,2),url:'Homepage_files/stroke_2.png'},{rect:new IWRect(224,-1,2,2),url:'Homepage_files/stroke_3.png'},{rect:new IWRect(224,1,2,167),url:'Homepage_files/stroke_4.png'},{rect:new IWRect(224,168,2,1),url:'Homepage_files/stroke_5.png'},{rect:new IWRect(1,168,223,1),url:'Homepage_files/stroke_6.png'},{rect:new IWRect(-1,168,2,1),url:'Homepage_files/stroke_7.png'}],new IWSize(225,169)),shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(1.9682,2.2641),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Homepage_files/HomepageMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
