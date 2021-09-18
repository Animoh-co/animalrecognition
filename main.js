function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/SAiNF0DTT/model.json", modelload);

}

function modelload(){
    classifier.classify(gotresult);

}

function gotresult(error, result){
    if(error)
    console.error(error);
    else 
    console.log(result);
}