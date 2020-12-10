type Props = {
  h2: string;
};

export default function Header({ h2 }: Props) {
  return (
    <header>
      <h1>Mahesh Makani</h1>
      <h2>{h2}</h2>
    </header>
  );
}
