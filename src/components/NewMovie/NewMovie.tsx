import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

interface NewMovieProps {
  onAdd: (movie: Movie) => void;
}

export const NewMovie: React.FC<NewMovieProps> = ({ onAdd }) => {
  // Увеличьте счетчик после успешной отправки формы
  // сбросить статус для всех `Field`изменения
  const [count, setCount] = useState(0);
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [imgUrlValue, setImgUrlValue] = useState('');
  const [imdbUrlValue, setImdbUrlValue] = useState('');
  const [imdbIdValue, setImdbIdValue] = useState('');

  const handlerSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      titleValue === '' ||
      !descriptionValue ||
      !imgUrlValue ||
      !imdbUrlValue ||
      !imdbIdValue
    ) {
      return;
    }
  };

  const handlerOnAdd = () => {
    const movie: Movie = {
      title: titleValue,
      description: descriptionValue,
      imgUrl: imgUrlValue,
      imdbUrl: imdbUrlValue,
      imdbId: imdbIdValue,
    };

    onAdd(movie);
    setCount(count + 1);
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handlerSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={titleValue}
        onChange={(value: string) => setTitleValue(value)}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={descriptionValue}
        onChange={(value: string) => setDescriptionValue(value)}
        required
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrlValue}
        onChange={(value: string) => setImgUrlValue(value)}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrlValue}
        onChange={(value: string) => setImdbUrlValue(value)}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbIdValue}
        onChange={(value: string) => setImdbIdValue(value)}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            onClick={handlerOnAdd}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
