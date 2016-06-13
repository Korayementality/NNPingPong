#pragma strict

var velocity : float;
var ball : GameObject;
var verticalAxis : float;
var normalizedVerticalAxis : float;
function Start () {

}

function FixedUpdate() {
	GetComponent.<Rigidbody2D>().velocity.y = verticalAxis * velocity;
}

function Move(x : float) {
	//(1/0.5)x - 1
	normalizedVerticalAxis = x;
	verticalAxis = (x*2) - 1;
	Application.ExternalEval("console.log("+x+");");

}
function Update () {


}
InvokeRepeating("slowUpdate", 0, 0.01);
function slowUpdate() {
	var paddleY : float;
	var ballX = ball.transform.position.x;
	var ballY = ball.transform.position.y;
	var ballVelX = ball.GetComponent.<Rigidbody2D>().velocity.x;
	var ballVelY = ball.GetComponent.<Rigidbody2D>().velocity.y;
	if(ballX > 0)
	{// (0.5/10)x + 0.5
		ballX = (0.05*ballX) + 0.5;
	}
	else if(ballX < 0)
	{// 1-Abs((0.5/10)x - 0.5)
		ballX = 1-Mathf.Abs((0.05*ballX) - 0.5);
	}
	else
	{
		ballX = 0.5;
	}
	if(ballY > 0)
	{// (0.5/4)x + 0.5
		ballY = (0.111*ballY) + 0.5;
	}
	else if(ballY < 0)
	{
		ballY = 1-Mathf.Abs((0.111*ballY)-0.5);
	}
	else
	{
		ballY = 0.5;
	}
	if(ballVelX > 0)
	{
		ballVelX = 1;
	}
	else
	{
		ballVelX = 0;
	}
	if(ballVelY > 0)
	{
		ballVelY = 1;
	}
	else
	{
		ballVelY = 0;
	}
	if(transform.position.y > 0)
	{
		paddleY = (0.111*transform.position.y)+0.5;
	}
	else if(transform.position.y < 0)
	{
		paddleY = 1-Mathf.Abs((0.111*transform.position.y)-0.5);
	}
	Application.ExternalCall( "Unity2Synaptic", ballX.ToString(), ballY.ToString(), ballVelX.ToString(), ballVelY.ToString(), paddleY);

}