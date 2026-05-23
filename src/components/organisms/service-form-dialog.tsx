import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm, type DefaultValues } from 'react-hook-form';

import { ServiceFormFields } from '@/components/molecules/service-form-fields';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanelContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import {
  serviceFormSchema,
  type ServiceFormValues,
} from '@/schema/forms/service-form-schema';
import type { Service } from '@/types/interfaces/service';
import { toServiceRequest } from '@/utils/service-payload';

interface ServiceFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service?: Service | null;
  isSubmitting: boolean;
  onSubmit: (values: ReturnType<typeof toServiceRequest>) => void;
}

function getDefaultValues(
  service?: Service | null,
): DefaultValues<ServiceFormValues> {
  if (!service) {
    return {
      name: '',
      description: '',
      price: undefined,
    };
  }

  return {
    name: service.name,
    description: service.description ?? '',
    price: service.price,
  };
}

export function ServiceFormDialog({
  open,
  onOpenChange,
  service,
  isSubmitting,
  onSubmit,
}: ServiceFormDialogProps) {
  const isEditing = Boolean(service);
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: getDefaultValues(service),
  });

  useEffect(() => {
    if (open) {
      form.reset(getDefaultValues(service));
    }
  }, [open, service, form]);

  const handleSubmit = form.handleSubmit((values) => {
    onSubmit(toServiceRequest(values));
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPanelContent className="gap-0 p-0">
        <div className="flex flex-1 flex-col overflow-hidden">
          <DialogHeader className="border-b border-neutral-200 px-6 py-5 text-left">
            <DialogTitle className="text-xl font-semibold text-neutral-900">
              {isEditing ? 'Edit service' : 'Create new service'}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {isEditing
                ? 'Update the service details below.'
                : 'Add a new service to your catalog.'}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-1 flex-col overflow-hidden"
            >
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ServiceFormFields />
              </div>

              <DialogFooter className="border-t border-neutral-200 bg-neutral-50/50 px-6 py-4 sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? isEditing
                      ? 'Saving...'
                      : 'Creating...'
                    : isEditing
                      ? 'Save changes'
                      : 'Submit'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogPanelContent>
    </Dialog>
  );
}
