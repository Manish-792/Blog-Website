
function editoroption1() {
    document.getElementById("textarea1")
        .style.fontWeight = "bold";
}

function editoroption2() {
    document.getElementById("textarea1")
        .style.fontStyle = "italic";
}

function editoroptionr3() {
    document.getElementById("textarea1")
        .style.textAlign = "left";
}

function editoroption4() {
    document.getElementById("textarea1")
        .style.textAlign = "center";
}

function editoroption5() {
    document.getElementById("textarea1")
        .style.textAlign = "right";
}

function editoroption6() {
    document.getElementById("textarea1")
        .style.textTransform = "uppercase";
}

function editoroption7() {
    document.getElementById("textarea1")
        .style.textTransform = "lowercase";
}

function editoroption8() {
    document.getElementById("textarea1")
        .style.textTransform = "capitalize";
}

function editoroption10(){
    const textArea = document.getElementById("textarea1");
    // const bulletbutton = document.getElementById('')
    const caretPosition = textArea.selectionStart;
    const text = textArea.value;

    const bulletPoint = "\u2022 "; // Unicode for bullet point
    const newText = text.slice(0, caretPosition) + bulletPoint + text.slice(caretPosition);

    textArea.value = newText;

    textArea.setSelectionRange(caretPosition + bulletPoint.length, caretPosition + bulletPoint.length);

      // Focus back on the text area
      textArea.focus();

}
function editoroption9() {
    document.getElementById("textarea1")
        .style.fontWeight = "normal";
    document.getElementById("textarea1")
        .style.textAlign = "left";
    document.getElementById("textarea1")
        .style.fontStyle = "normal";
    document.getElementById("textarea1")
        .style.textTransform = "capitalize";
    document.getElementById("textarea1")
        .value = "";
}

function editoroption1_2() {
    document.getElementById("textarea2")
        .style.fontWeight = "bold";
}

function editoroption2_2() {
    document.getElementById("textarea2")
        .style.fontStyle = "italic";
}

function editoroption3_2() {
    document.getElementById("textarea2")
        .style.textAlign = "left";
}

function editoroption4_2() {
    document.getElementById("textarea2")
        .style.textAlign = "center";
}

function editoroption5_2() {
    document.getElementById("textarea2")
        .style.textAlign = "right";
}

function editoroption6_2() {
    document.getElementById("textarea2")
        .style.textTransform = "uppercase";
}

function editoroption7_2() {
    document.getElementById("textarea2")
        .style.textTransform = "lowercase";
}

function editoroption8_2() {
    document.getElementById("textarea2")
        .style.textTransform = "capitalize";
}

function editoroption10_2(){
    const textArea = document.getElementById("textarea2");
    const caretPosition = textArea.selectionStart;
    const text = textArea.value;

    const bulletPoint = "\u2022 "; // Unicode for bullet point
    const newText = text.slice(0, caretPosition) + bulletPoint + text.slice(caretPosition);

    textArea.value = newText;
    textArea.setSelectionRange(caretPosition + bulletPoint.length, caretPosition + bulletPoint.length);
    textArea.focus();
}

function editoroption9_2() {
    document.getElementById("textarea2")
        .style.fontWeight = "normal";
    document.getElementById("textarea2")
        .style.textAlign = "left";
    document.getElementById("textarea2")
        .style.fontStyle = "normal";
    document.getElementById("textarea2")
        .style.textTransform = "capitalize";
    document.getElementById("textarea2")
        .value = "";
}

// Copy for textarea3
function editoroption1_3() {
    document.getElementById("textarea3")
        .style.fontWeight = "bold";
}

function editoroption2_3() {
    document.getElementById("textarea3")
        .style.fontStyle = "italic";
}

function editoroption3_3() {
    document.getElementById("textarea3")
        .style.textAlign = "left";
}

function editoroption4_3() {
    document.getElementById("textarea3")
        .style.textAlign = "center";
}

function editoroption5_3() {
    document.getElementById("textarea3")
        .style.textAlign = "right";
}

function editoroption6_3() {
    document.getElementById("textarea3")
        .style.textTransform = "uppercase";
}

function editoroption7_3() {
    document.getElementById("textarea3")
        .style.textTransform = "lowercase";
}

function editoroption8_3() {
    document.getElementById("textarea3")
        .style.textTransform = "capitalize";
}

function editoroption10_3(){
    const textArea = document.getElementById("textarea3");
    const caretPosition = textArea.selectionStart;
    const text = textArea.value;

    const bulletPoint = "\u2022 "; // Unicode for bullet point
    const newText = text.slice(0, caretPosition) + bulletPoint + text.slice(caretPosition);

    textArea.value = newText;
    textArea.setSelectionRange(caretPosition + bulletPoint.length, caretPosition + bulletPoint.length);
    textArea.focus();
}

function editoroption9_3() {
    document.getElementById("textarea3")
        .style.fontWeight = "normal";
    document.getElementById("textarea3")
        .style.textAlign = "left";
    document.getElementById("textarea3")
        .style.fontStyle = "normal";
    document.getElementById("textarea3")
        .style.textTransform = "capitalize";
    document.getElementById("textarea3")
        .value = "";
}

const userInput1 = document.getElementById('textarea1');
const userInput2 = document.getElementById('textarea2');
const userInput3 = document.getElementById('textarea3');

const submit = document.getElementById('submitButton');


submit.addEventListener('click',(e)=>{

    e.preventDefault();

    if(userInput1.value.trim() === ""|| userInput2.value.trim() === "" || userInput3.value.trim() === "")
    {
        alert("Empty Blog field !");
    }

    console.log(userInput1.value);
    console.log(userInput2.value);
    console.log(userInput3.value);

    const newBlog = {
        title : userInput1.value.trim(),
        summary : userInput2.value.trim(),
        content : userInput3.value.trim()
    };

    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    storedBlogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(storedBlogs));

    alert("blog saved successfully!");

})

