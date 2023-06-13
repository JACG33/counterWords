document.addEventListener("DOMContentLoaded", (e) => {
  const d = document;

  const $ = ($element) => d.querySelector(`${$element}`);

  d.addEventListener("keyup", (e) => {
    const target = e.target;

    if (target.matches("#writerArea")) {
      const allWords = {};
      const counterSplit = target.value
        .split(/[\n \s \,]/)
        .filter((ele) => ele != "");
      
      const counterParagraph = target.value
        .split(/[\.\n]/)
        .filter((ele) => ele != "");

      counterSplit.forEach((element) => {
        if (!allWords.hasOwnProperty(element)) allWords[element] = 1;
        else allWords[element] += 1;
      });

      let template = ``;

      let tmp = Object.entries(allWords);

      tmp.forEach(
        (element) =>
          (template += `<div class="repeat"><span>${element[0]}</span><span class="num__count">${element[1]}</span></div>`)
      );

      $("#counter").innerText = `${counterSplit.length}`;
      $("#counterCharacters").innerText = `${target.value.length}`;
      $("#counterPagrapah").innerText = `${counterParagraph.length}`;
      $("#repeat").innerHTML = `${template}`;
    }
  });
});
