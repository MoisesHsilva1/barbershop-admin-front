import { describe, expect, it } from 'vitest';

import { toServiceRequest } from '@/utils/service-payload';

describe('toServiceRequest', () => {
  it('maps form values to request payload', () => {
    const payload = toServiceRequest({
      name: '  Haircut  ',
      description: '  Classic cut  ',
      price: 25,
    });

    expect(payload).toEqual({
      name: 'Haircut',
      description: 'Classic cut',
      price: 25,
    });
  });

  it('omits empty description', () => {
    const payload = toServiceRequest({
      name: 'Haircut',
      description: '   ',
      price: 25,
    });

    expect(payload).toEqual({
      name: 'Haircut',
      price: 25,
    });
  });
});
