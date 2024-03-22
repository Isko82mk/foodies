import { getMeal } from "@/lib/meals";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MealSlug({ params }) {
  const meal = getMeal(params.mealsSlug);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill></Image>
        </div>
        <div className={styles.headerText} s>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            {" "}
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br/>"),
          }}
        ></p>
      </main>
      <div>
        <p>
          <Link href="/meals">BAck</Link>
        </p>
      </div>
    </>
  );
}
