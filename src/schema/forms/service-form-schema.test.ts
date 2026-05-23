import { describe, expect, it } from 'vitest';

import { serviceFormSchema } from '@/schema/forms/service-form-schema';

describe('serviceFormSchema', () => {
  it('accepts valid service data', () => {
    const result = serviceFormSchema.safeParse({
      name: 'Haircut',
      description: 'Classic cut',
      price: 25,
    });

    expect(result.success).toBe(true);
  });

  it('rejects short names', () => {
    const result = serviceFormSchema.safeParse({
      name: 'A',
      price: 10,
    });

    expect(result.success).toBe(false);
  });

  it('rejects names longer than 100 characters', () => {
    const result = serviceFormSchema.safeParse({
      name: 'a'.repeat(101),
      price: 10,
    });

    expect(result.success).toBe(false);
  });

  it('rejects missing, zero, or negative prices', () => {
    const missingResult = serviceFormSchema.safeParse({
      name: 'Haircut',
    });
    const zeroResult = serviceFormSchema.safeParse({
      name: 'Haircut',
      price: 0,
    });
    const negativeResult = serviceFormSchema.safeParse({
      name: 'Haircut',
      price: -5,
    });

    expect(missingResult.success).toBe(false);
    expect(zeroResult.success).toBe(false);
    expect(negativeResult.success).toBe(false);
  });

  it('rejects descriptions longer than 200 characters', () => {
    const result = serviceFormSchema.safeParse({
      name: 'Haircut',
      description: 'a'.repeat(201),
      price: 10,
    });

    expect(result.success).toBe(false);
  });

  it('rejects missing or empty descriptions', () => {
    const missingResult = serviceFormSchema.safeParse({
      name: 'Haircut',
      price: 10,
    });
    const emptyResult = serviceFormSchema.safeParse({
      name: 'Haircut',
      description: '   ',
      price: 10,
    });

    expect(missingResult.success).toBe(false);
    expect(emptyResult.success).toBe(false);
  });
});
