#pragma strict
var player_agent : GameObject;
function Start () {

}

function Update () {
	gameObject.GetComponent(UI.Text).text = player_agent.GetComponent(PaddleMove).verticalAxis.ToString();
}