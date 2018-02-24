(function(){
    var points
    var time
    var mole
    var gameIntervalId


    function addPoint(){
       
        points++
        console.log('dzialam')
        displayPoints(points)
        
    }

    function displayPoints(pointsParam){

        var pointsContainer = document.querySelector('.points')
        pointsContainer.innerText = 'Punkty: ' + pointsParam


    }

    function reduceTime(){


        time--
        displayTime(time)
        if(time === 0) endGame()

    }

    function displayTime(timeParam){

        var timeContainer = document.querySelector('.time')
        timeContainer.innerText = 'Czas: ' + timeParam

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
                    flashBackground()



           })

            document.querySelector('body').appendChild(mole)

            return mole
    }

    function endGame(){
            clearInterval(gameIntervalId)
            mole.remove()
            alert('game was ended!\nYour score was: ' + points + ' !')


    }


    function flashBackground(){
        var body = document.querySelector('body')
        body.style.backgroundColor = 'red'
        setTimeout(
            function(){
                body.style.backgroundColor = 'green'
            }, 100
        )


    }

    function init(){

        points = 0
        time = 10 
        mole = makeMole()

        displayPoints(points)
        displayTime(time)
 

        gameIntervalId = setInterval(
            function(){

                    mole.remove()
                    mole = makeMole()
                    reduceTime()
                    
            },

            3000

        )


    }

    init()


})()