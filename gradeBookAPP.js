function avarageScore(score){

    let sum =null;
    for(let s of score){

        sum+=s;

    }
    return sum/score.length;
}

function getGrade(score){
    if(score===100){
       return "A++";
    }else if(score>=85){
        return "A";
    }else if(score>=75){
        return "B";
    }else if (score>=65){
        return "C";
    }else if(score>=50){
        return "D";
    }else {
        return "F"
    }
}
function hasPassedGrade(score){
     
    return getGrade(score) !=="F";
}

function gradeBookApp(AvgScore, score){
    if(!hasPassedGrade(score)){
        return "you are failed with "+ getGrade(score) +" and your class avrage score is"+ avarageScore(AvgScore);
    }
    return "you are pass with "+ getGrade(score) +" and your class avrage score is"+ avarageScore(AvgScore);
}


console.log(gradeBookApp([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(gradeBookApp([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 90));