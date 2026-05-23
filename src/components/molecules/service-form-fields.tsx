import { useFormContext, useWatch } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { ServiceFormValues } from '@/schema/forms/service-form-schema';
import { cn } from '@/lib/utils';

const DESCRIPTION_MAX_LENGTH = 200;

function RequiredLabel({ children }: { children: string }) {
  return (
    <FormLabel>
      {children}
      <span className="text-destructive" aria-hidden>
        {' '}
        *
      </span>
    </FormLabel>
  );
}

export function ServiceFormFields() {
  const form = useFormContext<ServiceFormValues>();
  const descriptionValue = useWatch({
    control: form.control,
    name: 'description',
  });
  const descriptionLength = descriptionValue?.length ?? 0;

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <RequiredLabel>Service name</RequiredLabel>
            <FormControl>
              <Input autoComplete="off" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <RequiredLabel>Description</RequiredLabel>
            <FormControl>
              <div className="relative">
                <Textarea
                  rows={4}
                  maxLength={DESCRIPTION_MAX_LENGTH}
                  className="resize-none pb-8"
                  {...field}
                  value={field.value ?? ''}
                />
                <p
                  className={cn(
                    'pointer-events-none absolute bottom-3 left-3 text-xs tabular-nums',
                    descriptionLength > DESCRIPTION_MAX_LENGTH * 0.9
                      ? 'text-warning'
                      : 'text-neutral-400',
                  )}
                  aria-live="polite"
                >
                  {descriptionLength}/{DESCRIPTION_MAX_LENGTH}
                </p>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <RequiredLabel>Price</RequiredLabel>
            <FormControl>
              <Input
                type="number"
                min="0.01"
                step="0.01"
                inputMode="decimal"
                {...field}
                value={field.value ?? ''}
                onChange={(event) => {
                  const { value } = event.target;
                  field.onChange(value === '' ? undefined : Number(value));
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
