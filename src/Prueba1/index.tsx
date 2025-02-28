import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { imagesData } from '../data';
import { DragHandle, Image, ImageWrapper } from './styled';

function Prueba1() {
  const [imageList, setImageList] = useState(imagesData);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(imageList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImageList(items);
  };

  return (
    <div style={{ margin: '20px' }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="images" direction="horizontal" isDropDisabled={false}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                display: 'flex',
                overflowX: 'auto', // Permite el desplazamiento horizontal si es necesario
                gap: '1rem',
                padding: '10px', // Añade un poco de padding para mejor visualización
              }}
            >
              {imageList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      style={{
                        ...provided.draggableProps.style,
                        flex: 'none', // Evita que los elementos se estiren
                      }}
                    >
                      <ImageWrapper>
                        <DragHandle {...provided.dragHandleProps}>
                          AS
                        </DragHandle>
                        <Image src={item.imageUrl} alt={item.imageUrl} />
                      </ImageWrapper>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Prueba1;