import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db"); //establish the database connection;

export default async function getMeals() {
  await new Promise((resoleve) => setTimeout(resoleve, 2000));

  return db.prepare("select * from meals").all();
}

// .run() => for inserting data, if we changing data
// .all()=>  is used for fetching data, fetch all rows of the tabel
// .get()=> is used for fetching only one row

export function getMeal(slug) {
  return db.prepare("select * from meals where slug=?").get(slug);
}

///POST
export async function saveMeal(meal) {
  //slygify
  meal.slug = slugify(meal.title, { lower: true });
  // sanitize
  meal.instructions = xss(meal.instructions);

  //saving img in file sistem

  const extension = meal.image.name.split(".").pop();
  const unique = crypto.randomUUID().split("-").pop();
  const fileName = `${unique}-${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImg = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImg), (error) => {
    if (error) throw new Error("Saving img failed");
  });

  // saving overall data in database
  meal.image = `/images/${fileName}`;
  db.prepare(
    `
    insert into meals
    (title,summary,instructions,creator,creator_email,image,slug)
    values(
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug)
  `
  ).run(meal);
}
