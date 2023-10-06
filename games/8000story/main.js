var FPS = 30;
//画面サイズ関係
var SCREEN_WIDTH = 640; //画面幅
var SCREEN_HEIGHT = 900; //画面高さ
var GAME_SCREEN_HEIGHT = 900; //ゲーム画面
var GAME_SCREEN_WIDTH = 640; //ゲーム画面

//ゲーム場面用予約語
var SCENE_TITLE = 1;
var SCENE_MAINGAME = 10;
//データはここへ
var ASSETS = {
	img_title: 'img/title.png',
	img_player: 'img/player.png',
	img_pause: 'img/pausebutton.png',
	img_buttons: 'img/buttons.png',
	img_gameover: 'img/gameover.png',
	img_bg: 'img/bg.png',
	img_obstacle: 'img/obstacle.png',
	/*
	se_start:'sound/aaa.mp3',
	se_ok:'sound/bbb.mp3',
	se_cancel:'sound/ccc.mp3',
	se_select:'sound/ddd.mp3',
	bgm_main:'sound/abc.mp3',
	bgm_gameover:'sound/def.mp3',
	*/
};
var GROUND_Y = 493;
var SCROLL_SPEED = 10;
//twitter
function twitter(text) { //表示したい文章を引数に持ってくる
	var title = "title";
	var url = "http://aaaa.com"; //ゲームのURLを入れる
	var hashtag = "ゲーム"; //カンマ区切りで複数可能
	window.open("http://twitter.com/intent/tweet?text=【" + title + "】" + text + "&url=" + url + "&hashtags=" + hashtag);
}

//プログラム開始初期化処理--------------------------------------
enchant();
var core; //ゲーム基幹
var se_ok, se_cancel, se_select, bgm; //BGMとよく使う効果音はグローバルにした
window.onload = function() {
	core = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
	core.preload(ASSETS);
	core.fps = FPS;
	core.onload = function() {
		system = new System();
		system.changeScene(SCENE_TITLE);
		//system.changeScene(SCENE_MAINGAME);
		/*
		//基本効果音・BGMの設定
		se_ok = new SoundEffect();
		se_ok.set(core.assets['se_ok'], 2);
		se_cancel = new SoundEffect();
		se_cancel.set(core.assets['se_cancel'], 2);
		se_select = new SoundEffect();
		se_select.set(core.assets['se_select'], 2);
		bgm = new Bgm();
		*/
	};
	core.start();
}

//システムクラス（ゲーム全体で必要な要素を保持する）---------------------------
var System = enchant.Class.create({
	initialize: function() {
		this.score = 0;
	},
	//シーン切り替え
	changeScene: function(sceneNumber) {
		switch (sceneNumber) {
			case SCENE_TITLE:
				var title = new TitleScene();
				break;
			case SCENE_MAINGAME:
				var main = new MainGameScene(); //メインゲームへ
				break;
		}
	},
});

