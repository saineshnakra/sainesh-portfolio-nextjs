export default function Footer() {
  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sainesh Nakra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
