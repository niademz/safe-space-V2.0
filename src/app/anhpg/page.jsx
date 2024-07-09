import Link from "next/link"
import Image from 'next/image';
import anhomepageStyles from './anhpgstyle.css';

export default function anhpg() {
    return (
        <div className={anhomepageStyles.background}>
          <h1>Welcome to affirmation Nation</h1>
          {/* Your page content goes here */}
        </div>
      );
    }