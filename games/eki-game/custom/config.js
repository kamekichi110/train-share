
var SCREEN_WIDTH = 1024;
var SCREEN_HEIGHT = 768;
var MARKER_RADIUS = 70;
var MARKER_STROKE_WIDTH = 8;

var TRACK_NUM = 9;
var ICON_INTERVAL_DEGREE = 180 / (TRACK_NUM - 1); // 22.5

var MARKER_APPEARANCE_DELTA = 1000; // ノーツ出現時間(ms): 大きくするほど低速
var UNIT_ARRANGE_RADIUS = SCREEN_WIDTH * 0.41 | 0;
var MUSIC_START_DELAY = 2000;

var RATING_TABLE = {
  perfect: {
    score: 1000,
    range: 34, //ms
  },
  great: {
    score: 500,
    range: 64, //ms
  },
  good: {
    score: 100,
    range: 100, //ms
  },
  miss: {
    score: 0,
    range: 134, //ms
  },
};

// キーボード操作用
var KEYCODE_TO_KEYDATA_MAP = {
  80: {key:"p", id:0},
  // 187: {key:";", id:0},
  76: {key:"l", id:1},
  75: {key:"k", id:2},
  78: {key:"n", id:3},
  66: {key:"b", id:4},
  // 32: {key:"sp", id:4},
  86: {key:"v", id:5},
  68: {key:"d", id:6},
  83: {key:"s", id:7},
  81: {key:"q", id:8},
  // 65: {key:"a", id:8},
};
var INDEX_TO_KEY_MAP = {};
KEYCODE_TO_KEYDATA_MAP.forIn(function(key, val) {
  INDEX_TO_KEY_MAP[val.id] = val.key;
});

// HTMLの<input>要素からファイルを選択する
var inputMP3 = document.getElementById('mp3'); // 'fileInput'は適切なIDに置き換えてください

// ファイルが選択されたときのイベントハンドラを設定
inputMP3.addEventListener('change', function() {
    var selected1 = inputElement.files[0]; // 最初に選択されたファイルを取
    var mp3 ="";
    if (selected1) {
        var fileURL1 = URL.createObjectURL(selected1);
        ASSETS.sound.music = fileURL1; // ファイルのURLを作成
    }
});

// HTMLの<input>要素からファイルを選択する
var inputElement = document.getElementById('json'); // 'fileInput'は適切なIDに置き換えてください

// ファイルが選択されたときのイベントハンドラを設定
inputElement.addEventListener('change', function() {
    var selectedFile = inputElement.files[0]; // 最初に選択されたファイルを取得

    if (selectedFile) {
        var fileURL = URL.createObjectURL(selectedFile);
        ASSETS.json.beatmap = fileURL; // ファイルのURLを作成
    }
});



var ASSETS = {
  sound: {
    music: "../8000youkai/assets/youkai.mp3",
    ring: "./assets/tamborine.mp3",
  },
  json: {
    beatmap: "../8000youkai/assets/youkai.json"
  }
};

// テスト用譜面
// var DEBUG_BEATMAP = {
//   offset: 0,
//   notes: [],
// };
// (100).times(function(i) {
//   DEBUG_BEATMAP.notes.push({
//     track: i%9,
//     targetTime: 500*i
//   });
// });