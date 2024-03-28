import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

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
export function saveMeal(meal) {
  //slygify
  meal.slug = slugify(meal.title, { lower: true });
  // sanitize
  meal.instructions = xss(meal.instructions);
}
