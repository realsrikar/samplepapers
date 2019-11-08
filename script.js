const select = document.querySelector("select");
const result = document.querySelector(".result");

printresult(select.value);

select.addEventListener("change", e => {
  const selected = select.value;

  printresult(selected);

  result.classList.add('animate');

  setTimeout(_ => result.classList.remove('animate'), 400)
});

function printresult(subject) {
  const html = [
    `<a target="_blank" href="http://cbseacademic.nic.in/web_material/SQP/ClassXII_2019_20/${subject}_SQP.pdf">Sample Paper</a>`,
    `<a target="_blank" href="http://cbseacademic.nic.in/web_material/SQP/ClassXII_2019_20/${subject}_MS.pdf">Answers</a>`
  ].join("");
  result.innerHTML = html;
}
