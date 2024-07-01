/* eslint-disable @next/next/no-css-tags */
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';


export default function RPG() {
  return (
    <div className="game-container">
      <Head>
        <title>Pixel RPG Game</title>
        <link rel="stylesheet" href="/rpg.css" />
        <script src="/rpg.js" defer></script>
      </Head>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/affirmation-nation">Affirmation Nation</Link>
        {/* Add more links as needed */}
      </nav>
      <div id="gameCanvasContainer">
        <canvas id="gameCanvas"></canvas>
      </div>
    </div>
  );
}
