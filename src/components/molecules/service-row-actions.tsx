import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceRowActionsProps {
  serviceName: string;
  isDeleting: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

export function ServiceRowActions({
  serviceName,
  isDeleting,
  onEdit,
  onDelete,
}: ServiceRowActionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative flex justify-end">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={`Actions for ${serviceName}`}
        onClick={() => setIsOpen((current) => !current)}
      >
        <MoreHorizontal className="h-4 w-4" />
      </Button>

      {isOpen ? (
        <div
          id={menuId}
          role="menu"
          className={cn(
            'absolute right-0 top-full z-10 mt-1 min-w-[9rem] overflow-hidden rounded-xl border border-neutral-200 bg-white py-1 shadow-md',
          )}
        >
          <button
            type="button"
            role="menuitem"
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-neutral-800 transition-colors duration-200 hover:bg-neutral-50"
            onClick={() => {
              setIsOpen(false);
              onEdit();
            }}
          >
            <Pencil className="h-4 w-4 text-neutral-500" aria-hidden />
            Edit
          </button>
          <button
            type="button"
            role="menuitem"
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-destructive transition-colors duration-200 hover:bg-neutral-50 disabled:opacity-50"
            disabled={isDeleting}
            onClick={() => {
              setIsOpen(false);
              onDelete();
            }}
          >
            <Trash2 className="h-4 w-4" aria-hidden />
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}
