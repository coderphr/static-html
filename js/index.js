window.onload = function() {
    //左侧导航栏
    const dp = document.getElementsByClassName('dropdown')[0]
    const li = dp.children[0].children
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('mouseover', () => {
            li[i].style.backgroundColor = '#ffffff'
            li[i].style.color = '#c81623'
            li[i].style.paddingLeft = '20px'
            li[i].children[0].style.display = 'none'
            li[i].style.transition = 'all 0.5s'
        })
        li[i].addEventListener('mouseleave', () => {
            li[i].style.backgroundColor = '#c81623'
            li[i].style.color = '#f9e5e6'
            li[i].style.padding = '5px 10px'
            li[i].children[0].style.display = 'block'
            li[i].style.transition = 'all 0.5s'
        })
    }
    //右侧九宫格
    const nb = this.document.getElementsByClassName('newsbottom')[0]
    const nbSon = nb.children
    for (let i = 0; i < nbSon.length; i++) {
        let nbDiv = nbSon[i].children[0]
        nbDiv.src = './img/success.png'
    }
}