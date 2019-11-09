const select = document.querySelector("select");
const result = document.querySelector(".result");

printresult(select.value);

select.addEventListener("change", e => {
  const selected = select.value;

  printresult(selected);
});

function printresult(subject) {
  const html = [
    `<embed src="http://cbseacademic.nic.in/web_material/SQP/ClassXII_2019_20/${subject}_SQP.pdf">`,
    `<embed src="http://cbseacademic.nic.in/web_material/SQP/ClassXII_2019_20/${subject}_MS.pdf">`
  ].join("");
  result.innerHTML = html;
}
