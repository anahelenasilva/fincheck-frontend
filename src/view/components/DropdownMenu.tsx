import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

export function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return (
    <RadixDropdownMenu.Root>
      {children}
    </RadixDropdownMenu.Root>
  );
}

export function DropdownMenuTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RadixDropdownMenu.Trigger>
      {children}
    </RadixDropdownMenu.Trigger>
  );
}

export function DropdownMenuContent({ children }: { children: React.ReactNode }) {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content>
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  );
}

export function DropdownMenuItem({ children }: { children: React.ReactNode }) {
  return (
    <RadixDropdownMenu.Item>
      {children}
    </RadixDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
}
