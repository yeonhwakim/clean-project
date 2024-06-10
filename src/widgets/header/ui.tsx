import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';
import { BellIcon } from '@radix-ui/react-icons'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="/logo.png" alt="Clean Project" />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="p-2">
          <BellIcon className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
