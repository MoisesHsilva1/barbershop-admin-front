import { Pencil, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Service } from '@/types/interfaces/service';
import { formatPrice } from '@/utils/format-price';

interface ServiceCardProps {
  service: Service;
  onEdit: (service: Service) => void;
  onDelete: (service: Service) => void;
  isDeleting?: boolean;
}

export function ServiceCard({
  service,
  onEdit,
  onDelete,
  isDeleting = false,
}: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col text-left transition-shadow duration-200 hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-4">
        <div className="min-w-0 flex-1 space-y-2">
          <CardTitle className="truncate">{service.name}</CardTitle>
          <p className="text-sm font-semibold tabular-nums text-primary-700">
            {formatPrice(service.price)}
          </p>
        </div>
        <div className="flex shrink-0 gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={`Edit ${service.name}`}
            onClick={() => onEdit(service)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={`Delete ${service.name}`}
            disabled={isDeleting}
            onClick={() => onDelete(service)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      {service.description ? (
        <CardContent className="mt-auto pt-0">
          <CardDescription className="line-clamp-3 leading-relaxed">
            {service.description}
          </CardDescription>
        </CardContent>
      ) : null}
    </Card>
  );
}
