import clsx from 'clsx';
import Image from 'next/image';

export type TodoItemState = 'dreamhub' | 'pandoras' | 'daccess' | 'adex' | 'rabbitty' | 'tokenizacion';

interface TodoItemProps {
  shows: Array<TodoItemState>;
  imagePaths: { [key in TodoItemState]: string };
}

function TodoItem({ shows, imagePaths }: TodoItemProps) {
  // Handle empty shows array gracefully
  const selectedImage = shows && shows.length > 0 ? imagePaths[shows[0]] : '';

  return (
        <div className={clsx('flex')}>
          <div>
          <Image
              src={selectedImage} // Use selectedImage based on shows
              width={500}
              height={500}
              objectFit="cover"
              alt={shows[0]} // Set alt text based on shows
            />
          </div>
        </div>
  );
}

export default TodoItem;