var Player = enchant.Class.create(enchant.Sprite, {
	initialize: function(w, h) {
		enchant.Sprite.call(this, w, h);
		this.walkPattern = [0, 1, 2, 1];
		this.walkIndex = 0;
		this.isJump = false;
		this.isDead = false;
		this.vy;
		this.hitArea = [40, 90, 20, 128];
	},
	jump: function() {
		if (this.isDead) {
			return;
		}
		if (this.isJump) { //ジャンプ中なら
			this.y += this.vy++;
			if (this.y > GROUND_Y - this.height) {
				this.y = GROUND_Y - this.height;
				this.isJump = false;
				this.frame = 0;
			}
		}
	},
	onenterframe: function() {
		if (this.isDead) {
			this.y += this.vy++;
			if (this.y > GAME_SCREEN_HEIGHT) {
				var gameover = new GameoverScene(this); //ゲームオーバーシーンへ
			}
			return;
		}
		if (this.isJump) { //ジャンプ中なら
			if (this.vy < 0) { //上昇中
				this.frame = 4;
			} else { //下降中
				this.frame = 5;
			}
		} else {
			if (this.age % 3 == 0) {
				if (++this.walkIndex >= this.walkPattern.length) {
					this.walkIndex = 0;
				}
				this.frame = this.walkPattern[this.walkIndex];
			}
		}
	},
	collision(L, R, T, B) {
		if (this.isDead) {
			return;
		}
		if (rectCollision(L, R, T, B, this.x + this.hitArea[0], this.x + this.hitArea[1], this.y + this.hitArea[2], this.y + this.hitArea[3])) {
			this.isDead = true;
			this.vy = -10;
			this.frame = 24;
			return true;
		}
		return false;
	}
});
var Obstacle = enchant.Class.create(enchant.Sprite, {
	initialize: function(w, h) {
		enchant.Sprite.call(this, w, h);
		this.hitArea = [10, 54, 10, 54];
	},
	move: function() {
		this.x -= SCROLL_SPEED;
		if (this.x + this.width < 0) {
			this.x = GAME_SCREEN_WIDTH;
			this.y = GROUND_Y - random(1, 3) * this.height;
		}
	},
	collision: function(chara) {
		if (chara.collision(this.x + this.hitArea[0], this.x + this.hitArea[1], this.y + this.hitArea[2], this.y + this.hitArea[3])) {
			//当たった時の処理（今回はないよ）
		}
	}
});

