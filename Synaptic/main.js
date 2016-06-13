//initializing the WebPlayer    
var pongPerceptron = new Architect.Perceptron(3,10,1);
var u = new UnityObject2();
u.initPlugin(jQuery("#unityPlayer")[0], "NNPingPong.unity3d");
function Synaptic2Unity(x)
{
    u.getUnity().SendMessage("Player1", "Move", x);
}
function Unity2Synaptic(ball_x, ball_y, ball_velx, ball_vely, paddle_y) {
    //trainingArray.push({
    //  input:[ball_x, ball_y, ball_velx, ball_vely],
    //  output:[y_input]
    //});
    var input = [];
    //input.push(y_input);
    input.push(paddle_y);
    input.push(ball_x);
    input.push(ball_y);
    input.push(ball_velx);
    input.push(ball_vely);
    var output = pongPerceptron.activate(input);
    console.log(output);
    document.getElementById("paddleY").innerHTML ="Paddle Y :"+ paddle_y;
    //document.getElementById("y_input").innerHTML ="Y Input: "+ input[0];
    document.getElementById("y_output").innerHTML ="Y Input Normalized: "+ output[0];
    document.getElementById("ballX").innerHTML = "ball_x: "+ ball_x;
    document.getElementById("ballY").innerHTML = "ball_y: "+ball_y;
    document.getElementById("ballVelX").innerHTML = "ball velocity x: "+ball_velx;
    document.getElementById("ballVelY").innerHTML = "ball velocity y: "+ball_vely;
    Synaptic2Unity(output[0]);
    if(paddle_y>ball_y)
        pongPerceptron.propagate(0.2, [0]);
    else if(ball_y>paddle_y)
        pongPerceptron.propagate(0.2, [1]);
    else
        pongPerceptron.propagate(0.2, [0.5]);
}