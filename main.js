var Name_of_The_student=[];
function submit(){
    for (var i=1; i<=4; i++){
        var student=document.getElementById("name_of_the_student_"+i).value;
        Name_of_The_student.push(student);
    }
    document.getElementById("display_name_with_commas").innerHTML=Name_of_The_student;
    var namewithoutcommas=Name_of_The_student.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=namewithoutcommas;
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block";

}

function sorting(){
    var sortednames=Name_of_The_student.sort();
    var subimitnames=sortednames.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=subimitnames;
    document.getElementById("submit_button").style.display="inline-block"
    document.getElementById("sort_button").style.display="none";

    
}