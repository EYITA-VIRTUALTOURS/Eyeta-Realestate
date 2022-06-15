(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.playList_4DE87E96_6961_1063_41CF_ED2CC3A4BC7E.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }; this.playAudioList([this.audio_7626F152_68A7_30E3_41CE_0EF6691DFDB7])",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "id": "rootPlayer",
 "layout": "absolute",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.MapViewer",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 20,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "borderRadius": 0,
 "definitions": [{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECDF9D_6961_1061_41CE_A2306DE1B50D",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EB4F9F_6961_1061_41D8_E3E329EE31F2",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC2FA1_6961_0FA1_41D1_4B54D77FCCC5",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 102.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C61EF04_6961_1067_41C3_2BA08DAFA2D2"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECFFA4_6961_0FA7_41D9_D3FDBA1E9A15",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7675CD34_68AF_10A7_41C1_9C6485CAB49F",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ED9FA2_6961_0FA3_41D7_368ECB815FBF",
 "class": "FadeInEffect"
},
{
 "duration": 5000,
 "label": "L_002",
 "id": "album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_1",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_1.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_1_t.jpg",
 "height": 1255
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC8FA0_6961_105F_4175_D9F3278C948C",
 "class": "FadeInEffect"
},
{
 "duration": 5000,
 "label": "L_007",
 "id": "album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_6",
 "width": 1748,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_6.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_6_t.jpg",
 "height": 1308
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_7299ADEF_630D_98C9_41CD_576A29A3AFC9",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_4DE84E96_6961_1063_41C1_7BEC1A16480A",
 "class": "PlayList"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC3FA4_6961_0FA7_41CA_F4045D2709EC",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7674DD3E_68AF_10A3_41CF_3D8DB7D34DF7",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC6F9E_6961_1063_41AE_5F04D75F988B",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC5F9E_6961_1063_41A8_73251B17DF47",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC4FA2_6961_0FA3_41D3_3EA6F2551E3D",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC7FA1_6961_0FA1_4197_434AC203AB58",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC3FA1_6961_0FA1_41B9_A8F6999ABDDA",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 100.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C252ED2_6961_11E3_41C2_53460BA1ADEE"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC5FA2_6961_0FA3_41D0_4597DCA6CB57",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76747D35_68AF_10A1_41C2_6D1712D7659D",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7675AD3A_68AF_10A3_41C3_0D338DC10602",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7675ED34_68AF_10A7_4171_04280D3A256C",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C79FF19_6961_1061_41A9_84A5982CF876"
},
{
 "duration": 5000,
 "label": "L_005",
 "id": "album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_4",
 "width": 1350,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_4.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_4_t.jpg",
 "height": 1446
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C00CEA9_6961_11A1_4169_599057FEB870"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.91,
  "class": "PanoramaCameraPosition",
  "pitch": -1.29
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76736D3C_68AF_10A7_41CB_F50AC1CAC0D6",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EDFF9F_6961_1061_41D9_383E6A98A159",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76753D33_68AF_10A1_41CA_51835473C731",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ED9F9F_6961_1061_41DA_0492D4FBE26F",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -151.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_76EBFF9B_6961_1061_41D1_F44522F9B834"
},
{
 "items": [
  "this.PanoramaPlayListItem_4DE96E97_6961_1061_41C8_FD1828F91D98",
  "this.PanoramaPlayListItem_4DEA0E97_6961_1061_41A0_442B88E51651",
  "this.PanoramaPlayListItem_4DEBDE97_6961_1061_41BD_3178DF4863DE",
  "this.PanoramaPlayListItem_4DECBE97_6961_1061_41D4_E900675C7D28",
  "this.PanoramaPlayListItem_4DEC2E98_6961_106F_41D6_884780FFC0D2",
  "this.PanoramaPlayListItem_4DED8E98_6961_106F_41C0_DDAB8F58122F",
  "this.PanoramaPlayListItem_4DED4E98_6961_106F_41D3_FF459228119E",
  "this.PanoramaPlayListItem_4DEE3E98_6961_106F_41AB_E91D86E910E4",
  {
   "media": "this.album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "label": "P_ CS_001",
 "hfovMin": "150%",
 "id": "panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_79D6A590_68A3_107F_41C0_8B2903F577BE",
  "this.overlay_78443793_68A7_7061_41C0_BECA0D051681",
  "this.panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8",
   "backwardYaw": -50.12,
   "yaw": -64.19,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_7299ADEF_630D_98C9_41CD_576A29A3AFC9",
   "x": 640,
   "class": "PanoramaMapLocation",
   "y": 1702.5,
   "angle": 182.41
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ]
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECCFA4_6961_0FA7_41BB_9B1942C5C442",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C543EFA_6961_11A2_41A2_C728F45721FE"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 41.32,
  "class": "PanoramaCameraPosition",
  "pitch": -2.69
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76740D31_68AF_10A1_41BF_C0F5B1BFCD27",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -121.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C6CCF0E_6961_1063_41A5_B81578481CB1"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EB5F9F_6961_1061_41D8_4D69D0759F78",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECCFA1_6961_0FA1_41D3_7847880E7779",
 "class": "FadeInEffect"
},
{
 "duration": 5000,
 "label": "L_001",
 "id": "album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_0",
 "width": 1500,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_0.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_0_t.jpg",
 "height": 1350
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ED8F9F_6961_1061_41D2_17A4651BDAEF",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -57.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C319EDC_6961_11E7_41DA_395BA4FE9B2A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECDFA1_6961_0FA1_41AC_A8AC49FC0C1B",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECDFA4_6961_0FA7_41D1_4BF4A580727F",
 "class": "FadeInEffect"
},
{
 "data": {
  "label": "&#x1F9C8; Lofi (Royalty Free Music) - &quot;BUTTER&quot; by @LuKremBo &#x1F1F0;&#x1F1F7;"
 },
 "class": "MediaAudio",
 "autoplay": true,
 "id": "audio_7626F152_68A7_30E3_41CE_0EF6691DFDB7",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_7626F152_68A7_30E3_41CE_0EF6691DFDB7.mp3",
  "oggUrl": "media/audio_7626F152_68A7_30E3_41CE_0EF6691DFDB7.ogg"
 }
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76734D3C_68AF_10A7_41C8_DFEF5AB7494C",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7675BD3C_68AF_10A7_41D8_9276FF32E409",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76751D33_68AF_10A1_41D6_C8814279C151",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECCF9D_6961_1061_41C3_014429A119AE",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7674CD39_68AF_10A1_41D4_C144AA5DC4DE",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76747D3D_68AF_10A1_41B5_85B06E9B468C",
 "class": "FadeOutEffect"
},
{
 "hfovMax": 130,
 "label": "L_003",
 "hfovMin": "150%",
 "id": "panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_6C4D7CC1_6316_9F38_41D7_CAC806C6B4AA",
  "this.overlay_6C383E29_6317_9B48_41D0_F819DB0E5988",
  "this.overlay_6D0159EF_6312_F8C9_41C2_AB583BB10692",
  "this.overlay_6D79911D_6312_A948_41D0_D3F7C69EEE28",
  "this.overlay_7DAC080F_68A1_3061_41D1_DDB69D53C164",
  "this.overlay_7F5CDE00_68A7_105F_41D4_DCD87AB9FAF7",
  "this.panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE",
   "backwardYaw": 138.3,
   "yaw": 58.16,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803",
   "backwardYaw": 87.05,
   "yaw": -90.79,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8",
   "backwardYaw": 97.98,
   "yaw": 122.34,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_7299ADEF_630D_98C9_41CD_576A29A3AFC9",
   "x": 1088.52,
   "class": "PanoramaMapLocation",
   "y": 880.73,
   "angle": 86.34
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ]
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC2F9D_6961_1061_41A8_C2B3CEBE2FF4",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7675CD37_68AF_10A1_41D6_9EB333881E31",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EDBF9E_6961_1063_41D1_37F8AE387026",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76748D3C_68AF_10A7_41D6_BA858A043C38",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76747D3A_68AF_10A3_41D3_73A9A4F239ED",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC9FA0_6961_105F_41C6_EDC3A7108041",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76740D38_68AF_10AF_4188_3439D74B0EA4",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 115.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C49FEF0_6961_11BF_41D4_E2A1541517CC"
},
{
 "hfovMax": 130,
 "label": "P_ MB_01",
 "hfovMin": "150%",
 "id": "panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_785A2678_68A1_10AE_41D0_FD59DB16CFC8",
  "this.overlay_7BABF21D_68A1_1061_41AF_0ACB5FA74B58",
  "this.overlay_7976BCA7_68A3_11A1_41D3_5FE033460291",
  "this.overlay_7D1A4775_68A1_70A1_41B8_3CAA08673091",
  "this.panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8",
   "backwardYaw": 51.25,
   "yaw": -94.17,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18",
   "backwardYaw": -79.76,
   "yaw": -77.76,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_7299ADEF_630D_98C9_41CD_576A29A3AFC9",
   "x": 720.92,
   "class": "PanoramaMapLocation",
   "y": 556.62,
   "angle": -87.59
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ]
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EB4FA3_6961_0FA1_41D5_FB75E5401F4E",
 "class": "FadeOutEffect"
},
{
 "duration": 5000,
 "label": "L_08",
 "id": "album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_7",
 "width": 1350,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_7.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_7_t.jpg",
 "height": 1500
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76743D36_68AF_10A3_41D9_A2BC65927561",
 "class": "FadeInEffect"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_7299ADEF_630D_98C9_41CD_576A29A3AFC9",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_4DE87E96_6961_1063_41CF_ED2CC3A4BC7E",
 "class": "PlayList"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EDBFA2_6961_0FA3_41C1_32AA28AE8477",
 "class": "FadeInEffect"
},
{
 "hfovMax": 130,
 "label": "P _ Mbath _ 001",
 "hfovMin": "150%",
 "id": "panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_786546A0_68A1_305F_41BC_510CDF6C2A31",
  "this.overlay_79DD4F51_68A3_70FE_41CB_8E33814A5A03",
  "this.panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A",
   "backwardYaw": -77.76,
   "yaw": -79.76,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_7299ADEF_630D_98C9_41CD_576A29A3AFC9",
   "x": 410.54,
   "class": "PanoramaMapLocation",
   "y": 874.79,
   "angle": 186.87
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ]
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76742D38_68AF_10AF_41D2_E7F3578D7CC0",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76759D30_68AF_10BF_41BF_422094F4B260",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7674ED3B_68AF_10A1_41B4_C0D02FA958B3",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EDCFA3_6961_0FA1_41CE_EF8C1AEBB83A",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.23,
  "class": "PanoramaCameraPosition",
  "pitch": 1.03
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76752D39_68AF_10A1_41D4_57C70DBA1BE1",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7674FD3E_68AF_10A3_41B0_19B25B63A98D",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7674CD3B_68AF_10A1_4199_8DE2454DE57E",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7674ED36_68AF_10A3_41C1_A205BD2E2871",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC0F9D_6961_1061_41A2_EC9BCBA7B078",
 "class": "FadeInEffect"
},
{
 "duration": 5000,
 "label": "L_003",
 "id": "album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_2",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_2.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_2_t.jpg",
 "height": 1303
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EDEFA3_6961_0FA1_41AB_96256B309365",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7674CD36_68AF_10A3_41CA_3F9A6174AB85",
 "class": "FadeOutEffect"
},
{
 "hfovMax": 130,
 "label": "L_004",
 "hfovMin": "150%",
 "id": "panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_6C4DC631_6317_6B58_41D7_BA72E0A65B8B",
  "this.overlay_6DF29D67_6312_99F8_41AE_868FB36C298F",
  "this.panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F",
   "backwardYaw": 58.16,
   "yaw": 138.3,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_7299ADEF_630D_98C9_41CD_576A29A3AFC9",
   "x": 1437.33,
   "class": "PanoramaMapLocation",
   "y": 1134.35,
   "angle": -193.41
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ]
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76743D3B_68AF_10A1_41D8_C4990DB8DFC5",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76758D37_68AF_10A1_41B4_1E9241BED474",
 "class": "FadeInEffect"
},
{
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 129.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C86CF23_6961_10A2_41D5_5D2A23127FAB"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC7F9D_6961_1061_41AF_8CD2595F414C",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC4F9E_6961_1063_4183_3C0CE5767CFE",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C08AEB4_6961_11A6_41D4_013B9DB7EE7F"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC8FA4_6961_0FA7_41D4_8BB110BE5FD8",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EDAF9E_6961_1063_41D0_8599581C1134",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 79.25,
  "class": "PanoramaCameraPosition",
  "pitch": -0.18
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7674BD36_68AF_10A3_41BE_BCDE53ED81FB",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECAFA0_6961_105F_41D3_90CBE5480BAE",
 "class": "FadeInEffect"
},
{
 "height": 1948,
 "label": "02 _ Plan _ Pers",
 "id": "map_7299ADEF_630D_98C9_41CD_576A29A3AFC9",
 "width": 1827,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9.jpeg",
    "width": 1827,
    "class": "ImageResourceLevel",
    "height": 1948
   },
   {
    "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_lq.jpeg",
    "width": 247,
    "class": "ImageResourceLevel",
    "height": 264,
    "tags": "preload"
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayRadiusScale": 0.08,
 "overlays": [
  "this.overlay_7D5A1F36_68A1_10A3_41D9_A64724A71D2E",
  "this.overlay_7F2194A5_68AF_71A1_41D2_654A25E02011",
  "this.overlay_7F71351C_68AF_1067_41DA_067E4BAF1B51",
  "this.overlay_7F6889BB_68AF_13A1_41AC_50BA3A3CAFCB",
  "this.overlay_7F4E5DB2_68AF_13A3_41D9_2456324974E9",
  "this.overlay_7D69B935_68AF_30A1_41BE_666E21D070F4",
  "this.overlay_7EE82DA7_68AF_33A1_419F_CBBE9809EF31",
  "this.overlay_7EDCE0F1_68AF_11A1_41DA_0AC52E9EDAE8"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.58,
 "scaleMode": "fit_inside",
 "initialZoomFactor": 1,
 "class": "Map",
 "fieldOfViewOverlayInsideColor": "#00FFFF",
 "thumbnailUrl": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_t.jpg",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7675ED37_68AF_10A1_41C7_1D370EC938B9",
 "class": "FadeOutEffect"
},
{
 "duration": 5000,
 "label": "L_004",
 "id": "album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_3",
 "width": 2400,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_3.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_3_t.jpg",
 "height": 1620
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76741D3E_68AF_10A2_41C5_C94D36375A12",
 "class": "FadeOutEffect"
},
{
 "duration": 5000,
 "label": "L_10",
 "id": "album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_8",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_8.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_8_t.jpg",
 "height": 1350
},
{
 "hfovMax": 130,
 "label": "L_001",
 "hfovMin": "150%",
 "id": "panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_6F6D4CBA_6313_9F48_41C9_25677831D0B1",
  "this.overlay_6DD9C83E_6316_A748_41C3_0BC22F597BCA",
  "this.overlay_793F9F0A_68A3_1063_41D7_410E3C39D4F7",
  "this.overlay_78BF48E1_68A1_11A1_41D6_C298F962A4C4",
  "this.overlay_7899BBB6_68A1_17A3_41AB_36273032C00C",
  "this.overlay_7925FEC0_68A0_F1DE_4133_9900BD21F380",
  "this.overlay_676E2BB0_68AF_17BE_41C9_06C5D091F8F4",
  "this.overlay_78712066_68AF_30A3_41B1_931E5432D326",
  "this.panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F",
   "backwardYaw": 122.34,
   "yaw": 97.98,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A",
   "backwardYaw": -94.17,
   "yaw": 51.25,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C",
   "backwardYaw": -64.19,
   "yaw": -50.12,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13",
   "backwardYaw": 138.93,
   "yaw": 28.19,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_7299ADEF_630D_98C9_41CD_576A29A3AFC9",
   "x": 999.24,
   "class": "PanoramaMapLocation",
   "y": 1446.06,
   "angle": -90.27
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ]
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76747D38_68AF_10AF_41C0_E12A3612EF39",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECBFA3_6961_0FA1_41C2_21818640CDBD",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -74.5,
  "class": "PanoramaCameraPosition",
  "pitch": -1.4
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7674ED39_68AF_10A1_41CC_463D5B27E6ED",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76741D36_68AF_10A3_41D2_D33FEE7F663E",
 "class": "FadeOutEffect"
},
{
 "movementMode": "constrained",
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7675FD39_68AF_10A1_41BC_E59789A32042",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EDDFA3_6961_0FA1_41A1_6930D8ACE5F7",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76752D37_68AF_10A1_41C8_1414F25BC409",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76745D38_68AF_10AF_417D_BD55EF6A816A",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7674AD3E_68AF_10A3_41BC_CB2E2D53633F",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECBFA0_6961_105F_41C4_EC04B7EF214A",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EDFFA2_6961_0FA3_41D5_E46BCAADDA16",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -128.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C1A3EC8_6961_11EF_41D4_AA51A1F650F3"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECFFA0_6961_105F_41D6_12A6950CFF8B",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC1F9D_6961_1061_41B4_E77FD8A40169",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EDAFA2_6961_0FA3_4184_D2C80A0D4076",
 "class": "FadeInEffect"
},
{
 "hfovMax": 130,
 "label": "L_002",
 "hfovMin": "150%",
 "id": "panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_6C91DE62_6315_9BF8_41B3_D68E6CB06BC7",
  "this.overlay_6D0D4FF2_6315_F8DB_41CD_9A3F45D5739A",
  "this.panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F",
   "backwardYaw": -90.79,
   "yaw": 87.05,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_7299ADEF_630D_98C9_41CD_576A29A3AFC9",
   "x": 1003.65,
   "class": "PanoramaMapLocation",
   "y": 414.97,
   "angle": 91.15
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ]
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EB6F9F_6961_1061_41B3_FE8E9AE68457",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76759D3C_68AF_10A7_41AB_64237E90AE59",
 "class": "FadeOutEffect"
},
{
 "label": "Photo Album L_001",
 "id": "album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1",
 "class": "PhotoAlbum",
 "thumbnailUrl": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_t.png",
 "playList": "this.album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_AlbumPlayList"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76748D3E_68AF_10A3_41D3_FE91568CAEDF",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_7675BD34_68AF_10A7_41D3_240546BAEE34",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -82.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C119EBD_6961_11A1_41AC_D3AE992A2659"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECEFA4_6961_0FA7_41D2_067056CF1059",
 "class": "FadeInEffect"
},
{
 "hfovMax": 130,
 "label": "P_B_001",
 "hfovMin": "150%",
 "id": "panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_79EDE106_68BF_7062_41C6_86FBBBACB74E",
  "this.overlay_7A89C168_68A0_F0AF_41C6_5EC9949C6E87",
  "this.panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8",
   "backwardYaw": 28.19,
   "yaw": 138.93,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_7299ADEF_630D_98C9_41CD_576A29A3AFC9",
   "x": 454.8,
   "class": "PanoramaMapLocation",
   "y": 1289,
   "angle": -86.13
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4C3CEEE6_6961_11A3_41CE_5D97717740E8"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76EC6FA1_6961_0FA1_41D4_3A03B9B35859",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECAFA3_6961_0FA1_41D5_0E25E6108918",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76745D35_68AF_10A1_41D3_88360B2F8775",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76759D3A_68AF_10A3_41CE_39D8B3086C58",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -15.36,
  "class": "PanoramaCameraPosition",
  "pitch": -2.67
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76742D32_68AF_10A3_41C6_9726315C27BD",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76741D3A_68AF_10A3_41D1_F1D638851D62",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76748D39_68AF_10A1_41CB_0DC8164A7AEC",
 "class": "FadeOutEffect"
},
{
 "duration": 5000,
 "label": "L_006",
 "id": "album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_5",
 "width": 1350,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_5.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_5_t.jpg",
 "height": 1500
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76747D31_68AF_10A1_419B_D5FB4F70208E",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_76ECEFA0_6961_105F_41B6_DA860F408B47",
 "class": "FadeInEffect"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipFontSize": 13,
 "transitionDuration": 500,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "paddingTop": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "shadow": false,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "layout": "absolute",
 "right": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": true,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "height": 641,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "layout": "absolute",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "right": "0%",
 "backgroundOpacity": 0.64,
 "paddingRight": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "bottom": 0,
 "height": 118,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "left": "0.06%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "width": "24.125%",
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 1,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "37.622%",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipFontSize": 12,
 "transitionDuration": 500,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingTop": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "shadow": false,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "bottom": "7.14%",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "visible": false,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "data": {
  "name": "Entrance"
 },
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "12.364%",
 "borderRadius": 0,
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;font-family:'Montserrat Medium';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false
},
{
 "data": {
  "name": "Living Room"
 },
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "12.364%",
 "borderRadius": 0,
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false
},
{
 "data": {
  "name": "Kitchen"
 },
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "12.364%",
 "borderRadius": 0,
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false
},
{
 "data": {
  "name": "Bedroom 1"
 },
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "12.364%",
 "borderRadius": 0,
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false
},
{
 "data": {
  "name": "Bedroom 2"
 },
 "id": "HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "12.364%",
 "borderRadius": 0,
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false
},
{
 "data": {
  "name": "Bathroom"
 },
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "12.364%",
 "borderRadius": 0,
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "media": "this.panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_76759D30_68AF_10BF_41BF_422094F4B260, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_76ECDF9D_6961_1061_41CE_A2306DE1B50D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_76ECCF9D_6961_1061_41C3_014429A119AE, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_76747D31_68AF_10A1_419B_D5FB4F70208E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_76EC2F9D_6961_1061_41A8_C2B3CEBE2FF4, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_76740D31_68AF_10A1_41BF_C0F5B1BFCD27, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_76EC1F9D_6961_1061_41B4_E77FD8A40169, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_76742D32_68AF_10A3_41C6_9726315C27BD, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')){ if(this.getKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')) { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true, -1, this.effect_76EC0F9D_6961_1061_41A2_EC9BCBA7B078, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76751D33_68AF_10A1_41D6_C8814279C151, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_76EC7F9D_6961_1061_41AF_8CD2595F414C, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_76753D33_68AF_10A1_41CA_51835473C731, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_camera",
 "begin": "this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431', this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_4DE96E97_6961_1061_41C8_FD1828F91D98, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_76759D30_68AF_10BF_41BF_422094F4B260, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_76747D31_68AF_10A1_419B_D5FB4F70208E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_76740D31_68AF_10A1_41BF_C0F5B1BFCD27, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_76742D32_68AF_10A3_41C6_9726315C27BD, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false); this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76751D33_68AF_10A1_41D6_C8814279C151, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_76753D33_68AF_10A1_41CA_51835473C731, 'hideEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_4DE96E97_6961_1061_41C8_FD1828F91D98"
},
{
 "media": "this.panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803",
 "end": "if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_7675CD34_68AF_10A7_41C1_9C6485CAB49F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_76EC6F9E_6961_1063_41AE_5F04D75F988B, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_76EC5F9E_6961_1063_41A8_73251B17DF47, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_7675ED34_68AF_10A7_4171_04280D3A256C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_76EC4F9E_6961_1063_4183_3C0CE5767CFE, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_7675BD34_68AF_10A7_41D3_240546BAEE34, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')){ if(this.getKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')) { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true, -1, this.effect_76EDBF9E_6961_1063_41D1_37F8AE387026, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76745D35_68AF_10A1_41D3_88360B2F8775, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_76EDAF9E_6961_1063_41D0_8599581C1134, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_76747D35_68AF_10A1_41C2_6D1712D7659D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')",
 "start": "this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_camera",
 "begin": "this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431', this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_4DEA0E97_6961_1061_41A0_442B88E51651, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_7675CD34_68AF_10A7_41C1_9C6485CAB49F, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_7675ED34_68AF_10A7_4171_04280D3A256C, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_7675BD34_68AF_10A7_41D3_240546BAEE34, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false); this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76745D35_68AF_10A1_41D3_88360B2F8775, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_76747D35_68AF_10A1_41C2_6D1712D7659D, 'hideEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_4DEA0E97_6961_1061_41A0_442B88E51651"
},
{
 "media": "this.panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_76ED9F9F_6961_1061_41DA_0492D4FBE26F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_76741D36_68AF_10A3_41D2_D33FEE7F663E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_76743D36_68AF_10A3_41D9_A2BC65927561, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_76ED8F9F_6961_1061_41D2_17A4651BDAEF, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_76EDFF9F_6961_1061_41D9_383E6A98A159, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_7674CD36_68AF_10A3_41CA_3F9A6174AB85, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_76EB6F9F_6961_1061_41B3_FE8E9AE68457, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_7674ED36_68AF_10A3_41C1_A205BD2E2871, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')){ if(this.getKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')) { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true, -1, this.effect_76EB5F9F_6961_1061_41D8_4D69D0759F78, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_7674BD36_68AF_10A3_41BE_BCDE53ED81FB, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_76EB4F9F_6961_1061_41D8_E3E329EE31F2, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_76752D37_68AF_10A1_41C8_1414F25BC409, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_camera",
 "begin": "this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431', this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_4DEBDE97_6961_1061_41BD_3178DF4863DE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_76741D36_68AF_10A3_41D2_D33FEE7F663E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_76743D36_68AF_10A3_41D9_A2BC65927561, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_7674CD36_68AF_10A3_41CA_3F9A6174AB85, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_7674ED36_68AF_10A3_41C1_A205BD2E2871, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false); this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_7674BD36_68AF_10A3_41BE_BCDE53ED81FB, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_76752D37_68AF_10A1_41C8_1414F25BC409, 'hideEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_4DEBDE97_6961_1061_41BD_3178DF4863DE"
},
{
 "media": "this.panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_76ECBFA0_6961_105F_41C4_EC04B7EF214A, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_7675CD37_68AF_10A1_41D6_9EB333881E31, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_76ECAFA0_6961_105F_41D3_90CBE5480BAE, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_7675ED37_68AF_10A1_41C7_1D370EC938B9, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_76758D37_68AF_10A1_41B4_1E9241BED474, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_76EC9FA0_6961_105F_41C6_EDC3A7108041, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_76EC8FA0_6961_105F_4175_D9F3278C948C, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_76745D38_68AF_10AF_417D_BD55EF6A816A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')){ if(this.getKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')) { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true, -1, this.effect_76ECFFA0_6961_105F_41D6_12A6950CFF8B, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76747D38_68AF_10AF_41C0_E12A3612EF39, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_76ECEFA0_6961_105F_41B6_DA860F408B47, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_76740D38_68AF_10AF_4188_3439D74B0EA4, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_camera",
 "begin": "this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431', this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_4DECBE97_6961_1061_41D4_E900675C7D28, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_7675CD37_68AF_10A1_41D6_9EB333881E31, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_7675ED37_68AF_10A1_41C7_1D370EC938B9, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_76758D37_68AF_10A1_41B4_1E9241BED474, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_76745D38_68AF_10AF_417D_BD55EF6A816A, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false); this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76747D38_68AF_10AF_41C0_E12A3612EF39, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_76740D38_68AF_10AF_4188_3439D74B0EA4, 'hideEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_4DECBE97_6961_1061_41D4_E900675C7D28"
},
{
 "media": "this.panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_76ECDFA1_6961_0FA1_41AC_A8AC49FC0C1B, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_76742D38_68AF_10AF_41D2_E7F3578D7CC0, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_76ECCFA1_6961_0FA1_41D3_7847880E7779, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_7674CD39_68AF_10A1_41D4_C144AA5DC4DE, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_76EC3FA1_6961_0FA1_41B9_A8F6999ABDDA, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_7674ED39_68AF_10A1_41CC_463D5B27E6ED, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_76EC2FA1_6961_0FA1_41D1_4B54D77FCCC5, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_76748D39_68AF_10A1_41CB_0DC8164A7AEC, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')){ if(this.getKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')) { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true, -1, this.effect_76EC7FA1_6961_0FA1_4197_434AC203AB58, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76752D39_68AF_10A1_41D4_57C70DBA1BE1, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_7675FD39_68AF_10A1_41BC_E59789A32042, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_76EC6FA1_6961_0FA1_41D4_3A03B9B35859, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_camera",
 "begin": "this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431', this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_4DEC2E98_6961_106F_41D6_884780FFC0D2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_76742D38_68AF_10AF_41D2_E7F3578D7CC0, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_7674CD39_68AF_10A1_41D4_C144AA5DC4DE, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_7674ED39_68AF_10A1_41CC_463D5B27E6ED, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_76748D39_68AF_10A1_41CB_0DC8164A7AEC, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false); this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76752D39_68AF_10A1_41D4_57C70DBA1BE1, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_7675FD39_68AF_10A1_41BC_E59789A32042, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_4DEC2E98_6961_106F_41D6_884780FFC0D2"
},
{
 "media": "this.panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_76EC5FA2_6961_0FA3_41D0_4597DCA6CB57, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_76759D3A_68AF_10A3_41CE_39D8B3086C58, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_76EC4FA2_6961_0FA3_41D3_3EA6F2551E3D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_7675AD3A_68AF_10A3_41C3_0D338DC10602, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_76EDBFA2_6961_0FA3_41C1_32AA28AE8477, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_76747D3A_68AF_10A3_41D3_73A9A4F239ED, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_76EDAFA2_6961_0FA3_4184_D2C80A0D4076, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_76741D3A_68AF_10A3_41D1_F1D638851D62, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')){ if(this.getKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')) { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true, -1, this.effect_76ED9FA2_6961_0FA3_41D7_368ECB815FBF, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76743D3B_68AF_10A1_41D8_C4990DB8DFC5, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_7674CD3B_68AF_10A1_4199_8DE2454DE57E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_76EDFFA2_6961_0FA3_41D5_E46BCAADDA16, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_camera",
 "begin": "this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431', this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_4DED8E98_6961_106F_41C0_DDAB8F58122F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_76759D3A_68AF_10A3_41CE_39D8B3086C58, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_7675AD3A_68AF_10A3_41C3_0D338DC10602, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_76747D3A_68AF_10A3_41D3_73A9A4F239ED, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_76741D3A_68AF_10A3_41D1_F1D638851D62, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false); this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76743D3B_68AF_10A1_41D8_C4990DB8DFC5, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_7674CD3B_68AF_10A1_4199_8DE2454DE57E, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_4DED8E98_6961_106F_41C0_DDAB8F58122F"
},
{
 "media": "this.panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_76EDEFA3_6961_0FA1_41AB_96256B309365, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_7674ED3B_68AF_10A1_41B4_C0D02FA958B3, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_76EDDFA3_6961_0FA1_41A1_6930D8ACE5F7, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_76748D3C_68AF_10A7_41D6_BA858A043C38, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_76EDCFA3_6961_0FA1_41CE_EF8C1AEBB83A, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_76734D3C_68AF_10A7_41C8_DFEF5AB7494C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_76736D3C_68AF_10A7_41CB_F50AC1CAC0D6, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_76EB4FA3_6961_0FA1_41D5_FB75E5401F4E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')){ if(this.getKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')) { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true, -1, this.effect_76ECBFA3_6961_0FA1_41C2_21818640CDBD, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76759D3C_68AF_10A7_41AB_64237E90AE59, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_76ECAFA3_6961_0FA1_41D5_0E25E6108918, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_7675BD3C_68AF_10A7_41D8_9276FF32E409, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_camera",
 "begin": "this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431', this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_4DED4E98_6961_106F_41D3_FF459228119E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_7674ED3B_68AF_10A1_41B4_C0D02FA958B3, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_76748D3C_68AF_10A7_41D6_BA858A043C38, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_76734D3C_68AF_10A7_41C8_DFEF5AB7494C, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_76736D3C_68AF_10A7_41CB_F50AC1CAC0D6, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false); this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76759D3C_68AF_10A7_41AB_64237E90AE59, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_7675BD3C_68AF_10A7_41D8_9276FF32E409, 'hideEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_4DED4E98_6961_106F_41D3_FF459228119E"
},
{
 "media": "this.panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_76EC8FA4_6961_0FA7_41D4_8BB110BE5FD8, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_76747D3D_68AF_10A1_41B5_85B06E9B468C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_76ECFFA4_6961_0FA7_41D9_D3FDBA1E9A15, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_76741D3E_68AF_10A2_41C5_C94D36375A12, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_76ECEFA4_6961_0FA7_41D2_067056CF1059, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_7674DD3E_68AF_10A3_41CF_3D8DB7D34DF7, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_76ECDFA4_6961_0FA7_41D1_4BF4A580727F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_7674FD3E_68AF_10A3_41B0_19B25B63A98D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')){ if(this.getKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431')) { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true, -1, this.effect_76748D3E_68AF_10A3_41D3_FE91568CAEDF, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false, -1, this.effect_76ECCFA4_6961_0FA7_41BB_9B1942C5C442, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_76EC3FA4_6961_0FA7_41CA_F4045D2709EC, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_7674AD3E_68AF_10A3_41BC_CB2E2D53633F, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_camera",
 "begin": "this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431', this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_4DEE3E98_6961_106F_41AB_E91D86E910E4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_76747D3D_68AF_10A1_41B5_85B06E9B468C, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_76741D3E_68AF_10A2_41C5_C94D36375A12, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_7674DD3E_68AF_10A3_41CF_3D8DB7D34DF7, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_7674FD3E_68AF_10A3_41B0_19B25B63A98D, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, false); this.setComponentVisibility(this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431, true, -1, this.effect_76748D3E_68AF_10A3_41D3_FE91568CAEDF, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_7674AD3E_68AF_10A3_41BC_CB2E2D53633F, 'hideEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_4DEE3E98_6961_106F_41AB_E91D86E910E4"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8, this.camera_4C86CF23_6961_10A2_41D5_5D2A23127FAB); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_79D6A590_68A3_107F_41C0_8B2903F577BE",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": -64.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_1_HS_0_1_0_map.gif",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.53,
   "hfov": 78.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C428AB7_68A3_11A1_41C8_477FA6A88FE4",
   "pitch": 8.24,
   "yaw": -94.68,
   "hfov": 7.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_78443793_68A7_7061_41C0_BECA0D051681",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": -94.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.24,
   "hfov": 7.72
  }
 ]
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE, this.camera_4C00CEA9_6961_11A1_4169_599057FEB870); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_6C4D7CC1_6316_9F38_41D7_CAC806C6B4AA",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": 58.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_1_HS_0_1_0_map.gif",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0.97,
   "hfov": 80.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803, this.camera_4C08AEB4_6961_11A6_41D4_013B9DB7EE7F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_6C383E29_6317_9B48_41D0_F819DB0E5988",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_1_HS_1_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_1_HS_1_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_1_HS_1_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_1_HS_1_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C436AB6_68A3_11A3_41D1_BC729EB66DEB",
   "pitch": -25.79,
   "yaw": 42.47,
   "hfov": 12.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6D0159EF_6312_F8C9_41C2_AB583BB10692",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "yaw": 42.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_1_HS_2_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.79,
   "hfov": 12.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C43FAB6_68A3_11A3_41B1_6592EC4F5FCE",
   "pitch": -27.55,
   "yaw": -100.83,
   "hfov": 10.94,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6D79911D_6312_A948_41D0_D3F7C69EEE28",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "yaw": -100.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_1_HS_3_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.55,
   "hfov": 10.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8, this.camera_4C119EBD_6961_11A1_41AC_D3AE992A2659); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7DAC080F_68A1_3061_41D1_DDB69D53C164",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": 122.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0_HS_4_1_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 1.75,
   "hfov": 57.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_715D2F17_68A7_1061_41D5_36050242207B",
   "pitch": -23.59,
   "yaw": 101.78,
   "hfov": 9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7F5CDE00_68A7_105F_41D4_DCD87AB9FAF7",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "yaw": 101.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.59,
   "hfov": 9
  }
 ]
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18, this.camera_4C252ED2_6961_11E3_41C2_53460BA1ADEE); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_785A2678_68A1_10AE_41D0_FD59DB16CFC8",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": -77.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0_HS_0_1_0_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.28,
   "hfov": 19.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7D8BE9CF_68A3_13E1_4194_94C59880EB1A",
   "pitch": 9.02,
   "yaw": -82.28,
   "hfov": 3.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7BABF21D_68A1_1061_41AF_0ACB5FA74B58",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": -82.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.02,
   "hfov": 3.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8, this.camera_4C1A3EC8_6961_11EF_41D4_AA51A1F650F3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7976BCA7_68A3_11A1_41D3_5FE033460291",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": -94.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0_HS_2_1_0_map.gif",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 177
     }
    ]
   },
   "pitch": -1.09,
   "hfov": 15.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7D8BB9CF_68A3_13E1_41C4_AB6A1AB3D440",
   "pitch": 7.87,
   "yaw": -93.43,
   "hfov": 3.06,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7D1A4775_68A1_70A1_41B8_3CAA08673091",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": -93.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.87,
   "hfov": 3.06
  }
 ]
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A, this.camera_4C61EF04_6961_1067_41C3_2BA08DAFA2D2); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_786546A0_68A1_305F_41BC_510CDF6C2A31",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": -79.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_1_HS_0_1_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.48,
   "hfov": 33.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C42FAB7_68A3_11A1_41D6_448E438C8D83",
   "pitch": 14.75,
   "yaw": -80.91,
   "hfov": 4.93,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_79DD4F51_68A3_70FE_41CB_8E33814A5A03",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": -80.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.75,
   "hfov": 4.93
  }
 ]
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F, this.camera_4C6CCF0E_6961_1063_41A5_B81578481CB1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_6C4DC631_6317_6B58_41D7_BA72E0A65B8B",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_1_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_1_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C438AB7_68A3_11A1_41CE_79BF13FE4BD4",
   "pitch": -29.73,
   "yaw": 112.17,
   "hfov": 11.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6DF29D67_6312_99F8_41AE_868FB36C298F",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "yaw": 112.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_1_HS_1_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.73,
   "hfov": 11.16
  }
 ]
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "map": {
  "width": 99.56,
  "x": 950.12,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 28
    }
   ]
  },
  "y": 1357.03,
  "offsetY": 0,
  "height": 179.65,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 949.46,
  "y": 1356.24,
  "width": 99.56,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_0.png",
     "width": 99,
     "class": "ImageResourceLevel",
     "height": 179
    }
   ]
  },
  "height": 179.65
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7D5A1F36_68A1_10A3_41D9_A64724A71D2E",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 97.4,
  "x": 1389.55,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 26
    }
   ]
  },
  "y": 1056.14,
  "offsetY": 0,
  "height": 158,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1388.63,
  "y": 1055.35,
  "width": 97.4,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_1.png",
     "width": 97,
     "class": "ImageResourceLevel",
     "height": 158
    }
   ]
  },
  "height": 158
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7F2194A5_68AF_71A1_41D2_654A25E02011",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 98.59,
  "x": 955.14,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_2_map.gif",
     "width": 15,
     "class": "ImageResourceLevel",
     "height": 26
    }
   ]
  },
  "y": 333.28,
  "offsetY": 0,
  "height": 164.98,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 954.35,
  "y": 332.48,
  "width": 98.59,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_2.png",
     "width": 98,
     "class": "ImageResourceLevel",
     "height": 164
    }
   ]
  },
  "height": 164.98
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7F71351C_68AF_1067_41DA_067E4BAF1B51",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 81.41,
  "x": 1047.81,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 29
    }
   ]
  },
  "y": 807.21,
  "offsetY": 0,
  "height": 147.05,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1047.81,
  "y": 807.21,
  "width": 81.41,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_3.png",
     "width": 81,
     "class": "ImageResourceLevel",
     "height": 147
    }
   ]
  },
  "height": 147.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7F6889BB_68AF_13A1_41AC_50BA3A3CAFCB",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 86.58,
  "x": 367.91,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 34
    }
   ]
  },
  "y": 781.3,
  "offsetY": 0,
  "height": 188.31,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 367.25,
  "y": 780.64,
  "width": 86.58,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_4.png",
     "width": 86,
     "class": "ImageResourceLevel",
     "height": 188
    }
   ]
  },
  "height": 188.31
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7F4E5DB2_68AF_13A3_41D9_2456324974E9",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 84.41,
  "x": 679.51,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 27
    }
   ]
  },
  "y": 484.78,
  "offsetY": 0,
  "height": 145.02,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 678.71,
  "y": 484.12,
  "width": 84.41,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_5.png",
     "width": 84,
     "class": "ImageResourceLevel",
     "height": 145
    }
   ]
  },
  "height": 145.02
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7D69B935_68AF_30A1_41BE_666E21D070F4",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 84.41,
  "x": 413.39,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 29
    }
   ]
  },
  "y": 1212.01,
  "offsetY": 0,
  "height": 155.84,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 412.6,
  "y": 1211.08,
  "width": 84.41,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_6.png",
     "width": 84,
     "class": "ImageResourceLevel",
     "height": 155
    }
   ]
  },
  "height": 155.84
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7EE82DA7_68AF_33A1_419F_CBBE9809EF31",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 95.24,
  "x": 593.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_7_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 29
    }
   ]
  },
  "y": 1614.56,
  "offsetY": 0,
  "height": 177.48,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 592.39,
  "y": 1613.76,
  "width": 95.24,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7299ADEF_630D_98C9_41CD_576A29A3AFC9_HS_7.png",
     "width": 95,
     "class": "ImageResourceLevel",
     "height": 177
    }
   ]
  },
  "height": 177.48
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7EDCE0F1_68AF_11A1_41DA_0AC52E9EDAE8",
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F, this.camera_4C319EDC_6961_11E7_41DA_395BA4FE9B2A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_6F6D4CBA_6313_9F48_41C9_25677831D0B1",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": 97.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_0_1_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.53,
   "hfov": 45.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C5E3AB4_68A3_11A7_41D0_45B6151C59C5",
   "pitch": -30.76,
   "yaw": 96.04,
   "hfov": 8.22,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6DD9C83E_6316_A748_41C3_0BC22F597BCA",
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "yaw": 96.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.76,
   "hfov": 8.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A, this.camera_4C3CEEE6_6961_11A3_41CE_5D97717740E8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_793F9F0A_68A3_1063_41D7_410E3C39D4F7",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": 51.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_2_1_0_map.gif",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -7.73,
   "hfov": 18.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C5E8AB5_68A3_11A1_41C0_A00A55E921B0",
   "pitch": 3.31,
   "yaw": 51.83,
   "hfov": 3.94,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_78BF48E1_68A1_11A1_41D6_C298F962A4C4",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": 51.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.31,
   "hfov": 3.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C415AB5_68A3_11A1_41B2_1F6C9E37E624",
   "pitch": 3.01,
   "yaw": 27.39,
   "hfov": 3.94,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7899BBB6_68A1_17A3_41AB_36273032C00C",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": 27.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.01,
   "hfov": 3.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13, this.camera_4C543EFA_6961_11A2_41A2_C728F45721FE); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7925FEC0_68A0_F1DE_4133_9900BD21F380",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": 28.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_5_1_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -6.85,
   "hfov": 18.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C, this.camera_4C49FEF0_6961_11BF_41D4_E2A1541517CC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_676E2BB0_68AF_17BE_41C9_06C5D091F8F4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": -50.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_6_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -9.11,
   "hfov": 33.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C419AB5_68A3_11A1_41BD_5E46F173E6A6",
   "pitch": 6.99,
   "yaw": -53.24,
   "hfov": 4.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_78712066_68AF_30A3_41B1_931E5432D326",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": -53.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.99,
   "hfov": 4.47
  }
 ]
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F, this.camera_4C79FF19_6961_1061_41A9_84A5982CF876); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_6C91DE62_6315_9BF8_41B3_D68E6CB06BC7",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_1_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_1_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_1_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_1_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C402AB6_68A3_11A3_41C4_F319A39B9020",
   "pitch": -30.41,
   "yaw": 103.98,
   "hfov": 10.06,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6D0D4FF2_6315_F8DB_41CD_9A3F45D5739A",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "yaw": 103.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_1_HS_1_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.41,
   "hfov": 10.06
  }
 ]
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "items": [
  {
   "media": "this.album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.55",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.34"
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.72",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.43"
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.52",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.46"
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.43",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.43"
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.28",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.49"
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.63",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.34"
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.43",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_7",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.75",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_8",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.59",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.70"
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_72F4B3BA_68E7_37A3_41A6_A77EDD8058E1_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "transparencyActive": true,
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "maxHeight": 37,
 "maxWidth": 49,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "right": 30,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": true,
 "bottom": 8,
 "height": 75,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C459ABD_68A3_11A1_41B7_825E0E784AE3",
   "pitch": 25.25,
   "yaw": 133.96,
   "hfov": 6.69,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_79EDE106_68BF_7062_41C6_86FBBBACB74E",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": 133.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 25.25,
   "hfov": 6.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8, this.camera_76EBFF9B_6961_1061_41D1_F44522F9B834); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7A89C168_68A0_F0AF_41C6_5EC9949C6E87",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_1_HS_1_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_1_HS_1_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "layout": "horizontal",
 "right": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": true,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 110,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "right": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "horizontalAlign": "center",
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": true,
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "85.959%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "width": "91.304%",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "paddingTop": 0
},
{
 "children": [
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 30,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": true,
 "bottom": "0%",
 "height": 51,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_63638F44_68A7_30E7_41C8_BC3FB7844E1C_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7C428AB7_68A3_11A1_41C8_477FA6A88FE4",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_7C436AB6_68A3_11A3_41D1_BC729EB66DEB",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_7C43FAB6_68A3_11A3_41B1_6592EC4F5FCE",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7AE53_6313_BBD9_41C5_617B1F18728F_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_715D2F17_68A7_1061_41D5_36050242207B",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7D8BE9CF_68A3_13E1_4194_94C59880EB1A",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6362E35F_68A7_10E1_41B9_C6E6FFA0856A_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7D8BB9CF_68A3_13E1_41C4_AB6A1AB3D440",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_63641B11_68A7_3060_41D9_AFCA9EFE3A18_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7C42FAB7_68A3_11A1_41D6_448E438C8D83",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EFCE5B5_6313_A959_41D0_AA36463A98EE_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_7C438AB7_68A3_11A1_41CE_79BF13FE4BD4",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_7C5E3AB4_68A3_11A7_41D0_45B6151C59C5",
 "colCount": 4,
 "frameCount": 21
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7C5E8AB5_68A3_11A1_41C0_A00A55E921B0",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7C415AB5_68A3_11A1_41B2_1F6C9E37E624",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C1D9C3E_6313_9F48_41D1_A1026F8110A8_1_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7C419AB5_68A3_11A1_41BD_5E46F173E6A6",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EFD7669_6313_ABC8_41D7_6C29C7875803_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_7C402AB6_68A3_11A3_41C4_F319A39B9020",
 "colCount": 4,
 "frameCount": 24
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6365177B_68A7_10A2_41D8_3F9D28F77F13_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7C459ABD_68A3_11A1_41B7_825E0E784AE3",
 "colCount": 4,
 "frameCount": 24
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "maxHeight": 60,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": true,
 "height": 60,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://www.instagram.com/nani_construction_realestate/', '_blank')",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button floorplan"
 },
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "fontStyle": "normal",
 "width": 113,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 49,
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "FLOORPLAN",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, null, null, false) } else { this.setComponentVisibility(this.MapViewer, false, 0, null, null, false) }",
 "iconBeforeLabel": true,
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
}],
 "class": "Player",
 "propagateClick": true,
 "borderSize": 0,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "mouseWheelEnabled": true,
 "scripts": {
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getKey": function(key){  return window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "height": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
