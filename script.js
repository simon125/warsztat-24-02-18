(function(){
    var points
    var time
    var mole


    function addPoint(){
        points++
        console.log('dodano punkt', points)
        displayPoints(points)
        
    }

    function displayPoints(pointsParam){

        var pointsContainer = document.querySelector('.points')
        pointsContainer.innerText = pointsParam


    }

    function displayTime(timeParam){

        var timeContainer = document.querySelector('.time')
        timeContainer.innerText = timeParam

    }


    function makeMole(){


            var molePosX = Math.round(
                Math.random() * (window.innerWidth - window.innerHeight / 10)
            )
            var molePosY = Math.round(
                Math.random() * (window.innerHeight - window.innerHeight / 10)
            )

            var mole = document.createElement('div')

            mole.classList.add('mole')

            mole.style.left = molePosX + 'px'
            mole.style.top = molePosY + 'px'


            mole.addEventListener(
                'click',
                function(){
                    mole.remove()
                    addPoint()



           })

            document.querySelector('body').appendChild(mole)

            return mole
    }



    function init(){

        points = 0
        time = 10 
        mole = makeMole()

        displayPoints("punkty: " + points)
        displayTime("czas:  " + time)


    }

    init()


})()