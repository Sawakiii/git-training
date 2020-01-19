
let i = 0
let n = 0

// 関数の定義
const slideShow = () => {
    // ノードの取得
    const imgs = document.getElementsByClassName("pig-img")

    // クラスを付け替える
    if (i > 1) {
        imgs[i].classList.remove("img-appear")
        i = 0
        imgs[i].classList.add("img-appear")
    } else {
        imgs[i].classList.remove("img-appear")
        i++
        imgs[i].classList.add("img-appear")
    }
}


// 関数が実行される時間間隔をセット
setInterval(slideShow, 2000)

setInterval(()=>{
    // ノードの取得
    const imgs = document.getElementsByClassName("pig-img")

    // クラスを付け替える
    if (n > 1) {
        setTimeout(()=>{
            imgs[2].classList.remove('img-bigger')
            console.log(2)
        }, 1000)
        n = 0
        imgs[n].classList.add("img-bigger")
    } else {
        setTimeout(()=>{
            imgs[n-1].classList.remove('img-bigger')
            console.log(n-1)
        }, 1000)
        n++
        imgs[n].classList.add("img-bigger")
    }
}, 2000)











