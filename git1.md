17期生 お名前
篠田さん 指摘してくれた方
谷島さん
能登谷さん
星さん
永田さん 前の方
鈴木さん イケメンの方
富井さん マスクだった方
菅原さん

# git 5min
田之上さんのgitのpdfへ。gitとは何か。
ゲームのセーブ機能です。という話。
gitは差分を計算する。
windowsはインストール。
git --version
gitのpdf見せながらやる。

# 一回一通りやってみるgit initからcommit 20min
gitのpdfとpowershellを行き来しながらやっていく。
git init => 初期化処理で、gitを使う準備をする。ファイルがあろうがなかろが可能。前回の授業のやつとかにもできます。
gitを使う準備ができると、.gitファイルができます。ls -a/-force
git ni 2つ。
ステージングの話
git add index.html その後 git status , git commit -m "first commit" これでセーブできた。
git commitでセーブ その後 git status, git log
しかし、セーブされた場所はローカル。

# github 15min
githubのpdfを見る。
ローカルリポジトリとリモートリポジトリとpushの概念の話

アカウント作成 => Freeプラン => リポジトリの作成 => 2のpush

# gitとgithub 変更からadd, pushまで、そしてgithub-pagesで公開 15min
index.htmlを適当に編集してやってみる。
さらに、もう一回やってみて、差分が表示されているのを見る。
実際にgithub-pagesでデプロイしてみる。

# ここまでの復習と実践 10min
MEMO.mdを見せつつ、もう一つリポジトリ作成し、github-pages公開までやってみる。

# 休憩 10min

# gitのコマンド 7min
いくつかコマンドの紹介
git init
git add .
git commit -m ""
git commit => iでインサートモード、escして:wqで保存して終了。
git status
git log

# DOMのスライドショー 残り時間使ってやってみる。







# ブランチ 10min
ブランチの説明
ブランチの図
git branch ブランチ確認
git branch ブランチ名 でブランチ作成
git branch test => git branch
git checkout ブランチ名 でブランチ移動

ちなみに、ブランチ作成とブランチ移動を同時に行うには
git checkout -b ブランチ名

# ブランチ実践 10min
ブランチtestで変更してローカルリポジトリにコミット。=> masterに戻ると、戻っているのを確認。
git marge testでマージ。図で説明。
リモートブランチへのコミット


# pull-requestとmargeとpull 15min
チームで開発していると、margeする前に確認したいですよね => pull-reqを自分で出す。
marge

# conflict 10min
マージする時にコンフリクトが起こる時があります。
一旦起こしてみましょう。=> 起こす




# MEMO
"git＆gihub&ブランチ&init~push,merge了。 
confrict,pull,clone,pull req, .gitignoreは取り扱っていない。"

git＆gihub&init~push&ブランチ(概念のみ)。  merge, confrict,pull,clone,pull req,は取り扱っていない。

"git＆gihub&init~push。  
ブランチ, merge, confrict,pull,clone,pull req,は取り扱っていない。"


