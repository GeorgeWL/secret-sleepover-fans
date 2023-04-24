import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Secret Sleepover Fans</title>

        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <p className="description">
          This is an unofficial fan server for folks who enjoy the Twitch
          channel{' '}
          <a
            href="https://twitch.tv/secretsleepoversociety"
            target="_blank"
            rel="noopener noreferrer"
          >
            Secret Sleepover Society
          </a>
        </p>
        <section title="servers">
          <p>We host some servers for games, just for fans to play together</p>
          <ul>
            <li>
              <b>witches.secretsleepover.fans</b>
              <br />
              We're being witches together in the Minecraft Modpack{' '}
              <a href="https://www.curseforge.com/minecraft/modpacks/cottage-witch">
                Cottage Witch
              </a>{' '}
              <small>(v 1.13.2 for Minecraft Java Edition 1.19.2)</small>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
