const select = document.querySelector("select");
const result = document.querySelector(".result");

printresult(select.value)

select.addEventListener("change", e => {
  const selected = select.value;

  printresult(selected);
});

function printresult(subject) {
  const html = [
  	`http://cbseacademic.nic.in/web_material/SQP/ClassXII_2019_20/${subject}_SQP.pdf`,
    `http://cbseacademic.nic.in/web_material/SQP/ClassXII_2019_20/${subject}_MS.pdf`
  ].map(link => `<embed src="${link}"/>`).join('');
  result.innerHTML = html;
}