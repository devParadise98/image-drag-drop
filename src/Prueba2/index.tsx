import React, { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from './SorteableItem';
import { imagesData } from '../data';

function Prueba2() {
  const [items, setItems] = useState(imagesData);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                <div style={{ position: 'relative' }}>
                  <div style={{ cursor: 'grab' }}>AS</div> {/* Ícono de arrastre */}
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </div>
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default Prueba2;