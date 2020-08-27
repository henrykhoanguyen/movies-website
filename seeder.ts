const fs = require("fs");
const csv = require("csv-parser");
const color = require("colors");

getFoodData = async () => {
  var readable = fs.createReadStream(
    "./_data/raw_data/FoodData_Central_csv_2019-12-17/food.csv"
  );
  var writeable = fs.createWriteStream("./_data/query_data/food-data.sql");
  // var result = [];
  var sql_string = "";
  var counter = 0;
  console.log("Transferring food data into SQL file...".yellow);
  
  await readable
    .pipe(csv())
    .on("data", (data) => {
      if (data.data_type === "branded_food" && counter < 1000) {
        if(data.description.startsWith("\"") && data.description.endsWith("\"")){
          data.description = data.description.substring(1,data.description.length-1).replace(/"/g, "\\\"");
        } else if(data.description.includes("\"")) {
          data.description = data.description.replace(/"/g, "\\\"");
          // console.log(data.description);
        }

        sql_string +=
        "INSERT INTO food VALUES(\"" +
        data.fdc_id +
        "\", \"" +
        data.description +
        "\");\n";
        // result.push(sql_string);
        counter++;
      }
    })
    .on("end", () => {
      console.log("Transfer finished!".green);
      // console.log(result);
      writeable.write(sql_string);

      // the finish event is emitted when all data has been flushed from the stream
      writeable.on("finish", () => {
        console.log("Wrote all data to file".green.inverse);
      });

      // close the stream
      writeable.end();
    });
};

getNutritionFacts = async () => {
  var readable = fs.createReadStream("./_data/raw_data/FoodData_Central_csv_2019-12-17/branded_food.csv");
  var writeable = fs.createWriteStream("./_data/query_data/nutrition_facts.sql");
  var sql_string = "";
  var counter = 0;
  console.log("Transferring nutrition data into SQL file...".yellow);

  await readable
    .pipe(csv())
    .on("data", (data) => {
      if (counter < 1000) {

        if(data.household_serving_fulltext.includes("\"")) {
          data.household_serving_fulltext = data.household_serving_fulltext.replace(/"/g, "\\\"");
        }
        if(data.ingredients.includes("\"")) {
          data.ingredients = data.ingredients.replace(/"/g, "\\\"");
        }
        if(data.brand_owner.includes("\"")) {
          data.brand_owner = data.brand_owner.replace(/"/g, "\\\"");
        }

        sql_string += "INSERT INTO nutrition VALUES(\"" + data.fdc_id + "\", \"" + data.gtin_upc + "\", \"" +  data.brand_owner + "\", \"" + data.ingredients + "\", \"" + data.household_serving_fulltext + "\", \"" + data.branded_food_category + "\");\n";
        counter++;

      }
    })
    .on("end", () => {
      console.log("Transfer finished!".green);
      // console.log(result);
      writeable.write(sql_string);

      // the finish event is emitted when all data has been flushed from the stream
      writeable.on("finish", () => {
        console.log("Wrote all data to file".green.inverse);
      });

      // close the stream
      writeable.end();
    });
};

getFoodData();
getNutritionFacts();
