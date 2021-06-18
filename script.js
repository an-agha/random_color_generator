body = document.body;
div = document.getElementsByTagName('div')[0];
rgb = document.getElementById('rgb');
hex = document.getElementById('hex');
button = document.getElementsByTagName('button')[0];

function fnHex(intNum)
{
    value = intNum.toString(16).toUpperCase();
    if (value.length == 1)
	    value = 0 + value;
    return value; 
}

function secondary()
{
    colorSum = red + green + blue;
    if (colorSum < 400)
        return "white";
    return "black";
}

function change()
{
    red = Math.round(Math.random()*255);
    green = Math.round(Math.random()*255);
    blue = Math.round(Math.random()*255);

    black_white = secondary();

    color = 'RGB(' + red + ',' + green + ',' + blue + ')'; 
    hexColor = '#' + fnHex(red) + fnHex(green) + fnHex(blue);

    body.style.backgroundColor = color;
    rgb.style.color = color;
    hex.style.color = color;
    button.style.backgroundColor = color;

    div.style.backgroundColor = black_white;
    button.style.color = black_white;

    rgb.innerText = color;
    hex.innerText = hexColor;
}

