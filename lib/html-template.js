// Generate HTML text for the HTML output file
// Return array holding strings of HTML text
module.exports = {
    generateHtml(teamMemberArray) {
       // Array to hold HTML text strings.
       const htmlHolderArray = [];
 
       const htmlHeaderAndTitleBar = `
 <!DOCTYPE html>
 <html lang = "en">
 <head>
    <meta charset = "UTF-8">
    <meta name = "viewport" content = "width = device-width, initial scale = 1.0">
    <meta http-equiv = "X-UA-Compatible" content = "ie = edge">
    <title>$teamMemberArray0]}</title>
    <link rel = "preconnect" href = "https://fonts.gstatic.com">
    <link href = "https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Spartan&display=swap" rel = "stylesheet">
    <link rel = "stylesheet" href = "../src/styles.css">
 </head>
 
 <body>
    <div class = "title-bar">
       <h1>$teamMemberArray0]} Roster</h1>
    </div>
 
    <div class = "card-container">
    `;
       htmlHolderArray.push(htmlHeaderAndTitleBar);
 
       // Loop through theteamMemberArrayarray to display the profile for each team member
       for (let i = 1; i <teamMemberArraylength; i++) {
          let teamMemberHtml = `
          <div class = "team-member-card">
             <div class = "team-member-card-top">
                <h2>$teamMemberArrayi].name}</h2>
                `;
 
                teamMemberHtml += `
             </div>
             <div class = "team-member-card-bottom">
                <p><b>Employee ID:</b> $teamMemberArrayi].id}</p>
                <P><b>Email:</b><br><a href = "mailto:$teamMemberArrayi].email}">$teamMemberArrayi].email}</a></p>
          `;
 
        //   // If the team member is the manager, display the office number.
        //   if (teamMemberArray i ].officeNumber ) {
        //      teamMemberHtml += `<p><b>Office Number:</b><br>$teamMemberArray i ].officeNumber}</p>`;
        //   }
        //   // If the team member is an engineer, display the Github username.
        //   else if teamMemberArray i ].githubUsername ) {
        //      teamMemberHtml += `<p><b>GitHub:</b><br><a href = "https://github.com/$teamMemberArray i ].githubUsername}">$teamMemberArray i ].githubUsername}</a></p>`;
        //   }
        //   // If the team member is an intern, display the intern's school name.
        //   else if (teamMemberArray i ].school ) {
        //      teamMemberHtml += `<p><b>School:</b><br>$teamMemberArray i ].school}</p>`;
        //   };
 
          teamMemberHtml += `
             </div>
          </div>
          `;
          htmlHolderArray.push(teamMemberHtml);
       };
 
       const htmlFooter = `
    </div>   
 </body>
 </html>
 `;
       htmlHolderArray.push (htmlFooter);
 
       // Return the HTML text strings in the array object.
       return htmlHolderArray;
    }
 };