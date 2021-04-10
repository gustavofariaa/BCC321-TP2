
import CardProduct from '../CardProduct';



export default function CardGrid({items}) {

  return (
    <div class="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-medium-bottom" uk-grid>
        {
          items?.map?.(item => <CardProduct product = {item}/>)
        }      
    </div>
  );
}