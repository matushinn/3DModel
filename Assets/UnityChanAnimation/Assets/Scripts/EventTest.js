#pragma strict

//ボイスを鳴らすメソッド
function PlayVoice(voice : AudioClip) {
GetComponent.<AudioSource>().PlayOneShot(voice);//ボイスを1回鳴らす
}