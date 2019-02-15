#pragma strict

private var anim : Animator; //Animator型の変数anim
private var currentInfo : String = "Base Layer.WALK00_F"; //指定したいステートをString型で指定
function Start() {
anim = GetComponent(Animator);//Animatorコンポーネントを参照
}
function Update() {
var v : float;//float型v
v = Input.GetAxis("Vertical");//上下矢印キーでvに値を代入
anim.SetFloat("speed", v); //Animatorのparamters"speed"にvの値を代入
var stateInfo : AnimatorStateInfo = anim.GetCurrentAnimatorStateInfo(0); //ステートの情報を取得してstateInfoに代入
if(stateInfo.nameHash == anim.StringToHash(currentInfo)) //ハッシュ値を比較して同じであれば
{
Debug.Log("Walking");//"Walking"というログを出す
}
}