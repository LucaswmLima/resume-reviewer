import { ModeToggle } from "./ModeToggle";

export function Navbar() {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <h1 className="text-xl font-semibold">Resume Reviewer</h1>
        <ModeToggle/>
      </div>
    </header>
  );
}
