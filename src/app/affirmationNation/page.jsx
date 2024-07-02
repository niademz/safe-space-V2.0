/* eslint-disable @next/next/no-css-tags */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RPG() {
  return (
    <>
    <center>
    <h1>Affirmation Nation: Coming Soon!</h1>
    <div >
      <div>
        <Link href='https://niademz.itch.io/affirmation-nation'>
      <Image
              src="/images/affirmation.png"
              alt="Affirmation nation game"
              width={500}
              height={500}
              className="rounded-lg"/>
        </Link>

      </div>
      <h2>Affirmation nation is an PRG game based on sending affirmaitons to build communities with other users. The game is still early in development, and we would love to hear ideas from the community on features they want to see in the game!!</h2>
      </div>
    </center>
    </>
  );
}
