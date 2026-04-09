export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="inner">
        &copy; {new Date().getFullYear()} Tyler Cyert
        {" · "}
        <a href="/feed.xml">rss</a>
      </div>
    </footer>
  );
}
