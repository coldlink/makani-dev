import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="/personal">
            <a>Personal</a>
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1KmAxyYImQkBwd4pwLUqtz2JuVcJo8JgC/view?usp=sharing"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
