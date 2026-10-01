import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function Home() {
  return (
    <div className="flex justify-between px-10 py-5 items-center">
      <Button>Click Me</Button>
      <ModeToggle />
    </div>
  );
}
