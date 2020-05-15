import React,{ Component, useEffect, useState } from 'react';
import {StyleSheet,View,Text,AsyncStorage,Dimensions} from 'react-native';
import { SvgXml } from "react-native-svg";
const HAS_LAUNCHED = 'hasLaunched';
const { width, height } = Dimensions.get('window')
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const lotusImageData = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1280.000000pt" height="1006.000000pt" viewBox="0 0 1280.000000 1006.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1006.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M7642 10043 c-17 -8 -70 -60 -117 -114 -105 -121 -204 -219 -271
-270 -46 -35 -53 -38 -80 -27 -60 22 -96 5 -184 -89 -129 -139 -331 -418 -400
-553 -12 -25 -36 -64 -53 -87 -18 -25 -27 -48 -23 -58 11 -30 39 -11 60 40 41
98 146 267 277 441 91 121 152 188 206 226 67 45 102 37 176 -43 127 -138 224
-328 330 -649 78 -235 114 -323 132 -317 6 2 10 33 9 73 -2 188 -207 656 -399
910 -21 29 152 241 308 375 80 70 109 74 178 31 85 -54 184 -185 291 -382 77
-141 138 -180 138 -87 0 51 -29 102 -153 276 -97 135 -205 253 -266 293 -52
32 -108 37 -159 11z"/>
<path d="M5873 9919 c-51 -15 -121 -91 -157 -172 -18 -40 -72 -182 -121 -317
-49 -135 -90 -247 -92 -249 -2 -3 -45 37 -97 88 -64 64 -125 113 -197 158
-199 123 -256 143 -283 101 -18 -29 4 -49 110 -103 157 -79 219 -129 361 -292
l63 -71 -64 -154 c-34 -84 -87 -204 -116 -266 -37 -82 -51 -121 -47 -140 5
-25 0 -30 -46 -55 -67 -35 -151 -108 -184 -160 -51 -80 -109 -293 -120 -439
-3 -43 -9 -78 -12 -78 -3 0 -17 16 -30 36 -39 57 -154 157 -217 189 -45 23
-71 30 -109 28 -45 -1 -54 -5 -87 -43 -50 -56 -54 -102 -34 -348 17 -208 23
-754 8 -736 -32 36 -260 579 -249 591 3 2 17 -27 33 -64 32 -79 40 -91 53 -77
6 5 -16 68 -60 169 -69 159 -69 161 -114 415 -70 395 -81 503 -66 694 12 159
25 240 44 264 46 59 346 -113 550 -315 76 -76 129 -139 259 -313 58 -78 78
-95 85 -73 6 16 -222 309 -307 394 -47 47 -147 133 -222 191 -115 88 -135 107
-124 119 8 8 23 46 34 84 13 41 49 116 88 180 37 61 74 122 83 137 18 30 8 49
-14 27 -8 -8 -52 -73 -97 -146 -46 -72 -106 -156 -135 -186 l-52 -55 -60 24
c-69 28 -97 25 -136 -13 -52 -53 -61 -136 -41 -413 16 -215 45 -434 85 -640
11 -52 18 -96 16 -98 -1 -1 -19 24 -40 55 -156 236 -444 562 -665 752 -74 64
-146 124 -158 133 -22 15 -23 18 -9 40 8 12 20 73 27 133 31 287 76 364 205
353 80 -7 196 -88 336 -238 62 -66 118 -120 126 -120 45 0 -35 108 -167 225
-162 145 -278 205 -392 205 -58 0 -63 -2 -98 -39 -45 -47 -60 -100 -89 -325
-11 -87 -23 -161 -25 -163 -2 -3 -23 8 -47 24 -34 23 -53 28 -104 28 -52 0
-68 -5 -103 -28 -45 -31 -55 -52 -97 -195 l-27 -93 17 -171 c9 -94 18 -175 20
-182 2 -6 14 -76 25 -156 30 -205 63 -337 140 -555 37 -104 91 -262 119 -350
62 -190 119 -321 217 -505 67 -124 286 -570 281 -570 -2 0 -61 20 -132 44
-121 41 -290 108 -429 171 -44 20 -69 25 -94 20 -76 -14 -92 -75 -43 -166 16
-30 66 -142 111 -249 110 -261 141 -319 260 -500 236 -357 400 -562 644 -806
214 -213 369 -325 651 -469 138 -70 243 -114 559 -231 156 -57 158 -59 120
-66 -55 -10 -480 -45 -724 -60 -272 -16 -895 -16 -1080 0 -592 52 -1058 145
-1550 309 -439 146 -884 388 -1329 724 -219 164 -251 198 -266 281 -8 43 -13
40 130 62 159 24 297 29 480 17 561 -38 809 -83 1400 -256 143 -42 350 -98
461 -125 110 -27 227 -58 259 -69 33 -12 63 -21 67 -21 13 0 9 27 -4 33 -7 3
-87 36 -178 75 -205 86 -223 92 -555 193 -569 172 -623 184 -1020 234 -433 54
-574 66 -865 74 -316 9 -341 5 -383 -56 -68 -97 -32 -294 80 -431 142 -174
898 -556 1528 -772 943 -323 1552 -413 2865 -427 464 -4 588 -2 755 11 110 9
214 19 230 22 17 3 -16 -13 -73 -35 -321 -125 -754 -375 -854 -493 -202 -237
-289 -499 -424 -1278 -85 -489 -110 -612 -180 -862 -45 -163 -84 -269 -133
-366 -16 -32 -46 -102 -66 -157 -20 -55 -52 -125 -70 -155 -39 -66 -47 -91
-47 -141 1 -48 17 -72 65 -100 71 -39 103 -32 272 61 108 59 243 167 375 300
79 78 256 232 325 282 28 20 119 79 204 133 85 53 182 117 215 143 84 65 306
282 440 432 281 314 420 521 619 920 121 241 160 366 173 543 6 81 5 84 -46
217 -53 139 -64 160 -85 160 -14 0 -35 -42 -35 -70 0 -44 -23 -122 -47 -157
-14 -20 -41 -82 -60 -137 -66 -193 -205 -532 -272 -666 -91 -180 -136 -252
-246 -391 -194 -243 -330 -373 -547 -524 -505 -351 -625 -444 -820 -633 l-127
-124 20 64 c106 344 105 338 230 1143 81 525 141 766 241 972 101 209 274 365
541 488 77 36 375 120 547 155 83 17 123 20 193 15 103 -8 128 2 158 68 44 97
9 237 -69 273 -32 16 -42 27 -54 65 l-14 46 36 -15 c19 -8 52 -23 72 -33 45
-23 48 -23 48 -5 0 8 -15 25 -32 37 -18 13 -69 55 -112 94 -249 220 -332 316
-465 539 -265 446 -402 949 -372 1373 13 176 36 273 94 397 55 115 89 156 128
156 16 0 29 -4 29 -9 0 -6 28 -23 63 -40 175 -84 508 -333 751 -561 78 -73
217 -246 269 -334 71 -123 177 -352 218 -476 56 -167 61 -249 24 -394 -35
-142 -80 -239 -161 -348 -76 -102 -93 -158 -56 -191 27 -25 77 -25 110 0 39
29 175 205 230 298 87 148 124 316 103 464 -15 104 -39 174 -113 341 -180 405
-355 635 -776 1019 l-201 184 26 49 c35 64 125 162 177 193 99 58 259 68 394
24 65 -22 152 -80 214 -145 l37 -39 -110 -155 c-186 -262 -182 -257 -183 -302
-1 -37 2 -43 27 -52 17 -6 37 -6 54 0 24 8 30 19 45 79 24 92 78 200 183 365
112 174 150 225 262 341 97 101 151 137 244 163 67 20 119 11 211 -34 100 -50
267 -202 324 -296 9 -14 15 -16 23 -8 8 7 -7 40 -55 120 -79 130 -100 156
-173 213 -90 70 -174 106 -251 106 -55 0 -78 -6 -144 -38 -98 -46 -186 -132
-311 -302 -48 -66 -92 -124 -96 -129 -5 -5 -22 5 -41 23 -67 66 -190 139 -268
161 -81 22 -258 28 -304 10 -14 -5 -27 -6 -30 -2 -3 5 0 98 5 208 7 136 7 208
0 226 -22 58 -111 40 -111 -23 0 -47 38 -278 55 -334 22 -74 20 -91 -15 -105
-58 -24 -180 -165 -218 -253 l-12 -27 -97 74 c-113 85 -200 126 -271 126 -46
0 -54 -4 -113 -57 -83 -74 -93 -87 -139 -185 -98 -210 -134 -400 -127 -668 4
-156 9 -198 46 -380 52 -256 122 -469 228 -696 144 -306 247 -445 471 -634
l101 -85 -39 -8 c-87 -18 -562 54 -788 119 -256 74 -608 251 -822 414 -209
159 -448 411 -671 706 -230 306 -389 630 -434 891 -8 47 -20 104 -26 126 -6
21 -8 41 -6 43 2 3 17 0 33 -6 15 -6 119 -33 230 -61 350 -85 539 -169 874
-385 75 -48 308 -227 430 -329 63 -53 147 -122 185 -153 39 -30 109 -94 158
-141 60 -58 90 -82 98 -74 15 15 -221 294 -317 373 -190 158 -251 202 -454
332 -224 143 -319 198 -455 265 -71 34 -124 63 -117 63 22 0 52 40 52 70 0 17
-29 105 -65 195 -90 227 -126 372 -184 745 -23 145 -47 408 -38 417 10 9 113
-75 179 -146 130 -142 349 -451 478 -675 112 -196 160 -307 235 -548 85 -270
125 -380 143 -386 16 -5 15 24 -4 133 -36 201 -166 553 -276 743 -66 115 -312
489 -387 587 -88 116 -279 341 -335 393 -49 46 -61 53 -84 47 -36 -9 -69 -40
-75 -72 -6 -32 55 -398 126 -758 80 -401 95 -485 87 -480 -18 11 -177 287
-258 450 -126 250 -252 643 -332 1036 -40 193 -49 304 -49 574 -1 208 1 224
24 289 13 38 28 73 33 78 25 25 197 -48 326 -140 104 -73 532 -499 613 -609
33 -46 95 -140 136 -210 60 -102 80 -146 97 -215 12 -48 55 -185 96 -304 41
-119 84 -254 95 -299 32 -128 70 -173 111 -132 7 8 27 16 44 20 l31 6 -15 -72
c-20 -97 -20 -321 1 -472 17 -120 63 -344 131 -631 20 -84 36 -166 36 -183 0
-45 15 -68 49 -76 38 -8 89 17 97 49 4 17 -13 60 -59 152 -90 180 -133 302
-177 500 -80 355 -76 617 12 883 76 228 152 217 413 -59 50 -52 124 -142 165
-199 71 -98 100 -128 100 -101 0 15 -89 146 -150 219 -27 33 -108 123 -180
200 -174 186 -226 211 -312 150 -40 -29 -62 -82 -83 -199 -27 -150 -28 -151
-51 -34 -13 62 -17 173 -21 517 l-5 437 36 36 c33 33 40 36 77 30 88 -14 190
-83 265 -180 30 -37 54 -72 54 -76 0 -4 15 -30 33 -58 67 -99 271 -529 337
-709 22 -61 32 -73 45 -54 14 24 -181 468 -303 689 l-49 90 23 18 c24 18 24
21 14 84 -22 128 20 354 85 467 55 93 234 203 332 203 119 -1 258 -115 348
-286 39 -74 63 -96 57 -52 -6 48 -92 209 -138 258 -64 69 -157 137 -205 152
-39 11 -40 13 -35 47 3 20 8 61 12 91 16 141 53 251 199 597 113 266 213 464
259 511 l33 34 34 -17 c100 -51 315 -257 394 -378 31 -49 88 -156 126 -240 37
-83 74 -154 80 -156 59 -19 -200 489 -352 691 -63 85 -167 192 -204 210 -43
22 -85 28 -122 17z m-223 -6258 c-8 -5 -26 -12 -40 -15 -24 -7 -24 -6 -6 8 11
9 29 16 40 16 17 -1 18 -2 6 -9z"/>
<path d="M8434 9698 c-59 -40 -114 -117 -304 -433 -76 -126 -168 -272 -204
-323 -65 -94 -72 -122 -32 -122 17 0 30 16 60 78 58 117 331 567 395 650 67
87 133 127 181 110 63 -21 173 -178 210 -296 55 -178 89 -429 90 -677 l2 -190
-36 -32 c-41 -38 -45 -57 -16 -73 27 -14 37 -7 62 47 25 53 195 227 255 260
l40 23 -4 -23 c-3 -13 8 -83 23 -157 25 -122 27 -155 27 -340 0 -234 -22 -465
-58 -615 -29 -121 -108 -363 -163 -500 -56 -142 -82 -230 -82 -284 0 -26 -7
-73 -15 -104 -18 -68 -18 -77 -5 -77 5 0 21 24 36 53 14 28 44 76 65 105 42
55 72 125 168 394 138 385 191 635 207 990 7 148 -7 391 -27 463 -25 92 -59
151 -100 175 -77 43 -119 15 -265 -175 l-69 -90 -7 180 c-4 99 -14 234 -23
300 -22 164 -90 435 -129 520 -54 115 -140 195 -209 195 -14 0 -47 -15 -73
-32z"/>
<path d="M10690 8701 c-93 -30 -130 -66 -260 -251 -41 -58 -101 -141 -133
-184 -134 -177 -169 -236 -138 -236 4 0 34 39 67 88 117 173 260 298 406 356
78 31 77 31 106 8 74 -57 62 -362 -29 -757 -103 -439 -222 -803 -346 -1050
-123 -243 -492 -780 -792 -1150 -57 -71 -163 -211 -234 -310 -140 -194 -174
-237 -302 -376 -94 -101 -126 -163 -107 -204 18 -39 62 -34 114 13 22 20 92
114 154 207 62 94 154 222 204 285 156 194 441 579 557 751 137 205 174 268
364 620 278 518 314 608 475 1199 158 581 183 711 155 813 -17 58 -77 138
-121 159 -43 21 -107 30 -140 19z"/>
<path d="M7759 8557 c-86 -59 -289 -261 -461 -456 -150 -171 -348 -422 -396
-503 -9 -16 -19 -28 -23 -28 -3 0 -11 25 -18 56 -30 134 -211 538 -307 686
-70 109 -167 201 -239 228 -84 32 -160 31 -216 -2 -97 -57 -172 -163 -228
-323 -41 -120 -103 -404 -126 -575 -23 -184 -22 -204 19 -198 20 3 21 10 23
123 2 199 33 371 103 570 88 248 220 386 340 352 69 -19 176 -114 246 -217
112 -165 363 -714 362 -792 0 -32 5 -45 31 -69 l32 -29 35 27 c27 20 52 61
104 169 130 270 381 569 650 775 164 126 166 127 183 92 36 -70 57 -198 68
-408 11 -225 15 -255 28 -255 17 0 18 28 5 247 -17 309 -49 499 -90 544 -26
28 -72 23 -125 -14z"/>
<path d="M8307 8030 c-82 -72 -157 -300 -157 -479 0 -102 7 -125 35 -119 15 2
23 30 46 143 35 178 53 238 91 300 29 47 45 64 59 65 4 0 25 -18 48 -40 49
-48 92 -130 141 -269 34 -99 60 -138 60 -91 0 20 -139 397 -166 452 -38 74
-100 89 -157 38z"/>
<path d="M7852 7663 c-5 -10 -12 -30 -15 -44 -7 -27 -47 -437 -47 -477 l0 -24
-32 28 c-18 15 -47 33 -65 41 -42 17 -186 18 -181 1 3 -7 18 -15 34 -19 63
-12 127 -53 166 -106 21 -29 45 -53 53 -53 11 0 15 -22 17 -107 2 -66 7 -108
14 -110 8 -3 13 56 17 189 9 310 43 504 102 590 14 20 25 45 25 56 0 43 -70
70 -88 35z"/>
<path d="M7988 7618 c-16 -12 -16 -16 5 -60 12 -27 27 -46 32 -45 6 2 10 28
10 58 0 58 -14 72 -47 47z"/>
<path d="M9600 7605 c-25 -17 -57 -63 -105 -151 -99 -178 -271 -446 -534 -833
-126 -185 -243 -358 -261 -386 -32 -50 -32 -50 -26 -15 43 230 46 589 7 805
-55 302 -101 402 -219 472 -50 29 -103 27 -159 -8 -44 -27 -179 -181 -240
-272 -46 -70 -324 -621 -425 -842 -223 -491 -476 -1292 -543 -1725 -31 -198
-32 -547 -2 -537 8 2 12 43 13 128 2 185 51 525 115 804 121 526 308 1040 579
1590 142 288 231 427 355 552 88 89 179 148 194 126 3 -5 21 -30 39 -56 84
-120 152 -436 152 -709 0 -244 -65 -679 -114 -763 -29 -49 -32 -65 -12 -65 11
0 12 -7 5 -32 -151 -541 -223 -743 -359 -1005 -96 -186 -150 -263 -265 -379
-124 -125 -162 -145 -357 -188 -54 -12 -88 -78 -68 -131 11 -28 6 -30 -140
-60 -110 -23 -220 -60 -323 -110 -96 -47 -195 -69 -422 -96 -114 -13 -145 -23
-145 -43 0 -35 24 -38 182 -16 84 11 187 27 228 35 41 8 129 17 195 19 115 5
228 23 289 46 16 6 128 33 250 61 121 28 343 82 492 120 149 37 297 71 328 75
54 7 56 6 56 -18 0 -13 -23 -61 -51 -106 -97 -159 -329 -323 -614 -435 -301
-118 -702 -109 -1244 29 -164 42 -232 44 -266 9 -40 -39 -28 -84 34 -130 46
-33 60 -37 321 -89 206 -41 340 -58 655 -82 l89 -7 89 -78 c49 -42 135 -133
191 -202 150 -184 419 -509 509 -615 79 -92 222 -220 327 -292 218 -148 476
-204 838 -180 576 38 1114 162 1840 422 331 118 580 201 812 269 113 34 225
72 250 85 87 48 99 63 121 154 11 46 16 87 12 91 -19 18 -141 61 -171 60 l-34
0 18 27 c13 19 18 45 17 92 -1 160 -88 248 -410 412 -206 105 -289 143 -738
335 -271 116 -713 277 -900 329 -55 15 -167 37 -250 48 l-150 22 45 16 c25 9
119 43 210 77 91 33 300 108 464 166 332 118 571 213 841 333 99 44 241 105
315 137 474 200 872 439 1091 655 72 71 94 101 133 179 35 70 46 104 46 140 0
108 -65 161 -209 168 -129 7 -1170 -125 -1753 -222 -147 -25 -269 -45 -272
-45 -3 0 -6 -9 -6 -20 0 -13 7 -20 19 -20 10 0 169 25 352 55 549 89 845 125
1179 141 234 11 489 -24 498 -69 11 -55 -234 -304 -458 -467 -190 -137 -508
-351 -640 -430 -365 -220 -1397 -610 -1835 -694 -166 -32 -314 -49 -445 -52
-285 -7 -396 -17 -419 -38 -31 -28 -29 -105 2 -134 21 -20 30 -21 119 -15 95
6 97 5 129 -22 29 -24 38 -26 74 -19 77 16 432 10 530 -9 200 -39 545 -144
725 -220 391 -166 588 -259 775 -365 111 -62 341 -239 454 -347 53 -51 91 -81
88 -70 -17 60 -17 82 -3 94 23 20 34 6 57 -72 32 -113 29 -109 104 -132 l68
-20 -204 -107 c-707 -371 -1218 -555 -1759 -632 -285 -41 -708 -60 -903 -41
-350 36 -626 171 -892 439 -66 67 -188 191 -270 276 -98 102 -187 183 -255
233 -100 73 -200 163 -200 179 0 5 20 8 44 8 68 0 200 52 428 167 221 111 450
255 519 325 126 129 175 241 167 380 -8 127 -68 193 -168 186 -41 -3 -47 -1
-37 12 7 8 84 96 172 195 187 210 250 289 413 521 226 322 330 516 416 779 66
201 75 240 55 233 -7 -2 -26 -40 -41 -84 -43 -123 -114 -258 -281 -535 -227
-378 -339 -532 -545 -755 -175 -188 -285 -280 -474 -399 -17 -11 -36 -33 -41
-50 -6 -16 -15 -33 -21 -38 -9 -6 -164 -58 -246 -82 -20 -6 -14 4 32 53 161
169 364 572 528 1047 61 177 197 626 245 808 39 148 37 143 228 427 266 392
492 733 578 870 88 141 195 268 211 252 6 -6 12 -65 15 -132 5 -96 2 -142 -13
-217 -16 -85 -17 -97 -3 -121 19 -34 46 -34 71 -2 20 27 33 131 45 361 6 130
-3 177 -44 209 -34 27 -61 25 -103 -5z"/>
<path d="M6193 7445 c-55 -23 -67 -62 -54 -171 6 -51 11 -119 11 -152 0 -56
33 -241 51 -290 5 -13 13 -21 18 -18 12 8 66 172 85 256 8 36 20 115 26 175
15 134 4 176 -54 200 -42 18 -43 18 -83 0z"/>
<path d="M6713 7286 l-28 -24 5 -119 c3 -65 5 -200 4 -300 0 -142 2 -183 12
-183 7 0 16 17 20 38 3 20 25 87 47 147 55 151 106 319 108 358 3 48 -9 76
-41 92 -44 23 -94 19 -127 -9z"/>
<path d="M7321 7132 c-90 -92 -128 -149 -114 -170 5 -9 22 -18 36 -20 22 -3
27 2 33 25 12 51 46 107 95 160 27 28 49 57 49 62 0 27 -38 5 -99 -57z"/>
<path d="M6480 7095 c-16 -20 -20 -386 -4 -392 13 -4 44 114 70 269 15 88 16
109 5 122 -17 20 -55 21 -71 1z"/>
<path d="M5606 7007 c-14 -14 -28 -40 -31 -59 -11 -56 22 -215 60 -293 18 -38
35 -78 37 -88 5 -28 23 -21 26 10 1 15 10 57 18 93 28 113 -11 321 -65 350
-18 9 -25 7 -45 -13z"/>
</g>
</svg>
`

const LoadingScreen = props => {
    const [isFirstLaunch,setFirstLaunch] = useState('true');

    useEffect(() => { 
        
        async function checkLaunchState(){
            console.log('LoadingScreen->checking .. checkLaunchState:')
            const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);
            console.log('LoadingScreen->checkLaunchState:'+hasLaunched)
            if(hasLaunched == null){
                console.log('going to first experience ...')
                props.navigation.navigate({routeName: 'FirstExperience'});
            }else{
                console.log('going to home screen ...')
                props.navigation.navigate({routeName: 'Home'});
            }
        }
        checkLaunchState();
    },[]);

    async function getLaunchState() {
      return await AsyncStorage.getItem(HAS_LAUNCHED);   
    }

    const unsubscribe = props.navigation.addListener('didFocus', () => {
        console.log('focussed');
        console.log('LoadingScreen->checking .. checkLaunchState:')
        const hasLaunched = getLaunchState() 
        console.log('LoadingScreen->checkLaunchState:'+hasLaunched)
        if(hasLaunched == null){
            console.log('going to first experience ...')
            props.navigation.navigate({routeName: 'FirstExperience'});
        }else{
            console.log('going to home screen ...')
            props.navigation.navigate({routeName: 'Home'});
        }
    });
        


    return (
    <View style={styles.screen}>
        <View style={styles.meditationTypeImage}><SvgXml xml={lotusImageData} width= {width * 0.3} height= { width * 0.3}/></View>
        <View style={{ height: hp("2%")}} />
        <View style={{height: hp("4.58%"),alignItems:'center'}} >
            <Text style={styles.welcome}>
                We Meditate
            </Text>
            <View style={{height: hp("2%")}} />
            <View style={{height: hp("3.44%"), alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                    Guided meditations 
                </Text>
            </View>
            <View style={{height: hp("3.44%"), alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                    for better life
                </Text>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    meditationTypeImage: {
        alignItems: "center",
        marginBottom: 10
    },
    welcome: {
        width: wp("83.94%"),
        height: hp("9.17"),
        fontFamily: 'raleway-regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: wp("7.29%"),
        lineHeight: hp("4.58%"),
        textAlign: "center",
        letterSpacing: 0.8,
        color: '#7B7B7B',
        top: hp("2.29%")
    },
    welcomeMessage: {
        position: "absolute",
        width: wp("59.12%"),
        height: hp("2.86%"),
        fontFamily: "raleway-regular",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: wp("4.86%"),
        lineHeight: hp("2.86%"),
        textAlign: "center",
        letterSpacing: 0.625,
        color: "#7B7B7B"
    },
    
      
});
  
export default LoadingScreen;