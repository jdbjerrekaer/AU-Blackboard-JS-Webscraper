const table = document.querySelector(".vtbegenerated table")
const array = document.querySelectorAll(".vtbegenerated table a")

var links
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  links.append(element);
}
var uniqueLinks = new Set(links)
for (let index = 0; index < uniqueLinks.length; index++) {
  const element = array[index];
  page.click(element)
}

document.querySelectorAll(".vtbegenerated table a")[0].setAttribute("href", base + document.querySelectorAll(".vtbegenerated table a")[0].getAttribute("href").slice(20, document.querySelectorAll(".vtbegenerated table a")[0].getAttribute("href").length - 2))

document.querySelectorAll(".vtbegenerated table a")[0].setAttribute("download",document.querySelectorAll(".vtbegenerated table a")[0].getAttribute("href").slice(20, document.querySelectorAll(".vtbegenerated table a")[0].getAttribute("href").length - 2))

document.querySelectorAll(".vtbegenerated table a")[0].click()
