import MealsGrid from "@/components/meals/meals-grid";
import styles from "./page.module.css";
import Link from "next/link";
import getMeals from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals , created
          <span className={styles.highlight}> by you</span>
        </h1>
        <p>Chose your fav recipe and cook it yourself. It is easy and fun</p>
        {/* cta -> call to action */}
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Fav Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
