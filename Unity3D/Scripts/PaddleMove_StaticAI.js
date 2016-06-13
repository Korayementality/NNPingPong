#pragma strict

var ball : GameObject;
var velocity : float;

function Start () {

}

function FixedUpdate() {

	if(ball.transform.position.y > transform.position.y)
	{
		GetComponent.<Rigidbody2D>().velocity.y = velocity;
	}
	else
	{
		GetComponent.<Rigidbody2D>().velocity.y = -velocity;	
	}

}

function Update () {



}