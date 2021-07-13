import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Redux</h1>
        <h3>with Redux Toolkit and Redux Thunk</h3>
        <p style={{ textAlign: "center" }}>
          The basic idea behind this app is to simulate a somewhat complex
          <br />
          component tree structure and how we would handle the state in them
        </p>
        <div style={{ textAlign: "center" }}>
          There are different components creating a CAR, which can
          <ul style={{ maxWidth: "50vw", textAlign: "left" }}>
            <li>
              <strong>start</strong> = a synchronous action is dispatched from
              screen to start the car, this is used in the cylinder to get them
              moving and turn the indicator on (green light)
            </li>
            <li>
              <strong>stop</strong> = a synchronous action is dispatched from
              screen to stop the car, this is used in the cylinder to stop them
              and turn the indicator off (red light)
            </li>
            <li>
              <strong>go</strong> = a synchronous action is dispatched to drive,
              but it also lowers the oil level. After some time, the car runs
              out of oil and which causes an issue with oil pump which
              dispatches an action to the screen and shows notification, it also
              stops the cylinder
            </li>
            <li>
              <strong>fix oil pump</strong> = an asynchronous action is
              dispatched, which takes 5 seconds to complete and then again
              starts the car and fills the oil
            </li>
          </ul>
        </div>
        <Image src="/component-tree.jpg" alt="" width="358px" height="354px" />
        <Link href="/example">Example</Link>
      </main>
    </div>
  );
}
