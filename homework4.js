//This is a function which will create for you a triangle of given height
function triangleStars(height){
            function starGenerator(starCounter){

                if(starCounter === 0){
                    return '';
                }

                return '*' + starGenerator(starCounter -1);
            }

            function spaceGenerator(spaceCounter){

                if(spaceCounter >= height){
                    return '';
                }

                return ' ' + spaceGenerator(spaceCounter+1);
            }

            function main(height){

                if(height <=0){
                    return '';
                }

                console.log(spaceGenerator(height) + starGenerator((height*2)-1));
                return main(height-1);
            }

            return main(height);
}

//This is a function which will return base to the power of n
function pow(base, n) {
    if (n === 0)
        return 1;
    else
        return base * pow(base, n - 1);
}

//This is a function which will reverse the given string
function reverse(str){
    function returner(num){
        if(num === 0){
            return '';
        }
        return str[num - 1] + returner(num - 1);
    }

    return returner(str.length);
}

//This is a function which will draw a checkmate Board with the given height
function checkBoard(size) {
    function width1(n) {
        if (n === size) {
            return '';
        }
        if (n % 2 === 0) {
            return '*' + width1(n + 1);
        } else {
            return ' ' + width1(n + 1);
        }
    }
    function width2(n){
        if (n === size) {
            return '';
        }
        if (n % 2 === 0) {
            return ' ' + width2(n + 1);
        } else {
            return '*' + width2(n + 1);
        }
    }
    function height(n){
        if (n === size) {
            return '';
        }
        if(n%2 === 0) {
            console.log(width1(0));
        }else{
            console.log(width2(0));
        }
        height(n + 1);
    }
    height(0);
}

