#pragma strict

var velX : int;
var velY : int;

function Start () {
	while(velX == 0 || velY == 0)
	{
		velX = Random.Range(-1,2)*5;
		velY = Random.Range(-1,2)*5;
	}
	GetComponent.<Rigidbody2D>().velocity.x = velX;
	GetComponent.<Rigidbody2D>().velocity.y = velY;
}

function Update () {

	if(transform.position.x > 11 || transform.position.x < -11)
	{
		Application.LoadLevel(Application.loadedLevel);
	}

}