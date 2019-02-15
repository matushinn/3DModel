#pragma strict
//public var rotationSpeed : float = 100; //回転スピード用のfloat型変数
private var anim : Animator; //Animator型の変数animを準備
function Start() {
anim = GetComponent(Animator);  //animに自分自身が持つAnimatorコンポーネントを参照
}
function Update() {
var v : float;  //speedパラメータに代入するfloat型vを準備
//var h : float;  //回転するためのfloat型h
v = Input.GetAxis("Vertical");  //上下矢印キーで変数vに値を代入
//h = Input.GetAxis("Horizontal");  //左右矢印キーで変数hに値を代入
anim.SetFloat("speed", v);  //AnimatorのParameters "speed"にvを代入
//transform.position += transform.forward * v * Time.deltaTime;  //上下矢印キーで移動
//transform.Rotate(0, rotationSpeed * h * Time.deltaTime, 0);  //左右矢印キーで回転
if(Input.GetKeyDown(KeyCode.Space))  //スペースキーが押されたら
{
anim.SetTrigger("jumping");  //AnimatorのParameters"jumping"をtrueにする
}

if(Input.GetKeyDown(KeyCode.Z))  //Zキーが押されたら
{
anim.SetTrigger("sliding"); //AnimatorのParameters"sliding"をtrueにする
}

}