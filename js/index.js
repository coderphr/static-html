window.onload = function() {
    //左侧导航栏
    const dp = document.getElementsByClassName('dropdown')[0];
    const li = dp.children[0].children;
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('mouseover', () => {
            li[i].style.backgroundColor = '#ffffff'
            li[i].style.color = '#c81623'
            li[i].style.paddingLeft = '20px'
            li[i].children[0].style.display = 'none'
            li[i].style.transition = 'all 0.5s'
        });
        li[i].addEventListener('mouseleave', () => {
            li[i].style.backgroundColor = '#c81623'
            li[i].style.color = '#f9e5e6'
            li[i].style.padding = '5px 10px'
            li[i].children[0].style.display = 'block'
            li[i].style.transition = 'all 0.5s'
        });
    };
    //右侧九宫格
    const nb = this.document.getElementsByClassName('newsbottom')[0];
    const nbSon = nb.children;
    for (let i = 0; i < nbSon.length; i++) {
        let nbDiv = nbSon[i].children[0]
        nbDiv.src = './img/success.png'
    };

    //轮播图
    const swiper = this.document.getElementsByClassName('swiper')[0];
    const lis = swiper.children[2].children;
    const ol = swiper.children[3];
    const pre = swiper.children[0];
    const next = swiper.children[1];
    let index = 0 //记录当前 index
        // 鼠标移入，移出切换按钮的显示
    swiper.addEventListener('mouseenter', () => {
        pre.style.display = 'block'
        next.style.display = 'block'
        clearInterval(timer)
        timer = null
    });
    swiper.addEventListener('mouseleave', () => {
        pre.style.display = 'none'
        next.style.display = 'none'
        timer = setInterval(() => {
            next.click()
        }, 2000)
    });
    // 动态生成圆圈
    for (let i = 0; i < lis.length; i++) {
        const li = this.document.createElement('li');
        ol.appendChild(li);
        ol.children[i].addEventListener('click', function() {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].classList.remove('current');
            }
            ol.children[i].classList.add('current');
        });
    };
    //默认第一个active
    ol.children[0].classList.add('current')

    const ul = swiper.querySelector('ul')
        // 监听点击实现轮播
    next.addEventListener('click', () => {
        index++
        if (index > ol.children.length - 1) {
            index = 0
        }
        current()
        let target = lis[0].offsetWidth * index
        animate(ul, -target)
    })

    pre.addEventListener('click', () => {
        index--
        if (index < 0) {
            index = ol.children.length - 1
        }
        current()
        let target = lis[0].offsetWidth * index
        animate(ul, -target)
    })

    //添加current 
    function current() {
        for (let i = 0; i < lis.length; i++) {
            ol.children[i].classList.remove('current')
        }
        ol.children[index].classList.add('current')
    }

    // 封装轮播动画
    function animate(obj, target) {
        obj.style.transform = 'translateX(' + target + 'px)'
        obj.style.transition = 'all 0.5s'
    }

    let timer = this.setInterval(() => {
        next.click()
    }, 2000)
}