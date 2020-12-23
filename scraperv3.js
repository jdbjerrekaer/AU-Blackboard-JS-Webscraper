const puppeteer = require('puppeteer');
const emojiStripper = require("emoji-stripper")
const prompt = require('prompt');
const util = require('util')
const fs = require('fs')
const streamPipeline = util.promisify(require('stream').pipeline)
const fetch = require('node-fetch')
const tabletojson = require('tabletojson').Tabletojson;
const ObjectsToCsv = require('objects-to-csv');

const URL = "https://blackboard.au.dk/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_132_1";
var USERNAME, PASSWORD, COURSENAME

getUserInput();

async function main(url) {
  const USERNAME_SELECTOR = '#username';
  const PASSWORD_SELECTOR = '#password';
  const SUBMIT = '.button';
  const { browser, page } = await startBrowser();
  page.setViewport({ width: 1366, height: 768 });
  await page.goto(url);

  // Login \\
  await page.click('#myLink'); console.log(""); console.log("waiting for login page to load")
  await page.waitForSelector(USERNAME_SELECTOR); console.log(""); console.log("done waiting")
  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(USERNAME); console.log(""); console.log("username typed");
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(PASSWORD); console.log(""); console.log("password typed");
  await page.click(SUBMIT); console.log(""); console.log("submit clicked"); console.log(""); console.log("waiting for website to load after login")
  await page.waitForNavigation({ waitUntil: 'networkidle0' }); console.log(""); console.log("done waiting")
  // Login \\

  // Navigate to courseplan \\
  var course = await findByText(page, COURSENAME)
  course.click();
  await page.waitForNavigation({ waitUntil: 'networkidle2' }); console.log(""); console.log("course page loaded")

  var coursePlan = await findByText(page, "COURSE PLAN")
  coursePlan.click();
  await page.waitForNavigation({ waitUntil: 'networkidle2' }); console.log(""); console.log("course page loaded")

  await autoScroll(page);
  // Navigate to courseplan \\

  // Get courseplan \\
  var coursePlanTable = await getTable(page)
  await saveToFile(coursePlanTable)
  // Get courseplan \\

  console.log("")
  console.log("")
  console.log("done");
  process.exit();
}

async function startBrowser() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  return { browser, page };
}

async function closeBrowser(browser) {
  return browser.close();
}

async function autoScroll(page) {
  console.log("")
  console.log("loading the page outside of the viewport")
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
  console.log("")
  console.log("done loading the entire page")
}

async function findByText(page, linkString) {
  const links = await page.$$('a')
  for (var i = 0; i < links.length; i++) {
    let valueHandle = await links[i].getProperty('innerText');
    let linkText = await valueHandle.jsonValue();
    const text = getText(linkText).toUpperCase();
    if (linkString == text) {
      console.log("INPUT " + linkString);
      console.log("FOUND " + text);
      console.log("Text match found");
      return links[i];
    }
  }
  console.log("")
  console.log("")
  console.log("Didn't find a course with that name: '" + linkString + "'")
  console.log("Please try again and type it correctly")
  process.exit();
}

function getText(linkText) {
  linkText = linkText.replace(/\r\n|\r/g, "\n");
  linkText = linkText.replace(/\ +/g, " ");
  linkText = linkText.emojiStripper()

  // Replace &nbsp; with a space 
  var nbspPattern = new RegExp(String.fromCharCode(160), "g");
  return linkText.replace(nbspPattern, " ");
}

async function saveToFile(data) {
  console.log("")
  console.log("trying to export table to .csv file ");
  const csv = new ObjectsToCsv(data);

  // Save to file:
  await csv.toDisk('./Course Plan.csv');
  console.log("")
  console.log("exported table to file succesfully")
}

async function getTable(page) {
  console.log("")
  console.log("trying to load the couse plan")

  let html = await page.evaluate(() => document.body.innerHTML);
  var tablesAsJson = tabletojson.convert(html, {
    useFirstRowForHeadings: true,
    countDuplicateHeadings: false
  });
  // var firstTableAsJson = tablesAsJson[0];
  // var secondTableAsJson = tablesAsJson[1];
  var thirdTableAsJson = tablesAsJson[2];

  await page.screenshot({ path: 'Course Plan.png', fullPage: true });
  await getResources(page)

  console.log("")
  console.log("table loaded")
  return thirdTableAsJson
}

async function getResources(page) {
  await page._client.send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: '/tmp' })
  const array = await page.$$(".vtbegenerated table a")
  if (array) {
    const base = await page.evaluate(() => base)

    console.log("")
    console.log("no. of files to be downloaded" + array.length.toString())
    var downloads = 0
    for (let index = 0; index < array.length; index++) {
      // const element = array[index]
      // document.querySelectorAll(".vtbegenerated table a")[1].setAttribute("download",document.querySelectorAll(".vtbegenerated table a")[1].innerText)
      // const name = element.getAttribute("href").slice(20, element.getAttribute("href").length - 2)

      var name = await page.evaluate(`document.querySelectorAll(".vtbegenerated table a")[${index}].getAttribute("href").slice(20, document.querySelectorAll(".vtbegenerated table a")[${index}].getAttribute("href").length - 2)`);

      if (name.split("/", 2)[1]) {
        fs.mkdir("./" + name.split("/", 2)[0], function (err) {
          if (err) {
          } else {
            console.log("")
            console.log("-- new directory successfully created --")
          }
        })
      }

      console.log("")
      console.log("starting download " + name + " no. " + index.toString() + " out of " + array.length)

      var fileURL = base + name
      const response = await fetch(fileURL)
      try {
        if (!response.ok) throw new Error()
        await streamPipeline(response.body, fs.createWriteStream('./' + name))
        downloads = downloads + 1;
      }
      catch (err) {
        console.log("")
        console.log("")
        console.log(`unexpected response ${response.statusText}`)
      }
      console.log("")
      console.log("finished download no. " + index.toString())
    }
    console.log("")
    console.log("done downloading " + downloads.toString() + " files")
  } else {
    console.log("-- no files found in course plan --")
  }
}

function getUserInput() {
  const properties = [
    {
      name: 'Username',
      required: true,
      type: 'string',
      default: "auXXXXXX"
    },
    {
      name: 'Password',
      hidden: true,
      replace: '*',
      required: true,
      type: 'string',
      default: "XXXXXXXX"
    },
    {
      name: 'CourseName',
      required: true,
      type: 'string',
      before: function (value) { return value.toUpperCase(); }
    }
  ];

  prompt.start();

  prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.Username);
    console.log('  Password: ' + result.Password);
    console.log('  Course Name: ' + result.CourseName);
    USERNAME = result.Username;
    PASSWORD = result.Password;
    COURSENAME = result.CourseName;
    main(URL);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

}
