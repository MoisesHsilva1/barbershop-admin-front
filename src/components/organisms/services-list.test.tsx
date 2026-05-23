import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ServicesList } from '@/components/organisms/services-list';

const mockServices = [
  {
    id: '1',
    name: 'Haircut',
    description: 'Classic cut',
    price: 25,
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
  },
];

describe('ServicesList', () => {
  it('shows skeletons while loading', () => {
    render(
      <ServicesList
        services={undefined}
        isLoading
        isError={false}
        deletingServiceId={null}
        onAddService={vi.fn()}
        onEditService={vi.fn()}
        onDeleteService={vi.fn()}
        onRetry={vi.fn()}
      />,
    );

    expect(screen.getByLabelText('Loading services')).toBeInTheDocument();
  });

  it('shows empty state when there are no services', () => {
    render(
      <ServicesList
        services={[]}
        isLoading={false}
        isError={false}
        deletingServiceId={null}
        onAddService={vi.fn()}
        onEditService={vi.fn()}
        onDeleteService={vi.fn()}
        onRetry={vi.fn()}
      />,
    );

    expect(screen.getByText('No services yet')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create service' })).toBeInTheDocument();
  });

  it('shows error state with retry action', () => {
    const onRetry = vi.fn();

    render(
      <ServicesList
        services={undefined}
        isLoading={false}
        isError
        deletingServiceId={null}
        onAddService={vi.fn()}
        onEditService={vi.fn()}
        onDeleteService={vi.fn()}
        onRetry={onRetry}
      />,
    );

    expect(screen.getByRole('alert')).toHaveTextContent('Unable to load services');
    expect(screen.getByRole('alert')).toHaveTextContent('Check your connection');
    screen.getByRole('button', { name: 'Try again' }).click();
    expect(onRetry).toHaveBeenCalledOnce();
  });

  it('renders services in the table', () => {
    render(
      <ServicesList
        services={mockServices}
        isLoading={false}
        isError={false}
        deletingServiceId={null}
        onAddService={vi.fn()}
        onEditService={vi.fn()}
        onDeleteService={vi.fn()}
        onRetry={vi.fn()}
      />,
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Haircut')).toBeInTheDocument();
    expect(screen.getByText('$25.00')).toBeInTheDocument();
  });
});
