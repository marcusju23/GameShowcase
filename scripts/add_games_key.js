const fs = require('fs');
const path = require('path');

// Adjust the path according to your directory structure <<<
const filePath = path.join(__dirname, '../data/games.json');

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    let jsonData;
    try {
        jsonData = JSON.parse(data);
    } catch (parseErr) {
        console.error('Error parsing JSON data:', parseErr);
        return;
    }

    // Modify JSON data (add new field) <<<
    jsonData.forEach(item => {
        // Add new keys and change value <<<
        item.source = "";
    });

    // Write the modified JSON data back to the file
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), err => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('JSON file updated successfully!');
    });
});
