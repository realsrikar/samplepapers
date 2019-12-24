const select = document.querySelector("select");
const result = document.querySelector(".result");

printresult(select.value);

select.addEventListener("change", triggerChange);
addEventListener("keydown", e => {
  let next = -1; // false
  switch (e.keyCode) {
    case 39:
    case 74:
      next *= -1;
      break;
    case 37:
    case 75:
      break;
    default:
      next = 0;
  }

  const currentIndex = select.selectedIndex;
  const total = select.childElementCount - 1;
  const newIndex =
    currentIndex === 0 && next === -1 // first option & want to go back
      ? total // send to last
      : currentIndex === total && next === 1 // last option & want to go forward
      ? 0 // send to begin
      : currentIndex + next;
  select.selectedIndex = newIndex;

  triggerChange();
});

function triggerChange() {
  const selected = select.value;

  printresult(selected);

  result.classList.add("animate");

  setTimeout(_ => result.classList.remove("animate"), 180);
}

function printresult(subject) {
  const html = [
    `<h2>${examDate(subject)}</h2>`,
    `<a target="_blank" href="http://cbseacademic.nic.in/web_material/SQP/ClassXII_2019_20/${subject}_SQP.pdf">Sample Paper</a>`,
    `<a target="_blank" href="http://cbseacademic.nic.in/web_material/SQP/ClassXII_2019_20/${subject}_MS.pdf">Answers</a>`,
    `<a target="_blank" href="http://cbseacademic.nic.in/web_material/CurriculumMain20/SrSecondary/${getSubject(
      subject
    )}.pdf">Curriculum</a>`
  ].join("");
  result.innerHTML = html;
}

function getSubject(subject) {
  switch (subject) {
    case "Economics":
      return "Econonics";
    case "EnglishCore":
      return "Eng.Core";
    default:
      return subject;
  }
}

function examDate(subject) {
  switch (subject) {
    case "Mathematics":
      return "Tuesday, 17<sup>th</sup> March";
    case "BusinessStudies":
      return "Tuesday, 24<sup>th</sup> March";
    case "EnglishCore":
      return "Thursday, 27<sup>th</sup> February";
    case "Accountancy":
      return "Thursday, 5<sup>th</sup> March";
    case "Economics":
      return "Friday, 13<sup>th</sup> March";
    case "PhysicalEducation":
      return "Monday, 24<sup>th</sup> February";
    default:
      return "";
  }
}