function rectCollision(L1, R1, T1, B1, L2, R2, T2, B2) {
	if (L2 <= R1 && L1 <= R2) {
		if (T2 <= B1 && T1 <= B2) {
			return true;
		}
	}
	return false;
}
//メインゲームシーン---------------------------------------------------------------
var MainGameScene = enchant.Class.create(enchant.Scene, {
	initialize: function() {
		enchant.Scene.call(this);
		//画面初期処理-----------------
		core.replaceScene(this); //シーンを入れ替える
		this.backgroundColor = 'rgba(0, 0, 0, 1)'; //背景色 
		var screen = new Group(); //ゲーム用スクリーン作成
		this.addChild(screen);

		//背景を表示
		var bg = new Sprite(GAME_SCREEN_WIDTH, GAME_SCREEN_HEIGHT);
		bg.image = core.assets['img_bg'];
		screen.addChild(bg);
		var bg2 = new Sprite(GAME_SCREEN_WIDTH, GAME_SCREEN_HEIGHT);
		bg2.image = core.assets['img_bg'];
		bg2.moveTo(GAME_SCREEN_WIDTH, 0);
		screen.addChild(bg2);

		//敵クラス
		var obstacle = new Obstacle(64, 64);
		obstacle.image = core.assets['img_obstacle'];
		obstacle.moveTo(600, GROUND_Y - obstacle.height);
		screen.addChild(obstacle);
		//自機クラス生成
		var player = new Player(128, 128);
		player.image = core.assets['img_player'];
		player.moveTo(100, GROUND_Y - player.height);
		screen.addChild(player);

		//得点表示
		var label_score = new Label();
		label_score.color = 'white';
		label_score.font = '30px sens-serif';
		label_score.moveTo(250, 20);
		screen.addChild(label_score);

		//残り時間表示
		var timer = new TimeCountDown(5, 0); //分、秒で設定
		timer.moveTo(550, 20);
		screen.addChild(timer);

		var btn_pause = new Sprite(64, 64);
		btn_pause.image = core.assets['img_pause'];
		screen.addChild(btn_pause);
		btn_pause.addEventListener('touchend', function() {
			//se_ok.play();
			var pauseScene = new PuaseScene(screen.parentNode);
		});

		//自機の操作（このシーンへのタッチで操作）
		this.addEventListener('touchstart', function(e) {
			if (!player.isJump) {
				player.isJump = true;
				player.vy = -25;
			}
		});
		this.addEventListener('touchend', function(e) {
			if (player.isJump && player.vy < 0) {
				player.vy /= 2;
			}
		});

		//メインゲームシーンのループ処理------------------------------------
		this.addEventListener('enterframe', function() {
			//bgm.loop();//BGMループ再生
			if (timer.isTimeUp) { //タイムアップ
				//bgm.stop();
				var gameover = new GameoverScene(this); //ゲームオーバーシーンへ
				return;
			}
			//背景の移動処理
			bg.x -= SCROLL_SPEED;
			bg2.x -= SCROLL_SPEED;
			if (bg2.x <= 0) {
				bg.x = 0;
				bg2.x = GAME_SCREEN_WIDTH;
			}
			obstacle.move();
			player.jump();
			obstacle.collision(player);
			label_score.text = ('00000000' + system.score).slice(-8); //得点表示
		});
	},
});
//ポーズ画面関数（これはpushSceneで画面に表示）------------------------------------------------
var PuaseScene = enchant.Class.create(enchant.Scene, {
	initialize: function(rootScene) {
		enchant.Scene.call(this);
		//画面初期処理-----------------
		core.pushScene(this); //プッシュで上に出す
		var screen = new Group(); //ゲーム用スクリーン作成
		this.addChild(screen);

		this.backgroundColor = 'rgba(0, 0, 0, 0.5)'; //背景色 (少し暗くする)

		//再開
		var btn_resume = new Sprite(200, 100);
		btn_resume.image = core.assets['img_buttons'];
		btn_resume.moveTo(80, 200);
		btn_resume.frame = 0;
		screen.addChild(btn_resume);
		btn_resume.addEventListener('touchend', function() {
			//se_cancel.play();
			removeChildren(this); //子要素を削除
			core.popScene();
		});
		//タイトルへ戻る
		var btn_title = new Sprite(200, 100);
		btn_title.image = core.assets['img_buttons'];
		btn_title.frame = 1;
		btn_title.moveTo(350, 200);
		screen.addChild(btn_title);
		btn_title.addEventListener('touchend', function() {
			//se_ok.play();
			fade_out.start(screen);
		});
		var fade_out = new FadeOut(GAME_SCREEN_WIDTH, GAME_SCREEN_HEIGHT, "black");
		//ポーズ画面シーンのループ処理-----------------------------------------
		this.addEventListener('enterframe', function() {
			if (fade_out.do(0.05)) { //trueが帰ってきたらフェードアウト後の処理へ
				//bgm.stop();
				removeChildren(this); //子要素を削除
				removeChildren(rootScene); //子要素を削除
				system.changeScene(SCENE_TITLE); //シーンの切り替え
			}
		});
	}
});
//タイトル画面シーン-------------------------------------------------------------
var TitleScene = enchant.Class.create(enchant.Scene, {
	initialize: function() {
		enchant.Scene.call(this); //シーンクラス呼び出し
		//画面初期処理-----------------
		core.replaceScene(this); //シーンを入れ替える
		this.backgroundColor = 'rgba(0, 0, 0, 1)'; //背景色 
		var screen = new Group(); //ゲーム用スクリーン作成
		this.addChild(screen);
		//基本効果音
		//var se_start = new SoundEffect();
		//se_start.set(core.assets['se_start'], 1);
		//タイトルロゴ画像表示
		var logo_title = new Sprite(640, 300);
		logo_title.image = core.assets['img_title'];
		logo_title.moveTo(0, 100);
		screen.addChild(logo_title);

		//touch to start表示
		var label = new Label();
		label.text = "TOUCH TO START";
		label.color = 'white';
		label.font = '40px sens-serif';
		label.x = 140;
		label.y = 600;
		label.width = GAME_SCREEN_WIDTH;
		screen.addChild(label);

		var isStartPushed = false; //スタートボタンチェックフラグ
		//画面タッチでスタート
		this.addEventListener('touchend', function() {
			if (isStartPushed == false) {
				isStartPushed = true; //押したよフラグ
				//se_start.play();//効果音
				this.from = this.age;
			}
		});
		//フェードアウト用オブジェクト
		var fade_out = new FadeOut(GAME_SCREEN_WIDTH, GAME_SCREEN_HEIGHT, "black");

		//タイトル画面シーンのループ--------------------------------------------------
		this.addEventListener('enterframe', function() {
			if (isStartPushed == true) { //スタートボタンが押された
				if (label.visible == true) { //スタートボタン点滅処理
					label.visible = false;
				} else {
					label.visible = true;
				}
				if (this.age - this.from > 20) { //20フレーム後にフェードアウト
					fade_out.start(screen);
				}
			}
			if (fade_out.do(0.1)) { //trueが帰ってきたらフェードアウト後の処理へ
				removeChildren(this); //子要素を削除
				system.changeScene(SCENE_MAINGAME); //シーンの切り替え
			}
		});
	},
});
//ゲームオーバーシーン（ツイッターや得点の表示）-------------------------------------------------------------
var GameoverScene = enchant.Class.create(enchant.Scene, {
	initialize: function(rootScene) {
		enchant.Scene.call(this); //シーンクラス呼び出し
		//画面初期処理-----------------
		core.pushScene(this); //シーンを入れ替える
		this.backgroundColor = 'rgba(0, 0, 0, 0.3)'; //背景色 
		var screen = new Group(); //ゲーム用スクリーン作成
		this.addChild(screen);
		//効果音・BGM-----------------
		var se_gameover = core.assets['bgm_gameover'];
		//se_gameover.play();

		//ここからシーンの要素作成追加---------------------
		//ゲームオーバー
		var logo_gameover = new Sprite(500, 200);
		logo_gameover.image = core.assets['img_gameover'];
		logo_gameover.moveTo(60, 150);
		screen.addChild(logo_gameover);

		//得点表示
		var label = new Label();
		label.text = "score : " + ('00000000' + system.score).slice(-8); //8ケタの0詰め表示
		label.color = 'white';
		label.font = '50px sens-serif';
		label.x = 100;
		label.y = 400;
		label.width = GAME_SCREEN_WIDTH;
		screen.addChild(label);

		//ツイートボタン
		var btn_tweet = new Sprite(200, 100);
		btn_tweet.image = core.assets['img_buttons'];
		btn_tweet.moveTo(80, 600);
		btn_tweet.frame = 2;
		btn_tweet.addEventListener('touchend', function() {
			//se_ok.play();//効果音
			twitter("ここに文章をいれてね");
		});
		//終了ボタン
		var btn_end = new Sprite(200, 100);
		btn_end.image = core.assets['img_buttons'];
		btn_end.frame = 3;
		btn_end.moveTo(350, 600);
		btn_end.addEventListener('touchend', function() {
			//se_ok.play();//効果音
			fade_out.start(screen);
		});

		var fade_out = new FadeOut(GAME_SCREEN_WIDTH, GAME_SCREEN_HEIGHT, "black");

		this.from = this.age; //経過フレーム計測用
		var isCreateBtn = false; //ボタンを追加したか
		//ゲームオーバーシーンのループ処理------------------------------
		this.addEventListener('enterframe', function() {
			if (this.age - this.from < 40) { //一定時間待つ
				return;
			}
			//ボタンを表示させる
			if (isCreateBtn == false) {
				screen.addChild(btn_tweet);
				screen.addChild(btn_end);
				isCreateBtn = true;
			}
			if (fade_out.do(0.05)) { //trueが帰ってきたらフェードアウト後の処理へ
				removeChildren(this); //このシーンの要素を削除
				removeChildren(rootScene); //子要素を削除
				system.changeScene(SCENE_TITLE); //シーン切り替え
			}
		});
	}
});