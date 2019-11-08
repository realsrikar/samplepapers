const select = document.querySelector("select");
const result = document.querySelector(".result");

printresult(select.value)

select.addEventListener("change", e => {
  const selected = select.value;

  printresult(selected);
});

function printresult(subject, element = "iframe") {
	try {
  const html = [
  	`http://cbseacademic.nic.in/web_material/SQP/ClassXII_2019_20/${subject}_SQP.pdf`,
    `http://cbseacademic.nic.in/web_material/SQP/ClassXII_2019_20/${subject}_MS.pdf`
  ].map(link => `<${element} href="${link}" src="${link}">${link}</${element}>`).join('');
  result.innerHTML = html;
} catch (error) { printresult(subject, "a") }
}