window.addEventListener('load', function () {
    var aleft = document.querySelector('.a_left')
    var aright = document.querySelector('.a_right')
    var box = document.querySelector('#box')
    var boxwidth = box.offsetWidth
    box.addEventListener('mouseenter', function () {
        aleft.style.display = 'block'
        aright.style.display = 'block'
        clearInterval(timer)
    })
    box.addEventListener('mouseleave', function () {
        aleft.style.display = 'none'
        aright.style.display = 'none'
        timer = setInterval(function () {
            aright.click()
        },2000)
    })
    var ul = box.querySelector('.aul')
    var ol = box.querySelector('ol')
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('data-index', i)
        ol.appendChild(li)
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
                this.className = 'current'
                var data_index = this.getAttribute('data-index')
                numimg = data_index
                cir = data_index
                animate(ul, -data_index * boxwidth);
            }
        })
    }
    ol.children[0].className = 'current'
    var frist = ul.children[0].cloneNode(true)
    ul.appendChild(frist)

    console.log()
    var numimg = 0;
    var cir = 0
    aright.addEventListener('click', function () {
        if (numimg === ul.children.length - 1) {
            ul.style.left = 0
            numimg = 0
        }
        numimg++
        console.log(numimg)
        animate(ul, -numimg * boxwidth)
        cir++
        if (cir === ol.children.length) {
            cir = 0
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ol.children[cir].className = 'current'
    })

    aleft.addEventListener('click', function () {
        if (numimg === 0) {
            numimg = ul.children.length-1
            ul.style.left = (ul.children.length - 1) * boxwidth + 'px'

        }
        numimg--
        animate(ul, -numimg * boxwidth)
        cir--
        if (cir < 0 ) {
            cir = 2
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ol.children[cir].className = 'current'
    })
    var timer = setInterval(function () {
        aright.click()
    },2000)
})