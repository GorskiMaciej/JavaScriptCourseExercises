function showTime() {
    let timeSpentOnSite = 0;

    function count() {
        timeSpentOnSite++;
        document.body.textContent = `Time spent on site: ${timeSpentOnSite}sec`;
    }
    return count;
}

// const showTime = () => {
//     let timeSpentOnSite = 0;
//     return () => {
//         timeSpentOnSite++;
//         document.body.textContent = `Time spent on site: ${timeSpentOnSite}s`;
//     }
// }

setInterval(showTime(), 1000);
// showTime();