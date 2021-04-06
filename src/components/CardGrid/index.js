
import CardProduct from '../CardProduct';

export default function CardGrid() {
  return (
    <div class="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-medium-bottom" uk-grid>
        <CardProduct image={"https://images.unsplash.com/photo-1574655563118-3e3eab32015d"} />
        <CardProduct image={"https://images.unsplash.com/photo-1574655563118-3e3eab32015d"} />
        <CardProduct image={"https://images.unsplash.com/photo-1574655563118-3e3eab32015d"} />
        <CardProduct image={"https://images.unsplash.com/photo-1574655563118-3e3eab32015d"} />
    </div>
  );
}