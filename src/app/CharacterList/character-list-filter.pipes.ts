
import {Pipe, PipeTransform} from "@angular/core";
import {Character} from "../Model/IChararcter";

@Pipe({name: "characterFilter"})

export class CharacterListFilterPipes implements PipeTransform{
  transform(characters: Character[], filterBy: String): Character[] {
   filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? characters.filter((character: Character) =>
      character.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
    }) : characters;

}
