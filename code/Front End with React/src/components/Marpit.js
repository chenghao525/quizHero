/**
 * Using Marpit component to render static HTML slides for download
 */

import Marpit from "@marp-team/marpit";
import defaultTheme from "./default_theme/marpit-theme";
/**
 * marpitConvert create new marpit variable, get data and add theme to it.
 */
const marpitConvert=(rawString)=> {
    // 1. Marpit
    const marpit = new Marpit();
    // 2. Add Marpit theme CSS
    const theme = defaultTheme;

    marpit.themeSet.default = marpit.themeSet.add(theme);

    /**
     * render markdown using marpit
     */
    const {html, css} = marpit.render(stringConverter(rawString));

    /**
     * create filestring to store HTML string
     * @type {string}
     */
    let filestring = `
        <!DOCTYPE html>
        <html><body>
          <style>${css}</style>
          ${html}
        </body></html>
        `
    ;
    return filestring;
}

const stringConverter = (rawString) => {

    var sections = rawString.split("---\n\n")  // => sections[]

    for (var i = 0; i < sections.length; i++) {

        /**
         * add section mark "---\n\n" between quizes
         */
        const section = sections[i].split(" ");
        if (section[0] === ">")
            sections[i] = sections[i].replace(/\n>/g, "\n---\n\n>");

        /**
         * remove presenter notes
         */
        sections[i] = sections[i].split("Notes:")[0];
    }

    return sections.join("---\n\n");
}

export default marpitConvert;