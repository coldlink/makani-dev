import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/personal">Personal</Link>
        </li>
        <li>
          <Link href="/cv">CV/Resume</Link>
        </li>
        <li>
          <Link href="/support">Support Me</Link>
        </li>
      </ul>
    </nav>
  );
}
