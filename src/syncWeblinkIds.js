let id = 0;

// Fetch the JSON file
fetch('src/assets/weblinks.json')
  .then(response => response.json())
  .then(json => {
    // Iterate over each category
    for (let category in json) {
      // Iterate over each item in the category
      for (let i = 0; i < json[category].length; i++) {
        // Assign a new id
        json[category][i].id = id.toString();
        id++;
      }
    }

    // Convert the updated JSON back to a string
    let updatedJson = JSON.stringify(json, null, 2);

    // Here you would typically send the updated JSON to the server to be saved.
    // This is a placeholder and will not actually save the file.
    console.log(updatedJson);
  });
