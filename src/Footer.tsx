// Site footer component
function Footer() {
  return (
    <footer className="text-center text-md p-2 bg-neutral-300">
      All questions provided by{" "}
      {
        <a href="https://opentdb.com" className="text-blue-500 underline">
          Open Trivia DB
        </a>
      }
      .
    </footer>
  );
}

export default Footer;
