import type { CSSProperties, ReactNode } from "react";
import styles from "./page.module.css";

const mapsUrl = "https://maps.app.goo.gl/2fk1x5tQAX28dcUd7";

/* Английская колода, CC0 — Дмитрий Фомин. [x vw, y vh, старт°, финиш°, масштаб] */
const faces = [
  "/cards/ace-spades.svg",
  "/cards/king-spades.svg",
  "/cards/ace-hearts.svg",
  "/cards/jack-diamonds.svg",
  "/cards/10_of_spades.svg",
  "/cards/9_of_hearts.svg",
  "/cards/8_of_diamonds.svg",
  "/cards/7_of_clubs.svg",
  "/cards/6_of_hearts.svg",
  "/cards/5_of_spades.svg",
  "/cards/4_of_diamonds.svg",
  "/cards/3_of_clubs.svg",
  "/cards/2_of_hearts.svg",
  "/cards/10_of_diamonds.svg",
];

const scatter = [
  [-58, -34, -11, -24, 1.05],
  [-18, -48, 6, 9, 0.82],
  [16, -38, -4, -16, 1.12],
  [48, -28, 8, 21, 0.9],
  [68, -8, -6, -7, 0.74],
  [-64, 4, 10, -28, 0.96],
  [-36, 14, -3, 17, 1.16],
  [62, 18, 5, -19, 0.86],
  [-8, 46, 7, 22, 0.94],
  [24, 52, -9, -8, 0.8],
  [52, 38, 4, 27, 1.02],
  [-50, 36, -8, -18, 0.88],
  [6, 22, 2, 5, 0.7],
  [36, -4, -5, 13, 0.78],
  [-30, -16, 9, -22, 0.92],
  [4, -24, -7, 16, 0.84],
  [-62, 26, 3, 31, 1.0],
  [28, 12, -2, -26, 0.76],
  [54, -46, 7, 12, 0.98],
  [-14, 58, -6, -5, 1.1],
];

const invite = [
  ["Сбор гостей", "16:00"],
  ["Адрес", "Jämeräntaival 11 G, 02150 Espoo"],
  ["Место", "Бар, который открыт эксклюзивно для нас"],
];

const dressCode = [
  ["Чёрный", "♠", styles.black],
  ["Красный", "♥", styles.red],
  ["Белый", "♣", styles.white],
];

const vibe = [
  ["Конкурсы?", "Пожалуй, никаких неловкостей."],
  ["Алкоголь?", "Приветствуется, если принесёте свой."],
  ["Танцы?", "Я уж надеюсь."],
];

type SectionProps = {
  id: string;
  index: string;
  title: ReactNode;
  suit: string;
  light?: boolean;
  className?: string;
  children: ReactNode;
};

function Section({ id, index, title, suit, light, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${light ? styles.light : ""} ${className ?? ""}`}
      data-suit={suit}
    >
      <span className={styles.index}>{index}</span>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.grain} aria-hidden="true" />

        <div className={styles.deck} aria-hidden="true">
          {scatter.map(([x, y, from, to, scale], i) => (
            <img
              key={i}
              className={styles.dealt}
              src={faces[(i * 5) % faces.length]}
              alt=""
              style={
                {
                  "--x": `${x}vw`,
                  "--y": `${y}vh`,
                  "--from": `${from}deg`,
                  "--to": `${to}deg`,
                  "--s": scale,
                  animationDelay: `${i * 0.018}s`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <img className={`${styles.face} ${styles.queen}`} src="/cards/queen-hearts.svg" alt="" />
            <div className={`${styles.face} ${styles.front}`}>
              <p className={styles.kicker}>
                Дамы и короли
                <span>Вы приглашены на вечеринку</span>
              </p>
              <h1>
                <span>День рождения</span>
                <em>Юлии</em>
              </h1>
              <p className={styles.date}>11.10</p>
            </div>
          </div>
        </div>

        <a className={styles.cue} href="#about">
          Листайте
        </a>
      </section>

      <Section id="about" index="I · Пара слов" suit="♠" light title={<>Почему <em>именно вы</em></>} className={styles.about}>
        <p>
          Каждый год, сколько я себя помню, я праздную свой День рождения. Я обожаю устраивать
          праздники и приглашать гостей. В эмиграции я не обзавелась таким количеством друзей,
          которым могла бы похвастаться в своей жизни «до». Но я очень хочу.
        </p>
        <p>
          Поэтому я буду рада вас видеть на своей вечеринке, вне зависимости от того, общаемся ли
          мы каждый день или виделись один раз в жизни. Пусть это будет социальным экспериментом.
        </p>
      </Section>

      <Section id="invite" index="II · Приглашение" suit="♥" title={<>Когда <em>и где</em></>} className={styles.invite}>
        <div className={`${styles.ticket} ${styles.corners}`} data-corner={"Ю\n♥"}>
          <h3>
            11 октября
            <em>2026</em>
          </h3>
          <div>
            <dl className={styles.list}>
              {invite.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <a className={styles.button} href={mapsUrl} target="_blank" rel="noopener noreferrer">
              Где это
            </a>
          </div>
        </div>
      </Section>

      <Section id="dress" index="III · Дресс-код" suit="♦" light title={<>Три <em>масти</em></>} className={styles.dress}>
        <div className={styles.hand}>
          {dressCode.map(([name, suit, tone]) => (
            <div key={name} className={styles.swatch}>
              <div className={`${tone} ${styles.corners}`} data-corner={suit}>
                {suit}
              </div>
              <strong>{name}</strong>
            </div>
          ))}
        </div>
      </Section>

      <Section id="gifts" index="IV · Подарки" suit="♣" title="Подарки" className={styles.gifts}>
        <p>
          Подарки остаются на ваше усмотрение. <em>Но я не пью алкоголь.</em>
        </p>
      </Section>

      <Section id="program" index="V · Программа и вайб" suit="♠" light title={<>Что <em>будет</em></>} className={styles.program}>
        <p className={styles.lead}>Тематическая вечеринка с лёгкими закусками и развлечениями.</p>
        <div className={styles.qa}>
          {vibe.map(([q, a]) => (
            <div key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="rsvp" index="VI · Финал" suit="♥" title={<>Вау, вы долистали <em>до конца!</em></>} className={styles.finale}>
        <p>Если остались вопросы — пишите.</p>
        <p>
          Ответьте, пожалуйста, <em>до 2 октября</em>, порадуете ли вы меня своим присутствием.
        </p>
        <footer>
          <span>Ю · 11.10.2026</span>
          <span>Espoo</span>
        </footer>
      </Section>
    </main>
  );
}
